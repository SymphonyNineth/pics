import React from "react";

import ImageCard from "./ImageCard";

import "./ImageList.css";

const ImageList = ({ images }) => {
  const renderedImages = images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
