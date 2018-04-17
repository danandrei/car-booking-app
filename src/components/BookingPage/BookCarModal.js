import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bookingActions, uiActions } from '../../actions';
import { bookingConstants } from '../../helpers';
import { SubmissionError } from 'redux-form';
import BookCarForm from './BookCarForm';

Modal.setAppElement('body');

class BookCarModal extends Component {

  handleSubmit(values) {
    return this.props.bookCar(this.props.ui.bookCarId, values)
    .then(res => {

      if (res.type === bookingConstants.ADD_BOOKING_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }

      this.handleClose()
    });
  }

  handleClose() {
    this.props.hideBookCarModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.ui.bookCarModalVisible}
        onRequestClose={this.handleClose.bind(this)}
        className='modal-wrap'
        overlayClassName='overlay'
      >
        <div className="car-modal-container modal-container">
          <h3 className="font-weight-normal mb-3">Book car</h3>
          <p className="text-center">Select dates</p>
          <BookCarForm onSubmit={this.handleSubmit.bind(this)} />
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
  hideBookCarModal: uiActions.hideBookCarModal,
  bookCar: bookingActions.bookCar,
})(BookCarModal);
