import { Link } from "react-router-dom";

const cards = [
  {
    title: "Check your situation online",
    description: "Use our self-assessment tool to understand your care and support needs.",
    to: "/how-to-get-support/check-situation-online",
  },
  {
    title: "Explore community and local support",
    description: "Browse local groups, activities, social prescribing, and voluntary sector support that you can access without an assessment.",
    to: "/live-independently/social-prescribing",
  },
  {
    title: "Contact us",
    description: "Speak to our Adult Social Care team by phone, email or in person.",
    to: "/how-to-get-support/contact-us",
  },
  {
    title: "Request an assessment",
    description: "Ask for a care needs assessment for yourself or someone else.",
    to: "/how-to-get-support/request-assessment",
  },
  {
    title: "What happens during your assessment",
    description: "Find out how the assessment works and how to prepare.",
    to: "/how-to-get-support/what-happens-during-your-assessment",
  },
  {
    title: "Getting a care and support plan",
    description: "Learn what a care plan includes and how your personal budget works.",
    to: "/how-to-get-support/getting-care-and-support-plan",
  },
];

const relatedPages = [
  { title: "Paying for care", to: "/paying-for-care" },
  { title: "Living independently", to: "/live-independently" },
  { title: "Support for carers", to: "/carers" },
];

export default function HowToGetSupportHubPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">How to get support</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      How to get support
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      <section>
      <p className="text-wf-dark leading-relaxed">
      Many people find the right support through community services, local groups,
      and practical help — without needing a formal assessment. If you do need
      more help, follow the steps below.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Step-by-step guide</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Getting care and support typically follows these steps. You can start at
      whichever stage is right for you.
      </p>
      </section>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card, index) => (
      <Link
      key={card.to}
      to={card.to}
      className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
      >
      <span className="inline-block rounded-full bg-wf-green px-3 py-1 text-sm font-semibold text-white mb-3">
      Step {index + 1}
      </span>
      <h3 className="text-base font-bold text-[#bf3688] mb-2">{card.title}</h3>
      <p className="text-sm text-[#231F20] flex-1">{card.description}</p>
      <div className="flex justify-end mt-4">
        <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
      </Link>
      ))}
      </div>

      {/* Contact */}
      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Need help now?</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you need to speak to someone about care and support, contact our
      Adult Social Care team.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      <Link
      to="/adult-social-care/how-to-get-support/check-your-situation-online"
      className="text-wf-blue underline hover:text-wf-green font-semibold"
      >
      Check your situation online first
      </Link>
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
      </section>
      </div>
      </div>

      {/* Related pages */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="pt-8">
      <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
      <ul className="mt-4 space-y-2">
      {relatedPages.map((page) => (
      <li key={page.to}>
      <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
      {page.title}
      </Link>
      </li>
      ))}
      </ul>
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