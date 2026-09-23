import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/vocational-education")({
  head: () => ({
    meta: [
      { title: "Vocational Education — Uttarakhand Open School" },
      { name: "description", content: "UOS vocational and skill development initiatives." },
      { property: "og:title", content: "Vocational Education — Uttarakhand Open School" },
      { property: "og:description", content: "UOS vocational and skill development initiatives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="vocational" />,
});
