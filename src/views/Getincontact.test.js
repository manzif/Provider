import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import configureStore from "redux-mock-store";
import { Getincontact } from './Getincontact'
import { mapStateToProps } from "./Getincontact";

const mockStore = configureStore();
const store = mockStore({});

const initialState = {
    messages: { message : {} }
};
const props = {

    addMessage: jest.fn(),
    message: { 
        fullname: "jujuju",
    email: "manzif60@gmail.com",
    telephone: "0999999",
    message: "d"
}
  };

mapStateToProps(initialState);
describe('components', () => {

    const component = shallow(<Getincontact {...props} store={store} />);
    it("renders without errors", () => {
      expect(component).toMatchSnapshot();
    });

    it("should call onSubmit method when the button is clicked", () => {
        const spy = jest.spyOn(component.instance(), "onSubmit");
        component.instance().forceUpdate();
    
        const Event = { preventDefault: () => {} };
        const form = component.find(".submtest");
        form.simulate("submit", Event);
        expect(form.length).toBe(1);
        expect(spy).toHaveBeenCalled();
    });

    it("should call onChange method when the input value is changed", () => {
        const spy = jest.spyOn(component.instance(), "onChange");
        component.instance().forceUpdate();
    
        const event = {
          target: { value: "manzif60@gmail.com" }
        };
    
        const input = component.find(".submtest");;
        input.simulate("change", event);
        expect(input.length).toBe(1);
        expect(spy).toHaveBeenCalled();
    });

    it('renders componentWillReceiveProps with 200 status', () => { 
        const spy = jest.spyOn(component.instance(), "componentWillReceiveProps");
        component.instance().forceUpdate();
        const nexProps = {
            message : {
                status: 200,
                shoutout: "Message well recieved. I will get back to you"
            }
        };
        const instance = component.instance();
        instance.componentWillReceiveProps(nexProps); 
        expect(spy).toHaveBeenCalled(); 
    });

    it('renders componentWillReceiveProps with 400 status', () => { 
        const spy = jest.spyOn(component.instance(), "componentWillReceiveProps");
        component.instance().forceUpdate();
        const nexProps = {
            message : {
                status: 400,
                message: "May I have your name Please ?"
            }
        };
        const instance = component.instance();
        instance.componentWillReceiveProps(nexProps); 
        expect(spy).toHaveBeenCalled(); 
    });
})
