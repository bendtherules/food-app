import { combineReducers } from 'redux';
import initReducer from './initReducer';

export default combineReducers({
    data: initReducer,
});