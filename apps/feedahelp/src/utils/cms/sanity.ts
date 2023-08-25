import { createClient } from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url"
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "s98tqz9i",
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
    useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config);
export const urlFor = (source: string) => createImageUrlBuilder(config).image(source);
