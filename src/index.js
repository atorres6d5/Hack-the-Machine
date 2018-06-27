import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Root from './components/root.js';
import registerServiceWorker from './registerServiceWorker';
import rootReducers from "./reducers"
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducers), {}, compose(
    applyMiddleware( routerMiddleware(history), ReduxThunk)
  )
)

ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));
registerServiceWorker();
