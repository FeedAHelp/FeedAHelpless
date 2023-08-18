import React, { useState } from "react";
import backgroundImageUrl from "../../../../../public/assets/hero-cover.png"

const Hero = () => {

  return (
    <div className="flex ">
      <div className=" bg-neutral-50">
        <h1 className="font-semibold mt-16 w-32  md:w-96 ps-3 py-10 md:ps-14 lg:text-5xl md:text-3xl text-base text-neutral-400">
          <span className="mb-5 inline-block">Your Recipe,</span> <br />
          <span className="mb-5 inline-block">Our Expertise</span>
          <br />
          <span className="mb-5 inline-block">- We'll Bring </span>
          <br />
          <span className="mb-5 inline-block">Smiles</span>
        </h1>
      </div>
      <div
        className="relative w-full  bg-gradient-to-r from-neutral-50 to-transparent bg-cover bg-center bg-no-repeat p-4"
        style={{ backgroundImage: `url(${backgroundImageUrl.src})` }}
      >
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-neutral-50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;