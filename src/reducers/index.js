import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { user } from './user';
import { ui } from './ui';

const rootReducer = combineReducers({
  user,
  form: form,
  ui: ui,
});

export default rootReducer;
