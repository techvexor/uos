import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/affiliation")({
  head: () => ({
    meta: [
      { title: "Affiliation — Uttarakhand Open School" },
      { name: "description", content: "Institutional affiliation guidance and standards." },
      { property: "og:title", content: "Affiliation — Uttarakhand Open School" },
      { property: "og:description", content: "Institutional affiliation guidance and standards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="affiliation" />,
});
