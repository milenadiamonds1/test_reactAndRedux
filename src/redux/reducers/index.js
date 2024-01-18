import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer,
});

export default rootReducer;
