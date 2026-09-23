import { createFileRoute } from "@tanstack/react-router";
import { NoticesPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notices — Uttarakhand Open School" },
      {
        name: "description",
        content: "Official UOS circulars, announcements and examination updates.",
      },
      { property: "og:title", content: "Notices — Uttarakhand Open School" },
      {
        property: "og:description",
        content: "Official UOS circulars, announcements and examination updates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NoticesPage,
});
