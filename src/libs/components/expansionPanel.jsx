/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "zrmc";

class ExpansionPanel extends Component {
  constructor(props) {
    super(props);
    const { collapsed } = props;
    this.state = { collapsed };
  }

  onSwitch = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { label, disabled, children } = this.props;
    const style = { display: "none" };
    const expanded = !this.state.collapsed;
    if (expanded) {
      style.display = "block";
    }

    const icon = expanded ? "keyboard_arrow_up" : "keyboard_arrow_down";

    return (
      <div className="mrb-sublist">
        <div className="mrb-subheader">
          <Icon
            name={icon}
            className="mrb-subheader-right"
            disabled={disabled}
            onClick={(e) => { e.preventDefault(); this.onSwitch(); }}
          /><div>{label}</div>
        </div>
        <div style={style} >
          {children}
        </div>
      </div>
    );
  }
}

ExpansionPanel.defaultProps = {
  collapsed: false,
  disabled: false,
};

ExpansionPanel.propTypes = {
  collapsed: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ExpansionPanel;
