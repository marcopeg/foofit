import React from 'react'
import { renderToString } from 'react-dom/server'
import createHistory from 'history/createMemoryHistory'

/*
- initialState:
  - ssr
    - serverUrl: http://localhost:8080
    - apiUrl: http://localhost:8080/api
    - request: express request object

- settings
  - timeout: 5000
  - userAgent: 'string'
*/

export const staticRender = (App, url, initialState) => ({
    html: renderToString(React.createElement(App, {
        ...initialState,
        url,
    })),
    initialState,
    context: {},
})

const renderInitialState = ({
    App,
    url,
    store,
    history,
    timeout,
    userAgent,
}) => new Promise((resolve) => {
    const { ssr } = store.getState()

    const timer = setTimeout(() => {
        console.error(`[ssr] render timeout - ${url}`) // eslint-disable-line
        resolve()
    }, timeout)

    // rendering loop, used to resolve nested componentWillMount
    // data loading side effects.
    function tick () {
        renderToString(<App store={store} history={history} userAgent={userAgent} />)
        if (!ssr.checkStack()) {
            clearTimeout(timer)
            resolve()
        } else {
            ssr.once('complete', tick)
        }
    }

    history.push(url)
    renderToString(<App store={store} history={history} userAgent={userAgent} />)
    ssr.once('complete', tick)
})

export const createSSRRender = (App, { createState } = {}) => {
    const ssrRender = async (url, initialState, settings) => {
        // ssr for a basic cra app
        if (!createState) {
            return staticRender(App, url, initialState)
        }

        // create the app state with history
        const history = createHistory()
        const state = await createState(initialState, history)
        const userAgent = settings.userAgent || 'unknown user agent'
        const timeout = settings.timeout || 3000

        // render the initial state of the app
        // this is when we wait for all the async stuff to complete
        if (state.store) {
            await renderInitialState({
                ...state,
                App,
                url,
                history,
                userAgent,
                timeout,
            })
        } else {
            history.push(url)
        }

        // console.log('-- createSSRRender')
        // console.log('url:', url)
        // console.log('initialState:', initialState)
        // console.log('settings:', settings)
        // console.log('app state', state)
        // console.log('---')
        // history.push(url)

        // react-loadable integration
        const modules = []
        // const html = renderToString((
        //     <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        //         <StaticApp store={store} url={url} context={context} userAgent={userAgent} />
        //     </Loadable.Capture>
        // ))

        // console.log('state', state.store.getState())

        return {
            html: renderToString(React.createElement(App, state)),
            initialState: state.store ? state.store.getState() : initialState,
            context: {},
            modules,
        }
    }

    // the version is used to check if server and client are aligned with the same library
    ssrRender.ssrVersion = '0.0.0'
    return ssrRender
}
