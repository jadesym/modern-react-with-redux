import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  state = { term: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const inputSearchTerm = this.state.term;
    console.log("Form submitted with input term:" + inputSearchTerm);
    this.props.onSearchSubmit(inputSearchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              onClick={event =>
                console.log(event.target.value, "input clicked.")
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
