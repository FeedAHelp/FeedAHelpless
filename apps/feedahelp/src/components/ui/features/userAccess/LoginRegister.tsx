import React, { memo, useState } from "react";
import Login from "./login/Login";
import ImageCarousal from "./imageCarousal/imageCarousal";
import dynamic from "next/dynamic";

const Logo = dynamic(import("../header/logo/Logo"));
const MemoLogo = memo(Logo);

const LoginRegister = () => {
  return (
    <>
      <CarousalWithLogo />
      <Login />
    </>
  );
};

const CarousalWithLogo = () => {
  return (
    <div className="carousal-with-logo">
      <MemoLogo />
      <div className="hidden md:block">
        <ImageCarousal />
      </div>
    </div>
  );
};

export default LoginRegister;
