import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <div className="form-group mb-3">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select
          value={this.props.value}
          onChange={this.props.onChange}
          id={this.props.name}
          name={this.props.name}
          className="form-control "
        >
          <option value="" />
          {this.props.genres.map((g) => (
            <option key={g._id} value={g._id}>
              {g.name}
            </option>
          ))}
        </select>
        {this.props.error && (
          <div className="alert alert-warning">{this.props.error}</div>
        )}
      </div>
    );
  }
}

export default Select;
