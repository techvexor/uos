import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/fee-structure")({
  head: () => ({
    meta: [
      { title: "Fee Structure — Uttarakhand Open School" },
      { name: "description", content: "Current fee guidance for UOS programmes." },
      { property: "og:title", content: "Fee Structure — Uttarakhand Open School" },
      { property: "og:description", content: "Current fee guidance for UOS programmes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GenericPage kind="fees" />,
});
