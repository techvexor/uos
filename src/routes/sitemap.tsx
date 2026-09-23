import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/uos/page-frame";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Uttarakhand Open School" },
      { name: "description", content: "Browse every page and student service on the UOS website." },
      { property: "og:title", content: "Sitemap — Uttarakhand Open School" },
      {
        property: "og:description",
        content: "Browse every page and student service on the UOS website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SitemapPage,
});

const groups = [
  [
    "About & Governance",
    [
      ["About Us", "/about"],
      ["Board Profile", "/board-profile"],
      ["About State", "/about-state"],
      ["Contact Us", "/contact"],
    ],
  ],
  [
    "Academics",
    [
      ["Courses", "/courses"],
      ["Fee Structure", "/fee-structure"],
      ["Schools", "/schools"],
      ["AI Centers", "/ai-centers"],
      ["Study Material", "/study-material"],
      ["Calendar", "/calendar"],
      ["Vocational Education", "/vocational-education"],
    ],
  ],
  [
    "Student Services",
    [
      ["Eligibility", "/eligibility"],
      ["Admit Card", "/admit-card"],
      ["Enrollment Card", "/enrollment-card"],
      ["Exam Results", "/results"],
      ["Student Login", "/login"],
      ["Online Database", "/online-database"],
      ["Downloads", "/downloads"],
      ["Notices", "/notices"],
    ],
  ],
] as const;
function SitemapPage() {
  return (
    <PageFrame
      eyebrow="Website Directory"
      title="Sitemap"
      intro="Find academic information, Board services and student resources."
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map(([title, links]) => (
          <section key={title} className="border-t-4 border-saffron bg-card p-6 shadow-sm">
            <h2 className="font-display text-xl font-bold text-primary">{title}</h2>
            <nav className="mt-4 grid gap-3">
              {links.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="font-semibold text-foreground hover:text-primary hover:underline"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </section>
        ))}
      </div>
    </PageFrame>
  );
}
