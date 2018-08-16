/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { IconToggle } from "zrmc";
import { Tooltip } from "../../../src/libs";

const ToolTips = () => (
  <section>
    <h1>Tooltips examples </h1>
    <div style={{ padding: "16px", display: "flex" }}>
      <div>
        <Tooltip label="tooltip 1">
          <div
            style={{
              width: "100px",
              padding: "24px",
              textAlign: "center",
              border: "1px solid",
            }}
          >
            Demo.
          </div>
        </Tooltip>
      </div>
      <div
        style={{
          width: "200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          color: "#ddd",
        }}
      >
        <Tooltip label="tooltip 2">
          <IconToggle name="help" off="help_outline" derivedState />
        </Tooltip>
        <Tooltip label="tooltip 3">
          <IconToggle name="work" off="work_outline" derivedState />
        </Tooltip>
        <Tooltip label="tooltip 3">
          <IconToggle name="favorite" off="favorite_border" derivedState />
        </Tooltip>
      </div>
    </div>
  </section>
);
export default ToolTips;
