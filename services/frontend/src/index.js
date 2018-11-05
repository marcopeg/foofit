import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
// import createHistory from 'history/createBrowserHistory'
import reactFastclick from 'react-fastclick'
import history from './app/history'
import { store, isReady } from './app/store'

reactFastclick()

function renderApp() {
    const Root = require('./app/Root').default
    hydrate(<Root store={store} history={history} />, document.querySelector('#root'))
}

isReady
    .then(renderApp)
    .catch((err) => {
        document.body.innerHTML = err ? err.message : 'unknown error'
        console.error(err) // eslint-disable-line
    })


// HMR
if (module.hot) {
    module.hot.accept(renderApp)
}

// redux dev tools (development & client only)
if (process.env.NODE_ENV === 'development' && !process.env.SSR) {
    window.store = store
}
