import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carsConstants } from '../../helpers';
import { uiActions, carsActions, bookingActions } from '../../actions';
import EditCarModal from './EditCarModal';
import CarBookingList from './CarBookingList';
import { history } from '../../helpers';


class CarPage extends Component {

  componentDidMount() {
    const carId = this.props.match.params.id;
    this.props.getCar(carId)
    .then(res => {

      if (res.type === carsConstants.GET_CAR_FAIL) {
        return history.push('/404');
      }

      this.loadBookings();
    });
  }

  loadBookings() {
    this.props.getBookings({
      skip: this.props.bookings.skip,
      limit: this.props.bookings.limit,
      car: this.props.selectedCar._id,
    });
  }

  handleRemove() {
    return this.props.removeCar(this.props.selectedCar._id)
    .then(res => {
      history.goBack();
    });
  }

  handleEdit() {
    this.props.showEditCarModal();
  }

  render() {
    return (
      <div className="cars-wrap">
        <div className="container">
          <div className="card mb-4">
            <div className="card-body">
              {
                !this.props.fetchingCar &&
                <h3>{this.props.selectedCar.year + ' ' + this.props.selectedCar.make + ' ' + this.props.selectedCar.model}</h3>
              }
              {
                !this.props.fetchingCar &&
                <p>{this.props.selectedCar.description}</p>
              }
              <button className="btn btn-success" onClick={this.handleEdit.bind(this)}>Edit</button>
              <button className="btn btn-danger ml-2" onClick={this.handleRemove.bind(this)}>Delete</button>
            </div>
          </div>
          <div className="mb-4">
            <h3>Bookings for this car</h3>
          </div>
          <CarBookingList bookings={this.props.bookings.data} />
          {
            !this.props.bookings.noMore &&
            <div className="text-center">
              <button className="btn btn-default" disabled={this.props.bookings.noMore} onClick={this.loadBookings.bind(this)}>Load More</button>
            </div>
          }
        </div>
        <EditCarModal/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCar: state.adminCars.selectedCar,
    fetchingCar: state.adminCars.fetchingCar,
    bookings: state.bookings,
  }
}

export default connect(mapStateToProps, {
  getCar: carsActions.getCar,
  getBookings: bookingActions.getBookings,
  removeCar: carsActions.removeCar,
  showEditCarModal: uiActions.showEditCarModal,
})(CarPage);
