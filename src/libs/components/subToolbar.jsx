/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import { Icon, Menu, MenuItem } from "zrmc";
import HeaderIcon from "./headerIcon";

const SubToolbar = ({
  titleIcon,
  titleName,
  icons,
  menu,
  style,
  className,
}) => {
  const menuRender = () => {
    if (menu) {
      const id = `${titleName}-menu`;
      const align = menu.align ? menu.align : "left";
      const { items } = menu;
      const me = (
        <Menu target={id} align={align}>
          {items.map((m, index) => {
            const key = `m_${index}`;
            if (m.disabled) {
              return (
                <MenuItem key={key} disabled>
                  {m.name}
                </MenuItem>
              );
            }
            return (
              <MenuItem
                key={key}
                onSelected={() => {
                  if (m.onSelect) {
                    m.onSelect(m.name);
                  }
                }}
              >
                {m.name}
              </MenuItem>
            );
          })}
        </Menu>
      );
      return (
        <div>
          <Icon
            name="more_vert"
            id={id}
            className="mrb-subheader-menu"
            menu={me}
          />
        </div>
      );
    }
    return <div />;
  };

  const iconsRender = () => {
    if (icons) {
      return (
        <div>
          {icons.map((icon, index) => {
            const key = `m_${index}`;
            return (
              <Icon
                key={key}
                name={icon.name}
                onClick={(e) => {
                  e.preventDefault();
                  if (icon.onClick) icon.onClick();
                }}
              />
            );
          })}
        </div>
      );
    }
    return <div />;
  };
  let headerIcon = null;
  let cn = "mrb-panel-header ";
  if (className) {
    cn += className;
  }
  let s = {};
  if (titleIcon) {
    headerIcon = <HeaderIcon name={titleIcon} />;
  } else {
    s = { marginLeft: "16px" };
  }
  return (
    <div style={style} className={cn}>
      {headerIcon}
      <div style={s} className="mrb-panel-header-title">
        {titleName}
      </div>
      <div className="mrb-panel-header__actions">
        {iconsRender()}
        {menuRender()}
      </div>
    </div>
  );
};
SubToolbar.defaultProps = {
  titleIcon: null,
  icons: null,
  menu: null,
};

SubToolbar.propTypes = {
  titleName: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  titleIcon: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.shape({})),
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

export default SubToolbar;
