import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import UnsplashClient from "../api/unsplash";

export default class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async searchTerm => {
    console.log("App received search term: " + searchTerm);
    const resultingUrls = await UnsplashClient.getImagesBySearchTerm(
      searchTerm
    );

    this.setState({ images: resultingUrls });
  };

  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "50px" }}>
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
        </div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
