import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  BriefcaseBusiness,
  CircleCheck,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { StudentLinks } from "@/components/uos/page-frame";
import { buildFaqSchema, buildOrganizationSchema, FaqList, StructuredData } from "@/lib/seo";

const heroSlides = [
  { src: "/images/slide-1.jpg", alt: "Students learning together" },
  { src: "/images/slide-2.jpg", alt: "Open school classroom" },
  { src: "/images/slide-3.jpg", alt: "Students studying at school" },
  { src: "/images/slide-4.jpg", alt: "Students taking an examination" },
  { src: "/images/slide-5.png", alt: "Students learning in a vocational laboratory" },
] as const;

const homeFaq = [
  {
    question: "How to get admission in Uttarakhand Open School?",
    answer:
      "Eligible learners can apply for Uttarakhand Open School admission by following the current admission notification, submitting the required documents, and completing the registration and fee process before the last date.",
  },
  {
    question: "What is the age limit for UOS Class 10 admission?",
    answer:
      "The minimum age for Uttarakhand Open School Class 10 admission is 14 years as on 1 August of the admission year.",
  },
  {
    question: "What is the age limit for UOS Class 12 admission?",
    answer:
      "The minimum age for Uttarakhand Open School Class 12 admission is 16 years as on 1 August of the admission year, and candidates may need to qualify the prescribed entrance test.",
  },
  {
    question: "Is Uttarakhand Open School certificate valid for government jobs?",
    answer:
      "Uttarakhand Open School certificates are recognised for continuing education and are valid where the relevant employment or academic authority accepts the board certificate according to applicable rules.",
  },
  {
    question: "How can I check my UOS result online?",
    answer:
      "Candidates can check their Uttarakhand Open School result online using the official result portal and their enrollment number or the details provided in the official notice.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Uttarakhand Open School (UOS) Dehradun | Official Website – Admission, Result, Login",
      },
      {
        name: "description",
        content:
          "Uttarakhand Open School (UOS), Dehradun – Govt. approved and recognised open schooling board. Apply for Class 10 & 12 admission, check results, download date sheet, and access free education for disadvantaged students.",
      },
      {
        property: "og:title",
        content: "Uttarakhand Open School (UOS) Dehradun | Official Website",
      },
      {
        property: "og:description",
        content:
          "Government-approved open school in Uttarakhand for Class 10 and Class 12 admissions, results, and student services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uttarakhandopenschool.com/" }],
  }),
  component: Index,
});

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (slideIndex: number) => {
    setActiveSlide((slideIndex + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      <StructuredData data={buildOrganizationSchema()} />
      <StructuredData data={buildFaqSchema(homeFaq)} />
      <main>
        <section className="relative aspect-[16/8] overflow-hidden bg-primary text-primary-foreground sm:aspect-[16/6] lg:aspect-[16/5]">
          <div className="absolute inset-0" aria-label="UOS learning gallery" role="region">
            {heroSlides.map((slide, slideIndex) => (
              <img
                key={slide.src}
                src={slide.src}
                width={1600}
                height={900}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  slideIndex === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="site-container relative flex h-full items-end justify-center pb-5 pt-3 sm:pb-7 sm:pt-4">
            <div className="flex items-center gap-2" aria-label="Hero slider controls">
              <button
                type="button"
                onClick={() => showSlide(activeSlide - 1)}
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/40 bg-primary/35 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                aria-label="Previous hero slide"
              >
                <ChevronLeft size={20} />
              </button>
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => showSlide(slideIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    slideIndex === activeSlide
                      ? "w-8 bg-saffron"
                      : "w-2.5 bg-primary-foreground/60 hover:bg-primary-foreground"
                  }`}
                  aria-label={`Show hero slide ${slideIndex + 1}`}
                  aria-current={slideIndex === activeSlide ? "true" : undefined}
                />
              ))}
              <button
                type="button"
                onClick={() => showSlide(activeSlide + 1)}
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/40 bg-primary/35 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                aria-label="Next hero slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-saffron text-saffron-foreground">
          <div className="site-container grid gap-5 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase">Admissions Open</p>
              <h2 className="font-display text-2xl font-extrabold">Session October 2026</h2>
            </div>
            <Button asChild>
              <Link to="/downloads">Download Date Sheet</Link>
            </Button>
          </div>
        </section>

        <section className="section-shell">
          <div className="site-container grid gap-10 pb-6 pt-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:pb-8 lg:pt-16">
            <div className="min-w-0">
              <div>
                <p className="eyebrow">About UOS</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-primary">
                  Welcome to Uttarakhand Open School, Dehradun
                </h2>
              </div>
              <div className="prose-uos mt-6 max-w-4xl">
                <p>
                  Uttarakhand Open School (UOS), Dehradun, is a government-approved and recognised
                  open schooling institution dedicated to making secondary and senior secondary
                  education accessible to every learner across Uttarakhand.
                </p>
                <p>
                  UOS offers professional support to government bodies and other agencies working in
                  school education, contributing to the growth of the distance and open learning
                  system in India. We design vocational and continuing education curricula that
                  prepare students for the world of work.
                </p>
                <p>
                  Candidates who have completed 16 years of age as of 1st August of the admission
                  year, and who qualify the prescribed entrance test, are eligible to pursue
                  senior/higher secondary courses through our Open Distance Learning (ODL) mode.
                  Functioning as a subsidiary of the Department of Education, UOS serves the
                  educational needs of school dropouts, working professionals seeking career
                  advancement, and other disadvantaged groups. All secondary and senior secondary
                  certificates issued by UOS are registered with the State Government. UOS follows
                  the curriculum prescribed by NCERT and the Central Board of Secondary Education
                  (CBSE), Delhi, along with additional guidelines issued by the State and Central
                  Governments.
                </p>
              </div>
            </div>
            <StudentLinks />
          </div>
        </section>

        <section className="site-container pb-12 pt-4 lg:pb-16 lg:pt-6">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Why choose UOS</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary">
              Accessible education for every learner
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="metric-card rounded-2xl border p-6">
              <span className="icon-box">
                <ShieldCheck />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">
                Recognised learning
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Government-aligned open school education designed for flexible and credible academic
                progression.
              </p>
            </article>
            <article className="metric-card rounded-2xl border p-6">
              <span className="icon-box">
                <BriefcaseBusiness />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">Skill-focused</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Vocational and career-oriented choices support students who want practical learning
                outcomes.
              </p>
            </article>
            <article className="metric-card rounded-2xl border p-6">
              <span className="icon-box">
                <BookOpen />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">
                Inclusive support
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Dedicated pathways for school dropouts, disadvantaged learners, and working
                students.
              </p>
            </article>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="site-container grid gap-10 py-12 md:grid-cols-2 md:py-16">
            <article className="rounded-3xl border border-border bg-gradient-to-br from-white to-slate-50 p-7 shadow-sm">
              <span className="icon-box">
                <ShieldCheck />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-primary">
                Validity of academic certificates
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Board certificates are registered for government employment and further education in
                accordance with Board statutes and applicable requirements.
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-gradient-to-br from-amber-50 to-orange-50 p-7 shadow-sm">
              <span className="icon-box">
                <BriefcaseBusiness />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-primary">
                Vocational education
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Explore skill development and vocational training initiatives designed to complement
                academic learning in Uttarakhand.
              </p>
              <Button asChild variant="ghost" className="mt-3 px-0 text-primary">
                <Link to="/vocational-education">
                  View initiative <span aria-hidden="true">›</span>
                </Link>
              </Button>
            </article>
          </div>
        </section>

        <FaqList items={homeFaq} title="Common questions about Uttarakhand Open School" />
      </main>
    </>
  );
}

function Feature({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="border-t-4 border-saffron bg-card p-6 shadow-sm">
      <span className="icon-box">{icon}</span>
      <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{children}</p>
    </article>
  );
}
