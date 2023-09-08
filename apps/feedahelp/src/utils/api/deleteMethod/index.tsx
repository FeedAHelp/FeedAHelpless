"use client";
import { apiSetup } from "../api";

export const deleteMethod = async (route: string, id: string) => {
  const api = apiSetup();
  try {
    const response = await (await api).delete(`${route}/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
