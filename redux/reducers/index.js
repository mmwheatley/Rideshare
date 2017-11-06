import { combineReducers } from 'redux';
import auth from './auth';
import register from './register';

const rootReducer = combineReducers({
    auth,
    register
});

export default rootReducer;
