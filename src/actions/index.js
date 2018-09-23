import {
  RETURN_HOME,
  ATTEMPT_GET_RESPONDERS
} from "./types.js"
import axios from 'axios'
import responders from '../json/responder_location.json'


export const returnHome = ( event ) => {
  return {
    type: RETURN_HOME,
    payload: event
  }
}

export const getResponders = () => {
  console.log(JSON.stringify(responders));
  return {
    type: ATTEMPT_GET_RESPONDERS,
    payload: JSON.stringify(responders)
  }
}

export const requestData = ( event )=>{

}
