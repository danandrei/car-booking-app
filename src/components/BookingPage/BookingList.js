import React, { Component } from 'react';

class BookingList extends Component {

  renderList(cars = []) {
    return cars.map(car => {
      return (
        <div className="col-sm-4" key={car._id}>
          <div className="card">
            <img className="card-img-top" src="https://ahmadalijetplane.files.wordpress.com/2013/06/acb3c668-c6a9-48ac-9e55-8ec4d1c015e2_10_caters_everyday_objects_made_useless_art_14.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{car.year + ' ' + car.make + ' ' + car.model}</h5>
              <p className="card-text">{car.description}</p>
              <a href="#" className="btn btn-primary">Book Car</a>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderList(this.props.cars)}
      </div>
    )
  }
}

export default BookingList;
