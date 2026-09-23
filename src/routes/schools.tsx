import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "Schools & Academic Centres — Uttarakhand Open School" },
      { name: "description", content: "Recognised UOS schools and academic centres." },
      { property: "og:title", content: "Schools & Academic Centres — Uttarakhand Open School" },
      { property: "og:description", content: "Recognised UOS schools and academic centres." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="schools" />,
});
