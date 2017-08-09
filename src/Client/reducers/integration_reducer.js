import {
  FACEBOOK,
  TWITTER,
  STACKOVERFLOW,
  INSTAGRAM,
  GITHUB,
  LINKEDIN,
  JSFIDDLE
} from '../actions/types';

let init = {
  facebook: '',
  twitter: '',
  stackoverflow: '',
  instagram: '',
  github: '',
  linkedin: '',
  jsfiddle: ''
}

export default function(state = init, action) {
  switch(action.type){
    case FACEBOOK:
      return {...state, facebook: action.payload};
    case TWITTER:
      return {...state, twitter: action.payload};
    case STACKOVERFLOW:
      return {...state, stackoverflow: action.payload};
    case INSTAGRAM:
      return {...state, instagram: action.payload};
    case GITHUB:
      return {...state, github: action.payload};
    case LINKEDIN:
      return {...state, linkedin: action.payload};
    case JSFIDDLE:
      return {...state, jsfiddle: action.payload};
    default:
      return state;
  }
}
