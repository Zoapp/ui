/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "zrmc";

const MDC_LISTITEMGRAPHICS = "mdc-list-item__graphic";

export default class ItemGraphics extends Component {
  handleArrowClick = (event) => {
    event.stopPropagation();
    const collapsed = !this.props.collapsed;
    if (this.props.onCollapse) {
      this.props.onCollapse(collapsed);
    }
  };

  render() {
    const { collapsed } = this.props;
    const icon = this.props.icon ? (
      <Icon
        className="zui_treeview-icon mdc-list-item__graphic"
        aria-hidden="true"
      >
        {this.props.icon}
      </Icon>
    ) : (
      this.props.children
    );
    let cn = "mdc-list-item__graphic";
    if (!this.props.arrow) {
      cn = `zui_treeview-arrow-hidden ${cn}`;
    } else {
      cn = `zui_treeview-arrow ${cn}`;
    }
    return (
      <span className="zui_treeview-graphics">
        <Icon className={cn} onClick={this.handleArrowClick}>
          {collapsed ? "arrow_right" : "arrow_drop_down"}
        </Icon>
        {icon}
      </span>
    );
  }
}
ItemGraphics.defaultProps = {
  mdcElement: MDC_LISTITEMGRAPHICS,
  icon: null,
  children: null,
  arrow: false,
  collapsed: false,
};

ItemGraphics.propTypes = {
  mdcElement: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  disabled: PropTypes.bool,
  arrow: PropTypes.bool,
  onCollapse: PropTypes.func,
};
