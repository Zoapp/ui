/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import TreeView from "../../libs/components/treeView";

export default class TreeViews extends Component {
  state = {
    items: [
      {
        id: "i1",
        name: "Item 1",
        icon: "folder",
        color: "gray",
        children: [
          {
            id: "i2a",
            name: "SubItem 1",
            icon: "insert_drive_file",
            color: "gray",
          },
          {
            id: "i2b",
            name: "SubItem 2",
            icon: "folder",
            color: "gray",
            children: [
              {
                id: "i2aa",
                name: "SubItem 1",
                icon: "insert_drive_file",
                color: "gray",
              },
            ],
          },
        ],
      },
      {
        id: "i2",
        name: "Item 2",
        icon: "insert_drive_file",
        color: "gray",
      },
      {
        id: "i3",
        name: "Item 3",
        icon: "folder",
        color: "gray",
        children: [],
      },
    ],
  };

  collapseChild(items, itemId) {
    const its = items;
    items.forEach((item, index) => {
      if (item.id === itemId) {
        its[index].collapsed = !item.collapsed;
      } else if (item.children) {
        this.collapseChild(item.children, itemId);
      }
    });
    return its;
  }

  handleCollapse = (index, level, itemId) => {
    const { items } = this.state;
    this.collapseChild(items, itemId);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    return (
      <section>
        <h1>TreeView examples </h1>
        <div style={{ padding: "16px" }}>
          <TreeView
            items={items}
            selectedItem={-1}
            onSelect={() => {}}
            onCollapse={this.handleCollapse}
          />
        </div>
      </section>
    );
  }
}
