/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import { ContentEditable } from "../../../src/libs";

class CEDemo extends Component {
  constructor(props) {
    super(props);
    const content = "Hello";
    const items = this.parse(content);
    const selectedItem = items.length - 1;
    const caretPosition = 0;
    this.state = {
      items,
      selectedItem,
      caretPosition,
    };
  }

  onFocusIn = (element) => {
    const key = element.getAttribute("key");
    const selectedItem = parseInt(key, 10);
    if (this.state.selectedItem !== selectedItem) {
      this.setState(() => ({ selectedItem }));
    }
  };

  parse(content) {
    // TODO
    this.content = content;
    return [];
  }

  buildFromHtml(elements) {
    // TODO
    this.elements = elements;
    return "";
  }

  handleChange = (text, element) => {
    const content = this.buildFromHtml([...element.children]);
    const items = this.parse(content);
    this.setState(() => ({ items }));
  };

  renderItems(items, selectedItem) {
    // TODO
    this.items = items;
    this.selectedItem = selectedItem;
    return "";
  }

  render() {
    const content = this.renderItems(this.state.items, this.state.selectedItem);
    const style = {
      overflow: "hidden",
      fontSize: "16px",
      letterSpacing: "0.04em",
      lineHeight: "1",
      color: "#757575",
      margin: "16px",
      width: "600px",
      height: "300px",
      backgroundColor: "#eee",
    };
    return (
      <section>
        <h1>ContentEditable example</h1>
        <div style={{ padding: "16px" }}>
          <ContentEditable
            content={content}
            onChange={this.handleChange}
            onFocusIn={this.onFocusIn}
            style={style}
            selectedItem={this.state.selectedItem}
            caretPosition={this.state.caretPosition}
          />
        </div>
      </section>
    );
  }
}
export default CEDemo;
