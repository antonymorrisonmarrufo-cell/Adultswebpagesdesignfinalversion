import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Understand your rights", to: "/adult-social-care/understand-your-rights" },
  { title: "Request an assessment", to: "/adult-social-care/how-to-get-support/request-assessment" },
  { title: "Getting a care and support plan", to: "/adult-social-care/how-to-get-support/getting-care-and-support-plan" },
];

export default function YourRightsUnderCareActPage() {
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
              <Link to="/adult-social-care/understand-your-rights" className="text-wf-blue underline hover:text-wf-green">Understand your rights</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Your rights under the Care Act</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Your rights under the Care Act
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              The Care Act 2014 is the law that sets out how adult social care works in
              England. It gives you important rights and places duties on your local
              council to provide or arrange care and support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">The wellbeing principle</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              At the heart of the Care Act is the wellbeing principle. This means that
              everything the council does in relation to your care must promote your
              wellbeing. Wellbeing includes:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Personal dignity and being treated with respect</li>
              <li>Physical and mental health and emotional wellbeing</li>
              <li>Protection from abuse and neglect</li>
              <li>Control over your day-to-day life, including how care is provided</li>
              <li>Participation in work, education, training or recreation</li>
              <li>Social and economic wellbeing</li>
              <li>Domestic, family and personal relationships</li>
              <li>Suitability of your living accommodation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Eligible needs</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The Care Act sets out national eligibility criteria. You have eligible
              needs if:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Your needs arise from or are related to a physical or mental impairment or illness</li>
              <li>As a result of your needs, you are unable to achieve two or more specified outcomes</li>
              <li>As a result, there is a significant impact on your wellbeing</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The specified outcomes include managing nutrition, maintaining personal
              hygiene, managing toilet needs, being appropriately clothed, being able
              to use your home safely, maintaining a habitable home, developing and
              maintaining relationships, accessing and engaging in work or other
              activities, and making use of services in the community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Your right to a personal budget</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you have eligible needs, you have the right to a personal budget. This
              is a clear, transparent allocation of money that sets out the cost to the
              council of meeting your needs. You also have the right to:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Be told the amount of your personal budget</li>
              <li>Choose how your budget is used, including through a direct payment</li>
              <li>Be involved in developing your care and support plan</li>
              <li>Have your plan reviewed regularly</li>
              <li>Request a review of your plan at any time if your needs change</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Other key rights</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>The right to a needs assessment, regardless of your financial situation</li>
              <li>The right to independent advocacy if you have difficulty being involved in decisions</li>
              <li>The right to information and advice about care and support</li>
              <li>Protection from abuse and neglect</li>
              <li>The right to continuity of care if you move between council areas</li>
            </ul>
          </section>

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              If you have questions about your rights under the Care Act, contact our team.
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
