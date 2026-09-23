import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Academic Calendar — Uttarakhand Open School" },
      { name: "description", content: "Key UOS academic dates and sessions." },
      { property: "og:title", content: "Academic Calendar — Uttarakhand Open School" },
      { property: "og:description", content: "Key UOS academic dates and sessions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="calendar" />,
});
