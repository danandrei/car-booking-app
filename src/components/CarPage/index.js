import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { carsConstants } from '../../helpers';
import { uiActions, carsActions, bookingActions } from '../../actions';
import CarDetails from './CarDetails';
import EditCarModal from './EditCarModal';
import CarBookingList from './CarBookingList';

import BookingFilters from './BookingFilters';


class CarPage extends Component {

  componentDidMount() {
    const carId = this.props.match.params.id;
    this.props.getCar(carId)
    .then(res => {

      if (res.type === carsConstants.GET_CAR_FAIL) {
        return this.props.history.push('/404');
      }

      this.loadBookings();
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.bookings.startDate !== prevProps.bookings.startDate
      || this.props.bookings.endDate !== prevProps.bookings.endDate
    ) {
      this.loadBookings();
    }
  }


  loadBookings() {
    this.props.getBookings({
      skip: this.props.bookings.skip,
      limit: this.props.bookings.limit,
      car: this.props.selectedCar._id,
      startDate: this.props.bookings.startDate,
      endDate: this.props.bookings.endDate,
    });
  }

  handleFiltersChange() {
    this.props.changeFilters({
      name: arguments[3],
      value: arguments[1].toString(),
    });
  }

  handleRemove() {
    return this.props.removeCar(this.props.selectedCar._id)
    .then(res => {
      return this.props.history.goBack();
    });
  }

  handleEdit() {
    this.props.showEditCarModal();
  }

  render() {
    return (
      <div className="cars-wrap">
        <div className="container">
          <CarDetails
            car={this.props.selectedCar}
            isFetching={this.props.fetchingCar}
            handleEdit={this.handleEdit.bind(this)}
            handleRemove={this.handleRemove.bind(this)}
          />
          <BookingFilters
            handleChange={this.handleFiltersChange.bind(this)}
          />
          <CarBookingList
            bookings={this.props.bookings.data}
            noMore={this.props.bookings.noMore}
            handleLoad={this.loadBookings.bind(this)}
          />
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

export default withRouter(connect(mapStateToProps, {
  getCar: carsActions.getCar,
  getBookings: bookingActions.getBookings,
  removeCar: carsActions.removeCar,
  showEditCarModal: uiActions.showEditCarModal,
  changeFilters: bookingActions.changeFilters,
})(CarPage));
