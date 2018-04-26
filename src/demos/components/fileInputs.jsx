/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import { FileInput, ListComponent } from "../../../src/libs";

class FileInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFiles: [],
      fromIconFiles: [],
    };
  }

  handleFiles(files, key) {
    const changeState = {};
    const items = [];

    Array.from(files).forEach((file) => {
      items.push({
        id: file.lastModified,
        name: file.name,
      });
    });

    changeState[key] = items;
    this.setState({
      ...this.state,
      ...changeState,
    });
  }

  render() {
    return (
      <section>
        <h1>File input examples</h1>

        <div style={{ padding: "16px" }}>
          <FileInput
            accept="audio/*"
            raised
            multiple
            style={{ width: "100%" }}
            onChange={(e) => this.handleFiles(e.target.files, "audioFiles")}
          >
            Upload multiple audio file
          </FileInput>

          <div style={{ padding: "16px" }}>
            <label>List of selected files</label>
            <ListComponent
              items={this.state.audioFiles}
              selectedItem={-1}
              onSelect={() => {}}
            />
          </div>
        </div>

        <div style={{ padding: "16px" }}>
          <FileInput
            accept="*/*"
            style={{ background: "#018786", color: "white", margin: "10px" }}
            onChange={(e) => this.handleFiles(e.target.files, "fromIconFiles")}
            icon="file_upload"
          />

          <FileInput
            accept="*/*"
            raised
            disabled
            style={{ margin: "10px" }}
            onChange={(e) => this.handleFiles(e.target.files, "fromIconFiles")}
            icon="file_upload"
          />

          <div style={{ padding: "16px" }}>
            <label>List of selected files</label>
            <ListComponent
              items={this.state.fromIconFiles}
              selectedItem={-1}
              onSelect={() => {}}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default FileInputs;
