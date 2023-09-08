"use client";
import { apiSetup } from "../api";

export const putMethod = async (
  route: string,
  id: string,
  updateData: object
) => {
  const api = apiSetup();
  try {
    const response = await (await api).put(`${route}/${id}`, updateData);
    return response;
  } catch (error) {
    throw error;
  }
};
