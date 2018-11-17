import loadable from 'react-loadable'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Link, withRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

const Foo = loadable({
  loader: () => import('./components/Foo'),
  loading: () => null,
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {`hello ${this.props.name} (${this.props.value})`}
          </p>
          <a
            className="App-link"
            href="https://marcopeg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            marcopeg.com
          </a>
          <Link to="/" className="App-link">Home</Link>
          <Link to="/p1" className="App-link">Page1</Link>
        </header>
        <Switch>
          <Route exact path="/" component={() => <div>HOME</div>} />
          <Route exact path="/p1" component={() => <div>PAGE1</div>} />
        </Switch>
        <Foo />
      </div>
    );
  }
}

export default withRouter(connect(({ app, foo }) => ({ ...app, ...foo }))(App));
