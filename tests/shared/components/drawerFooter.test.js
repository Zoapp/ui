import React from "react";
import renderer from "react-test-renderer";
import DrawerFooter from "libs/components/drawerFooter";

describe("DrawerFooter", () => {
  it("should render", () => {
    const component = renderer.create(<DrawerFooter>test</DrawerFooter>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
