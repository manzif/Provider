import React from "react";
import { shallow } from "enzyme";
import { Getincontact } from "./Getincontact";

describe("landing page", () => {
  const component = shallow(<Getincontact  />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
});
