/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListItem } from "zrmc";

const MDC_LISTITEM = "mdc-list-item";

export default class Item extends Component {
  render() {
    const {
      children,
      type,
      icon,
      activated,
      imgSrc,
      imgSize,
      imgLabel,
      secondaryText,
      href,
      onClick,
      ...otherProps
    } = this.props;

    return (
      <ListItem
        type={type}
        icon={icon}
        activated={activated}
        imgSrc={imgSrc}
        imgSize={imgSize}
        imgLabel={imgLabel}
        secondaryText={secondaryText}
        href={href}
        onClick={onClick}
        props={otherProps}
      >
        {children}
      </ListItem>
    );
  }
}

Item.defaultProps = {
  mdcElement: MDC_LISTITEM,
  children: null,
  type: "li",
  activated: false,
  icon: null,
  imgSrc: null,
  imgSize: 56,
  imgLabel: null,
  secondaryText: null,
  href: null,
};

Item.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  activated: PropTypes.bool,
  icon: PropTypes.string,
  imgSrc: PropTypes.string,
  imgSize: PropTypes.number,
  imgLabel: PropTypes.string,
  secondaryText: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
