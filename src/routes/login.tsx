import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Student Login — Uttarakhand Open School" },
      { name: "description", content: "Access the UOS student portal." },
      { property: "og:title", content: "Student Login — Uttarakhand Open School" },
      { property: "og:description", content: "Access the UOS student portal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});
