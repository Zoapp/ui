/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import TreeView from "../../libs/components/treeView";

const TreeViews = () => (
  <section>
    <h1>TreeView examples </h1>
    <div style={{ padding: "16px" }}>
      <TreeView
        items={[
          {
            id: "i1",
            name: "Item 1",
            icon: "add",
            color: "gray",
          },
          {
            id: "i2",
            name: "Item 2",
            icon: "add",
            color: "gray",
          },
          {
            id: "i3",
            name: "Item 3",
            icon: "add",
            color: "gray",
          },
        ]}
        selectedItem={-1}
        onSelect={() => {}}
      />
    </div>
  </section>
);
export default TreeViews;
