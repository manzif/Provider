import React from "react";
import { shallow } from "enzyme";
import { Moretools } from "./Moretools";

describe("landing page", () => {
  const component = shallow(<Moretools  />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
});
