import { MdInsertPhoto } from "react-icons/md";

export default {
  name: "artwork",
  title: "Artwork",
  type: "document",
  icon: MdInsertPhoto,
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
      name: "poster",
      title: "Poster Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for accessibility.",
          validation: (Rule) =>
            Rule.error("You have to fill out the alternative text.").required(),
        },
      ],
    },
    {
      name: "projectRef",
      title: "Project",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "project",
          },
        },
      ],
    },
    {
      name: "artist",
      title: "Artist",
      type: "reference",
      to: [{ type: "artist" }],
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
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
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
      artistName0: "artistMembers.0.artist.name",
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
