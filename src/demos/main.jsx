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

const Main = ({ children }) => (
  <main>
    {children}
    <SubToolbars />
    <ContentEditables />
    <ExpansionPanels />
    <Steppers />
    <section style={{ height: "200px" }} />
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
