import React from 'react';
import { shallow } from 'enzyme';
import Partners from './Partners';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Partners />);
    expect(component).toMatchSnapshot();
  });
});
