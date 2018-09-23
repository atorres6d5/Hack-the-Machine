import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Root from './components/root.js';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

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
