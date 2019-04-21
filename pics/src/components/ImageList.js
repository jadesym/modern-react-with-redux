import React from "react";
import "./ImageList.css";

export default class ImageList extends React.Component {
  render() {
    const imageComponents = this.props.images.map(
      ({ description, id, urls }) => {
        return (
          <li key={id}>
            <img src={urls.regular} alt={description} />
          </li>
        );
      }
    );
    return <div>{imageComponents}</div>;
  }
}
