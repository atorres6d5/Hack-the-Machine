import {
RETURN_HOME
} from '../actions/types.js'

const INITIAL_STATE = {

}


export default ( state = INITIAL_STATE, action)=>{
  console.log(action)

  switch (action.type) {
    case RETURN_HOME:
      return{ ...state, email:action.payload }

    default:
      return state

  }
}
