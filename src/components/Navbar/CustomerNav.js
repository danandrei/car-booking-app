import React from 'react';
import { history } from '../../helpers'

const CustomerNav = ({handleLogout}) => (
  <ul className="navbar-list">
    <li className="navbar-item">
      <a className="navbar-link" onClick={() => history.push('/book')}>Book a car</a>
    </li>
    <li className="navbar-item">
      <a className="navbar-link" onClick={handleLogout}>Sign out</a>
    </li>
  </ul>
);

export default CustomerNav;
