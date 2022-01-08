import { combineReducers } from 'redux';
import homeBlogsReducer from './homeBlogsReducer';
import { testReducer } from './test';
const rootReducer = combineReducers({
  homeBlogsReducer,
  testReducer
});

export default rootReducer;
