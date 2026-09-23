import { createFileRoute } from "@tanstack/react-router";
import { DownloadsPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Uttarakhand Open School" },
      { name: "description", content: "Official UOS date sheets, forms and academic documents." },
      { property: "og:title", content: "Downloads — Uttarakhand Open School" },
      {
        property: "og:description",
        content: "Official UOS date sheets, forms and academic documents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadsPage,
});
