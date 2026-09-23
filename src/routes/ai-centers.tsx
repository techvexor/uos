import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/ai-centers")({
  head: () => ({
    meta: [
      { title: "AI Centers — Uttarakhand Open School" },
      { name: "description", content: "Accredited Institution centre information." },
      { property: "og:title", content: "AI Centers — Uttarakhand Open School" },
      { property: "og:description", content: "Accredited Institution centre information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="ai" />,
});
