/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import ContentEditables from "./components/contentEditables";
import ExpansionPanels from "./components/expansionPanels";
import Steppers from "./components/steppers";
import SubToolbars from "./components/subToolbars";
import Lists from "./components/lists";
import FileInputs from "./components/fileInputs";
import Tooltips from "./components/tooltips";

const Main = ({ children }) => (
  <main>
    {children}
    <Tooltips />
    <SubToolbars />
    <Lists />
    <ContentEditables />
    <ExpansionPanels />
    <Steppers />
    <FileInputs />
    <section style={{ height: "200px" }} />
  </main>
);

Main.defaultProps = {
  children: null,
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
