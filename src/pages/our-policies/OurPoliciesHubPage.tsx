import { Link } from "react-router-dom";

const cards = [
  {
    title: "Charging and financial policies",
    description: "How we charge for care services and our fairer contributions policy.",
    to: "/adult-social-care/our-policies/charging-and-financial-policies",
  },
  {
    title: "Safeguarding policies and reports",
    description: "Safeguarding Adults Board annual reports and multi-agency procedures.",
    to: "/adult-social-care/our-policies/safeguarding-policies-reports",
  },
  {
    title: "Market sustainability and commissioning",
    description: "Market position statement and information for care providers.",
    to: "/adult-social-care/our-policies/market-sustainability-commissioning",
  },
  {
    title: "Privacy and data",
    description: "How we handle your personal information and your data protection rights.",
    to: "/adult-social-care/our-policies/privacy-and-data",
  },
  {
    title: "Consultations",
    description: "Current and past consultations on adult social care services.",
    to: "/adult-social-care/our-policies/consultations",
  },
];

const relatedPages = [
  { title: "Understand your rights", to: "/adult-social-care/understand-your-rights" },
  { title: "Complaints and compliments", to: "/adult-social-care/complaints-compliments" },
  { title: "Paying for care", to: "/adult-social-care/paying-for-care" },
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
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
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

      {/* Key documents — quick links */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Key documents — quick links</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      For quick access to the most commonly requested documents:
      </p>
      <div className="mt-4 space-y-3">
      <a href="#" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors w-full sm:w-auto">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Fairer Contributions Policy 2025/26 [PDF — link to be added]
      </a>
      <br />
      <a href="#" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors w-full sm:w-auto">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Residential Care Charging Policy [PDF — link to be added]
      </a>
      <br />
      <a href="#" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors w-full sm:w-auto">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        SAB Annual Report 2024/25 [PDF — link to be added]
      </a>
      <br />
      <a href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support/fair-cost-care" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors w-full sm:w-auto">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Market Sustainability Plan
      </a>
      <br />
      <a href="#" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors w-full sm:w-auto">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Adult Social Care Privacy Notice [PDF — link to be added]
      </a>
      </div>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
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