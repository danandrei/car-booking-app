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


export const bookingActions = {
  getBookings,
  bookCar,
};
