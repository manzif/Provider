import React from 'react';
import { shallow } from 'enzyme';
import Remind from './Remind';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Remind />);
    expect(component).toMatchSnapshot();
  });
});
