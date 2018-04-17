import { findIndex } from 'lodash';
import { carsConstants } from '../helpers';

const initialState = {
  data: [],
  skip: 0,
  limit: 9,
  noMore: false,
};

export const customerCars = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.GET_CUSTOMER_CARS_SUCCESS:
      const cars = action.payload.data.data;
      return {
        ...state,
        skip: state.skip + state.limit,
        data: [...state.data, ...cars],
        noMore: cars.length < state.limit,
      }
    default:
      return state;
  }
};
