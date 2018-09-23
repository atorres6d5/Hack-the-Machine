import {
    GET_RESPONDERS_SUCCESS,
    GET_RESPONDERS_FAIL,
    ATTEMPT_GET_RESPONDERS
    } from '../actions/types.js'
    
    const INITIAL_STATE = {
        responders: [],
        loading: false
    }
    
    
    export default ( state = INITIAL_STATE, action)=>{
      console.log({state})
    
      switch (action.type) {
        case ATTEMPT_GET_RESPONDERS:
          return{ ...state, laoding: true};
        case GET_RESPONDERS_SUCCESS:
          return{ ...state, responders:[action.payload], loading: false}
        case GET_RESPONDERS_FAIL:
          return{ ...state, loading: false }
    
        default:
          return state
    
      }
    }
    