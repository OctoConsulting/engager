import { combineReducers } from "redux";
import * as types from "../actions";
import * as userTypes from "../actions/users";
import { appUrl } from "../clientConfig";
import {RouterActions} from '../clientConfig';
const data = (state = {
  isFetching: false,
  message: "",
  isInitialized: false,
  isRegistered: false,
  isLoggedIn: false,
  users: [{
    id: 1,
    name: "Product1",
    price: 120,
    actions: "200Actions",
    points: "2000pts"
}, {
    id: 2,
    name: "Product2",
    price: 80,
    actions: "200Actions",
    points: "2000pts"
}
  ]

}, action) => {
  console.log("in reducer");
  console.log(action.type);
  switch (action.type) {
  case types.REQUEST_DATA:
    return Object.assign({}, state, {
      isFetching: true
    });
  case types.RECEIVE_DATA:
    return Object.assign({}, state, {
      isFetching: false,
      message: action.data.message || "",
      isInitialized: true
    });
  case userTypes.USER_REGISTERED:
    return Object.assign({}, state, {
      isFetching: false,
      isRegistered: true
    });

  default:
    return state;
  }
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;
