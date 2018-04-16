import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { carsActions, uiActions } from '../../actions';
import { carsConstants } from '../../helpers';
import { SubmissionError } from 'redux-form';
import CarForm from '../@shared/CarForm';

Modal.setAppElement('body');

class AddCarModal extends Component {

  handleSubmit(values) {
    return this.props.addCar(values)
    .then(res => {

      if (res.type === carsConstants.ADD_CAR_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }

      this.handleClose()
    });
  }

  handleClose() {
    this.props.hideAddCarModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.ui.addCarModalVisible}
        onRequestClose={this.handleClose.bind(this)}
        className='modal-wrap'
        overlayClassName='overlay'
      >
        <div className="car-modal-container modal-container">
          <h3 className="font-weight-normal mb-3">Car management</h3>
          <p className="text-center">Add a new car</p>
          <CarForm onSubmit={this.handleSubmit.bind(this)} />
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
  hideAddCarModal: uiActions.hideAddCarModal,
  addCar: carsActions.addCar,
})(AddCarModal);
