import dynamic from "next/dynamic";
import { memo, useEffect, useState } from "react";
import ImageCarousal from "../imageCarousal/imageCarousal";
import GenericLink from "../../../../../../../../packages/ui/components/elements/GenericLink/GenericLink";
import { Styled } from "../LoginRegister.styled";
import SocialMedia from "../socialMedia/socialMedia";
import LoginForm from "./LoginForm";
import RegisterForm from "../register/RegisterForm";

const Logo = dynamic(import("../../header/logo/Logo"));
const MemoLogo = memo(Logo);

const Login = () => {
  return (
    <div className="max flex flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-1 md:flex-row lg:max-w-screen-md">
      <div className="gap-8 bg-[#F3AF9A] text-black md:flex md:w-80 md:flex-shrink-0 md:flex-col md:items-center md:justify-center">
        <MemoLogo />
        <ImageCarousal />
      </div>
      <div className="bg-white p-5 md:flex-1">
        <LoginForm />
        <div className="mb-4 flex flex-row items-center justify-center gap-4 pt-4 text-center">
          <h4 className="text-sm">Already have an account?</h4>
          <GenericLink href={"www.google.com"} color="Black" fontSize="0.8rem">
            {"Sign In!"}
          </GenericLink>
        </div>
        <div className="flex flex-col space-y-5 pt-4">
          <span className="flex items-center justify-center space-x-2">
            <span className="h-px w-14 bg-gray-400"></span>
            <span className="font-normal text-gray-500">or login with</span>
            <span className="h-px w-14 bg-gray-400"></span>
          </span>
          <div className="flex flex-col space-y-4">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
