import { createFileRoute } from "@tanstack/react-router";
import { BoardProfilePage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/board-profile")({
  head: () => ({
    meta: [
      { title: "UOS Board Profile – Governing Body, Committees & Authorities" },
      {
        name: "description",
        content:
          "Learn about the Uttarakhand Open School governing body, committees, authorities and academic governance structure for the open schooling system.",
      },
      {
        property: "og:title",
        content: "UOS Board Profile – Governing Body, Committees & Authorities",
      },
      {
        property: "og:description",
        content:
          "Explore the governance structure, committees, and institutional leadership driving Uttarakhand Open School in Dehradun.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uttarakhandopenschool.com/board-profile" }],
  }),
  component: BoardProfilePage,
});
