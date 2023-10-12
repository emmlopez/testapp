import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import ExampleComponent from "./ExampleComponent";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
describe("ExampleComponent tests", () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });
  it("should render to match snapshot", () => {
    const wrapper = shallow(<ExampleComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should execute onclick function for increment button", () => {
    const wrapper = shallow(<ExampleComponent />);
    const button = wrapper.findWhere(
      (node) => node.props().htmlId === "increment"
    );
    expect(button).toHaveLength(1);
    button.simulate("click");
    expect(setState).toHaveBeenCalled();
  });
  it("should execute onclick function for decrement button", () => {

    const wrapper = shallow(<ExampleComponent/>);
    const button = wrapper.findWhere(
      (node) => node.props().htmlId === "decrement"
    );
    expect(button).toHaveLength(1);
    button.simulate("click");
    expect(setState).toHaveBeenCalled();
  });
});
