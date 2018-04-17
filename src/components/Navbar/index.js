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

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <i className="fab fa-asymmetrik navbar-logo"></i>
        <div>
          <AdminNav handleLogout={this.props.signOut} />
          <CustomerNav handleLogout={this.props.signOut} />
          <PublicNav handleSignUpModal={this.props.showRegisterModal} handleSignInModal={this.props.showLoginModal}/>
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
