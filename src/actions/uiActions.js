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

export const uiActions = {
  showLoginModal,
  showRegisterModal,
  hideRegisterModal,
  hideLoginModal,
}
