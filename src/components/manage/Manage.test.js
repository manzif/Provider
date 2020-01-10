import React from 'react';
import { shallow } from 'enzyme';
import Manage from './Manage';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Manage />);
    expect(component).toMatchSnapshot();
  });
});
