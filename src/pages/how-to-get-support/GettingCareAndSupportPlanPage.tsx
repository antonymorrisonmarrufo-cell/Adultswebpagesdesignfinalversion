import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "What happens during your assessment", to: "/how-to-get-support/what-happens-during-your-assessment" },
  { title: "Paying for care", to: "/paying-for-care" },
];

export default function GettingCareAndSupportPlanPage() {
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
              <Link to="/how-to-get-support" className="text-wf-blue underline hover:text-wf-green">How to get support</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Getting a care and support plan</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Getting a care and support plan
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              If your assessment shows you have eligible needs, we will work with you
              to create a care and support plan. This plan sets out what support you
              will receive and how it will be arranged.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What is included in your plan</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your care and support plan is a personalised document that includes:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>A summary of your assessed needs and what matters most to you</li>
              <li>The outcomes you want to achieve</li>
              <li>The specific services and support that will be provided</li>
              <li>Your personal budget, which is the amount the council will spend on your care</li>
              <li>How and when your plan will be reviewed</li>
              <li>Any contribution you may need to make towards the cost of your care</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You will be fully involved in developing your plan. We use a
              strengths-based approach, which means we focus on what you can do and
              what support networks you already have, as well as areas where you need help.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Your personal budget</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your personal budget is the amount of money the council allocates to meet
              your eligible care needs. You can choose how to use your personal budget
              in one of the following ways:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Council-managed budget:</strong> The council arranges and pays
                for your care services directly
              </li>
              <li>
                <strong>Direct payment:</strong> You receive the money and arrange your
                own care, giving you more choice and control
              </li>
              <li>
                <strong>A combination:</strong> Some services are arranged by the council
                and some by you using a direct payment
              </li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              We will explain these options to you and help you decide which approach
              works best for your situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Reviewing your plan</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your care and support plan will be reviewed regularly to make sure it
              continues to meet your needs. Reviews typically take place:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Within the first 6 to 8 weeks after your plan starts</li>
              <li>At least once every 12 months after that</li>
              <li>At any time if your needs change significantly</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You can also request a review at any time if you feel your plan is no
              longer working for you. Contact your social worker or our Adult Social
              Care team to arrange this.
            </p>
          </section>

          <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              If you have questions about your care and support plan, get in touch.
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
