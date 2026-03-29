import { Link } from "react-router-dom";

const cards = [
  {
    title: "Getting help and support",
    description:
      "Find out when to seek help, how to get a GP referral, and what local support services are available.",
    to: "/adult-social-care/dementia-support/get-help",
  },
  {
    title: "Hornbeam Dementia Hub",
    description:
      "A welcoming centre offering information, activities and support for people living with dementia and their carers.",
    to: "/adult-social-care/dementia-support/hub",
  },
  {
    title: "Memory assessment service",
    description:
      "Learn what to expect from a memory assessment, how to get referred and what happens during the process.",
    to: "/adult-social-care/dementia-support/memory-service",
  },
  {
    title: "Activities and social groups",
    description:
      "Singing for the Brain, art therapy, exercise classes, lunch clubs and other activities in Waltham Forest.",
    to: "/adult-social-care/dementia-support/activities",
  },
  {
    title: "Dementia adviser service",
    description:
      "One-to-one support from a dedicated adviser who can help you navigate life after a dementia diagnosis.",
    to: "/adult-social-care/dementia-support/adviser",
  },
  {
    title: "iDOS - online dementia resources",
    description:
      "Digital tools, apps and online support to help people with dementia and their carers.",
    to: "/adult-social-care/dementia-support/idos",
  },
  {
    title: "Support for carers",
    description:
      "Respite care, support groups, carers assessments and practical help for those caring for someone with dementia.",
    to: "/adult-social-care/dementia-support/carers",
  },
  {
    title: "Planning for the future",
    description:
      "Guidance on lasting power of attorney, advance care planning, wills and other important decisions.",
    to: "/adult-social-care/dementia-support/planning",
  },
];

export default function DementiaSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <span className="font-medium text-wf-dark">Dementia support</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Dementia support
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          Waltham Forest Council provides a range of services and support for people
          living with dementia and their families. Whether you have recently received a
          diagnosis or have been living with dementia for some time, we are here to help.
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
        <div className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
          <h2 className="text-xl font-bold text-wf-pink">Need help now?</h2>
          <p className="mt-2 text-sm text-wf-dark leading-relaxed">
            If you are worried about your memory or the memory of someone you know,
            speak to your GP. You can also contact our Adult Social Care team for advice
            and support.
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
