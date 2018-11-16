import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {`hello ${this.props.name}`}
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
      </div>
    );
  }
}

export default App;
