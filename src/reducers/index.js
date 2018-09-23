import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  homeReducer: require('./homeReducer.js'),
  dispatchReducer: require('./dispatchReducer.js')
});
