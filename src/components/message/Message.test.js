import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Message />);
    expect(component).toMatchSnapshot();
  });
});
