import { RETURN_HOME, RETURN_DISPATCH_SUCCESS } from './types.js';
import { push } from 'react-router-redux';
import axios from 'axios';
import service_calls from '../sampledata/service_calls.json';

export const returnHome = event => {
  return {
    type: RETURN_HOME,
    payload: event
  };
};

export const returnDispatch = event => {
  console.log(service_calls);
  return {
    type: RETURN_DISPATCH_SUCCESS,
    payload: service_calls
  };
};

export const requestData = event => {};
