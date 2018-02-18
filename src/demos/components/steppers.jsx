/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import { Stepper } from "../../../src/libs";

class StepperDemo extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          id: "1", title: "Create App", editable: true, active: true,
        },
        {
          id: "2", title: "Connect App",
        },
        {
          id: "3", title: "Interactions", optional: true,
        },
        {
          id: "4", title: "Publish", optional: true,
        },
      ],
    };
  }

  setSelectedStep(index, editable = false) {
    const steps = [...this.state.steps];
    let step = null;
    if (index > -1 && index < steps.length) {
      for (let i = 0; i < index; i += 1) {
        steps[i].editable = false;
        steps[i].active = true;
      }
      for (let i = index + 1; i < steps.length; i += 1) {
        if (steps[i].editable) {
          steps[i].editable = false;
        }
      }
      step.id = `${index}`;
      step = steps[index];
      step.editable = editable;
      step.active = true;
      this.setState({ steps });
    }
    return step;
  }

  render() {
    const style = {
      height: "200px",
      width: "664px",
      position: "relative",
      backgroundColor: "#eee",
    };
    return (
      <section>
        <h1>Stepper example </h1>
        <div style={{ padding: "16px" }}>
          <Stepper
            steps={this.state.steps}
            onSelect={(index) => { this.setSelectedStep(index, true); }}
          />
          <div style={style} />
        </div>
      </section>
    );
  }
}

export default StepperDemo;

