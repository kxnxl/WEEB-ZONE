import React, { Component } from "react";
import _ from "lodash";
//Movies:array
//onDelete:fn

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  render() {
    const { columns, items } = this.props;
    return (
      <tbody>
        {items.map((i) => (
          <tr key={i._id}>
            {columns.map((c) => (
              <td key={i._id + (c.path || c.key)}>{this.renderCell(i, c)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
