import { createClient } from 'next-sanity'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "feedahelp",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "s98tqz9i",
    useCdn: true,
    apiVersion: '2023-08-30',
    ignoreBrowserTokenWarning: true
}

export const sanityClient = createClient(config);
