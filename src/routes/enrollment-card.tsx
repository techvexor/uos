import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/enrollment-card")({
  head: () => ({
    meta: [
      { title: "Enrollment Card — Uttarakhand Open School" },
      { name: "description", content: "UOS student enrollment card information." },
      { property: "og:title", content: "Enrollment Card — Uttarakhand Open School" },
      { property: "og:description", content: "UOS student enrollment card information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="enrollment" />,
});
