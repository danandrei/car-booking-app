import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers'
import { userActions } from '../../actions';
import {
  userIsNotAuthenticatedRedir,
  adminIsNotAuthenticatedRedir,
} from '../../helpers'
import '../../assets/styles/index.scss';
import Navbar from '../Navbar';
import CarsPage from '../CarsPage';
import HomePage from '../HomePage';
import NotFound from './NotFound';
import BookingPage from '../BookingPage';

class App extends Component {

  componentWillMount() {
    this.fetchCurrentUser({}, this.props.user);
  }

  componentWillUpdate(nextProps) {
    this.fetchCurrentUser(this.props.user, nextProps.user);
  }

  fetchCurrentUser(oldUser, newUser) {
    if (oldUser.accessToken !== newUser.accessToken) {
      this.props.getCurrentUser();
    }
  }

  render() {
    return (
      <div className="h-100">
        <Navbar />
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/book" component={userIsNotAuthenticatedRedir(BookingPage)} />
              <Route path="/cars" component={adminIsNotAuthenticatedRedir(CarsPage)} />
              <Route component={NotFound} />
            </Switch>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  getCurrentUser: userActions.getCurrentUser,
})(App);
