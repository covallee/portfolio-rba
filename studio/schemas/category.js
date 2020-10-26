import { MdBookmark } from "react-icons/md";

export default {
  name: "category",
  type: "document",
  title: "Category",
  icon: MdBookmark,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
