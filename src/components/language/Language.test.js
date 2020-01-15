import React from 'react';
import { shallow } from 'enzyme';
import Language from './Language';

describe('snapshot of about Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Language />);
    expect(component).toMatchSnapshot();
  });
});
