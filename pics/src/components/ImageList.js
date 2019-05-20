import ImageCard from "./ImageCard";
import React from "react";
import "./ImageList.css";

export default class ImageList extends React.Component {
  render() {
    const imageComponents = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return (
      <div className="image-list" style={{ display: "grid" }}>
        {imageComponents}
      </div>
    );
  }
}
