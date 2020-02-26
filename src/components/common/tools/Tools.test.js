import React from 'react';
import { shallow } from 'enzyme';
import Tools from './Tools';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Tools />);
    expect(component).toMatchSnapshot();
  });
});
