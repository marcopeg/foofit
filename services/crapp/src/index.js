import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import Root from './app/Root';
import { createState } from './app/state'
// import * as serviceWorker from './serviceWorker';

const history = createHistory()
const initialState = window.REDUX_INITIAL_STATE || {
    name: 'client'
}

createState(initialState, history)
    .then(props => ReactDOM.hydrate(<Root {...props} />, document.getElementById('root')))
    .catch(err => console.log(err))

// const props = window.REDUX_INITIAL_STATE || { foo: '666' }
// ReactDOM.hydrate(<App {...props} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
