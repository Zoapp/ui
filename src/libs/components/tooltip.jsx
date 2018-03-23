/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

const Tooltip = (props) => (
  <div style={{ display: "inline-block" }}>{props.children}</div>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tooltip;
