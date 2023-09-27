import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "deshiMenus"]`;

export const fetchDeshiMenus = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
