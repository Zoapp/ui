/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "zrmc";

const ListComponent = ({ items, selectedItem, onSelect, className, style }) => (
  <List className={className} style={style}>
    {items.map((item, index) => {
      const content = item.name;
      let imgSrc;
      let icon;
      if (item.icon) {
        let { color } = item;
        if (!color) {
          color = "gray";
        }
        if (item.icon.endsWith(".svg")) {
          imgSrc = item.icon;
        } else if (item.icon.endsWith(".png")) {
          imgSrc = item.icon;
        } else {
          ({ icon } = item);
        }
      }
      let cn = "selectableListItem";
      if (selectedItem === index) {
        cn = "selectedListItem";
      }
      return (
        <ListItem
          imgSrc={imgSrc}
          icon={icon}
          key={item.id}
          onClick={(e) => {
            e.preventDefault();
            onSelect(index);
          }}
          className={cn}
        >
          {content}
        </ListItem>
      );
    })}
  </List>
);

ListComponent.defaultProps = {
  className: null,
  style: null,
};

ListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      icon: PropTypes.string,
    }),
  ).isRequired,
  selectedItem: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default ListComponent;
