import React, { Component } from 'react';
import '../../assets/styles/index.scss';
import Navbar from '../Navbar';
import HomePage from '../HomePage';

class App extends Component {

  render() {
    return (
      <div className="h-100">
        <Navbar />
          <HomePage />
      </div>
    );
  }
}

export default App;
