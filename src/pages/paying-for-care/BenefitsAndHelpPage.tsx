import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Financial assessment", to: "/paying-for-care/financial-assessment" },
  { title: "How care costs are worked out", to: "/paying-for-care/how-care-costs-worked-out" },
  { title: "Get financial advice", to: "/paying-for-care/get-financial-advice" },
  { title: "Direct payments and personal budgets", to: "/paying-for-care/direct-payments-personal-budgets" },
];

export default function BenefitsAndHelpPage() {
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
          <li><Link to="/adult-social-care/paying-for-care" className="text-wf-blue underline hover:text-wf-green">Paying for your care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Benefits and help with costs</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Benefits and help with costs</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          You may be entitled to benefits and other financial support that can help
          with the cost of care. Many people do not claim everything they are entitled to.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-3xl space-y-8">
          {/* Attendance Allowance */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Attendance Allowance</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Attendance Allowance is a tax-free benefit for people aged 65 or over who
          have a physical or mental disability and need help with personal care or
          supervision. You do not need to have someone actually caring for you to claim.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          There are two rates:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Lower rate:</strong> if you need help during the day or night</li>
          <li><strong>Higher rate:</strong> if you need help both during the day and at night, or you are terminally ill</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Attendance Allowance is not means tested, so your income and savings do not
          affect whether you can claim. It can also increase the amount of other
          benefits you receive, such as Pension Credit.
          </p>
          </section>

          {/* PIP */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Personal Independence Payment (PIP)</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          PIP is for people aged 16 to State Pension age who have a long-term health
          condition or disability that affects their daily living or mobility. It has
          two components:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Daily living component:</strong> if you need help with everyday tasks such as washing, dressing, eating or managing your medication</li>
          <li><strong>Mobility component:</strong> if you have difficulty getting around or planning a journey</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          PIP is not means tested and is not affected by whether you are working.
          You can claim PIP even if you are receiving other benefits.
          </p>
          </section>

          {/* Pension Credit */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Pension Credit</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Pension Credit tops up your weekly income if it is below a certain level.
          It is available to people who have reached State Pension age. There are
          two parts:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Guarantee Credit:</strong> tops up your weekly income to a minimum guaranteed amount</li>
          <li><strong>Savings Credit:</strong> an extra payment for people who have some savings or a private pension (only available if you reached State Pension age before 6 April 2016)</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Receiving Pension Credit can also entitle you to other help, including
          Housing Benefit, council tax reduction and help with NHS costs.
          </p>
          </section>

          {/* Council tax reduction */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Council tax reduction</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you are on a low income or receive certain benefits, you may be able to
          get a reduction in your council tax. In some cases, you may not have to pay
          any council tax at all.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You may also be entitled to a council tax discount if:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>You have a severe mental impairment (such as dementia)</li>
          <li>You live alone or with people who do not count for council tax purposes</li>
          <li>Your property has been adapted for a disabled person</li>
          </ul>
          </section>

          {/* Other help */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Other help available</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Carer's Allowance:</strong> a benefit for people who spend at least 35 hours a week caring for someone</li>
          <li><strong>NHS Continuing Healthcare:</strong> free care arranged and funded by the NHS for people with complex ongoing health needs</li>
          <li><strong>Disabled Facilities Grant:</strong> funding to make adaptations to your home</li>
          <li><strong>Blue Badge scheme:</strong> helps you park closer to your destination if you have a mobility problem</li>
          <li><strong>Freedom Pass:</strong> free travel on public transport in London</li>
          </ul>
          </section>

          {/* Help claiming */}
          <div className="rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Get help with your benefits</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If you need help understanding which benefits you may be entitled to or
          making a claim, contact us or visit your local Citizens Advice.
          </p>
          <p className="mt-3 text-sm font-semibold text-wf-dark">
          Telephone:{" "}
          <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a>
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
