import { carsConstants } from '../helpers';

const getCar = (carId) => {
  return {
    type: carsConstants.GET_CAR,
    payload: {
      request: {
        method: 'GET',
        url: '/cars/' + carId,
      }
    }
  }
};

const getCars = (params = {}, forAdmin) => {
  return {
    type: forAdmin ? carsConstants.GET_ADMIN_CARS : carsConstants.GET_CUSTOMER_CARS,
    payload: {
      request: {
        method: 'GET',
        url: '/cars',
        params,
      }
    }
  }
};

const deselectCar = () => {
  return {
    type: carsConstants.DESELECT_CAR,
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
  getCar,
  deselectCar,
};
