import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uiActions, userActions } from '../../actions';
import {
  customerIsNotAuthenticated,
  customerIsAuthenticated,
  adminIsAuthenticated,
} from '../../helpers'

import PublicNavComponent from './PublicNav';
import CustomerNavComponent from './CustomerNav';
import AdminNavComponent from './AdminNav';

const PublicNav = customerIsNotAuthenticated(PublicNavComponent);
const CustomerNav = customerIsAuthenticated(CustomerNavComponent);
const AdminNav = adminIsAuthenticated(AdminNavComponent);

export class Navbar extends Component {

  render() {
    const {
      signOut,
      showRegisterModal,
      showLoginModal,
    } = this.props

    return (
      <div className="navbar">
        <i className="fab fa-asymmetrik navbar-logo"></i>
        <div>
          <AdminNav handleLogout={signOut} />
          <CustomerNav handleLogout={signOut} />
          <PublicNav
            handleSignUpModal={showRegisterModal}
            handleSignInModal={showLoginModal}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, {
  showLoginModal: uiActions.showLoginModal,
  showRegisterModal: uiActions.showRegisterModal,
  signOut: userActions.signOut,
})(Navbar);
