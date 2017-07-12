import {
  USER_INFO,
  USERS
} from '../actions/types';


export default function(state={}, action) {
  switch(action.type){
    case USER_INFO:
      return {...state, userInfo: action.payload};
    case USERS:
      return {...state, dash: action.payload};
    default:
      return state;
  }
}
