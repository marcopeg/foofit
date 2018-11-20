import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { createState } from './app/state'
import * as serviceWorker from './serviceWorker';

const history = createHistory()
const initialState = window.REDUX_INITIAL_STATE || {
    ssr: {
        rootUrl: 'http://localhost:8080/',
        apiUrl: 'http://localhost:8080/api/',
    },
}

const boot = props => {
    const renderApp = () => {
        const Root = require('./app/Root').default
        render(<Root {...props} />, document.querySelector('#root'))
    }

    if (module.hot) {
        module.hot.accept(renderApp)
    }

    renderApp()
}

createState(initialState, history)
    .then(boot)
    .then(() => serviceWorker.unregister()) // change to "register"
    .catch(err => console.log(err))
