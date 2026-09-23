import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageFrame({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main>
      <header className="page-banner">
        <div className="site-container py-10 sm:py-14">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-2 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-4 max-w-3xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
      </header>
      <div className="site-container grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-14">
        <div className="min-w-0">{children}</div>
        <StudentLinks />
      </div>
    </main>
  );
}

const studentLinks = [
  ["Eligibility", "/eligibility"],
  ["Admit Card", "/admit-card"],
  ["Enrollment Card", "/enrollment-card"],
  ["Exam Results", "/results"],
  ["Student Login", "/login"],
  ["Online Database", "/online-database"],
  ["Download Section", "/downloads"],
  ["Notices", "/notices"],
] as const;

export function StudentLinks() {
  return (
    <aside
      aria-labelledby="student-section"
      className="h-fit border-t-4 border-saffron bg-card shadow-sm"
    >
      <h2
        id="student-section"
        className="bg-primary px-5 py-4 font-display text-lg font-bold text-primary-foreground"
      >
        Student Section
      </h2>
      <nav className="divide-y divide-border" aria-label="Student services">
        {studentLinks.map(([label, href]) => (
          <Link
            key={href}
            to={href}
            className="flex min-h-12 items-center justify-between px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            {label}
            <span aria-hidden="true">›</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="border border-border bg-card p-6 shadow-sm">
      <h2 className="font-display text-xl font-bold text-primary">{title}</h2>
      <div className="prose-uos mt-3">{children}</div>
    </article>
  );
}
