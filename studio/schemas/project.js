import { MdPermMedia } from "react-icons/md";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: MdPermMedia,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
    },
    {
      name: "artworks",
      title: "Artworks",
      type: "array",
      of: [
        {
          name: "artwork",
          type: "artworkReference",
          title: "Artwork",
        },
      ],
    },
    {
      name: "releaseDate",
      title: "Release date",
      type: "datetime",
    },
    {
      name: "externalId",
      title: "External ID",
      type: "number",
    },
    {
      name: "poster",
      title: "Poster Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
    },
    prepare(selection) {
      const year = selection.date && selection.date.split("-")[0];

      return {
        title: `${selection.title} ${year ? `(${year})` : ""}`,
        date: selection.date,
        media: selection.media,
      };
    },
  },
};
