import React from "react";
import renderer from "react-test-renderer";
import HeaderIcon from "libs/components/headerIcon";

describe("HeaderIcon", () => {
  it("renders a robot icon", () => {
    const component = renderer.create(<HeaderIcon name="robot" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a opla icon", () => {
    const component = renderer.create(<HeaderIcon name="opla" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a generic icon", () => {
    const component = renderer.create(<HeaderIcon name="some-name" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
