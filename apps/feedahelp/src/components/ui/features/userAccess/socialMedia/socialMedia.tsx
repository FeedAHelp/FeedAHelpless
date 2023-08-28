import React from "react";
import { items } from "./data";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((value, index) => (
        <div className="flex items-center justify-center" key={index}>
          <Image src={value.imgSrc} alt={value.alt} width={48} height={48} />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
