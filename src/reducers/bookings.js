import { findIndex } from 'lodash';
import { bookingConstants, carsConstants } from '../helpers';

const initialState = {
  data: [],
  skip: 0,
  limit: 10,
  noMore: false,
  startDate: null,
  endDate: null,
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
    case bookingConstants.CHANGE_BOOKING_FILTERS:
      return {
        ...state,
        data: [],
        skip: 0,
        limit: 10,
        noMore: false,
        [action.filter.name]: action.filter.value,
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
