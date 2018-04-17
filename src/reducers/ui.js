import { uiConstants } from '../helpers/';

const initialState = {
  loginModalVisible: false,
  registerModalVisible: false,
  addCarModalVisible: false,
  bookCarModalVisible: false,
  bookCarId: null,
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
    case uiConstants.SHOW_ADD_CAR_MODAL:
      return {
        ...state,
        addCarModalVisible: true,
      }
    case uiConstants.HIDE_ADD_CAR_MODAL:
      return {
        ...state,
        addCarModalVisible: false,
      }
    case uiConstants.SHOW_EDIT_CAR_MODAL:
      return {
        ...state,
        editCarModalVisible: true,
      }
    case uiConstants.HIDE_EDIT_CAR_MODAL:
      return {
        ...state,
        editCarModalVisible: false,
      }
    case uiConstants.SHOW_BOOK_CAR_MODAL:
      return {
        ...state,
        bookCarModalVisible: true,
        bookCarId: action.carId,
      }
    case uiConstants.HIDE_BOOK_CAR_MODAL:
      return {
        ...state,
        bookCarModalVisible: false,
        bookCarId: null,
      }
    default:
      return state
  };
}
