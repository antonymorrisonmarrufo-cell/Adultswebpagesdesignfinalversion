import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Paying for a care home", to: "/adult-social-care/paying-for-care/paying-for-a-care-home" },
  { title: "How care costs are worked out", to: "/adult-social-care/paying-for-care/how-care-costs-are-worked-out" },
  { title: "Financial assessment", to: "/adult-social-care/paying-for-care/financial-assessment" },
  { title: "Get financial advice", to: "/adult-social-care/paying-for-care/get-financial-advice" },
];

export default function DeferredPaymentAgreementsPage() {
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
          <li><span className="font-medium text-wf-dark">Deferred payment agreements</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Deferred payment agreements</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          A deferred payment agreement means you do not have to sell your home in your
          lifetime to pay for residential care. The council effectively lends you the
          money, secured against your property.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-3xl space-y-8">
          {/* Using your home to pay */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Using your home to pay for care</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you move into a care home permanently, the value of your property may
          be taken into account when working out how much you pay. This could mean
          you would need to sell your home to fund your care.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          A deferred payment agreement (DPA) is an alternative. The council pays your
          care home fees on your behalf and places a legal charge on your property. The
          deferred amount, plus any interest and administrative charges, is repaid
          later, usually when your home is sold or from your estate.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          This means you can delay the need to sell your home for as long as you need
          to, giving you time and peace of mind.
          </p>
          </section>

          {/* Eligibility */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who is eligible</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You may be eligible for a deferred payment agreement if:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>You have been assessed as needing permanent residential care</li>
          <li>You own a property (or have a beneficial interest in one) that is not occupied by a spouse, partner or certain dependants</li>
          <li>Your non-housing assets (savings, investments) are below &#163;23,250</li>
          <li>You agree to the council placing a legal charge on your property</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you meet these criteria, the council must offer you a deferred payment
          agreement. In some circumstances, the council may also agree to a DPA on a
          discretionary basis even if you do not meet all the criteria.
          </p>
          </section>

          {/* How it works */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How a deferred payment agreement works</h2>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>You apply for a deferred payment agreement through the council</li>
          <li>We carry out a financial assessment and value your property</li>
          <li>If eligible, we draw up a legal agreement and place a charge on your property</li>
          <li>The council pays your care home fees (minus any contribution you make from your income)</li>
          <li>Interest accrues on the deferred amount at a rate set by the government</li>
          <li>The deferred amount is repaid when you choose to sell your home, or from your estate after your death</li>
          </ol>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You will still need to contribute towards the cost of your care from your
          income. You will also be allowed to keep a small amount for personal
          expenses (the Personal Expenses Allowance).
          </p>
          </section>

          {/* Costs and charges */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Costs and charges</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          There are costs associated with a deferred payment agreement:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Interest:</strong> charged on the deferred amount at a rate set nationally, compounded every six months</li>
          <li><strong>Administrative charge:</strong> the council may charge for setting up and managing the agreement</li>
          <li><strong>Legal costs:</strong> you may need to pay for legal advice and the cost of registering the charge on your property</li>
          <li><strong>Property maintenance:</strong> you are responsible for keeping the property insured and in good repair</li>
          </ul>
          </section>

          {/* Ending the agreement */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Ending the agreement</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          A deferred payment agreement can end in several ways:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>You choose to sell your property and repay the deferred amount</li>
          <li>You repay the deferred amount from other sources</li>
          <li>You pass away, and the amount is repaid from your estate</li>
          <li>The equity in your home is used up (the council will not defer more than the value of your property minus 10%)</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          When the agreement ends, the council will work with you or your estate to
          arrange repayment. There is a 90-day period after the agreement ends in
          which to repay the debt.
          </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Find out if a deferred payment is right for you</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          Contact us to discuss whether a deferred payment agreement could work for
          your situation. We strongly recommend getting independent financial advice
          before entering into an agreement.
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
