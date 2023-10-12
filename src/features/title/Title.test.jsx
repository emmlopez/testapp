import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("Tests for Title component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Title title={"The Title"} subtitle={"The SubTitle"} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
