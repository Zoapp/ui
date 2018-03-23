/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { ExpansionPanel } from "../../../src/libs";

const ExpansionPanels = () => (
  <section>
    <h1>ExpansionPanel examples </h1>
    <div style={{ padding: "16px" }}>
      <ExpansionPanel label="name 1">
        <div style={{ width: "600px", height: "300px" }} />
      </ExpansionPanel>
      <ExpansionPanel label="name 2">
        <div style={{ width: "600px", height: "300px" }} />
      </ExpansionPanel>
    </div>
  </section>
);
export default ExpansionPanels;
