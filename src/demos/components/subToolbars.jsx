/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { SubToolbar } from "../../../src/libs";

const SubToolbars = () => (
  <section>
    <h1>SubToolbar examples </h1>
    <div style={{ padding: "16px" }}>
      <SubToolbar
        titleName="Title"
        menu={{
          items: [
            { name: "Add", onSelect: () => {} },
            { name: "Rename", onSelect: () => {} },
            { name: "Delete", onSelect: () => {} },
            { name: "Export", onSelect: () => {} },
          ],
        }}
      />
    </div>
    <div style={{ padding: "16px" }}>
      <SubToolbar
        titleIcon="question_answer"
        titleName="Title"
        icons={[{ name: "file_upload", onClick: () => {} }]}
      />
    </div>
    <div style={{ padding: "16px" }}>
      <SubToolbar
        titleIcon="question_answer"
        titleName="Title"
        actions={[
          { name: "Cancel", onClick: () => {} },
          { name: "Save", onClick: () => {} },
        ]}
      />
    </div>
    <div style={{ padding: "16px" }}>
      <SubToolbar
        titleIcon="chat"
        titleName="Title"
        menu={{
          items: [
            { name: "Context", onSelect: () => {} },
            { name: "Load", disabled: true },
            { name: "Save", disabled: true },
            { name: "Reset", onSelect: () => {} },
            { name: "Demo", onSelect: () => {} },
            { name: "Share", onSelect: () => {} },
            { name: "Settings", onSelect: () => {} },
          ],
          align: "right",
        }}
      />
    </div>
  </section>
);
export default SubToolbars;
