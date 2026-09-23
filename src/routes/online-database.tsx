import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/online-database")({
  head: () => ({
    meta: [
      { title: "Online Database — Uttarakhand Open School" },
      { name: "description", content: "UOS record search and verification services." },
      { property: "og:title", content: "Online Database — Uttarakhand Open School" },
      { property: "og:description", content: "UOS record search and verification services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="database" />,
});
