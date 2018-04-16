import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { user } from './user';
import { ui } from './ui';
import { cars } from './cars';

const rootReducer = combineReducers({
  user,
  form: form,
  ui: ui,
  cars: cars,
});

export default rootReducer;
