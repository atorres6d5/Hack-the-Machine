import {
    GET_RESPONDERS_SUCCESS,
    GET_RESPONDERS_FAIL,
    ATTEMPT_GET_RESPONDERS,
    RESPONDERS_LATLONG
    } from '../actions/types.js'
    
    const INITIAL_STATE = {
        responders: [],
        loading: false,
        responders_latlong:[]
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
        case RESPONDERS_LATLONG:
          return {...state, responders_latlong: action.payload}
    
        default:
          return state
    
      }
    }
    