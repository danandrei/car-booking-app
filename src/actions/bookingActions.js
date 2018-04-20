import { bookingConstants } from '../helpers';

const getBookings = (params = {}, forAdmin) => {
  return {
    type: bookingConstants.GET_BOOKINGS,
    payload: {
      request: {
        method: 'GET',
        url: '/bookings',
        params,
      }
    }
  }
};

const bookCar = (carId, data) => {
  return {
    type: bookingConstants.ADD_BOOKING,
    payload: {
      request: {
        method: 'POST',
        url: '/cars/' + carId + '/book',
        data,
      }
    }
  }
};

const changeFilters = (filter) => {
  return {
    type: bookingConstants.CHANGE_BOOKING_FILTERS,
    filter,
  }
};

export const bookingActions = {
  getBookings,
  bookCar,
  changeFilters,
};
