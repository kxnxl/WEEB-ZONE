import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="form-group my-4">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          className="form-control "
        />
        {this.props.error && (
          <div className="alert alert-warning">{this.props.error}</div>
        )}
      </div>
    );
  }
}

export default Input;
