import React, { Component } from 'react';

class Navbar extends Component{

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <i className="fab fa-asymmetrik navbar-logo"></i>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a className="navbar-link">home</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link">shop</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link">register</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link">log in</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
