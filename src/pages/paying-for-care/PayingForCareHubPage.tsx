import { Link } from "react-router-dom";

const topics = [
  {
    title: "How care costs are worked out",
    description: "Find out how the council calculates what you may need to pay, including means testing and capital limits.",
    to: "/paying-for-care/how-care-costs-worked-out",
  },
  {
    title: "Financial assessment",
    description: "What a financial assessment involves, what income and savings are included, and how to appeal.",
    to: "/paying-for-care/financial-assessment",
  },
  {
    title: "Benefits and help with costs",
    description: "Benefits you may be entitled to, including Attendance Allowance, PIP, Pension Credit and council tax reduction.",
    to: "/paying-for-care/benefits-and-help",
  },
  {
    title: "Direct payments and personal budgets",
    description: "How direct payments work, what a personal budget is and how to manage your own care funding.",
    to: "/paying-for-care/direct-payments-personal-budgets",
  },
  {
    title: "Paying for a care home",
    description: "How care home fees are funded, self-funding, council-funded care, property disregard and top-up fees.",
    to: "/paying-for-care/paying-for-care-home",
  },
  {
    title: "Get financial advice",
    description: "Where to find independent financial advisers and free advice services to help you plan for care costs.",
    to: "/paying-for-care/get-financial-advice",
  },
  {
    title: "Deferred payment agreements",
    description: "How you can use your home to pay for residential care costs and delay selling your property.",
    to: "/paying-for-care/deferred-payment-agreements",
  },
];

const relatedPages = [
  { title: "How adult social care works", to: "/how-adult-social-care-works" },
  { title: "How to ask for help", to: "/how-adult-social-care-works/how-to-ask-for-help" },
  { title: "Support for carers", to: "/carers" },
  { title: "Understand your rights", to: "/understand-your-rights" },
];

export default function PayingForCareHubPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
          <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Paying for your care</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Paying for your care</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Most people need to pay something towards the cost of their care. Find out how
          costs are worked out, what financial help is available and how to plan ahead.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Important information */}
          <div className="mb-8 rounded-md bg-white p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">Key things to know</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>You will not be asked to pay more than you can afford</li>
          <li>Your home is not automatically included when working out how much you pay</li>
          <li>Financial assessments are free and confidential</li>
          <li>You may be entitled to benefits that can help cover costs</li>
          <li>Free financial advice is available to help you understand your options</li>
          </ul>
          </div>

          {/* Topic cards */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Explore this section</h2>
          <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
          <Link
          key={topic.to}
          to={topic.to}
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">{topic.title}</h3>
          <p className="text-sm text-[#231F20] flex-1">{topic.description}</p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>
          ))}
          </div>
          </section>

          {/* Contact */}
          <section className="mb-8 rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Need help understanding your care costs?</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          Our team can talk you through how paying for care works and answer any questions you have.
          </p>
          <p className="mt-3 text-sm font-semibold text-wf-dark">
          Telephone:{" "}
          <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm (excluding bank holidays)</p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          {relatedPages.map((page) => (
          <li key={page.to}>
          <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
          {page.title}
          </Link>
          </li>
          ))}
          </ul>
          </section>

          {/* Last updated */}
          <p className="text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
