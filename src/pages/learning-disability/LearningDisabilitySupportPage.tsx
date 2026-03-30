import { Link } from "react-router-dom";

const cards = [
  {
    title: "Ask for support",
    description:
      "Find out how to ask for learning disability support, including self-referral, what happens next and the assessment process.",
    to: "/adult-social-care/learning-disability-support/ask-for-support",
  },
  {
    title: "Support for carers",
    description:
      "Information about carers assessments, respite care, support groups and practical help for those caring for someone with a learning disability.",
    to: "/adult-social-care/learning-disability-support/support-for-carers-and-families",
  },
  {
    title: "Preparing for adulthood",
    description:
      "Support for young people moving from children's to adult services, including education, employment and independent living.",
    to: "/adult-social-care/learning-disability-support/preparing-for-adulthood",
  },
  {
    title: "Easy read resources",
    description:
      "Accessible information and documents in easy read format to help you understand our services and your rights.",
    to: "/adult-social-care/learning-disability-support/easy-read-information-and-resources",
  },
  {
    title: "Professional referral",
    description:
      "Information for professionals on how to refer someone for learning disability support, including what information to include.",
    to: "/adult-social-care/learning-disability-support/professional-referral",
  },
  {
    title: "Request support",
    description:
      "Complete our online form to request learning disability support for yourself or someone you care for.",
    to: "/adult-social-care/learning-disability-support/request-support",
  },
  {
    title: "Housing options",
    description:
      "Explore housing and support options including supported living, residential care, Shared Lives and independent living.",
    to: "/adult-social-care/learning-disability-support/housing-and-support-options",
  },
];

export default function LearningDisabilitySupportPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">
      Home
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/adult-social-care"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Adult Social Care
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Learning disability support</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Learning disability support
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      Waltham Forest Council provides a range of services for people with learning
      disabilities and their families. We are committed to helping people live as
      independently as possible and to have choice and control over their lives.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Cards grid */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card) => (
      <Link
      key={card.to}
      to={card.to}
      className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
      >
      <h3 className="text-base font-bold text-[#bf3688] mb-2">
      {card.title}
      </h3>
      <p className="text-sm text-[#231F20] flex-1">
      {card.description}
      </p>
      <div className="flex justify-end mt-4">
        <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
      </Link>
      ))}
      </div>
      </div>

      {/* Contact banner */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Need help?</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you or someone you know has a learning disability and needs support,
      contact our Adult Social Care team. We can help you understand what support
      is available and how to access it.
      </p>
      <p className="mt-3 text-sm font-semibold text-wf-dark">
      Telephone:{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </p>
      <p className="mt-1 text-sm text-wf-gray">
      Monday to Friday, 9am to 5pm (excluding bank holidays)
      </p>
      </div>
      </div>

      {/* Last updated */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <p className="text-xs text-wf-gray">Last updated: March 2026</p>
      </div>
        </div>
      </div>
    </div>
  );
}
