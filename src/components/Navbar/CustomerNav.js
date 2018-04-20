import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomerNav = ({handleLogout}) => (
  <ul className="navbar-list">
    <li className="navbar-item">
      <NavLink
        activeClassName="active"
        className="navbar-link"
        to="/book"
      >
        Book a car
      </NavLink>
    </li>
    <li className="navbar-item">
      <span className="navbar-link" onClick={handleLogout}>Sign out</span>
    </li>
  </ul>
);

export default CustomerNav;
