import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    if (!error) return null;

    return error.details[0].message;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, error }); //add error while updating the state
  };
}

export default Form;
