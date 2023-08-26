import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "fahCounter"]`;

export const fetchCounter = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
