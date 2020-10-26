// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

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
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
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
  ]),
});
