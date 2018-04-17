import { findIndex } from 'lodash';
import { carsConstants } from '../helpers';

const initialState = {
  data: [],
  selectedCar: null,
  fetchingCar: true,
  skip: 0,
  limit: 10,
  noMore: false,
};

export const adminCars = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.GET_ADMIN_CARS_SUCCESS:
      const cars = action.payload.data.data;
      return {
        ...state,
        skip: state.skip + state.limit,
        data: [...state.data, ...cars],
        noMore: cars.length < state.limit,
      };
    case carsConstants.ADD_CAR_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data.data],
      };
    case carsConstants.EDIT_CAR_SUCCESS:
      const car = action.payload.data.data;
      const updateIndex = findIndex(state.data, {_id: car._id})

      return {
        ...state,
        data: [
          ...state.data.slice(0, updateIndex),
          car,
          ...state.data.slice(updateIndex + 1),
        ],
        selectedCar: car,
      };
    case carsConstants.REMOVE_CAR_SUCCESS:
      const url = action.payload.request.responseURL;
      const id = url.substring(url.lastIndexOf('/') + 1);
      const deleteIndex = findIndex(state.data, {_id: id})

      return {
        ...state,
        data: [
          ...state.data.slice(0, deleteIndex),
          ...state.data.slice(deleteIndex + 1),
        ],
      };
    case carsConstants.GET_CAR:
      return {
        ...state,
        fetchingCar: true,
      }
    case carsConstants.DESELECT_CAR:
      return {
        ...state,
        selectedCar: null,
        fetchingCar: true,
      }
    case carsConstants.GET_CAR_SUCCESS:
      return {
        ...state,
        selectedCar: action.payload.data.data,
        fetchingCar: false,
      }
    default:
      return state;
  }
};
