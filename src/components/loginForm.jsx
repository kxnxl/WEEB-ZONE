import React, { Component } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    //null and undefined cannot be used as the value of the controlled elements
    data: { username: "", password: "" },
    error: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server and then redirect to the new page
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={this.state.data.username}
            onChange={this.handleChange}
            label="Username"
            error={this.state.error.username}
            type="text"
          />
          <Input
            name="password"
            value={this.state.data.password}
            onChange={this.handleChange}
            label="Password"
            error={this.state.error.password}
            type="password"
          />
          <button
            disabled={this.validate()}
            className="btn btn-warning btn-lg mt-5 "
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
