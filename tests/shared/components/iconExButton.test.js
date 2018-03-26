import React from "react";
import renderer from "react-test-renderer";
import IconExButton from "libs/components/iconExButton";

describe("IconExButton", () => {
  it("renders a robot icon", () => {
    const component = renderer.create(<IconExButton name="robot" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a opla icon", () => {
    const component = renderer.create(<IconExButton name="opla" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a generic icon", () => {
    const component = renderer.create(<IconExButton name="some name" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
