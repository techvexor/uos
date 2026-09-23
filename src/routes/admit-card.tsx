import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/admit-card")({
  head: () => ({
    meta: [
      { title: "Admit Card — Uttarakhand Open School" },
      { name: "description", content: "UOS examination admit card services." },
      { property: "og:title", content: "Admit Card — Uttarakhand Open School" },
      { property: "og:description", content: "UOS examination admit card services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="admit" />,
});
