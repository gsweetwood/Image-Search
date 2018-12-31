import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], imageCount: 0, pageNum: 1, term: "" };

  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: { page: this.state.pageNum, query: term }
    });
    this.setState(state => {
      return {
        images: response.data.results,
        imageCount: response.data.total,
        term: term
      };
    });
    console.log(response);
  };

  onFieldCLick(message) {
    console.log(`You clicked the field. This is the parents' funciton`);
    console.log(message);
  }

  nextPage = () => {
    this.setState({ pageNum: this.state.pageNum + 1 }, () => {
      this.onSearchSubmit(this.state.term);
      console.log(`Page number: ${this.state.pageNum}`);
    });
  };

  termChanged = term => {
    this.setState({ term: term, pageNum: 1 });
  };

  render() {
    return (
      <div>
        <h2>FREE IMAGE SEARCH</h2>
        <div className="searchbar">
          <Searchbar
            onSubmit={this.onSearchSubmit}
            onWhenClicked={this.onFieldCLick}
            onWhenChanged={this.termChanged}
          />
          <div style={{ color: "white" }}>
            Found {this.state.imageCount} items! You are on page{" "}
            {this.state.pageNum}.
          </div>
          <button onClick={this.nextPage}>Next ></button>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
