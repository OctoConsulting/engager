import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';
import PersonalProfile from './reducer_personal_profile';
import PublicProfile from './reducer_public_profile';


const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  personalProfileInfo: PersonalProfile,
  publicProfileInfo: PublicProfile
});

export default rootReducer;
