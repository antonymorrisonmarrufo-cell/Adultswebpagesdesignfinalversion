import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Understand your rights", to: "/understand-your-rights" },
  { title: "Mental capacity and decision making", to: "/understand-your-rights/mental-capacity-decision-making" },
  { title: "Independent help and advocacy", to: "/complaints-compliments/independent-help-advocacy" },
];

export default function IndependentAdvocacyPage() {
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
      <li className="flex items-center gap-1">
      <Link to="/understand-your-rights" className="text-wf-blue underline hover:text-wf-green">Understand your rights</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Independent advocacy</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Independent advocacy
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
      An independent advocate is someone who can speak on your behalf and help
      make sure your views and wishes are heard. There are several types of
      statutory advocacy available depending on your circumstances.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Independent Mental Capacity Advocate (IMCA)</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      An IMCA must be appointed when a person lacks mental capacity to make a
      specific decision and has no suitable family member, friend or other person
      to represent them. IMCAs are involved in decisions about:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Serious medical treatment</li>
      <li>A change of accommodation arranged by the NHS or council</li>
      <li>Safeguarding adults proceedings</li>
      <li>Care reviews</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The IMCA will gather relevant information, consult with the person as much
      as possible and represent their interests in the decision-making process.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Independent Mental Health Advocate (IMHA)</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      An IMHA provides support to people who are subject to certain provisions
      of the Mental Health Act 1983, including those who are:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Detained in hospital (sectioned)</li>
      <li>Subject to a community treatment order</li>
      <li>Subject to guardianship</li>
      <li>Conditionally discharged restricted patients</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      IMHAs help you understand your rights under the Mental Health Act, the
      treatment you are receiving and the options available to you.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Care Act advocacy</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Under the Care Act 2014, the council must arrange an independent advocate
      for anyone who has substantial difficulty being involved in their:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Needs assessment</li>
      <li>Care and support planning</li>
      <li>Care plan review</li>
      <li>Safeguarding enquiry or review</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      This duty applies when there is no suitable person (such as a family member
      or friend) who is able to support the person to be involved.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to access an advocate</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can access advocacy services by:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Asking your social worker or care coordinator</li>
      <li>Contacting the local advocacy service directly</li>
      <li>Calling our Adult Social Care team</li>
      <li>Asking a family member, friend or professional to make a referral</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      All statutory advocacy services are free.
      </p>
      </section>

      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For help accessing an independent advocate, contact our team.
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