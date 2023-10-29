import { MdPerson } from "react-icons/md";

export default {
  name: "artist",
  title: "Artist",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
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
      title: "Social Graph",
      name: "socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Link Title",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "Insta" },
                  { title: "Vimeo", value: "Vimeo" },
                  { title: "Youtube", value: "Youtube" },
                  { title: "Facebook", value: "Facebook" },
                ],
              },
            },
            {
              name: "url",
              title: "Link URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "bio",
      type: "bioPortableText",
      title: "Biography",
    },
    {
      name: "soloExhibitions",
      type: "blockContent",
      title: "Selected Solo Exhibitions",
    },
    {
      name: "groupExhibitions",
      type: "blockContent",
      title: "Selected Group Exhibitions",
    },
    {
      name: "awards",
      type: "blockContent",
      title: "Awards & Prizes",
    },
    {
      name: "collections",
      type: "blockContent",
      title: "Selected Collections",
    },
    {
      name: "contact",
      type: "blockContent",
      title: "Contact",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
