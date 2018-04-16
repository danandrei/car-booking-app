import React from 'react';
import { history } from '../../helpers'

const AdminNav = () => (
  <ul className="navbar-list">
    <li className="navbar-item">
      <a className="navbar-link" onClick={() => history.push('/cars')}>Manage cars</a>
    </li>
  </ul>
);

export default AdminNav;
