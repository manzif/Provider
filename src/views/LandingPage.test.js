import React from "react";
import { shallow } from "enzyme";
import { HomePage } from "./LandingPage";

describe("landing page", () => {
  const component = shallow(<HomePage  />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
});
