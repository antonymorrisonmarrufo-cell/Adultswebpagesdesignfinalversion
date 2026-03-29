import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Understand your rights", to: "/understand-your-rights" },
  { title: "Support for carers", to: "/carers" },
  { title: "Challenging decisions and raising concerns", to: "/understand-your-rights/challenging-decisions-raising-concerns" },
];

export default function YourRightsAsCarerPage() {
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
      <span className="font-medium text-wf-dark">Your rights as a carer</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Your rights as a carer
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
      If you provide unpaid care for someone, you have important legal rights
      under the Care Act 2014. The council has a duty to support you in your
      caring role and to consider your own wellbeing.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Right to an assessment</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      As a carer, you have the right to a carer's assessment, regardless of:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>How much care you provide</li>
      <li>Your financial situation</li>
      <li>Whether the person you care for is receiving services</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The assessment will look at the impact of your caring role on your own
      wellbeing, your ability to work or study, and your willingness and ability
      to continue caring. It will also consider what support would help you.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Support plan</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If the assessment shows you have eligible needs, you are entitled to a
      carer's support plan. This may include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Respite care or replacement care so you can take a break</li>
      <li>Training in your caring role</li>
      <li>Support to maintain your own health and wellbeing</li>
      <li>Help with transport or equipment</li>
      <li>A direct payment to arrange your own support</li>
      <li>Access to carers groups and peer support</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Review of your support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Your carer's support plan will be reviewed regularly. You can also request
      a review at any time if:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Your caring role has changed</li>
      <li>Your own health or circumstances have changed</li>
      <li>The needs of the person you care for have changed</li>
      <li>You feel the current support is not working</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Challenging decisions</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you disagree with a decision about your carer's assessment or support
      plan, you have the right to:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Ask for an explanation of how the decision was made</li>
      <li>Request a review of the decision</li>
      <li>Make a formal complaint</li>
      <li>Contact the Local Government and Social Care Ombudsman</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      For more information, visit our{" "}
      <Link
      to="/understand-your-rights/challenging-decisions-raising-concerns"
      className="text-wf-blue underline hover:text-wf-green"
      >
      challenging decisions and raising concerns
      </Link>{" "}
      page.
      </p>
      </section>

      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      To request a carer's assessment or for support with your caring role,
      contact our team.
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