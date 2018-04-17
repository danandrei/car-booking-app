import React from 'react';
import { history } from '../../helpers'

const AdminNav = ({handleLogout}) => (
  <ul className="navbar-list">
    <li className="navbar-item">
      <a className="navbar-link" onClick={() => history.push('/cars')}>Manage cars</a>
    </li>
    <li className="navbar-item">
      <a className="navbar-link" onClick={handleLogout}>Sign out</a>
    </li>
  </ul>
);

export default AdminNav;
