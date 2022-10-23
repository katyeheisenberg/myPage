import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
  projectId: "m6pwoh3u",
  dataset: "production",
};

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: "2021-03-25",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
