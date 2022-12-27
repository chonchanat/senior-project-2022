import { combineReducers } from 'redux';
import counters from './counters';
import reducer from './reducer';

export default combineReducers({
  counters,
  reducer,
});