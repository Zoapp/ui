/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

// Inspired from https://codepen.io/anon/pen/KqYGNZ
const Stepper = (props) => {
  const { steps } = props;
  return (
    <div className="zui-stepper-horizontal-alternative">
      {steps.map((step, index) => {
        let cn = "zui-stepper-step";
        cn += step.active ? " zui-active-step" : "";
        cn += step.done ? " zui-step-done" : "";
        cn += step.editable ? " editable-step" : "";
        const { id } = step;
        const i = index + 1;
        const optional = step.optional ? (
          <div className="zui-stepper-optional">Optional</div>
        ) : (
          ""
        );
        return (
          <div
            className={cn}
            key={id}
            role="presentation"
            onKeyDown={() => {}}
            onClick={(event) => {
              event.stopPropagation();
              if (step.active && this.props.onSelect) {
                this.props.onSelect(index);
              }
            }}
          >
            <div className="zui-stepper-circle">
              <span>{i}</span>
            </div>
            <div className="zui-stepper-title">{step.title}</div>
            {optional}
            <div className="zui-stepper-bar-left" />
            <div className="zui-stepper-bar-right" />
          </div>
        );
      })}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Stepper;
