import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How care costs are worked out", to: "/paying-for-care/how-care-costs-worked-out" },
  { title: "Benefits and help with costs", to: "/paying-for-care/benefits-and-help" },
  { title: "Direct payments and personal budgets", to: "/paying-for-care/direct-payments-personal-budgets" },
  { title: "Get financial advice", to: "/paying-for-care/get-financial-advice" },
];

export default function FinancialAssessmentPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
          <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">Paying for your care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Financial assessment</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Financial assessment</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          A financial assessment helps us work out how much you can afford to pay
          towards the cost of your care and support. It is free and confidential.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-3xl space-y-8">
          {/* What it involves */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What a financial assessment involves</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          After your care needs have been assessed, a financial assessment officer
          will arrange to meet with you. This can take place at your home, at a
          council office or over the telephone. The assessment usually takes around
          one hour.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          During the assessment, we will ask you about:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Your income from all sources, including benefits and pensions</li>
          <li>Your savings, investments and other capital</li>
          <li>Your housing costs such as rent, mortgage and council tax</li>
          <li>Any disability-related expenses you have</li>
          <li>Whether you have a partner or dependants</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You will need to provide evidence such as bank statements, benefit letters
          and pension details. The officer will tell you exactly what to have ready
          when they arrange the appointment.
          </p>
          </section>

          {/* What is included */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is included in the assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The following types of income are usually counted:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>State Pension and any additional state pension</li>
          <li>Private or occupational pensions</li>
          <li>Attendance Allowance or the care component of Disability Living Allowance</li>
          <li>Personal Independence Payment (daily living component)</li>
          <li>Employment and Support Allowance (income-related)</li>
          <li>Pension Credit</li>
          <li>Income from certain annuities, trusts or investments</li>
          </ul>
          </section>

          {/* What is excluded */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is excluded from the assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The following are not counted:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Earnings from employment (for care at home assessments)</li>
          <li>The mobility component of Disability Living Allowance or PIP</li>
          <li>War disablement pensions</li>
          <li>Charitable or voluntary payments</li>
          <li>Your home (if your partner or certain dependants still live there)</li>
          <li>Personal possessions</li>
          </ul>
          </section>

          {/* After the assessment */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">After the assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          After your financial assessment, we will write to you confirming your
          assessed weekly contribution. This letter will explain clearly how the
          figure was calculated and when payments need to start.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If your circumstances change (for example, a change in benefits or savings),
          you should tell us straight away so we can reassess your contribution.
          </p>
          </section>

          {/* Appealing */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Appealing your financial assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you think your financial assessment is wrong, you have the right to ask
          for a review. You can do this by:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Contacting the financial assessment team to discuss the decision</li>
          <li>Providing additional evidence that was not included in the original assessment</li>
          <li>Requesting a formal reassessment if your circumstances have changed</li>
          <li>Using the council's complaints procedure if you are still not satisfied</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can also seek free independent advice from organisations such as
          Citizens Advice or Age UK.
          </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Contact the financial assessment team</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If you have questions about your financial assessment or need help gathering
          the documents you need, please get in touch.
          </p>
          <p className="mt-3 text-sm font-semibold text-wf-dark">
          Telephone: <strong>[Financial Assessment team number — TBC]</strong>
          </p>
          <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm (excluding bank holidays)</p>
          </div>
          </div>

          {/* Related links */}
          <div className="max-w-3xl mt-8">
          <section className="mb-8 p-6">
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
        </div>
      </div>
    </div>
  );
}
