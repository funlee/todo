import { createStore } from 'redux';
import combineReducers from './reduce';

const store = createStore(combineReducers);

export default store;