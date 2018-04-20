import React, { Component } from 'react';

class BookingList extends Component {

  renderList(cars = [], handleSelect) {
    return cars.map(car => {
      return (
        <div className="col-sm-4 mb-4" key={car._id}>
          <div className="card">
            <img className="card-img-top" src="https://ahmadalijetplane.files.wordpress.com/2013/06/acb3c668-c6a9-48ac-9e55-8ec4d1c015e2_10_caters_everyday_objects_made_useless_art_14.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{car.year + ' ' + car.make + ' ' + car.model}</h5>
              <p className="card-text">{car.description}</p>
              <button className="btn btn-primary" onClick={() => handleSelect(car._id)}>Book Car</button>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderList(this.props.cars, this.props.handleSelect)}
        </div>
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

export default BookingList;
