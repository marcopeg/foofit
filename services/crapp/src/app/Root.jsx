/* eslint react/prop-types: off */

import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import App from '../App'

export default ({ history, store, ...props }) => (
    <Provider store={store}>
        <Router history={history}>
            <App {...props} />
        </Router>
    </Provider>
)
