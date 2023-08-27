import dynamic from "next/dynamic";
import { memo, useEffect, useState } from "react";
import ImageCarousal from "../imageCarousal/imageCarousal";
import GenericLink from "../../../../../../../../packages/ui/components/elements/GenericLink/GenericLink";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { Styled } from "./Login.styled";

const Logo = dynamic(import("../../header/logo/Logo"));
const MemoLogo = memo(Logo);

const Login = () => {
  return (
    <div>
      <div className="flex">
        <div className="max flex flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-1 md:flex-row lg:max-w-screen-md">
          <div className="p-4 py-6 text-black md:flex md:w-80 md:flex-shrink-0 md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-center text-4xl font-bold tracking-wider">
              <MemoLogo />
            </div>
            <ImageCarousal />
            <p className="mt-10 flex flex-col items-center justify-center text-center">
              <span>Don't have an account?</span>
              <GenericLink href={"www.google.com"} color="Black">
                {"Get Started!"}
              </GenericLink>
            </p>
            <p className="mt-6 text-center text-black">
              Read our{" "}
              <GenericLink href={"www.google.com"} color="Black">
                {"terms"}
              </GenericLink>
              <a href="#" className="underline"></a> and{" "}
              <GenericLink href={"www.google.com"} color="Black">
                {"conditions"}
              </GenericLink>
            </p>
          </div>
          <div className="bg-white p-5 md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Login</h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col text-left">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  autoFocus
                  className="rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                  <GenericLink
                    href={"www.google.com"}
                    color="Black"
                    fontSize="0.8rem"
                  >
                    {"Forgot Password?"}
                  </GenericLink>
                </div>
                <input
                  type="password"
                  id="password"
                  className="rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
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
                  className="w-full rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Log in
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px w-14 bg-gray-400"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px w-14 bg-gray-400"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/static/images/social/facebook.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/static/images/social/google.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/static/images/social/Instogram.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/static/images/social/linkedIn.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/static/images/social/Twitter.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/static/images/social/Youtube.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
