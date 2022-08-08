import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'chflg70t',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

console.log("check token", process.env.REACT_APP_PROJECT_ID)
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);