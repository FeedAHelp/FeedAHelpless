import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "deshiMenuMainContent"]`;

export const fetchDeshiMenusMainContent = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
