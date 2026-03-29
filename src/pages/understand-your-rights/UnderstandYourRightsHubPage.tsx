import { Link } from "react-router-dom";

const cards = [
  {
    title: "Your rights under the Care Act",
    description: "Understand your legal rights to assessment, support and a personal budget under the Care Act 2014.",
    to: "/understand-your-rights/your-rights-under-care-act",
  },
  {
    title: "Independent advocacy",
    description: "How an independent advocate can help you be involved in decisions about your care.",
    to: "/understand-your-rights/independent-advocacy",
  },
  {
    title: "Mental capacity and decision making",
    description: "The Mental Capacity Act 2005, its five principles and how decisions are made for people who lack capacity.",
    to: "/understand-your-rights/mental-capacity-decision-making",
  },
  {
    title: "Your rights as a carer",
    description: "Assessment, support and rights for unpaid carers under the Care Act 2014.",
    to: "/understand-your-rights/your-rights-as-carer",
  },
  {
    title: "Challenging decisions and raising concerns",
    description: "How to challenge a decision about your care, including complaints, reviews and the ombudsman.",
    to: "/understand-your-rights/challenging-decisions-raising-concerns",
  },
];

const relatedPages = [
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "Complaints and compliments", to: "/complaints-compliments" },
  { title: "Our policies", to: "/our-policies" },
];

export default function UnderstandYourRightsHubPage() {
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
      <span className="font-medium text-wf-dark">Understand your rights</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Understand your rights
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
      The law gives you important rights when it comes to adult social care. This
      section explains your rights under the Care Act 2014, the Mental Capacity
      Act 2005 and other legislation, and tells you how to get help if you feel
      your rights are not being upheld.
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
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you have questions about your rights, contact our Adult Social Care team.
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