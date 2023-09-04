import React from "react";
import Image from 'next/image'
import { items } from "./data";

const ImageCarousal = () => {
  return (
    <div>
      <div className="gallery sm:rounded-e-full">
        {items.map((value, index) => (
          <Image
            className="img"
            src={value.imgSrc}
            alt="a lovely kiss in the night"
            key={index}
            width={172}
            height={172}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousal;
