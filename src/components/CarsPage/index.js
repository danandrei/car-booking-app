import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers'

import { carsActions, uiActions } from '../../actions';
import CarsList from './CarsList';
import AddCarModal from './AddCarModal';

class CarsPage extends Component {

  componentDidMount() {
    this.props.deselectCar();
    this.loadCars();
  }

  loadCars() {
    this.props.getCars({
      skip: this.props.cars.skip,
      limit: this.props.cars.limit,
    }, true);
  }

  handleListSelect (car) {
    history.push('/cars/' + car._id);
  }

  render() {
    return (
      <div className="cars-wrap">
        <div className="container">
          <div className="">
            <button className="btn btn-primary" onClick={this.props.showAddCarModal}>Add new car</button>
          </div>
          <CarsList cars={this.props.cars.data} handleSelect={this.handleListSelect.bind(this)}/>
          {
            !this.props.cars.noMore &&
            <div className="text-center">
              <button className="btn btn-default" disabled={this.props.cars.noMore} onClick={this.loadCars.bind(this)}>Load More</button>
            </div>
          }
        </div>
      <AddCarModal/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.adminCars,
  }
}

export default connect(mapStateToProps, {
  getCars: carsActions.getCars,
  deselectCar: carsActions.deselectCar,
  showAddCarModal: uiActions.showAddCarModal,
})(CarsPage);
