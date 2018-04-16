import React, { Component } from 'react';
import { connect } from 'react-redux';

import { carsActions, uiActions } from '../../actions';
import CarsList from './CarsList';
import AddCarModal from './AddCarModal';
import EditCarModal from './EditCarModal';

class CarsPage extends Component {

  componentDidMount() {
    this.props.getCars();
  }

  handleListSelect (car) {
    this.props.showEditCarModal(car);
  }

  render() {
    return (
      <div className="cars-wrap">
        <div className="container">
          <div className="">
            <button className="btn btn-primary" onClick={this.props.showAddCarModal}>Add new car</button>
          </div>
          <CarsList cars={this.props.cars} handleSelect={this.handleListSelect.bind(this)}/>
        </div>
      <AddCarModal/>
      <EditCarModal/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  }
}

export default connect(mapStateToProps, {
  getCars: carsActions.getCars,
  showAddCarModal: uiActions.showAddCarModal,
  showEditCarModal: uiActions.showEditCarModal,
})(CarsPage);
