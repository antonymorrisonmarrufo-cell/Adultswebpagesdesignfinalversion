import { Link } from "react-router-dom";

const cards = [
  {
    title: "Your rights under the Care Act",
    description: "Understand your legal rights to assessment, support and a personal budget under the Care Act 2014.",
    to: "/adult-social-care/understand-your-rights/your-rights-under-care-act",
  },
  {
    title: "Independent advocacy",
    description: "How an independent advocate can help you be involved in decisions about your care.",
    to: "/adult-social-care/understand-your-rights/independent-advocacy",
  },
  {
    title: "Mental capacity and decision making",
    description: "The Mental Capacity Act 2005, its five principles and how decisions are made for people who lack capacity.",
    to: "/adult-social-care/understand-your-rights/mental-capacity-decision-making",
  },
  {
    title: "Your rights as a carer",
    description: "Assessment, support and rights for unpaid carers under the Care Act 2014.",
    to: "/adult-social-care/understand-your-rights/your-rights-as-carer",
  },
  {
    title: "Challenging decisions and raising concerns",
    description: "How to challenge a decision about your care, including complaints, reviews and the ombudsman.",
    to: "/adult-social-care/understand-your-rights/challenging-decisions-raising-concerns",
  },
];

const relatedPages = [
  { title: "How to get support", to: "/adult-social-care/how-to-get-support" },
  { title: "Complaints and compliments", to: "/adult-social-care/complaints-compliments" },
  { title: "Our policies", to: "/adult-social-care/our-policies" },
];

export default function UnderstandYourRightsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
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
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Understand your rights
        </h1>
      </div>

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
                className="block rounded-lg border border-gray-200 p-6 shadow-sm transition hover:shadow-md hover:border-wf-green"
              >
                <h3 className="text-lg font-bold text-wf-green">{card.title}</h3>
                <p className="mt-2 text-sm text-wf-dark leading-relaxed">{card.description}</p>
              </Link>
            ))}
          </div>

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
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
  );
}
