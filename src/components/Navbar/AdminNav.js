import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNav = ({handleLogout}) => (
  <ul className="navbar-list">
    <li className="navbar-item">
      <NavLink
        activeClassName="active"
        className="navbar-link"
        to="/cars"
      >
        Manage cars
      </NavLink>
    </li>
    <li className="navbar-item">
      <span className="navbar-link" onClick={handleLogout}>Sign out</span>
    </li>
  </ul>
);

export default AdminNav;
