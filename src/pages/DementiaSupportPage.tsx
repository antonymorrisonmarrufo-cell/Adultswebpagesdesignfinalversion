import { Link } from "react-router-dom";

const cards = [
  {
    title: "Getting help and support",
    description:
      "Find out what local support services are available, including the Dementia Hub, adviser service, and when to see your GP.",
    to: "/dementia/get-help",
  },
  {
    title: "Hornbeam Dementia Hub",
    description:
      "A welcoming centre offering information, activities and support for people living with dementia and their carers.",
    to: "/dementia/hub",
  },
  {
    title: "Activities and social groups",
    description:
      "Singing for the Brain, art therapy, exercise classes, lunch clubs and other activities in Waltham Forest.",
    to: "/dementia/activities",
  },
  {
    title: "Memory assessment service",
    description:
      "Learn what to expect from a memory assessment, how to get referred and what happens during the process.",
    to: "/dementia/memory-service",
  },
  {
    title: "Dementia adviser service",
    description:
      "One-to-one support from a dedicated adviser who can help you navigate life after a dementia diagnosis.",
    to: "/dementia/adviser",
  },
  {
    title: "iDOS - online dementia resources",
    description:
      "Digital tools, apps and online support to help people with dementia and their carers.",
    to: "/dementia/idos",
  },
  {
    title: "Support for carers",
    description:
      "Respite care, support groups, and practical help for those caring for someone with dementia, including carers assessments.",
    to: "/dementia/carers",
  },
  {
    title: "Planning for the future",
    description:
      "Guidance on lasting power of attorney, advance care planning, wills and other important decisions.",
    to: "/dementia/planning",
  },
];

export default function DementiaSupportPage() {
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
      to="/"
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
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Dementia support
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      Waltham Forest Council provides a range of services and support for people
      living with dementia and their families. Whether you have recently received a
      diagnosis or have been living with dementia for some time, we are here to help.
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
      <div className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Need help now?</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you are worried about your memory or the memory of someone you know,
      speak to your GP. You can also contact the services below for advice
      and support.
      </p>

      <div className="mt-4 space-y-3">
      <div>
      <p className="text-sm font-semibold text-wf-dark">
      Hornbeam Dementia Hub
      </p>
      <p className="text-sm text-wf-dark">
      Drop in for information, activities and support at the{" "}
      <Link to="/dementia/hub" className="text-wf-blue underline">
      Dementia Hub
      </Link>
      .
      </p>
      </div>

      <div>
      <p className="text-sm font-semibold text-wf-dark">
      Dementia adviser service
      </p>
      <p className="text-sm text-wf-dark">
      Get one-to-one support from a dedicated{" "}
      <Link to="/dementia/adviser" className="text-wf-blue underline">
      dementia adviser
      </Link>
      .
      </p>
      </div>

      <div>
      <p className="text-sm font-semibold text-wf-dark">
      Adult Social Care team
      </p>
      <p className="text-sm text-wf-dark">
      Telephone:{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </p>
      <p className="text-sm text-wf-gray">
      Monday to Friday, 9am to 5pm (excluding bank holidays)
      </p>
      </div>

      <div>
      <p className="text-sm font-semibold text-wf-dark">
      Alzheimer's Society national helpline
      </p>
      <p className="text-sm text-wf-dark">
      Telephone:{" "}
      <a href="tel:03331503456" className="text-wf-blue underline">
      0333 150 3456
      </a>
      </p>
      <p className="text-sm text-wf-gray">
      Open every day, including weekends and bank holidays
      </p>
      </div>
      </div>
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
