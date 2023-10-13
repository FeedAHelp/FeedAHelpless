import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "ingredients"]`;

export const fetchIngredients = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};
