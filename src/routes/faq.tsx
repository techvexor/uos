import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/uos/page-frame";
import { buildFaqSchema, FaqList, StructuredData } from "@/lib/seo";

const faqItems = [
  {
    question: "How to get admission in Uttarakhand Open School?",
    answer:
      "Eligible learners can apply by following the current admission notification, completing the online or offline registration form, submitting the required documents, and paying the prescribed fee before the last date.",
  },
  {
    question: "What is the age limit for UOS Class 10 admission?",
    answer:
      "The minimum age for Uttarakhand Open School Class 10 admission is 14 years as on 1 August of the admission year.",
  },
  {
    question: "What is the age limit for UOS Class 12 admission?",
    answer:
      "The minimum age for Uttarakhand Open School Class 12 admission is 16 years as on 1 August of the admission year, and candidates are expected to qualify the prescribed entrance test if applicable.",
  },
  {
    question: "Is Uttarakhand Open School certificate valid for government jobs?",
    answer:
      "The certificate is valid where the receiving authority accepts open school certification under the relevant rules, qualifications, and recruitment criteria.",
  },
  {
    question: "How do I check UOS Dehradun exam result online?",
    answer:
      "Visit the official result portal or the Board notice section and use your enrollment number or candidate details to access the result for the relevant session.",
  },
  {
    question: "What is dual enrollment in Uttarakhand Open School?",
    answer:
      "Dual enrollment allows a learner to continue studying in a regular school while also pursuing a recognised open school course, subject to the relevant subject and study rules.",
  },
  {
    question: "Can I do Class 10 and Class 12 together at UOS?",
    answer:
      "Learners should follow the specific programme rules and prescribed combinations for admission. The Board provides separate eligibility and subject guidance for each course level.",
  },
  {
    question: "Is the UOS certificate recognised for higher education?",
    answer:
      "UOS certificates are intended to support continuity in education and are accepted where the receiving institution or authority recognises the certificate under applicable requirements.",
  },
  {
    question: "What is the admission fee for Uttarakhand Open School?",
    answer:
      "The exact admission fee depends on the session, level, and subject selection. Candidates should check the official notification and prospectus for current fee details.",
  },
  {
    question: "Can I apply for part admission in UOS?",
    answer:
      "Yes, learners may apply for part admission for selected subjects, though the programme and academic outcome depends on the specific Board rules and subject combination.",
  },
  {
    question: "What documents are needed for admission?",
    answer:
      "Candidates typically need the relevant academic record, identity documents, passport-size photographs, and any additional documents named in the official notification or prospectus.",
  },
  {
    question: "Does UOS offer free education for disadvantaged students?",
    answer:
      "UOS supports educational access for socially, educationally and economically disadvantaged learners and provides provisions for free education where applicable under official guidelines.",
  },
  {
    question: "How can I download the UOS admit card?",
    answer:
      "Admit cards are published for eligible candidates through the official download or student service section. Candidates should check the notice for the exact issue date and login instructions.",
  },
  {
    question: "What are the study options for working learners?",
    answer:
      "The flexible open school model is designed to support working learners, school dropouts, and learners balancing education with other responsibilities.",
  },
  {
    question: "How is UOS different from regular school?",
    answer:
      "Uttarakhand Open School offers flexible, open-distance learning pathways that are accessible to learners who need a more adaptable mode of study than a conventional full-time school schedule.",
  },
  {
    question: "Can I apply without regular school?",
    answer:
      "Yes, many learners apply through UOS without traditional full-time school attendance, depending on age, programme eligibility, and administrative requirements.",
  },
  {
    question: "What is the Class 10 eligibility for open school in Uttarakhand?",
    answer:
      "Applicants must meet the required age and academic conditions specified for the programme, and the Board may require documentary proof as per the admission notice.",
  },
  {
    question: "What is the Class 12 age limit in Uttarakhand Open School?",
    answer:
      "The minimum age is typically 16 years as on 1 August of the admission year, with programme-specific requirements applied according to official rules.",
  },
  {
    question: "What is an academic centre in UOS?",
    answer:
      "Academic centres support learners with counselling, learning resources, contact points, and guidance on examinations and related student services.",
  },
  {
    question: "Does UOS have vocational courses?",
    answer:
      "Yes, UOS supports vocational and skill-based learning initiatives that complement academic education and support livelihood-oriented development.",
  },
  {
    question: "How can I contact the UOS office?",
    answer:
      "Candidates may contact the Board office through the official contact details posted on the website or by using the enquiry form for admissions, exams, and student services.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Uttarakhand Open School FAQ | Admission, Result, Eligibility & Certificates" },
      {
        name: "description",
        content:
          "Find answers to Uttarakhand Open School admission, age limit, result, fee, dual enrollment, and certificate validity questions in one place.",
      },
      {
        property: "og:title",
        content: "Uttarakhand Open School FAQ | Admission, Result, Eligibility & Certificates",
      },
      {
        property: "og:description",
        content:
          "Read essential FAQ answers for Uttarakhand Open School admission, Class 10 and Class 12 eligibility, result checking, and certificate validity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uttarakhandopenschool.com/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <StructuredData data={buildFaqSchema(faqItems)} />
      <PageFrame
        eyebrow="Student Help"
        title="Frequently asked questions about Uttarakhand Open School"
        intro="Find clear answers on admissions, eligibility, results, certificate validity, and important student services for UOS Dehradun."
      >
        <div className="space-y-6">
          <div className="border-l-4 border-saffron bg-card p-6 shadow-sm">
            <p className="text-base leading-7 text-muted-foreground">
              These FAQs are written in the same question style used by modern search and AI
              assistants, helping users find direct answers about Uttarakhand Open School admission,
              Class 10 and 12 rules, certificate recognition, and result checking.
            </p>
          </div>
          <FaqList items={faqItems} title="UOS admission and student FAQs" />
        </div>
      </PageFrame>
    </>
  );
}
