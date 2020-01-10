import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Contact />);
    expect(component).toMatchSnapshot();
  });
});
