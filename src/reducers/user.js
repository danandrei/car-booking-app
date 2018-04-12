import { userConstants } from '../helpers';

const accessToken = localStorage.getItem('accessToken');
const initialState = {
  data: null,
  accessToken: accessToken ? accessToken : null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SIGN_IN_SUCCESS:
      localStorage.setItem('accessToken', action.payload.data.data.token);
      return {
        ...state,
        accessToken: action.payload.data.data.token,
      };
    case userConstants.SIGN_OUT:
      return {
        ...state,
        data: null,
        accessToken: null,
      };
    default:
      return state
  };
}
