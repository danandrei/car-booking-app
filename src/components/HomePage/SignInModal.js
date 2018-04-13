import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { userActions, uiActions } from '../../actions';
import { userConstants } from '../../helpers';
import { SubmissionError } from 'redux-form';
import SignInForm from '../@shared/SignInForm';

Modal.setAppElement('body');

class SignInModal extends Component {

  handleSubmit(values) {
    return this.props.signIn(values.email, values.password)
    .then(res => {

      if (res.type === userConstants.SIGN_IN_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }
    });
  }

  handleClose() {
    this.props.hideLoginModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.ui.loginModalVisible}
        onRequestClose={this.handleClose.bind(this)}
        className='modal-wrap'
        overlayClassName='overlay'
      >
        <div className="modal-container">
          <SignInForm onSubmit={this.handleSubmit.bind(this)} />
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
  hideLoginModal: uiActions.hideLoginModal,
  signIn: userActions.signIn,
})(SignInModal);
