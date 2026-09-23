export type FaqItem = {
  question: string;
  answer: string;
};

export function StructuredData({
  data,
}: {
  data?: Record<string, unknown> | Record<string, unknown>[];
}) {
  if (!data) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Uttarakhand Open School, Dehradun",
    alternateName: "UOS",
    url: "https://uttarakhandopenschool.com",
    logo: "https://uttarakhandopenschool.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
    sameAs: [],
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  if (!items.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Uttarakhand Open School Class 10 and Class 12 Admission",
    description:
      "Open school admissions for Class 10 and Class 12 in Uttarakhand, including eligibility, flexible study options, and recognised certificates.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Uttarakhand Open School, Dehradun",
      sameAs: "https://uttarakhandopenschool.com",
    },
    educationalLevel: ["Secondary School", "Senior Secondary School"],
    teaches: ["Class 10", "Class 12"],
  };
}

export function FaqList({
  items,
  title = "Frequently asked questions",
}: {
  items: FaqItem[];
  title?: string;
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="mt-10 border-t border-border pt-10">
      <div className="site-container">
        <h2 className="font-display text-3xl font-bold text-primary">{title}</h2>
        <div className="mt-6 space-y-3">
          {items.map(({ question, answer }) => (
            <details
              key={question}
              className="rounded-lg border border-border bg-card p-4 shadow-sm"
              open={question === items[0]?.question}
            >
              <summary className="cursor-pointer list-none font-semibold text-primary">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
