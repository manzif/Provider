import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<About />);
    expect(component).toMatchSnapshot();
  });
});
