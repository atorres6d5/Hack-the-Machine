import React from 'react';
import App from '../App.js'
import Responders from './responders'
import { Provider } from 'react-redux'
//import { Route, Switch, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch} from 'react-router-dom'





const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/Responders" component={Responders}/>
            <Route path="/" component={App} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}



Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root;
