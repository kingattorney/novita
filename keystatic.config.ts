import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage:
    process.env.NODE_ENV === "production"
      ? {
          kind: "github",
          repo: "kingattorney/novita",
        }
      : {
          kind: "local",
        },
  collections: {
    faq: collection({
      label: "FAQ",
      path: "content/faq/*",
      slugField: "question",
      parseSlugForSort(slug) {
        // match hoi-number-slug
        // compare based on number
        const match = slug.match(/hoi-(\d+)-/);
        if (match) {
          return parseInt(match[1], 10);
        }
        return slug;
      },
      schema: {
        locale: fields.select({
          label: "Locale",
          description: "The language of the document.",
          options: [
            {
              label: "Tiếng Việt",
              value: "vi",
            },
            {
              label: "English",
              value: "en",
            },
            {
              label: "中文",
              value: "zh",
            },
          ],
          defaultValue: "vi",
        }),
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
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "content/homepage/",
      schema: {
        thungo: fields.document({
          label: "Thư ngỏ",

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
  ui: {
    brand: {
      name: "Novita Group",
    },
  },
});
