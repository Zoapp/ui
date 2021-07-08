/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { DragSource, DropTarget } from "react-dnd";
import { ListItem } from "zrmc";

const MDC_LISTITEM = "mdc-list-item";

const itemSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const itemTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const dropIndex = props.index;
    // console.log("WIP", `ListDragItem.drop ${dragIndex} / ${dropIndex}`);
    if (dragIndex !== dropIndex && props.onDrop) {
      props.onDrop(dragIndex, dropIndex);
    }
  },
  hover(props, monitor, component) {
    const item = monitor.getItem();
    const dragIndex = item.index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex || !component || !component.ref) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = component.ref.getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    if (props.onMove) {
      if (props.onMove(dragIndex, hoverIndex)) {
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      }
    }
  },
};

@DropTarget("item", itemTarget, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))
@DragSource("item", itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class ListDragItem extends Component {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
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
    delete otherProps.index;
    delete otherProps.onMove;
    delete otherProps.onDrop;
    delete otherProps.isDragging;

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
        /* eslint-disable react/no-find-dom-node */
        // TODO react-dnd doesn't work with findDOMNode replacement
        // see : https://github.com/react-dnd/react-dnd/issues/998
        ref={(instance) => {
          connectDropTarget(findDOMNode(instance));
          connectDragSource(findDOMNode(instance));
        }}
        /* eslint-enaable react/no-find-dom-node */
      >
        {children}
      </ListItem>
    );
  }
}

ListDragItem.defaultProps = {
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
  onMove: null,
  onDrop: null,
  connectDragSource: null,
  connectDropTarget: null,
  isDragging: false,
};

ListDragItem.propTypes = {
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
  connectDragSource: PropTypes.func,
  connectDropTarget: PropTypes.func,
  isDragging: PropTypes.bool,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onMove: PropTypes.func,
  onDrop: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};
