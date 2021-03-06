import { userConstants } from '../helpers';

const signIn = (email, password) => {
  return {
    type: userConstants.SIGN_IN,
    payload: {
      request: {
        method: 'POST',
        url: '/auth',
        data: {
          email,
          password,
        }
      }
    }
  }
};

const signOut = () => {
  localStorage.removeItem('accessToken');

  return {
    type: userConstants.SIGN_OUT,
  }
};

const signUp = (data) => {
  return {
    type: userConstants.SIGN_UP,
    payload: {
      request: {
        method: 'POST',
        url: '/users',
        data: data
      }
    }
  }
};

const getCurrentUser = () => {
  return {
    type: userConstants.GET_CURRENT_USER,
    payload: {
      request: {
        method: 'GET',
        url: '/users/me',
      }
    }
  }
};

export const userActions = {
  signIn,
  signOut,
  signUp,
  getCurrentUser,
};
