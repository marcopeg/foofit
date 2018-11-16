import {
    createStore as createReduxStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux'
import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'
import { ReduxEvents } from 'redux-events-middleware'

import {
    getReducers as getFeaturesReducers,
    decorateStore as decorateStoreWithFeatures,
} from 'react-redux-feature/lib/decorate-store'

import features from '../features'
const appReducer = (state = {}) => state

export const createState = async (initialState = {}, history) => {
    const events = new ReduxEvents()

    const enhancers = []
    const middleware = [
        thunk,
        routerMiddleware(history),
        events.createReduxMiddleware({ history }),
    ]

    // redux dev tools (development & client only)
    if (process.env.NODE_ENV === 'development' && !process.env.SSR) {
        const { devToolsExtension } = window

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }

    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers,
    )

    const initialReducers = {
        app: appReducer,
        ...getFeaturesReducers(features),
    }
    const combinedReducers = combineReducers(initialReducers)

    let store = createReduxStore(
        combinedReducers,
        initialState,
        composedEnhancers,
    )

    // react-redux-features
    // add features capabilities to the store
    store = decorateStoreWithFeatures({ store, history, events, initialReducers })

    // Initialize dynamic stuff
    await store.registerSyncFeatures(features)
    await store.startSyncFeatures()

    return {
        store,
        history,
    }
}
