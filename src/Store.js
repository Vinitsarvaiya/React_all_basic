import { createStore } from 'redux';
import rootReducer from './React-Redux/Reducers/Index';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
);

export default store;

