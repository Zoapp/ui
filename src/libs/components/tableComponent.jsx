import React from "react";
import PropTypes from "prop-types";
import { Icon } from "zrmc";

const TableComponent = ({
  title,
  headers,
  items,
  selectedItem,
  onSelect,
  className,
  style,
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
            let icon = "";
            if (item.icon) {
              let { color } = item;
              if (!color) {
                color = "transparent";
              }
              if (item.icon.endsWith(".svg")) {
                icon = <img style={{}} src={item.icon} alt={item.name} />;
              } else if (item.icon.endsWith(".png")) {
                icon = <img src={item.icon} alt={item.name} />;
              } else {
                icon = <Icon style={{}} name={item.icon} />;
              }
            }
            const { values } = item;
            let cn = "selectableListItem";
            if (selectedItem === index) {
              cn = "selectedListItem";
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
};

export default TableComponent;
