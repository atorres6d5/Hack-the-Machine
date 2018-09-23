import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Root from './components/root.js';
import registerServiceWorker from './registerServiceWorker';
import rootReducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

const history = createHistory();

const store = createStore(
  reducers,
  {},
  applyMiddleware(ReduxThunk, routerMiddleware(history))
);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
registerServiceWorker();
