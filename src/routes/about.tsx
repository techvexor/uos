import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Uttarakhand Open School | Mission, Vision & Objectives" },
      {
        name: "description",
        content:
          "Learn about the mission, vision and objectives of Uttarakhand Open School, Dehradun and its inclusive approach to open, flexible education in Uttarakhand.",
      },
      {
        property: "og:title",
        content: "About Uttarakhand Open School | Mission, Vision & Objectives",
      },
      {
        property: "og:description",
        content:
          "A recognised open schooling board focused on inclusive access, NCERT and CBSE-aligned learning, and educational support for disadvantaged learners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uttarakhandopenschool.com/about" }],
  }),
  component: AboutPage,
});
