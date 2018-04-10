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
    <div className="img-container" onClick={props.ClickHandler}>
      <img alt={props.name} id={props.key} key={props.key} src={props.image} index={props.index} />
    </div>
  </div>
);

export default ImageCard;
