import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import { createState } from './app/state'
import * as serviceWorker from './serviceWorker';

const history = createHistory()
const initialState = window.REDUX_INITIAL_STATE || {
    app: { name: 'client' }
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
    .catch(err => console.log(err))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
