import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Information for professionals", to: "/information-for-professionals" },
  { title: "Safeguarding adults for professionals", to: "/information-for-professionals/safeguarding-adults-professionals" },
  { title: "How to make a referral", to: "/information-for-professionals/how-to-make-referral" },
];

export default function PracticeGuidanceResourcesPage() {
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
            <li className="flex items-center gap-1">
              <Link to="/information-for-professionals" className="text-wf-blue underline hover:text-wf-green">Information for professionals</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Practice guidance and resources</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Practice guidance and resources
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              This page provides key practice guidance and resources for professionals
              working in or with adult social care in Waltham Forest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Strengths-based approach</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Waltham Forest Adult Social Care uses a strengths-based approach to
              practice. This means that when working with people we:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Focus on what people can do, not just what they cannot</li>
              <li>Build on existing strengths, skills and support networks</li>
              <li>Have conversations about what matters most to the person</li>
              <li>Support people to find creative solutions to their challenges</li>
              <li>Connect people with community resources and natural supports</li>
              <li>Promote independence, choice and control</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              All assessments, care plans and reviews should reflect a strengths-based
              approach. Training is available for practitioners on applying this approach
              in practice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Making Safeguarding Personal</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Making Safeguarding Personal (MSP) is a sector-led initiative that aims
              to ensure safeguarding is person-led and outcome-focused. In Waltham Forest,
              this means:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Asking the person at the start of the process what outcomes they want</li>
              <li>Ensuring the person is fully involved throughout the safeguarding enquiry</li>
              <li>Tailoring the response to the individual's needs and circumstances</li>
              <li>Checking at the end whether the person's desired outcomes were achieved</li>
              <li>Recording outcomes and using the data to improve practice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Key legislation and guidance</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Practitioners should be familiar with the following key legislation and
              guidance:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Care Act 2014 and statutory guidance</li>
              <li>Mental Capacity Act 2005 and Code of Practice</li>
              <li>Mental Health Act 1983 (as amended 2007)</li>
              <li>Human Rights Act 1998</li>
              <li>Equality Act 2010</li>
              <li>London Multi-Agency Adult Safeguarding Policy and Procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Training and development</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Waltham Forest offers a range of training opportunities for professionals,
              including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Safeguarding adults awareness training</li>
              <li>Mental Capacity Act training</li>
              <li>Strengths-based practice workshops</li>
              <li>Multi-agency training events</li>
              <li>Continuing professional development (CPD) sessions</li>
            </ul>
          </section>

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              For practice queries or to find out about training opportunities, contact
              our team.
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
