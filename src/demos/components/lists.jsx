/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { ListComponent, ListDragComponent } from "../../../src/libs";

export default () => (
  <section>
    <h1>Lists examples </h1>
    <div style={{ padding: "16px" }}>
      <ListComponent
        items={[
          {
            id: "i1", name: "Item 1", icon: "add", color: "gray",
          },
          {
            id: "i2", name: "Item 2", icon: "add", color: "gray",
          },
          {
            id: "i3", name: "Item 3", icon: "add", color: "gray",
          },
        ]}
        selectedItem={-1}
        onSelect={() => {}}
      />
    </div>
    <div style={{ padding: "16px" }}>
      <ListDragComponent
        items={[
          {
            id: "i1", name: "Drag item 1", icon: "add", color: "gray",
          },
          {
            id: "i2", name: "Drag item 2", icon: "add", color: "gray",
          },
          {
            id: "i3", name: "Drag item 3", icon: "add", color: "gray",
          },
        ]}
        selectedItem={-1}
        onSelect={() => {}}
        onDrop={() => {}}
      />
    </div>
  </section>
);
