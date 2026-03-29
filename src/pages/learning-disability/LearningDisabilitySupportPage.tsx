import { Link } from "react-router-dom";

const cards = [
  {
    title: "Ask for support",
    description:
      "Find out how to ask for learning disability support, including self-referral, what happens next and the assessment process.",
    to: "/learning-disability-support/ask-for-support",
  },
  {
    title: "Support for carers",
    description:
      "Information about carers assessments, respite care, support groups and practical help for those caring for someone with a learning disability.",
    to: "/learning-disability-support/support-for-carers",
  },
  {
    title: "Preparing for adulthood",
    description:
      "Support for young people moving from children's to adult services, including education, employment and independent living.",
    to: "/learning-disability-support/preparing-for-adulthood",
  },
  {
    title: "Easy read resources",
    description:
      "Accessible information and documents in easy read format to help you understand our services and your rights.",
    to: "/learning-disability-support/easy-read-resources",
  },
  {
    title: "Professional referral",
    description:
      "Information for professionals on how to refer someone for learning disability support, including what information to include.",
    to: "/learning-disability-support/professional-referral",
  },
  {
    title: "Request support",
    description:
      "Complete our online form to request learning disability support for yourself or someone you care for.",
    to: "/learning-disability-support/request-support",
  },
  {
    title: "Housing options",
    description:
      "Explore housing and support options including supported living, residential care, Shared Lives and independent living.",
    to: "/learning-disability-support/housing-options",
  },
];

export default function LearningDisabilitySupportPage() {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
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
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Learning disability support
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          Waltham Forest Council provides a range of services for people with learning
          disabilities and their families. We are committed to helping people live as
          independently as possible and to have choice and control over their lives.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-wf-pink"
            >
              <h2 className="text-xl font-bold text-wf-pink group-hover:underline">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-wf-gray leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact banner */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-lg border-l-4 border-wf-green bg-[#d7f8ff] p-6">
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
  );
}
