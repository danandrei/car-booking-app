import React, { Component } from 'react';
import { uiActions } from '../../actions';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

class HomePage extends Component {

  render() {
    return (
      <div className="homepage-cover">
        <SignInModal />
        <SignUpModal />
        <button class="btn">
          browse rental cars
        </button>
      </div>
    )
  }
}
export default HomePage;
