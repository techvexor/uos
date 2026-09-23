import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/eligibility")({
  head: () => ({
    meta: [
      { title: "Eligibility — Uttarakhand Open School" },
      { name: "description", content: "UOS programme eligibility requirements." },
      { property: "og:title", content: "Eligibility — Uttarakhand Open School" },
      { property: "og:description", content: "UOS programme eligibility requirements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="eligibility" />,
});
