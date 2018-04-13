import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uiActions, userActions } from '../../actions';
import { userIsNotAuthenticated, userIsAuthenticated} from '../../helpers'

import PublicNavComponent from './PublicNav';
import PrivateNavComponent from './PrivateNav';

const PublicNav = userIsNotAuthenticated(PublicNavComponent);
const PrivateNav = userIsAuthenticated(PrivateNavComponent);

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <i className="fab fa-asymmetrik navbar-logo"></i>
          <PrivateNav handleLogout={this.props.signOut} />
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
