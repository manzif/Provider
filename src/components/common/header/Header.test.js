import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
