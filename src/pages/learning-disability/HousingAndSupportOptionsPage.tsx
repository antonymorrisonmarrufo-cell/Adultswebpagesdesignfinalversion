import { Link } from "react-router-dom";

const cards = [
  {
    title: "Living with family",
    description:
      "Support available for people with learning disabilities who live with their family, including respite care and family support services.",
    to: "/learning-disability-support/housing-options/living-with-family",
  },
  {
    title: "Supported living",
    description:
      "Living in your own home or a shared house with the support you need to be as independent as possible.",
    to: "/learning-disability-support/housing-options/supported-living",
  },
  {
    title: "Residential care",
    description:
      "Care homes that provide around-the-clock support for people with learning disabilities who have higher levels of need.",
    to: "/learning-disability-support/housing-options/residential-care",
  },
  {
    title: "Shared Lives",
    description:
      "Living with an approved Shared Lives carer in their family home, with support tailored to your needs.",
    to: "/learning-disability-support/housing-options/shared-lives",
  },
  {
    title: "Independent living",
    description:
      "Support and services to help you live independently in your own home, including tenancy support and life skills training.",
    to: "/learning-disability-support/housing-options/independent-living",
  },
];

export default function HousingAndSupportOptionsPage() {
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
      <li className="flex items-center gap-1">
      <Link
      to="/learning-disability-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Learning disability support
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Housing options</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Housing and support options
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      There are several housing and support options for people with learning
      disabilities in Waltham Forest. The right option depends on your needs,
      preferences and circumstances. We will work with you to find the best
      solution.
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
      <div className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Need advice about housing?</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      Our team can help you explore the housing options that are right for you or
      the person you care for. We can also help if your current housing situation
      is no longer working.
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
