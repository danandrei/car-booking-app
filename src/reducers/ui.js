import { uiConstants } from '../helpers/';

const initialState = {
  loginModalVisible: false,
  registerModalVisible: false,
};

export const ui = (state = initialState, action) => {
  switch (action.type) {
    case uiConstants.SHOW_LOGIN_MODAL:
      return {
        ...state,
        loginModalVisible: true,
      }
    case uiConstants.HIDE_LOGIN_MODAL:
      return {
        ...state,
        loginModalVisible: false,
      }
    case uiConstants.SHOW_REGISTER_MODAL:
      return {
        ...state,
        registerModalVisible: true,
      }
    case uiConstants.HIDE_REGISTER_MODAL:
      return {
        ...state,
        registerModalVisible: false,
      }
    default:
      return state
  };
}
