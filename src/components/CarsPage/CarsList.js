import React, { Component } from 'react';

class CarsList extends Component {

  renderList(cars = []) {
    return cars.map(car => {
      return (
        <tr key={car._id} onClick={() => this.props.handleSelect(car)}>
          <th scope="col">{car._id}</th>
          <th scope="col">{car.make}</th>
          <th scope="col">{car.model}</th>
          <th scope="col">{car.year}</th>
          <th scope="col">{car.description}</th>
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
              <th scope="col">Make</th>
              <th scope="col">Model</th>
              <th scope="col">Year</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.cars)}
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

export default CarsList;
