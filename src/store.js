import { createStore } from 'redux';
import workReducer from './reducers/item';

const store = createStore(workReducer);

export default store;