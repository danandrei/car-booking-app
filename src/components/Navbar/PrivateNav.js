import React from 'react';
import { history } from '../../helpers'

const PrivateNav = ({handleLogout}) => (
  <ul className="navbar-list">
    <li className="navbar-item">
      <a className="navbar-link" onClick={() => history.push('/rentals')}>Rentals</a>
    </li>
    <li className="navbar-item">
      <a className="navbar-link" onClick={handleLogout}>Sign out</a>
    </li>
  </ul>
);

export default PrivateNav;
