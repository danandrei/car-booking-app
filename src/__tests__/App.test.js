/* MOCKS */
jest.mock('../components/Navbar', () => () => (
  <h1>navbar</h1>
));
jest.mock('../components/CarsPage', () => () => (
  <h1>cars page</h1>
));
jest.mock('../components/CarPage', () => () => (
  <h1>car page</h1>
));
jest.mock('../components/App/NotFound', () => () => (
  <h1>not found</h1>
));
jest.mock('../components/HomePage', () => () => (
  <h1>home page</h1>
));
jest.mock('../components/BookingPage', () => () => (
  <h1>booking page</h1>
));

// Dependencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import App from '../components/App';

describe('>>>App--- Snapshot',()=>{
    it('+++capturing Snapshot of App', () => {
        const renderedValue =  renderer.create(<App />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
