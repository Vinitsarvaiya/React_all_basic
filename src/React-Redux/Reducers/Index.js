// rootReducer.js
import { combineReducers } from 'redux';
import incDecReducer from './IncDec';

const rootReducer = combineReducers({
    incDec: incDecReducer,
});

export default rootReducer;
