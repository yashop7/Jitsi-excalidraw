/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "introduction/get-started",
      },
      items: ["introduction/development", "introduction/contributing"],
    },
    {
      type: "category",
      label: "Codebase",
      items: ["codebase/json-schema", "codebase/frames"],
    },
    {
      type: "category",
      label: "@jitsi/excalidraw",
      collapsed: false,
      items: [
        "@jitsi/excalidraw/installation",
        "@jitsi/excalidraw/integration",
        "@jitsi/excalidraw/customizing-styles",
        {
          type: "category",
          label: "API",
          link: {
            type: "doc",
            id: "@jitsi/excalidraw/api/api-intro",
          },
          items: [
            {
              type: "category",
              label: "Props",
              link: {
                type: "doc",
                id: "@jitsi/excalidraw/api/props/props",
              },
              items: [
                "@jitsi/excalidraw/api/props/initialdata",
                "@jitsi/excalidraw/api/props/excalidraw-api",
                "@jitsi/excalidraw/api/props/render-props",
                "@jitsi/excalidraw/api/props/ui-options",
              ],
            },
            {
              type: "category",
              label: "Children Components",
              link: {
                type: "doc",
                id: "@jitsi/excalidraw/api/children-components/children-components-intro",
              },
              items: [
                "@jitsi/excalidraw/api/children-components/main-menu",
                "@jitsi/excalidraw/api/children-components/welcome-screen",
                "@jitsi/excalidraw/api/children-components/sidebar",
                "@jitsi/excalidraw/api/children-components/footer",
                "@jitsi/excalidraw/api/children-components/live-collaboration-trigger",
              ],
            },
            {
              type: "category",
              label: "Utils",
              link: {
                type: "doc",
                id: "@jitsi/excalidraw/api/utils/utils-intro",
              },
              items: [
                "@jitsi/excalidraw/api/utils/export",
                "@jitsi/excalidraw/api/utils/restore",
              ],
            },
            "@jitsi/excalidraw/api/constants",
            "@jitsi/excalidraw/api/excalidraw-element-skeleton",
          ],
        },
        "@jitsi/excalidraw/faq",
        "@jitsi/excalidraw/development",
      ],
    },
    {
      type: "category",
      label: "@excalidraw/mermaid-to-excalidraw",
      link: {
        type: "doc",
        id: "@excalidraw/mermaid-to-excalidraw/installation",
      },
      items: [
        "@excalidraw/mermaid-to-excalidraw/api",
        "@excalidraw/mermaid-to-excalidraw/development",
        {
          type: "category",
          label: "Codebase",
          link: {
            type: "doc",
            id: "@excalidraw/mermaid-to-excalidraw/codebase/codebase",
          },
          items: [
            {
              type: "category",
              label: "How Parser works under the hood?",
              link: {
                type: "doc",
                id: "@excalidraw/mermaid-to-excalidraw/codebase/parser/parser",
              },
              items: [
                "@excalidraw/mermaid-to-excalidraw/codebase/parser/flowchart",
              ],
            },
            "@excalidraw/mermaid-to-excalidraw/codebase/new-diagram-type",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
