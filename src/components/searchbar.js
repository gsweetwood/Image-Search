import React from "react";

class SearchBar extends React.Component {
  state = { term: "", clickCount: 0 };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  onClicked = event => {
    event.preventDefault();
    this.props.onWhenClicked(this.state.term);
    this.setState({ clickCount: this.state.clickCount + 1 });
  };

  updateTerm = event => {
    this.setState({ term: event.target.value });
    this.props.onWhenChanged(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" onClick={this.onClicked}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              Search for something. You have clicked this field{" "}
              {this.state.clickCount} times!
            </label>
            <input type="text" onChange={this.updateTerm} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
