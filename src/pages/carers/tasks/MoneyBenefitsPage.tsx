import { Link } from "react-router-dom";

export default function MoneyBenefitsPage() {
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
          <li><Link to="/carers" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Money and benefits</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Money and benefits for carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          A quick guide to the financial support and benefits you may be entitled to as a carer.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Benefits checklist */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Benefits you may be entitled to</h2>
          <div className="mt-4 space-y-4">
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#231F20]">Carer's Allowance</h3>
          <p className="mt-2 text-wf-dark">
          A weekly payment if you care for someone at least 35 hours a week and they receive a qualifying
          disability benefit. Apply on{" "}
          <a href="https://www.gov.uk/carers-allowance" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">GOV.UK</a>.
          </p>
          </div>
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#231F20]">Carer's Credit</h3>
          <p className="mt-2 text-wf-dark">
          National Insurance credits to protect your State Pension if you care for someone at least
          20 hours a week but do not qualify for Carer's Allowance.
          </p>
          </div>
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#231F20]">Universal Credit carer element</h3>
          <p className="mt-2 text-wf-dark">
          An additional amount in your Universal Credit if you care for a severely disabled person for
          at least 35 hours a week.
          </p>
          </div>
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#231F20]">Council tax reduction</h3>
          <p className="mt-2 text-wf-dark">
          You may be entitled to a discount or exemption from council tax, depending on your circumstances.
          </p>
          </div>
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#231F20]">Direct payments</h3>
          <p className="mt-2 text-wf-dark">
          If you have eligible needs following a carers assessment, you may receive a direct payment
          to arrange your own support.
          </p>
          </div>
          </div>
          </section>

          {/* Grants */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Grants and one-off help</h2>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Carers Trust grants</strong> - for essential items, respite, or wellbeing activities</li>
          <li><strong>Turn2us</strong> - search for grants from charitable trusts based on your circumstances</li>
          <li><strong>Local welfare assistance</strong> - emergency help with food, fuel, or essential items</li>
          </ul>
          </section>

          {/* Get advice */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003078]">Get free benefits advice</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Many carers miss out on benefits they are entitled to. Get free, confidential advice from:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Citizens Advice Waltham Forest - <strong>0808 278 7835</strong></li>
          <li>Carers First - <strong>0300 303 1555</strong></li>
          <li>The Carers Hub - drop in for benefits advice</li>
          <li>Adult Social Care - <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a></li>
          </ul>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers/support/financial-support" className="text-wf-blue underline hover:text-wf-green">
          Financial support for carers
          </Link>
          </li>
          <li>
          <Link to="/carers/tasks/assessment" className="text-wf-blue underline hover:text-wf-green">
          Request a carers assessment
          </Link>
          </li>
          <li>
          <a href="https://www.gov.uk/browse/benefits" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          GOV.UK - benefits
          </a>
          </li>
          </ul>
          </section>

          {/* Last updated */}
          <p className="text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
