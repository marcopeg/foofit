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

export const createSSRRender = (App, { createState } = {}) => {
    const ssrRender = async (url, initialState, settings) => {
        // ssr for a basic cra app
        if (!createState) {
            console.log('!!! no state')
            return staticRender(App, url, initialState)
        }

        const history = createHistory()
        const state = await createState(initialState, history)

        console.log('-- createSSRRender')
        console.log('url:', url)
        console.log('initialState:', initialState)
        // console.log('settings:', settings)
        // console.log('app state', state)
        console.log('---')

        history.push(url)

        console.log('state', state.store.getState())

        return {
            html: renderToString(React.createElement(App, state)),
            initialState: state.store ? state.store.getState() : initialState,
            context: {},
        }
    }

    // the version is used to check if server and client are aligned with the same library
    ssrRender.ssrVersion = '0.0.0'
    return ssrRender
}