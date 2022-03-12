import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import Input from "./common/Input";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    error: {},
  };

  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().required().min(5),
    name: Joi.string().required(),
  };
  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={this.state.data.username}
            onChange={this.handleChange}
            label="Username"
            error={this.state.error.username}
          />
          <Input
            name="password"
            value={this.state.data.password}
            onChange={this.handleChange}
            label="Password"
            error={this.state.error.password}
          />
          <Input
            name="name"
            value={this.state.data.name}
            onChange={this.handleChange}
            label="Name"
            error={this.state.error.name}
          />
          <button
            disabled={this.validate()}
            className="btn btn-warning btn-lg mt-5 "
          >
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
