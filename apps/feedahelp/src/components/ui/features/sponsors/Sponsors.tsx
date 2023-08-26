import React from "react";
import { Styled } from "./Sponsers.styled";
import { items } from "./data";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="mb-2 border">
      <div className="container mx-auto px-4 pb-4 pt-4">
        <div className="grid grid-cols-3 gap-4">
          {items.map((value, index) => (
            <Styled.bgCover key={index}>
              <Image
                src={value.imgSrc}
                alt={value.alt}
                width={200}
                height={200}
              />
            </Styled.bgCover>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
