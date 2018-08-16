/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

class Tooltip extends Component {
  updatePosition() {
    if (this.tooltipRef && this.containerRef) {
      const {
        left,
        top,
        width,
        height,
      } = this.containerRef.getBoundingClientRect();
      let style = "transform: initial; transition: initial;";
      this.tooltipRef.style = style;
      const rect = this.tooltipRef.getBoundingClientRect();
      let adjustedLeft = left + (width - rect.width) / 2;
      if (adjustedLeft < 0) {
        adjustedLeft = 0;
      }
      /* const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      ); */
      const adjustedTop = top + height;
      style = `left: ${adjustedLeft}px; top: ${adjustedTop}px;`;
      this.tooltipRef.style = style;
    }
  }

  setRef = (r) => {
    this.tooltipRef = r;
    this.updatePosition();
  };

  render() {
    const { children, label } = this.props;
    return (
      <div
        className="mdc-tooltype"
        ref={(r) => {
          this.containerRef = r;
          this.updatePosition();
        }}
        onMouseEnter={() => {
          this.updatePosition();
        }}
        onWheel={() => {
          this.updatePosition();
        }}
      >
        {children}
        <span ref={this.setRef}>{label}</span>
      </div>
    );
  }
}

Tooltip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Tooltip;
