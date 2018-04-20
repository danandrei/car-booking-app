import React from 'react';

const PublicNav = ({handleSignUpModal, handleSignInModal}) => (
  <ul className="navbar-list">
      <li className="navbar-item">
        <span className="navbar-link" onClick={handleSignUpModal}>Sign Up</span>
      </li>
      <li className="navbar-item">
        <span className="navbar-link" onClick={handleSignInModal}>Sign in</span>
      </li>
  </ul>
);

export default PublicNav;
