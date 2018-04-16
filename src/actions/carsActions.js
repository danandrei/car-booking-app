import { carsConstants } from '../helpers';

const getCars = () => {
  return {
    type: carsConstants.GET_CARS,
    payload: {
      request: {
        method: 'GET',
        url: '/cars',
      }
    }
  }
};

const addCar = (data) => {
  return {
    type: carsConstants.ADD_CAR,
    payload: {
      request: {
        method: 'POST',
        url: '/cars',
        data,
      }
    }
  }
};

const editCar = (id, data) => {
  return {
    type: carsConstants.EDIT_CAR,
    payload: {
      request: {
        method: 'PUT',
        url: '/cars/' + id,
        data,
      }
    }
  }
};

const removeCar = (id) => {
  return {
    type: carsConstants.REMOVE_CAR,
    payload: {
      request: {
        method: 'DELETE',
        url: '/cars/' + id,
      }
    }
  }
};

export const carsActions = {
  getCars,
  addCar,
  editCar,
  removeCar,
};
