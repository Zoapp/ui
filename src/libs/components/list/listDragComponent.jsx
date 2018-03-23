/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "zrmc";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ListDragItem from "./listDragItem";

@DragDropContext(HTML5Backend)
class ListDragComponent extends Component {
  render() {
    const {
      items, selectedItem, onSelect, onMove, onDrop, ...otherProps
    } = this.props;
    return (
      <List {...otherProps} >
        {items.map((item, index) => {
          let cn = "selectableListItem";
          if (selectedItem === index) {
            cn = "selectedListItem";
          }
          return (
            <ListDragItem
              index={index}
              id={item.id}
              key={item.id}
              onMove={onMove}
              onDrop={onDrop}
              icon={item.icon}
              onClick={
                (e) => {
                  e.preventDefault();
                  onSelect(index);
                }}
              className={cn}
            >{item.name}
            </ListDragItem>);
        })}
      </List>
    );
  }
}

ListDragComponent.defaultProps = {
  className: null,
  onMove: null,
  onDrop: null,
};

ListDragComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedItem: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  onMove: PropTypes.func,
  onDrop: PropTypes.func,
};

export default ListDragComponent;
