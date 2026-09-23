import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/about-state")({
  head: () => ({
    meta: [
      { title: "About Uttarakhand — Uttarakhand Open School" },
      { name: "description", content: "Open education across Uttarakhand." },
      { property: "og:title", content: "About Uttarakhand — Uttarakhand Open School" },
      { property: "og:description", content: "Open education across Uttarakhand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="state" />,
});
