import React, { Component } from 'react';
import { connect } from 'react-redux';

import { carsActions, uiActions } from '../../actions';
import BookingList from './BookingList';
import BookCarModal from './BookCarModal';

class BookingPage extends Component {

  componentDidMount() {
    this.loadCars();
  }

  loadCars() {
    this.props.getCars({
      skip: this.props.cars.skip,
      limit: this.props.cars.limit,
    });
  }

  render() {
    return (
      <div className="cars-wrap">
        <div className="container">
          <div className="mb-4">
            <h3>Book a car</h3>
          </div>
          { !this.props.cars.data.length && <div className="text-center"><strong>No cars available to book</strong></div>}
          <BookingList cars={this.props.cars.data} handleSelect={this.props.showBookCarModal}/>
          {
            !this.props.cars.noMore &&
            <div className="text-center">
              <button className="btn btn-default" disabled={this.props.cars.noMore} onClick={this.loadCars.bind(this)}>Load More</button>
            </div>
          }
        </div>
        <BookCarModal/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.customerCars,
  };
};

export default connect(mapStateToProps, {
  showBookCarModal: uiActions.showBookCarModal,
  getCars: carsActions.getCars,
})(BookingPage);
