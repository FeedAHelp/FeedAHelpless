"use client";
import { apiSetup } from "../api";

export const postMethod = async (route: string, postData: object) => {
  const api = apiSetup();
  try {
    const response = await (await api).post(route, postData);
    return response;
  } catch (error) {
    throw error;
  }
};
