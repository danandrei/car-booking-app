import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../../helpers'
import { userIsNotAuthenticatedRedir, userIsAuthenticatedRedir} from '../../helpers'
import '../../assets/styles/index.scss';
import Navbar from '../Navbar';
import HomePage from '../HomePage';
import NotFound from './NotFound';
import RentalsPage from '../RentalsPage';

class App extends Component {

  render() {
    return (
      <div className="h-100">
        <Navbar />
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/rentals" component={userIsNotAuthenticatedRedir(RentalsPage)} />
              <Route component={NotFound} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
