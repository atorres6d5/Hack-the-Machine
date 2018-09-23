import {
  RETURN_HOME,
  ATTEMPT_GET_RESPONDERS,
  RETURN_DISPATCH_SUCCESS
} from './types.js';
import axios from 'axios';
import responders from '../json/responder_location.json';
import service_calls from '../sampledata/service_calls.json';

// Return Home
export const returnHome = event => {
  return {
    type: RETURN_HOME,
    payload: event
  };
};

// Return Dispatch Data
export const returnDispatch = event => {
  console.log(JSON.stringify(service_calls));
  return {
    type: RETURN_DISPATCH_SUCCESS,
    payload: JSON.stringify(service_calls)
  };
};

// Return First Responder Information
export const getResponders = () => {
  console.log(JSON.stringify(responders));
  return {
    type: ATTEMPT_GET_RESPONDERS,
    payload: JSON.stringify(responders)
  };
};

export const requestData = event => {};
