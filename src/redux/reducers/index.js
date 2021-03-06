import { combineReducers } from 'redux';
import userReducer from './userReducer';
import requestReducer from './requestReducer';
import eventHandler from './eventHandler';
import errorHandler from './errorHandler';
import successHandler from './successHandler';

const rootReduce = combineReducers({
  user: userReducer,
  request: requestReducer,
  eventHandler,
  errorHandler,
  successHandler,
});

export default rootReduce;
