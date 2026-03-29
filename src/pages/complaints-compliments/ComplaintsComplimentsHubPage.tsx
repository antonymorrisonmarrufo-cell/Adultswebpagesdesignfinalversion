import { Link } from "react-router-dom";

const cards = [
  {
    title: "Make a complaint",
    description: "Tell us if something has gone wrong so we can put it right.",
    to: "/complaints-compliments/make-complaint",
  },
  {
    title: "Send a compliment",
    description: "Share positive feedback about a service or member of staff.",
    to: "/complaints-compliments/send-compliment",
  },
  {
    title: "Help shape our services",
    description: "Get involved in improving adult social care through co-production, surveys and focus groups.",
    to: "/complaints-compliments/help-shape-services",
  },
  {
    title: "Independent help and advocacy",
    description: "Find out how an independent advocate can support you.",
    to: "/complaints-compliments/independent-help-advocacy",
  },
];

const relatedPages = [
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "Understand your rights", to: "/understand-your-rights" },
  { title: "Our policies", to: "/our-policies" },
];

export default function ComplaintsComplimentsHubPage() {
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
      <span className="font-medium text-wf-dark">Complaints and compliments</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Complaints and compliments
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
      Your feedback helps us improve our services. Whether you want to tell us
      about something that went wrong, share a positive experience or help shape
      future services, we want to hear from you.
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

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you need help making a complaint or want to share feedback, our team
      can assist you.
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