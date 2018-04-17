import { userConstants } from '../helpers';

const accessToken = localStorage.getItem('accessToken');
const role = localStorage.getItem('role');
const initialState = {
  data: null,
  role: role || null,
  accessToken: accessToken || null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SIGN_IN_SUCCESS:
      localStorage.setItem('accessToken', action.payload.data.data.token);
      localStorage.setItem('role', action.payload.data.data.role);
      return {
        ...state,
        role: action.payload.data.data.role,
        accessToken: action.payload.data.data.token,
      };
    case userConstants.SIGN_OUT:
      return {
        ...state,
        data: null,
        role: null,
        accessToken: null,
      };
    case userConstants.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data.data,
      }
    default:
      return state
  };
}
