import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers'
import { userActions } from '../../actions';
import {
  customerIsNotAuthenticatedRedir,
  adminIsNotAuthenticatedRedir,
} from '../../helpers'
import '../../assets/styles/index.scss';
import Navbar from '../Navbar';
import CarsPage from '../CarsPage';
import CarPage from '../CarPage';
import HomePage from '../HomePage';
import NotFound from './NotFound';
import BookingPage from '../BookingPage';

class App extends Component {

  render() {
    return (
      <div className="h-100">
        <Navbar />
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/book" component={customerIsNotAuthenticatedRedir(BookingPage)} />
              <Route exact path="/cars" component={adminIsNotAuthenticatedRedir(CarsPage)} />
              <Route path="/cars/:id" component={adminIsNotAuthenticatedRedir(CarPage)} />
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
