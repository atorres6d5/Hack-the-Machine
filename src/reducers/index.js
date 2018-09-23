import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import responderReducer from './responderReducer';
import dispatchReducer from './dispatchReducer';

export default combineReducers({
  routing: routerReducer,
  responderReducer: responderReducer,
  dispatchReducer: dispatchReducer
});
