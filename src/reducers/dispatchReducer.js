import {
  RETURN_DISPATCH_ATTEMPT,
  RETURN_DISPATCH_SUCCESS,
  RETURN_DISPATCH_FAIL,
  RETURN_SERVICECALLS_ATTEMPT,
  RETURN_SERVICECALLS_SUCCESS,
  RETURN_SERVICECALLS_FAIL
} from '../actions/types.js';

const INITIAL_STATE = {
  dispatchs: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case RETURN_DISPATCH_FAIL:
      return { ...state };
    case RETURN_DISPATCH_SUCCESS:
      return { ...state };
    default:
      return state;
    case RETURN_SERVICECALLS_ATTEMPT:
      return { ...state, dispatchs: [] };
    case RETURN_SERVICECALLS_SUCCESS:
      return { ...state, dispatchs: action.payload };
  }
};
