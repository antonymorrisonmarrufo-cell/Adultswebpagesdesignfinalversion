import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Financial assessment", to: "/paying-for-care/financial-assessment" },
  { title: "Benefits and help with costs", to: "/paying-for-care/benefits-and-help" },
  { title: "Paying for a care home", to: "/paying-for-care/paying-for-care-home" },
  { title: "Get financial advice", to: "/paying-for-care/get-financial-advice" },
];

export default function HowCareCostsWorkedOutPage() {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">Paying for your care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">How care costs are worked out</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">How care costs are worked out</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            The council uses a means test to work out how much you may need to pay towards
            your care and support. This page explains how the process works.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="max-w-3xl space-y-8">
          {/* The means test */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">The means test</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              When you are assessed as needing care and support, we carry out a financial
              assessment (sometimes called a means test) to work out how much you can
              afford to contribute towards the cost. This looks at your income, savings
              and certain assets.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The means test is carried out under rules set by the government in the Care
              Act 2014 and associated regulations. It is designed to make sure you are
              never asked to pay more than you can reasonably afford.
            </p>
          </section>

          {/* Capital limits */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Capital limits</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The government sets two capital limits that affect how much you pay:
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-4">
                <p className="font-semibold text-wf-dark">Upper capital limit: &#163;23,250</p>
                <p className="mt-1 text-sm text-wf-dark leading-relaxed">
                  If your capital (savings, investments and certain assets) is above &#163;23,250,
                  you will be expected to pay the full cost of your care. This is sometimes
                  called being a self-funder.
                </p>
              </div>
              <div className="rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-4">
                <p className="font-semibold text-wf-dark">Lower capital limit: &#163;14,250</p>
                <p className="mt-1 text-sm text-wf-dark leading-relaxed">
                  If your capital is below &#163;14,250, it is not counted in the financial
                  assessment. You will only be asked to contribute from your income.
                </p>
              </div>
            </div>
            <p className="mt-4 text-wf-dark leading-relaxed">
              If your capital is between &#163;14,250 and &#163;23,250, you will be treated as
              having a "tariff income" of &#163;1 per week for every &#163;250 (or part of &#163;250)
              above the lower limit. This tariff income is added to your actual income
              when working out your contribution.
            </p>
          </section>

          {/* How your contribution is calculated */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">How your contribution is calculated</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you are eligible for council support, your weekly contribution is worked
              out as follows:
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>We add up all your assessable income, including any tariff income from capital</li>
              <li>We deduct certain allowances to make sure you have enough to live on (known as the Minimum Income Guarantee for care at home, or the Personal Expenses Allowance for care home residents)</li>
              <li>We deduct eligible housing costs such as rent and council tax</li>
              <li>We deduct disability-related expenditure where applicable</li>
              <li>The remaining amount is your maximum weekly contribution</li>
            </ol>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You will never be asked to pay more than the actual cost of your care. If
              your calculated contribution is higher than the cost of your care, you will
              pay the care cost only.
            </p>
          </section>

          {/* What is not counted */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">What is not counted</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Certain types of income and capital are not included in the means test:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Your main home (if you or your partner still lives there and you receive care at home)</li>
              <li>Personal possessions such as furniture and clothing</li>
              <li>The surrender value of a life insurance policy</li>
              <li>Payments from the Independent Living Fund</li>
              <li>War disablement pensions and war widow(er) pensions</li>
              <li>Charitable and voluntary payments made on a regular basis</li>
            </ul>
          </section>

          {/* Important note */}
          <div className="rounded-md border-l-4 border-[#003078] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#bf3688]">Important</h2>
            <p className="mt-2 text-wf-dark leading-relaxed">
              If you deliberately reduce your capital to avoid paying for care (sometimes
              called deprivation of assets), the council may still treat you as if you
              have that capital. This includes giving away savings, transferring property
              or spending money excessively.
            </p>
          </div>
        </div>

        {/* Related links */}
        <div className="max-w-3xl mt-8">
          <section className="rounded-md bg-white p-6 shadow-sm">
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
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
