import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "HeroImages"]`;

export const fetchHeroImages = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
