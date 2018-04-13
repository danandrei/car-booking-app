import React from 'react';

const PublicNav = ({handleSignUpModal, handleSignInModal}) => (
  <ul className="navbar-list">
      <li className="navbar-item">
        <a className="navbar-link" onClick={handleSignUpModal}>Sign Up</a>
      </li>
      <li className="navbar-item">
        <a className="navbar-link" onClick={handleSignInModal}>Sign in</a>
      </li>
  </ul>
);

export default PublicNav;
