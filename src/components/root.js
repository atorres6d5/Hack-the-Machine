import React, {Component} from 'react';
import Home from './home.js'
// import App from '../App.js'
import Responders from './responders.js'
import { Provider } from 'react-redux'
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from 'react-router'
import '../index.css'



class Root extends Component {

  render (){
    return(
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route exact path="/Responders" component={Responders}/>
            <Route path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
    </Provider>
    )


  };
}

export default Root;
