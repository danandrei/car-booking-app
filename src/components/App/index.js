import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  customerIsNotAuthenticatedRedir,
  adminIsNotAuthenticatedRedir,
} from '../../helpers';
import '../../assets/styles/index.scss';
import Navbar from '../Navbar';
import CarsPage from '../CarsPage';
import CarPage from '../CarPage';
import NotFound from './NotFound';
import BookingPage from '../BookingPage';
import HomePage from '../HomePage';

export class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div className="h-100">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/book"
              component={customerIsNotAuthenticatedRedir(BookingPage)}
            />
            <Route
              exact
              path="/cars"
              component={adminIsNotAuthenticatedRedir(CarsPage)}
            />
            <Route
              path="/cars/:id"
              component={adminIsNotAuthenticatedRedir(CarPage)}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
