// We import object and document schemas
import artist from "./artist";
import artwork from "./artwork";
import project from "./project";
import blockContent from "./blockContent";
import category from "./category";
import siteSettings from "./siteSettings";

// Object
import bioPortableText from "./objects/bioPortableText";
import openGraph from "./objects/openGraph";
import mainImage from "./objects/mainImage";

import artworkReference from "./artworkReference";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  /* Your types here! */
  artist,
  artwork,
  project,
  blockContent,
  artworkReference,
  bioPortableText,
  category,
  siteSettings,
  openGraph,
  mainImage,
];
