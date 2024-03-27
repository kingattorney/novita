import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    faq: collection({
      label: "FAQ",
      path: "content/faq/*",
      slugField: "question",
      parseSlugForSort(slug) {
        return slug.replace(/-/g, " ");
      },
      schema: {
        question: fields.slug({
          name: {
            label: "Question",
          },
          slug: {
            label: "Slug",
            description: "The URL-friendly identifier for the document.",
          },
        }),
        answer: fields.document({
          label: "Answer",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/site/images",
            publicPath: "/site/images",
            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
        }),
      },
    }),
  },
});
