import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Input from "./common/Input";
import Select from "./common/select";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    error: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/movies/new");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="title"
            value={this.state.data.title}
            onChange={this.handleChange}
            label="Title"
            error={this.state.error.title}
            type="text"
          />
          <Select
            name={"genreId"}
            value={this.state.data.genreId}
            genres={this.state.genres}
            label={"Genre"}
            onChange={this.handleChange}
            error={this.state.error.genreId}
          />
          <Input
            name="numberInStock"
            value={this.state.data.numberInStock}
            onChange={this.handleChange}
            label="Stock"
            error={this.state.error.numberInStock}
            type="text"
          />
          <Input
            name="dailyRentalRate"
            value={this.state.data.dailyRentalRate}
            onChange={this.handleChange}
            label="Rate"
            error={this.state.error.dailyRentalRate}
            type="text"
          />
          <button
            disabled={this.validate()}
            className="btn btn-warning btn-lg mt-5 "
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
