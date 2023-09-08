"use client";
import axios, { type AxiosInstance } from "axios";
import { getSession } from "next-auth/react";
import { type User } from "~/types/type";

export const apiSetup = async () => {
  const api: AxiosInstance = axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_PRODUCTION_BACKEND_BASE_URL
        : process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL,
  });

  const session: {
    user: User;
  } = await getSession();

  console.log("session", session);
  if (session?.user?.accessToken) {
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${session.user.accessToken}`;
  }

  return api;
};
//added latest
