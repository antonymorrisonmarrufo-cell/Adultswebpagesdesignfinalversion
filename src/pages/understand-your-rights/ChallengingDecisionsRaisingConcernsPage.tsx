import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Understand your rights", to: "/adult-social-care/understand-your-rights" },
  { title: "Make a complaint", to: "/adult-social-care/complaints-compliments/make-a-complaint" },
  { title: "Independent advocacy", to: "/adult-social-care/understand-your-rights/independent-advocacy" },
];

export default function ChallengingDecisionsRaisingConcernsPage() {
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
      <span className="font-medium text-wf-dark">Challenging decisions and raising concerns</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Challenging decisions and raising concerns
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
      If you disagree with a decision about your care and support, or you are
      concerned about the way you have been treated, there are several steps
      you can take. You have the right to challenge decisions and raise concerns
      at every stage.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Talk to your social worker or team</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The first step is usually to discuss your concerns directly with the person
      involved, such as your social worker, care coordinator or team manager. Many
      issues can be resolved informally and quickly at this stage. You can:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Ask for a clear explanation of how the decision was made</li>
      <li>Provide additional information that may not have been considered</li>
      <li>Request a reassessment if your circumstances have changed</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Request a review</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You have the right to ask for a review of any decision about your care
      and support. This includes decisions about:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Whether you have eligible needs</li>
      <li>The content of your care and support plan</li>
      <li>Your personal budget</li>
      <li>The outcome of a financial assessment</li>
      <li>A carer's assessment or support plan</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Make a formal complaint</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you cannot resolve the issue informally, you can make a formal complaint.
      The council has a statutory complaints procedure for adult social care.
      Visit our{" "}
      <Link
      to="/adult-social-care/complaints-compliments/make-a-complaint"
      className="text-wf-blue underline hover:text-wf-green"
      >
      make a complaint
      </Link>{" "}
      page for details on how to do this, including timescales and what to expect.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Local Government and Social Care Ombudsman</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you have been through the council's complaints process and are still
      not satisfied, you can refer your complaint to the Local Government and
      Social Care Ombudsman (LGSCO). The Ombudsman is independent of the council
      and can investigate complaints about:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Maladministration in the way a decision was made</li>
      <li>Failure to follow proper procedures</li>
      <li>Unreasonable delay in providing services</li>
      <li>Failure to provide a service you are entitled to</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      <strong>Ombudsman helpline:</strong> 0300 061 0614<br />
      <strong>Website:</strong> www.lgo.org.uk
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Judicial review</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      In rare cases, you may be able to challenge a decision through judicial
      review in the courts. This is a legal process and is usually only
      appropriate when you believe the council has acted unlawfully. You should
      seek independent legal advice before considering judicial review. Legal
      aid may be available.
      </p>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Get support</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      An independent advocate can help you challenge a decision. Contact our
      team or visit our{" "}
      <Link
      to="/adult-social-care/understand-your-rights/independent-advocacy"
      className="text-wf-blue underline hover:text-wf-green"
      >
      independent advocacy
      </Link>{" "}
      page.
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