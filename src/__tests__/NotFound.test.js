import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallowToJson } from 'enzyme-to-json';

import NotFound from '../components/App/NotFound';

describe('NotFound', () => {
  it ('should render correctly', () => {
    const output = shallow(
      <NotFound />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
