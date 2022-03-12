import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-design">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="logo1">Weeb</span>
            <span className="logo2"> Zone</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " to={"/movies"}>
                Movies
              </NavLink>
              <NavLink className="nav-link" to={"/customers"}>
                Customers
              </NavLink>
              <NavLink className="nav-link" to={"/rentals"}>
                Rentals
              </NavLink>
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
              <NavLink className="nav-link" to={"/register"}>
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
