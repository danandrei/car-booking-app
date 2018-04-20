import React, { Component } from 'react';
import moment from 'moment';

class CarBookingList extends Component {

  renderList(bookings = []) {
    return bookings.map(booking => {
      return (
        <tr key={booking._id}>
          <th scope="col">{booking._id}</th>
          <th scope="col">{moment(booking.startDate).format('DD MMM YYYY')}</th>
          <th scope="col">{moment(booking.endDate).format('DD MMM YYYY')}</th>
          <th scope="col">{booking.user.firstName + ' ' + booking.user.lastName}</th>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="mt-3">
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.bookings)}
          </tbody>
        </table>
        {
            !this.props.noMore &&
            <div className="text-center">
              <button className="btn btn-default" onClick={this.props.handleLoad}>Load More</button>
            </div>
        }
      </div>
    )
  }
}

export default CarBookingList;
