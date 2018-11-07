import 'babel-polyfill'
import config from '@marcopeg/utils/lib/config'
import logger from '@marcopeg/utils/lib/logger'
import React from 'react'
import { render } from 'react-dom'
import reactFastclick from 'react-fastclick'
import history from 'app/history'
import { store, isReady } from 'app/store'

// import ParcelJS dumb env variables into the config utility
config.init({
    NODE_ENV: process.env.NODE_ENV,
    LOG_LEVEL: process.env.LOG_LEVEL,
}, process.env.LOG_LEVEL === 'debug')

// logging utility form @marcopeg
logger.init()

// do we really need this?
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
        logger.logError(err) // eslint-disable-line
    })

// HMR
if (module.hot) {
    module.hot.accept(renderApp)
}

// redux dev tools (development & client only)
if (process.env.NODE_ENV === 'development' && !process.env.SSR) {
    window.store = store
}
