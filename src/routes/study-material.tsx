import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/study-material")({
  head: () => ({
    meta: [
      { title: "Study Material — Uttarakhand Open School" },
      { name: "description", content: "Learning resources for UOS students." },
      { property: "og:title", content: "Study Material — Uttarakhand Open School" },
      { property: "og:description", content: "Learning resources for UOS students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="study" />,
});
