import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { user } from './user';
import { ui } from './ui';
import { adminCars } from './adminCars';
import { customerCars } from './customerCars';
import { bookings } from './bookings';

const rootReducer = combineReducers({
  user,
  form,
  ui,
  adminCars,
  customerCars,
  bookings,
});

export default rootReducer;
