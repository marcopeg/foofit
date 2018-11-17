import {
    createStore as createReduxStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux'
import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'
import { ReduxEvents } from 'redux-events-middleware'
import { createSSRContext } from '../lib/create-react-app-ssr/src/create-ssr-context'

import {
    getReducers as getFeaturesReducers,
    decorateStore as decorateStoreWithFeatures,
} from 'react-redux-feature/lib/decorate-store'

import features from '../features'
const appReducer = (state = {}) => state

export const createState = async (initialState = {}, history) => {
    const events = new ReduxEvents()
    const ssrContext = createSSRContext(initialState.ssr || {})

    const middlewares = [
        thunk,
        routerMiddleware(history),
        events.createReduxMiddleware({ history }),
    ]

    const enhancers = []
    // redux dev tools (development & client only)
    if (process.env.NODE_ENV === 'development' && !process.env.SSR) {
        const { devToolsExtension } = window

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }

    const composedEnhancers = compose(
        applyMiddleware(...middlewares),
        ...enhancers,
    )

    const initialReducers = {
        app: appReducer,
        ...getFeaturesReducers(features),
        ...ssrContext.reducers,
    }

    const combinedReducers = combineReducers(initialReducers)

    // redux store gets created
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
        events,
        ssrContext,
    }
}
