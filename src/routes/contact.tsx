import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Uttarakhand Open School" },
      { name: "description", content: "Contact Uttarakhand Open School in Dehradun." },
      { property: "og:title", content: "Contact Us — Uttarakhand Open School" },
      { property: "og:description", content: "Contact Uttarakhand Open School in Dehradun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
