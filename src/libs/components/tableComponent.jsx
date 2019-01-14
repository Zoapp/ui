import React from "react";
import PropTypes from "prop-types";
import { Icon, Menu, MenuItem } from "zrmc";

const TableComponent = ({
  title,
  headers,
  items,
  selectedItem,
  onSelect,
  className,
  style,
  menu,
}) => {
  const s = style || {};
  if (!s.width) {
    s.width = "100%";
  }
  s.borderSpacing = "0";
  let thead;
  if (headers) {
    thead = (
      <thead>
        <tr>
          {headers.map((h, index) => {
            const key = `h_${index}`;
            return <th key={key}>{h}</th>;
          })}
        </tr>
      </thead>
    );
  }
  return (
    <div className="zui-table">
      {title}
      <table className={className} style={s}>
        {thead}
        <tbody>
          {items.map((item, index) => {
            const { icon, values } = item;
            let cn = "selectableListItem";
            if (selectedItem === index) {
              cn = "selectedListItem";
            }
            let rmenu;
            const id = `zt_menu_${index}`;
            if (menu) {
              const align = "left";
              const me = (
                <Menu target={id} align={align}>
                  {menu.map((m, i) => {
                    const key = `m_${index}_${i}`;
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
                            m.onSelect(m.name, index);
                          }
                        }}
                      >
                        {m.name}
                      </MenuItem>
                    );
                  })}
                </Menu>
              );
              rmenu = (
                <td>
                  <div>
                    <Icon
                      name="more_vert"
                      id={id}
                      className="zui_table-menu"
                      menu={me}
                    />
                  </div>
                </td>
              );
            }
            return (
              <tr
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(index);
                }}
                className={cn}
              >
                <td className="zui-table_icon">
                  <div>{icon}</div>
                </td>
                {values.map((value, i) => {
                  const k = `c_${i}`;
                  return (
                    <td key={k} className="zui-table_cell">
                      <div>{value || "-"}</div>
                    </td>
                  );
                })}
                {rmenu}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="zui-table_bottom" />
    </div>
  );
};

TableComponent.defaultProps = {
  className: null,
  style: null,
};

TableComponent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  headers: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedItem: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default TableComponent;
