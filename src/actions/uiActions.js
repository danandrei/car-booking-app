import { uiConstants } from '../helpers';

const showLoginModal = () => {
  return {
    type: uiConstants.SHOW_LOGIN_MODAL
  }
}

const hideLoginModal = () => {
  return {
    type: uiConstants.HIDE_LOGIN_MODAL
  }
}

const showRegisterModal = () => {
  return {
    type: uiConstants.SHOW_REGISTER_MODAL
  }
}

const hideRegisterModal = () => {
  return {
    type: uiConstants.HIDE_REGISTER_MODAL
  }
}

const showAddCarModal = () => {
  return {
    type: uiConstants.SHOW_ADD_CAR_MODAL
  }
}

const hideAddCarModal = () => {
  return {
    type: uiConstants.HIDE_ADD_CAR_MODAL
  }
}

const showEditCarModal = () => {
  return {
    type: uiConstants.SHOW_EDIT_CAR_MODAL,
  }
}

const hideEditCarModal = () => {
  return {
    type: uiConstants.HIDE_EDIT_CAR_MODAL
  }
}

const showBookCarModal = (carId) => {
  return {
    type: uiConstants.SHOW_BOOK_CAR_MODAL,
    carId,
  }
}

const hideBookCarModal = () => {
  return {
    type: uiConstants.HIDE_BOOK_CAR_MODAL
  }
}


export const uiActions = {
  showLoginModal,
  showRegisterModal,
  hideRegisterModal,
  hideLoginModal,
  showEditCarModal,
  hideEditCarModal,
  showAddCarModal,
  hideAddCarModal,
  showBookCarModal,
  hideBookCarModal,
}
