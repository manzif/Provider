import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
