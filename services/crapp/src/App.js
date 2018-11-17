
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import Foo from 'components/Foo'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ count: this.state.count + 1}), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {`hello ${this.props.name} (${this.props.value} - ${this.state.count})`}
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
