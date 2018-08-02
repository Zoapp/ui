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
    this.state = { collapsed, rotate: false };
  }

  rotationDone = () => {
    const collapsed = !this.state.collapsed;
    this.setState(() => ({
      collapsed,
      rotate: false,
    }));
  };

  componentDidMount() {
    if (this.icon) {
      this.icon.addEventListener("animationend", this.rotationDone);
    }
  }

  componentWillUnmount() {
    if (this.icon) {
      this.icon.removeEventListener("animationend", this.rotationDone);
    }
  }

  onSwitch = () => {
    this.setState({ rotate: true });
  };

  render() {
    const {
      label,
      disabled,
      compact,
      children,
      style,
      className,
      elevation,
      leftArrow,
      description,
    } = this.props;
    const sHeader = {};
    const sPanel = { display: "block", overflow: "hidden" };
    let cn = "zui-expansion ";
    if (className) {
      cn += className;
    }
    if (leftArrow) {
      cn += `zui-expansion-leftarrow ${cn}`;
    }
    const { rotate } = this.state;
    const expanded = !this.state.collapsed || rotate;
    if (expanded) {
      sPanel.height = "100%";
      if (compact) {
        sHeader.height = "48px";
        sHeader.paddingTop = "0px";
      } else {
        sHeader.height = "64px";
        sHeader.paddingTop = "4px";
      }
    } else {
      sPanel.height = "0px";
    }

    const st = { ...style };
    if (elevation > 0) {
      cn += ` mdc-elevation--z${elevation}`;
      if (!st.margin) {
        st.margin = "8px";
      }
    }
    const animation = rotate ? "rotate-arrow 150ms" : null;
    sPanel.transition = "height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";
    sHeader.transition = "height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

    const icon = expanded ? "keyboard_arrow_up" : "keyboard_arrow_down";
    const desc = description ? (
      <div className="zui-expansion-description">{description}</div>
    ) : (
      ""
    );
    return (
      <div className={cn} style={st}>
        <div
          style={sHeader}
          className="zui-expansion-header"
          onClick={(e) => {
            e.preventDefault();
            if (!disabled) {
              this.onSwitch();
            }
          }}
        >
          <div
            className="zui-expansion-arrow"
            ref={(e) => {
              if (e) {
                this.icon = e.firstChild;
              } else {
                this.icon = null;
              }
            }}
          >
            <Icon
              name={icon}
              className="zui-expansion-arrow-icon"
              style={{
                animation,
                fontSize: "24px",
                textAlign: "center",
                paddingTop: "8px",
              }}
              disabled={disabled}
            />
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="zui-expansion-title"
              style={description ? { width: "33%" } : null}
            >
              {label}
            </div>
            {desc}
          </div>
        </div>
        <div
          style={sPanel}
          ref={(e) => {
            this.panel = e;
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

ExpansionPanel.defaultProps = {
  collapsed: false,
  disabled: false,
  elevation: 1,
  compact: false,
  leftArrow: false,
};

ExpansionPanel.propTypes = {
  collapsed: PropTypes.bool,
  disabled: PropTypes.bool,
  compact: PropTypes.bool,
  leftArrow: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  description: PropTypes.string,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  elevation: PropTypes.number,
};

export default ExpansionPanel;
