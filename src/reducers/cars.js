import { carsConstants } from '../helpers';

const initialState = [];

export const cars = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.GET_CARS_SUCCESS:
      return action.payload.data.data;
    case carsConstants.ADD_CAR_SUCCESS:
      return [...state, action.payload.data.data];
    case carsConstants.EDIT_CAR_SUCCESS:
      const car = action.payload.data.data;
      const cars = state.slice();
      for (let i = 0; i < cars.length; ++i) {
        if (cars[i]._id === car._id) {
          cars[i] = car;
          break;
        }
      }
      return cars;
    case carsConstants.REMOVE_CAR_SUCCESS:
      const url = action.payload.request.responseURL;
      const id = url.substring(url.lastIndexOf('/') + 1);
      const carsCopy = state.slice();
      for (let i = 0; i < carsCopy.length; ++i) {
        if (carsCopy[i]._id === id) {
          carsCopy.splice(i, 1);
          break;
        }
      }
      return carsCopy;
    default:
      return state;
  }
};
