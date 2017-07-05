import {
  USER_INFO
} from '../actions/types';


export default function(state={}, action){
  switch(action.type){
    case USER_INFO:
      return action.payload;
  }
  return state;
}
