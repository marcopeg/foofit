import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import reactFastclick from 'react-fastclick'
import history from 'app/history'
import { store, isReady } from 'app/store'

reactFastclick()

const renderApp = () => {
    const Root = require('./app/Root').default
    render(<Root store={store} history={history} />, document.querySelector('#root'))
}

// Wait for the redux store to initialize correctly
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
