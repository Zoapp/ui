/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import { List } from "zrmc";
import Item from "./item";

const renderItem = (
  list,
  item,
  index,
  selectedItem,
  onSelect,
  onCollapse,
  selectedLevel = 0,
  level = 0,
) => {
  const content = item.name;
  const { icon } = item;
  if (icon) {
    let { color } = item;
    if (!color) {
      color = "gray";
    }
  }
  let cn = "selectableListItem";
  if (selectedItem === index && selectedLevel === level) {
    cn = "selectedListItem";
  }
  list.push(
    <Item
      level={level}
      icon={icon}
      key={item.id}
      onClick={(e) => {
        e.preventDefault();
        onSelect(index, level, item.id);
      }}
      onCollapse={() => {
        onCollapse(index, level, item.id);
      }}
      className={cn}
      arrow={!!item.children}
      collapsed={item.collapsed}
      activated={item.activated}
    >
      {content}
    </Item>,
  );
  if (item.children && !item.collapsed) {
    item.children.map((sitem, sindex) =>
      renderItem(
        list,
        sitem,
        sindex,
        selectedItem,
        onSelect,
        onCollapse,
        selectedLevel,
        level + 1,
      ),
    );
  }
};

const TreeView = ({
  items,
  selectedItem,
  onSelect,
  onCollapse,
  className,
  style,
}) => (
  <List className={className} style={style}>
    {items.map((item, index) => {
      const list = [];
      renderItem(list, item, index, selectedItem, onSelect, onCollapse);
      return list;
    })}
  </List>
);

TreeView.defaultProps = {
  className: null,
  style: null,
};

TreeView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      icon: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ).isRequired,
  selectedItem: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onCollapse: PropTypes.func,
};

export default TreeView;
