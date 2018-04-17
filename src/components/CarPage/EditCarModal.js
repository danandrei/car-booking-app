import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { carsActions, uiActions } from '../../actions';
import { carsConstants } from '../../helpers';
import { SubmissionError } from 'redux-form';
import CarForm from '../@shared/CarForm';

Modal.setAppElement('body');

class EditCarModal extends Component {

  handleSubmit(values) {
    return this.props.editCar(this.props.selectedCar._id, values)
    .then(res => {

      if (res.type === carsConstants.EDIT_CAR_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }

      this.handleClose()
    });
  }

  handleClose() {
    this.props.hideEditCarModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.ui.editCarModalVisible}
        onRequestClose={this.handleClose.bind(this)}
        className='modal-wrap'
        overlayClassName='overlay'
      >
        <div className="car-modal-container modal-container">
          <h3 className="font-weight-normal mb-3">Car management</h3>
          <p className="text-center">Edit car</p>
          <CarForm onSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
    selectedCar: state.adminCars.selectedCar,
  };
}

export default connect(mapStateToProps, {
  hideEditCarModal: uiActions.hideEditCarModal,
  editCar: carsActions.editCar,
})(EditCarModal);
