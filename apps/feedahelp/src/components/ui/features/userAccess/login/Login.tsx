import dynamic from "next/dynamic";
import { memo, useEffect, useState } from "react";
import ImageCarousal from "../imageCarousal/imageCarousal";
import GenericLink from "../../../../../../../../packages/ui/components/elements/GenericLink/GenericLink";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { Styled } from "./Login.styled";
import SocialMedia from "../socialMedia/socialMedia";

const Logo = dynamic(import("../../header/logo/Logo"));
const MemoLogo = memo(Logo);

const Login = () => {
  return (
    <div className="max flex flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-1 md:flex-row lg:max-w-screen-md">
      <div className="text-black md:flex md:w-80 md:flex-shrink-0 md:flex-col md:items-center md:justify-evenly">
        <MemoLogo />
        <ImageCarousal />
        <Styled.UserTermsConditions>
          <div className="mb-4 flex flex-col items-center justify-center text-center">
            <h4 className="text-sm">Don't have an account?</h4>
            <GenericLink
              href={"www.google.com"}
              color="Black"
              fontSize="0.8rem"
            >
              {"Get Started!"}
            </GenericLink>
          </div>
          <div className="flex justify-center gap-1 text-center text-black">
            <h4 className="text-sm">Read our</h4>
            <GenericLink
              href={"www.google.com"}
              color="Black"
              fontSize="0.8rem"
            >
              {"terms"}
            </GenericLink>
            <h4 className="text-sm">and</h4>
            <GenericLink
              href={"www.google.com"}
              color="Black"
              fontSize="0.8rem"
            >
              {"conditions"}
            </GenericLink>
          </div>
        </Styled.UserTermsConditions>
      </div>
      <div className="bg-white p-5 md:flex-1">
        <h3 className="text-2xl font-semibold text-gray-700">Login</h3>
        <form action="#" className="flex flex-col space-y-4">
          <div className="flex flex-col text-left">
            <Styled.Field>
              <Styled.LoginInput type="text" placeholder="What's your email?" />
              <Styled.Line />
            </Styled.Field>
          </div>
          <div className="flex flex-col space-y-1">
            <Styled.Field>
              <Styled.LoginInput
                type="password"
                placeholder="What's your password?"
              />
              <Styled.Line />
            </Styled.Field>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0"
            />
            <label
              htmlFor="remember"
              className="text-sm font-semibold text-gray-500"
            >
              Remember me
            </label>
          </div>
          <div>
            <ReCAPTCHA sitekey="Your client site key" />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#EC5921] px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-[#F3AF9A] focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Log in
            </button>
          </div>
          <div className="flex flex-col space-y-5">
            <span className="flex items-center justify-center space-x-2">
              <span className="h-px w-14 bg-gray-400"></span>
              <span className="font-normal text-gray-500">or login with</span>
              <span className="h-px w-14 bg-gray-400"></span>
            </span>
            <div className="flex flex-col space-y-4">
              <SocialMedia />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
