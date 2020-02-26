import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Form />);
    expect(component).toMatchSnapshot();
  });
});
