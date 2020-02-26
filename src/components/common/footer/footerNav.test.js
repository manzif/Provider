import React from 'react';
import { shallow } from 'enzyme';
import FooterNav from './footerNav';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<FooterNav />);
    expect(component).toMatchSnapshot();
  });
});
