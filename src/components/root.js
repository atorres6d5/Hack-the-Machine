import React, { Component } from 'react';
import Home from './home.js';
// import App from '../App.js'
import About from './about';
import Help from './help';
import Responders from './responders.js';
import Map from './map';
import Dispatch from '../containers/Dispatch/Dispatch';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import '../index.css';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route exact path="/Responders" component={Responders} />
            <Route exact path="/Dispatch" component={Dispatch} />
            <Route exact path="/Map" component={Map} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Help" component={Help} />
            <Route path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
