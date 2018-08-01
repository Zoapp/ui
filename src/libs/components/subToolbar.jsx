/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import { Icon, Menu, MenuItem, Button } from "zrmc";
import HeaderIcon from "./headerIcon";
import ToolTip from "./tooltip";

const SubToolbar = ({
  titleIcon,
  titleName,
  actions,
  icons,
  menu,
  style,
  className,
  darkTheme,
  titleIconColor,
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
            className="zui-subheader-menu"
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
        <div style={{ display: "flex", marginTop: "12px" }}>
          {icons.map((icon, index) => {
            const key = `i_${index}`;
            const el = (
              <Icon
                key={key}
                name={icon.name}
                onClick={(e) => {
                  e.preventDefault();
                  if (icon.onClick) icon.onClick();
                }}
              />
            );
            if (icon.tooltip) {
              return (
                <ToolTip label={icon.tooltip} key={key}>
                  {el}
                </ToolTip>
              );
            }
            return el;
          })}
        </div>
      );
    } else if (actions) {
      return (
        <div style={{ display: "flex", marginTop: "6px" }}>
          {actions.map((action, index) => {
            const key = `a_${index}`;
            const el = (
              <Button
                key={key}
                compact
                disabled={action.disabled}
                onClick={(e) => {
                  e.preventDefault();
                  if (action.onClick) action.onClick();
                }}
              >
                {action.name}
              </Button>
            );
            if (action.tooltip) {
              return (
                <ToolTip label={action.tooltip} key={key}>
                  {el}
                </ToolTip>
              );
            }
            return el;
          })}
        </div>
      );
    }
    return <div />;
  };
  let headerIcon = null;
  let cn = "zui-panel-header ";
  if (darkTheme) {
    cn = `zui-panel-header-dark ${cn}`;
  }
  if (className) {
    cn += className;
  }
  let s = {};
  if (titleIcon) {
    let st = null;
    if (titleIconColor) {
      st = { color: titleIconColor };
    }
    headerIcon = <HeaderIcon name={titleIcon} style={st} />;
  } else {
    s = { marginLeft: "16px" };
  }
  return (
    <div style={style} className={cn}>
      {headerIcon}
      <div style={s} className="zui-panel-header-title">
        {titleName}
      </div>
      <div className="zui-panel-header__actions">
        {iconsRender()}
        {menuRender()}
      </div>
    </div>
  );
};
SubToolbar.defaultProps = {
  titleIcon: null,
  titleIconColor: null,
  icons: null,
  menu: null,
  actions: null,
  darkTheme: false,
};

SubToolbar.propTypes = {
  titleName: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  titleIcon: PropTypes.string,
  titleIconColor: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({})),
  icons: PropTypes.arrayOf(PropTypes.shape({})),
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  style: PropTypes.shape({}),
  className: PropTypes.string,
  darkTheme: PropTypes.bool,
};

export default SubToolbar;
