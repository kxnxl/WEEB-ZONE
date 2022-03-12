import React, { Component } from "react";

class ListGroup extends Component {
  state = {
    genres: this.props.items,
  };
  render() {
    return (
      <div className="list-group my-5 ">
        {this.state.genres.map((g) => (
          <a
            onClick={() => this.props.onItemSelect(g)}
            href="#"
            className={
              g === this.props.selectedItem
                ? "list-group-item list-group-item-action list-group-design active"
                : "list-group-item list-group-item-action list-group-design "
            }
            key={g._id}
          >
            {g.name}
          </a>
        ))}
      </div>
    );
  }
}

export default ListGroup;
