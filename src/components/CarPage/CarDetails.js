import React from 'react';

const CarDetails = ({car, isFetching, handleEdit, handleRemove}) => (
    <div className="card mb-4">
    <div className="card-body">
      {
        !isFetching &&
        <h3>{car.year + ' ' + car.make + ' ' + car.model}</h3>
      }
      {
        !isFetching &&
        <p>{car.description}</p>
      }
      <button className="btn btn-success" onClick={handleEdit}>Edit</button>
      <button className="btn btn-danger ml-2" onClick={handleRemove}>Delete</button>
    </div>
  </div>
)

export default CarDetails;
