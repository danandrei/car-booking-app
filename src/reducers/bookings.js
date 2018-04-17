import { findIndex } from 'lodash';
import { bookingConstants, carsConstants } from '../helpers';

const initialState = {
  data: [],
  skip: 0,
  limit: 10,
  noMore: false,
};

export const bookings = (state = initialState, action) => {
  switch (action.type) {
    case bookingConstants.GET_BOOKINGS_SUCCESS:
      const bookings = action.payload.data.data;
      return {
        ...state,
        skip: state.skip + state.limit,
        data: [...state.data, ...bookings],
        noMore: bookings.length < state.limit,
      }
    case carsConstants.GET_CAR:
      return {
        ...state,
        skip: 0,
        data: [],
      }
    default:
      return state;
  }
};
