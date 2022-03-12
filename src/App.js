import React, { Component } from "react";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/navcomponents/customers";
import Rentals from "./components/navcomponents/rentals";
import NotFound from "./components/navcomponents/notfound";
import MovieForm from "./components/movieform";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import http from "./services/httpService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container m-5 ">
          <Switch>
            <Route path={"/movies/new"} component={MovieForm} />
            <Route path={"/register"} component={RegisterForm} />
            <Route path={"/login"} component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/notfound" component={NotFound} />
            <Redirect from="/" exact to={"/movies"} />
            <Redirect to={"/notfound"} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
