import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "UOS Courses – Class 10 & 12 Open School Admission Eligibility" },
      {
        name: "description",
        content:
          "Explore Uttarakhand Open School courses, Class 10 and Class 12 eligibility requirements, admission rules, and flexible open schooling pathways.",
      },
      {
        property: "og:title",
        content: "UOS Courses – Class 10 & 12 Open School Admission Eligibility",
      },
      {
        property: "og:description",
        content:
          "Understand eligibility, course structure and open school learning pathways for UOS Dehradun Class 10 and Class 12 students.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uttarakhandopenschool.com/courses" }],
  }),
  component: CoursesPage,
});
