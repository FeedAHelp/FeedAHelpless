import dynamic from "next/dynamic";
import { memo, useEffect, useState } from "react";
import ImageCarousal from "../imageCarousal/imageCarousal";

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
              <a href="#" className="underline">
                Get Started!
              </a>
            </p>
            <p className="mt-6 text-center text-sm text-black">
              Read our{" "}
              <a href="#" className="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                conditions
              </a>
            </p>
          </div>
          <div className="bg-white p-5 md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
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
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </a>
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
                  <a
                    href="#"
                    className="group flex items-center justify-center space-x-2 rounded-md border border-gray-800 px-4 py-2 transition-colors duration-300 hover:bg-gray-800 focus:outline-none"
                  >
                    <span>
                      <svg
                        className="h-5 w-5 fill-current text-gray-800 group-hover:text-white"
                        viewBox="0 0 16 16"
                        version="1.1"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                      Github
                    </span>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center justify-center space-x-2 rounded-md border border-blue-500 px-4 py-2 transition-colors duration-300 hover:bg-blue-500 focus:outline-none"
                  >
                    <span>
                      <svg
                        className="text-blue-500 group-hover:text-white"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                      Twitter
                    </span>
                  </a>
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
