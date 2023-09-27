import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "fahSponsers"]`;

export const fetchSponsers = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
