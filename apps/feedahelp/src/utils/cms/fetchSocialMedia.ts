import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "fahSocialMedia"]`;

export const fetchSocialMedia = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
