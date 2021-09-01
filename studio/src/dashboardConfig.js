export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "612ecd16a2fbfe1607ff1ddc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gooxaz96",
                  apiId: "8aff04d7-655d-4636-a1bc-4903a7a989ac",
                },
                {
                  buildHookId: "612ecd16ee362210c993685e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-q4xa6qfo",
                  apiId: "d4d55a16-ce80-4589-bd61-c24740e33987",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/MachDomo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-q4xa6qfo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
