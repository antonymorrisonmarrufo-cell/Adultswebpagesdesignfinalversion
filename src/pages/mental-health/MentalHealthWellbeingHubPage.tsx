import { Link } from "react-router-dom";

const cards = [
  {
    title: "Urgent mental health support",
    description: "If you or someone you know is in mental health crisis, find out where to get immediate help.",
    to: "/mental-health/urgent-support",
  },
  {
    title: "Looking after your mental wellbeing",
    description: "Self-help tips, online resources and apps to support your mental health.",
    to: "/mental-health/looking-after-mental-wellbeing",
  },
  {
    title: "Talking therapies and professional support",
    description: "Access counselling, IAPT services and other professional mental health support.",
    to: "/mental-health/talking-therapies-professional-support",
  },
  {
    title: "Adult Social Care mental health support",
    description: "Specialist mental health support through Adult Social Care, including Section 117 aftercare.",
    to: "/mental-health/adult-social-care-mental-health",
  },
  {
    title: "Local mental health support services",
    description: "Community organisations, peer support and recovery services in Waltham Forest.",
    to: "/mental-health/local-support-services",
  },
];

const relatedPages = [
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "Support for carers", to: "/carers" },
  { title: "Living independently", to: "/live-independently" },
];

export default function MentalHealthWellbeingHubPage() {
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
      <span className="font-medium text-wf-dark">Mental health and wellbeing</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Mental health and wellbeing
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
      Mental health is just as important as physical health. Whether you are
      experiencing a crisis, looking for self-help resources or need ongoing
      professional support, there is help available in Waltham Forest.
      </p>
      </section>

      {/* Urgent support callout */}
      <section className="rounded-lg border-l-4 border-[#d4351c] bg-[#fcedf3] p-6">
      <h2 className="text-xl font-bold text-red-700">If you need urgent help</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you or someone you know is in immediate danger, call <strong>999</strong>.
      For urgent mental health support, call the Samaritans on{" "}
      <a href="tel:116123" className="text-wf-blue underline font-semibold">116 123</a>{" "}
      (free, 24 hours a day).
      </p>
      <p className="mt-2">
      <Link
      to="/mental-health/urgent-support"
      className="text-sm font-semibold text-red-700 underline hover:text-red-900"
      >
      See all urgent mental health support options
      </Link>
      </p>
      </section>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card) => (
      <Link
      key={card.to}
      to={card.to}
      className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
      >
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

      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Talk to us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you are unsure where to start, our Adult Social Care team can help you
      find the right support.
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