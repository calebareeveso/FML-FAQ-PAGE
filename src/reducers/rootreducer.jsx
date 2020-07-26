import { combineReducers } from 'redux';
import { userReducer, uiReducer } from './allReducers';
import { dataReducer } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
});

export default rootreducer;
