import React from 'react';
import { shallow } from 'enzyme';
import  Scroll from './Scroll';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Scroll />);
    expect(component).toMatchSnapshot();
  });
});
