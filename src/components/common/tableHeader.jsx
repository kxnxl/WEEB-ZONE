import React, { Component } from "react";

// needs an array ofcolumns
//an instatnce for sort columns

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = this.props.sortColumn;
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  // renderSortIcon = (column) => {
  //   if (column.path !== this.props.sortColumn.path) return null;
  //   if (this.props.sortColumn.order === "asc")
  //     return <i className="fa fa-sort-asc"></i>;
  //   return <i className="fa fa-sort-desc"></i>;
  // };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path || column.key)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
