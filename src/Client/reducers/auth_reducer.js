import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  CLEAR_ERROR,
  USER_INFO,
  USERS,
  EVENTS_INFO,
  FACEBOOK
} from '../actions/types';

let defState = {
  authenticated: false,
  error: '',
  userInfo: null,
  dash: null
}

export default function(state = defState, action) {
  switch(action.type){
    case AUTH_USER:
      return { ...state, authenticated: true, error: ''};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
    case CLEAR_ERROR:
      return {...state, error: ''};
    case USER_INFO:
      return {...state, userInfo: action.payload};
    case USERS:
      return {...state, dash: action.payload};
    case EVENTS_INFO:
      return {...state, events: action.payload};
    default:
      return state;
  }
}
