import React, { Component } from 'react';
import { connect } from 'react-redux';

import { carsActions } from '../../actions';
import BookingList from './BookingList';

class BookingPage extends Component {

  componentDidMount() {
    this.props.getCars();
  }

  render() {
    return (
      <div className="cars-wrap">
        <div className="container">
          <div className="mb-4">
            <h3>Book a car</h3>
          </div>
          { !this.props.cars.length && <div className="text-center"><strong>No cars available to book</strong></div>}
          <BookingList cars={this.props.cars}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps, {
  getCars: carsActions.getCars,
})(BookingPage);
