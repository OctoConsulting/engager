import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';
import integrationReducer from './integration_reducer';


const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  integration: integrationReducer
});

export default rootReducer;
