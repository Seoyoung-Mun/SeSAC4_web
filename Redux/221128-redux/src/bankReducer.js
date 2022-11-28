import countReducer from './store/countReducer';
import balanceReducer from './store/balanceReducer';
import { combineReducers } from 'redux';

const bankReducer = combineReducers({
    number : countReducer,
    balance : balanceReducer
});

export default bankReducer;
