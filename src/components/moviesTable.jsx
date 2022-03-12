import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import { Link, NavLink } from "react-router-dom";
//
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(243, 174, 24)",
            fontWeight: "500",
          }}
          to={`/movies/${movie._id}`}
        >
          {movie.title}
        </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    return (
      <table className=" table table-dark">
        <TableHeader
          columns={this.columns}
          onSort={this.props.onSort}
          sortColumn={this.props.sortColumn}
        />
        <TableBody
          items={this.props.Movies}
          columns={this.columns}
          onDelete={this.props.onDelete}
        />
      </table>
    );
  }
}

export default MoviesTable;
