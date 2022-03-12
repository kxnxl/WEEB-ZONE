import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 6,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All genres" }, ...getGenres()];
    this.setState({ genres: genres, movies: getMovies() });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    if (this.state.movies.length === 0)
      return <h5>There are no movies in the database"</h5>;

    //Filtering the movies on the basis of the genre selected

    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            (m) => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;

    //sorting the array of movies before paginating them with the help of lodash

    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    //paginate function implemented in utils sections,with lodash library of js
    const Movies = paginate(
      this.state.pageSize,
      this.state.currentPage,
      sorted
    );

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <button className="btn btn-warning btn-sm  mb-3">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/movies/new"
              >
                New Movie
              </Link>
            </button>
            <h5>Showing {filtered.length} movies from the database.</h5>
            <MoviesTable
              onDelete={this.handleDelete}
              Movies={Movies}
              sortColumn={this.state.sortColumn}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
