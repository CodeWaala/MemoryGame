import React from "react";
import "./imagecard.css";

// const ImageCard = props => (
//   <div
//     role="img"
//     aria-label="click item"
//     class="click-item card"
//     style="background-image: url({props.image});"
//   />
// );

const ImageCard = props => (
  <div className="card">
    <div className="img-container" key={props.key}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImageCard;
