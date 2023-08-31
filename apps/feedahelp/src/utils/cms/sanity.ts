import { createClient } from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url"
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "feedahelp",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    useCdn: true,
    apiVersion: '2023-08-30',
    ignoreBrowserTokenWarning: true
}
export const sanityClient = createClient(config);
export const urlFor = (source: string) => createImageUrlBuilder(config).image(source);
