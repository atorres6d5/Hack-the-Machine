import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import responderReducer from './responderReducer'



export default combineReducers({
  routing: routerReducer,
  responderReducer: responderReducer
})
