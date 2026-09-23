import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "UOS Dehradun Result 2026 – Check Uttarakhand Open School Result Online" },
      {
        name: "description",
        content:
          "Check Uttarakhand Open School Class 10 and Class 12 result online, understand the result process, and find relevant notices and student support details.",
      },
      {
        property: "og:title",
        content: "UOS Dehradun Result 2026 – Check Uttarakhand Open School Result Online",
      },
      {
        property: "og:description",
        content:
          "Official result guidance and examination updates for Uttarakhand Open School candidates in Dehradun.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uttarakhandopenschool.com/results" }],
  }),
  component: () => <GenericPage kind="results" />,
});
