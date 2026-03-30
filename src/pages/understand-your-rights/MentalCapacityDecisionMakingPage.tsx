import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Understand your rights", to: "/understand-your-rights" },
  { title: "Independent advocacy", to: "/understand-your-rights/independent-advocacy" },
  { title: "Safeguarding adults", to: "/safeguarding" },
];

export default function MentalCapacityDecisionMakingPage() {
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
      <Link to="/adult-social-care/understand-your-rights" className="text-wf-blue underline hover:text-wf-green">Understand your rights</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Mental capacity and decision making</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Mental capacity and decision making
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
      The Mental Capacity Act 2005 (MCA) provides a legal framework for making
      decisions on behalf of people who lack the mental capacity to make certain
      decisions for themselves. It protects people's right to make their own
      decisions wherever possible.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">The five principles</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Mental Capacity Act is built on five key principles:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Presumption of capacity:</strong> Every adult has the right to
      make their own decisions, and must be assumed to have capacity unless
      it is proved otherwise
      </li>
      <li>
      <strong>Support to make decisions:</strong> A person must be given all
      practicable help to make a decision before anyone concludes they cannot
      make it
      </li>
      <li>
      <strong>Unwise decisions:</strong> A person is not to be treated as
      lacking capacity merely because they make an unwise decision
      </li>
      <li>
      <strong>Best interests:</strong> Any decision made on behalf of a person
      who lacks capacity must be made in their best interests
      </li>
      <li>
      <strong>Least restrictive option:</strong> Any action taken must be the
      least restrictive of the person's rights and freedom of action
      </li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Best interests decisions</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      When a person has been assessed as lacking capacity to make a specific
      decision, any decision made on their behalf must be in their best
      interests. This involves:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Considering all relevant circumstances</li>
      <li>Consulting with the person as much as possible</li>
      <li>Taking into account their past and present wishes, feelings, beliefs and values</li>
      <li>Consulting with family members, carers and other relevant people</li>
      <li>Considering whether the person may regain capacity</li>
      <li>Involving an IMCA if there is no suitable person to consult</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Deprivation of Liberty Safeguards (DoLS)</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Deprivation of Liberty Safeguards (DoLS) provide legal protection for
      people who lack mental capacity and are, or may need to be, deprived of
      their liberty in a hospital or care home in their best interests. DoLS
      ensure that:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Any deprivation of liberty is lawful and properly authorised</li>
      <li>The person's situation is regularly reviewed</li>
      <li>The person has a representative to act on their behalf</li>
      <li>The person has the right to challenge the deprivation through the Court of Protection</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you are concerned that someone may be unlawfully deprived of their
      liberty, contact our Adult Social Care team.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Lasting Power of Attorney</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A Lasting Power of Attorney (LPA) allows you to appoint someone you trust
      to make decisions on your behalf if you lose the capacity to do so. There
      are two types:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li><strong>Health and welfare LPA:</strong> Covers decisions about your healthcare, medical treatment and living arrangements</li>
      <li><strong>Property and financial affairs LPA:</strong> Covers decisions about your money, property and finances</li>
      </ul>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For questions about mental capacity or DoLS, contact our team.
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