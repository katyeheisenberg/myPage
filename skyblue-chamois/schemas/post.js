export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "meta_title",
      type: "string",
      title: "Meta title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedDate",
      type: "date",
      title: "Published Date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "body",
      name: "body",
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image",
        }
      ]
    },
  ],
};
