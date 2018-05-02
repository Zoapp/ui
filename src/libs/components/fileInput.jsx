/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the GPL v2.0+ license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import { Button } from "zrmc";

const FileInput = ({
  accept,
  onChange,
  children,
  classNames,
  multiple,
  ...props
}) => {
  const classes = `mdl-button--file ${classNames}`;
  let fileInputRef;

  return (
    <div style={{ display: "inline-block" }}>
      <Button
        {...props}
        classNames={{ classes }}
        onClick={() => {
          fileInputRef.click();
        }}
      >
        {children}
      </Button>
      <input
        type="file"
        style={{ display: "none" }}
        accept={accept}
        ref={(input) => {
          fileInputRef = input;
        }}
        onChange={onChange}
        multiple={multiple}
      />
    </div>
  );
};

FileInput.defaultProps = {
  accept: "*/*",
};

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  children: PropTypes.node,
  classNames: PropTypes.string,
  multiple: PropTypes.bool,
};

export default FileInput;
