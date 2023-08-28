import React from "react";
import { items } from "./data";

const ImageCarousal = () => {
  return (
    <div>
      <div className="gallery">
        {items.map((value, index) => (
          <img
            src={value.imgSrc}
            alt="a lovely kiss in the night"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousal;
