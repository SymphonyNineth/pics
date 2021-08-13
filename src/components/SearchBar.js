import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-bar">Image search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              id="search-bar"
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
