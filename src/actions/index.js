import {
  RETURN_HOME
} from "./types.js"

import { push } from 'react-router-redux'
import axios from "axios"


export const returnHome = ( event ) => {
  return {
    type: RETURN_HOME,
    payload: event
  }
}
