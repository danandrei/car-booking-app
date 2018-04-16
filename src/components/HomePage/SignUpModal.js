import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { userActions, uiActions } from '../../actions';
import { userConstants } from '../../helpers';
import { SubmissionError } from 'redux-form';
import SignUpForm from '../@shared/SignUpForm';

Modal.setAppElement('body');

class SignUpModal extends Component {

  handleSubmit(values) {
    return this.props.signUp(values)
    .then(res => {

      // throw an error if the sign up failed
      if (res.type === userConstants.SIGN_UP_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }

      // sign in the user if sign up is succesfull
      this.props.signIn(values.email, values.password)
      .then(res => {
        this.handleClose()
      });
    });
  }

  handleClose() {
    this.props.hideRegisterModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.ui.registerModalVisible}
        onRequestClose={this.handleClose.bind(this)}
        className='modal-wrap'
        overlayClassName='overlay'
      >
        <div className="modal-container">
          <SignUpForm onSubmit={this.handleSubmit.bind(this)} />
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
  };
}

export default connect(mapStateToProps, {
  hideRegisterModal: uiActions.hideRegisterModal,
  signUp: userActions.signUp,
  signIn: userActions.signIn
})(SignUpModal);
