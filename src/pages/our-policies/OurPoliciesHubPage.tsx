import { Link } from "react-router-dom";

const cards = [
  {
    title: "Charging and financial policies",
    description: "How we charge for care services and our fairer contributions policy.",
    to: "/our-policies/charging-financial-policies",
  },
  {
    title: "Safeguarding policies and reports",
    description: "Safeguarding Adults Board annual reports and multi-agency procedures.",
    to: "/our-policies/safeguarding-policies-reports",
  },
  {
    title: "Market sustainability and commissioning",
    description: "Market position statement and information for care providers.",
    to: "/our-policies/market-sustainability-commissioning",
  },
  {
    title: "Privacy and data",
    description: "How we handle your personal information and your data protection rights.",
    to: "/our-policies/privacy-and-data",
  },
  {
    title: "Consultations",
    description: "Current and past consultations on adult social care services.",
    to: "/our-policies/consultations",
  },
];

const relatedPages = [
  { title: "Understand your rights", to: "/understand-your-rights" },
  { title: "Complaints and compliments", to: "/complaints-compliments" },
  { title: "Paying for care", to: "/paying-for-care" },
];

export default function OurPoliciesHubPage() {
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
      <span className="font-medium text-wf-dark">Our policies</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Our policies
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
      This section contains the key policies, strategies and reports that guide
      how we deliver adult social care in Waltham Forest. We are committed to
      being open and transparent about how we work.
      </p>
      </section>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card) => (
      <Link
      key={card.to}
      to={card.to}
      className="block rounded-lg border border-gray-200 p-6 shadow-sm transition hover:shadow-md hover:border-wf-green"
      >
      <h3 className="text-lg font-bold text-wf-green">{card.title}</h3>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">{card.description}</p>
      </Link>
      ))}
      </div>

      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you have questions about our policies, contact our team.
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
      <div className="border-t border-gray-200 pt-8">
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