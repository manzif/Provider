import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Project />);
    expect(component).toMatchSnapshot();
  });
});
