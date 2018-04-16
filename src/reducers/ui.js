import { uiConstants } from '../helpers/';

const initialState = {
  loginModalVisible: false,
  registerModalVisible: false,
  addCarModalVisible: false,
  selectedCar: null,
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
        selectedCar: action.car,
      }
    case uiConstants.HIDE_EDIT_CAR_MODAL:
      return {
        ...state,
        editCarModalVisible: false,
        selectedCar: null,
      }
    default:
      return state
  };
}
