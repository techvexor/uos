import { Link } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  CircleCheck,
  Download,
  GraduationCap,
  Landmark,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { InfoCard, PageFrame } from "./page-frame";

export function AboutPage() {
  return (
    <PageFrame
      eyebrow="About the Board"
      title="Education without barriers"
      intro="UOS extends recognised secondary and senior secondary learning to people whose circumstances put conventional schooling out of reach."
    >
      <div className="space-y-8">
        <section className="prose-uos">
          <h2>Our mission</h2>
          <p>
            Uttarakhand Open School serves school dropouts, working professionals seeking promotion,
            and learners from socially, educationally and economically disadvantaged communities
            through flexible open and distance learning.
          </p>
          <p>
            The Board functions as a subsidiary of the Department of Education and follows
            curriculum guidance aligned with NCERT and CBSE standards. Its purpose is to make
            credible school education available regardless of age, location or personal
            circumstance.
          </p>
        </section>
        <div className="grid gap-5 sm:grid-cols-2">
          <InfoCard title="Flexible learning">
            <p>
              Individualised study pathways allow learners to progress at a suitable pace while
              balancing work and family responsibilities.
            </p>
          </InfoCard>
          <InfoCard title="Academic reach">
            <p>
              Study and academic centres bring guidance, learning materials and examinations closer
              to communities across Uttarakhand.
            </p>
          </InfoCard>
          <InfoCard title="Inclusive opportunity">
            <p>
              Programmes prioritise school dropouts, working learners, SC/ST communities and other
              disadvantaged groups.
            </p>
          </InfoCard>
          <InfoCard title="Skills for life">
            <p>
              Vocational and continuing education initiatives connect academic progress with
              practical skills and livelihoods.
            </p>
          </InfoCard>
        </div>
      </div>
    </PageFrame>
  );
}

export function CoursesPage() {
  return (
    <PageFrame
      eyebrow="Academic Programmes"
      title="Courses and eligibility"
      intro="Choose a recognised pathway designed for flexible learning and clear academic progression."
    >
      <div className="grid gap-6">
        <Course
          title="High School (10th Class)"
          icon={<BookOpen />}
          items={[
            "Minimum age: 14 years as on 1 August of the admission year.",
            "Open to eligible learners seeking secondary-level certification.",
            "Flexible study support through recognised academic centres.",
          ]}
        />
        <Course
          title="Intermediate (12th Class)"
          icon={<GraduationCap />}
          items={[
            "Minimum age: 16 years as on 1 August of the admission year.",
            "Admission follows successful qualification in the prescribed entrance test.",
            "Senior secondary study aligned with recognised curriculum guidance.",
          ]}
        />
        <InfoCard title="Part Admission">
          <p>
            Learners may take up to four subjects. Part admission provides a mark sheet only and
            does not lead to a full certificate.
          </p>
        </InfoCard>
      </div>
    </PageFrame>
  );
}
function Course({ title, icon, items }: { title: string; icon: ReactNode; items: string[] }) {
  return (
    <article className="border-l-4 border-saffron bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <span className="icon-box">{icon}</span>
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">{title}</h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <CircleCheck className="mt-0.5 shrink-0 text-saffron" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

const committees = [
  "General Body",
  "Governing Body",
  "Executive Committee",
  "Academic Committee",
  "Finance Committee",
  "Research Committee",
  "Schools/Academic Centers Development Committee",
  "Online Education Committee",
];
export function BoardProfilePage() {
  return (
    <PageFrame
      eyebrow="Governance"
      title="Board profile"
      intro="A committee-led governance structure supports academic quality, financial oversight, research and access."
    >
      <Accordion.Root type="single" collapsible className="border border-border bg-card">
        {committees.map((name, index) => (
          <Accordion.Item
            value={`item-${index}`}
            key={name}
            className="border-b border-border last:border-b-0"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display font-bold text-primary hover:bg-muted">
                {name}
                <ChevronDown
                  className="shrink-0 transition-transform group-data-[state=open]:rotate-180"
                  size={20}
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground">
                This authority contributes to policy, oversight and accountable delivery within its
                designated area of the Board’s work.
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </PageFrame>
  );
}

const notices = [
  ["20 Sep 2026", "Examination schedule for October 2026 session"],
  ["12 Sep 2026", "Instructions for downloading admit cards"],
  ["28 Aug 2026", "Admission extension notification — October 2026"],
  ["16 Aug 2026", "Academic centre compliance circular"],
] as const;
export function NoticesPage() {
  return (
    <PageFrame
      eyebrow="Updates"
      title="Notices & announcements"
      intro="Official circulars, examination updates and student information from Uttarakhand Open School."
    >
      <div className="divide-y divide-border border-y border-border">
        {notices.map(([date, title], i) => (
          <article
            key={title}
            className="grid gap-2 py-5 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-center"
          >
            <time className="text-xs font-bold uppercase text-muted-foreground">{date}</time>
            <h2 className="font-display text-lg font-bold text-primary">{title}</h2>
            <Button variant="ghost" className="w-fit px-0" aria-label={`View ${title}`}>
              View notice <span aria-hidden="true">›</span>
            </Button>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
export function DownloadsPage() {
  const docs = [
    "October 2026 Examination Date Sheet",
    "Admission Prospectus 2026–27",
    "High School Subject List",
    "Intermediate Subject List",
    "Academic Centre Application Form",
  ];
  return (
    <PageFrame
      eyebrow="Resources"
      title="Download section"
      intro="Access current examination, admission and academic documents."
    >
      <div className="grid gap-3">
        {docs.map((doc, i) => (
          <a
            key={doc}
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(`${doc}\n\nOfficial document preview for Uttarakhand Open School.`)}`}
            download={`${doc.toLowerCase().replaceAll(" ", "-").replaceAll("–", "-")}.txt`}
            className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border border-border bg-card p-4 hover:border-saffron"
          >
            <span className="icon-box">
              <Download size={20} />
            </span>
            <span className="min-w-0 font-semibold text-primary">
              {doc}
              <small className="block pt-1 font-normal text-muted-foreground">
                Official document • {i === 0 ? "20 Sep 2026" : "2026"}
              </small>
            </span>
            <span className="text-sm font-bold text-saffron">Download</span>
          </a>
        ))}
      </div>
    </PageFrame>
  );
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <PageFrame
      eyebrow="Contact"
      title="We are here to help"
      intro="Contact the Board office for guidance on admissions, examinations, centres and student services."
    >
      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <InfoCard title="Board Office">
            <p>
              Uttarakhand Open School
              <br />
              Dehradun, Uttarakhand, India
            </p>
            <p className="mt-3">
              Please use the enquiry form for the appropriate department to respond.
            </p>
          </InfoCard>
          <div className="grid min-h-64 place-items-center border border-border bg-map text-center">
            <div>
              <Landmark className="mx-auto text-primary" size={34} />
              <p className="mt-3 font-bold text-primary">Dehradun, Uttarakhand</p>
              <p className="text-sm text-muted-foreground">Map location placeholder</p>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="border-t-4 border-saffron bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-bold text-primary">Send an enquiry</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" />
            <Field label="Email address" name="email" type="email" />
            <Field label="Mobile number" name="phone" />
            <label className="grid gap-2 text-sm font-semibold">
              Enquiry type
              <select required className="form-field">
                <option>Admissions</option>
                <option>Examinations</option>
                <option>Academic Centres</option>
                <option>Other</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              Message
              <textarea required rows={5} className="form-field resize-y" />
            </label>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit">Submit enquiry</Button>
            {sent ? (
              <p role="status" className="text-sm font-semibold text-success">
                Thank you. Your enquiry has been recorded for this demonstration.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </PageFrame>
  );
}
function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input required name={name} type={type} className="form-field" />
    </label>
  );
}

export function LoginPage() {
  return (
    <PageFrame
      eyebrow="Student Services"
      title="Student login"
      intro="Use your enrolment details to access the student portal."
    >
      <form
        className="mx-auto max-w-lg border-t-4 border-saffron bg-card p-7 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-5">
          <Field label="Enrollment number" name="enrollment" />
          <Field label="Date of birth" name="dob" type="date" />
          <Button type="submit">Sign in to portal</Button>
          <p className="text-center text-xs leading-5 text-muted-foreground">
            Portal access is a demonstration. No credentials are stored or submitted.
          </p>
        </div>
      </form>
    </PageFrame>
  );
}

const generic: Record<
  string,
  { eyebrow: string; title: string; intro: string; body: string; icon: ReactNode }
> = {
  affiliation: {
    eyebrow: "Institutional Services",
    title: "Affiliation",
    intro: "Guidance for institutions seeking recognition as UOS academic centres.",
    body: "Applications are reviewed against academic, infrastructure and learner-support standards. Institutions should consult the current prospectus and official notices before applying.",
    icon: <Building2 />,
  },
  fees: {
    eyebrow: "Admissions",
    title: "Fee structure",
    intro: "Clear guidance on programme and examination fees.",
    body: "Fees vary by programme, subject combination and session. Refer to the current admission prospectus for the approved schedule; only official payment channels should be used.",
    icon: <BriefcaseBusiness />,
  },
  schools: {
    eyebrow: "Our Network",
    title: "Schools & academic centres",
    intro: "Recognised centres provide local guidance and academic support.",
    body: "Use official centre listings and verify recognition status before admission. UOS centres support counselling, learning resources and examination-related communication.",
    icon: <Building2 />,
  },
  ai: {
    eyebrow: "Accredited Institutions",
    title: "AI Centers",
    intro: "Information for Accredited Institution centres serving UOS learners.",
    body: "Accredited Institutions operate under Board guidelines and are subject to verification, monitoring and compliance requirements.",
    icon: <ShieldCheck />,
  },
  study: {
    eyebrow: "Learning Resources",
    title: "Study material",
    intro: "Programme-wise learning resources for independent study.",
    body: "Course materials support flexible learning for High School and Intermediate students. Current subject resources and updates are published through the Download Section.",
    icon: <BookOpen />,
  },
  state: {
    eyebrow: "Uttarakhand",
    title: "About the state",
    intro: "Expanding accessible education across the hill state of Uttarakhand.",
    body: "Uttarakhand’s geography and diverse communities make flexible learning especially valuable. Open schooling helps education reach learners across urban, rural and remote regions.",
    icon: <Landmark />,
  },
  calendar: {
    eyebrow: "Academic Year",
    title: "Academic calendar",
    intro: "Key dates for the 2026–27 academic cycle.",
    body: "Admissions for the October 2026 session are open. Examination schedules, admit card dates and result updates are announced through official notices.",
    icon: <CalendarDays />,
  },
  eligibility: {
    eyebrow: "Student Services",
    title: "Eligibility",
    intro: "Review the entry requirements for UOS programmes.",
    body: "High School applicants must be at least 14 years old on 1 August of the admission year. Intermediate applicants must be at least 16 and qualify the prescribed entrance test.",
    icon: <CircleCheck />,
  },
  admit: {
    eyebrow: "Examinations",
    title: "Admit card",
    intro: "Admit card services for registered examination candidates.",
    body: "When released, candidates can access admit cards using their enrolment details. Check Notices for the issue date and examination instructions.",
    icon: <Download />,
  },
  enrollment: {
    eyebrow: "Student Services",
    title: "Enrollment card",
    intro: "Access enrollment information for confirmed admissions.",
    body: "Enrollment cards are made available after admission verification. Keep your application and enrollment numbers ready for portal access.",
    icon: <Users />,
  },
  results: {
    eyebrow: "Examinations",
    title: "Exam results",
    intro: "Result services for High School and Intermediate examinations.",
    body: "Published results can be searched using the candidate’s enrollment number and session. Printed statements remain subject to Board verification.",
    icon: <Search />,
  },
  database: {
    eyebrow: "Verification",
    title: "Online database",
    intro: "Search and verification services for UOS academic records.",
    body: "The online database supports authorised verification of student records. Additional details may be required to protect candidate information.",
    icon: <Search />,
  },
  vocational: {
    eyebrow: "Skills & Livelihoods",
    title: "Vocational education",
    intro: "Practical learning initiatives for the people of Uttarakhand.",
    body: "The Workshop on Skill Development & Vocational Training Initiatives in Uttarakhand by UOS connects flexible education with employment-oriented skills and continuing learning.",
    icon: <BriefcaseBusiness />,
  },
};
export function GenericPage({ kind }: { kind: keyof typeof generic }) {
  const p = generic[kind];
  if (!p) return null;
  return (
    <PageFrame eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <article className="border-l-4 border-saffron bg-card p-7 shadow-sm">
        <span className="icon-box">{p.icon}</span>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">{p.body}</p>
        {["study", "calendar", "admit"].includes(kind) ? (
          <Button asChild className="mt-6">
            <Link to="/downloads">View downloads</Link>
          </Button>
        ) : null}
      </article>
    </PageFrame>
  );
}
