import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/adult-social-care/our-policies" },
  { title: "Paying for care", to: "/adult-social-care/paying-for-care" },
  { title: "Getting a care and support plan", to: "/adult-social-care/how-to-get-support/getting-your-care-and-support-plan" },
];

export default function ChargingFinancialPoliciesPage() {
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
      <Link to="/adult-social-care/our-policies" className="text-wf-blue underline hover:text-wf-green">Our policies</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Charging and financial policies</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Charging and financial policies
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
      The council may charge for some adult social care services. Our charging
      policies are based on the Care Act 2014 and national guidance, and are
      designed to be fair and transparent.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Charging policy</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our charging policy sets out which services may be charged for and how
      charges are calculated. Key principles include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>No one will be asked to pay more than they can reasonably afford</li>
      <li>Anyone with savings and assets below the lower capital limit will not have to contribute from their capital</li>
      <li>Certain services are provided free of charge, including reablement for the first six weeks, assessment and care planning, and aftercare under Section 117 of the Mental Health Act</li>
      <li>Charges are reviewed annually in line with national guidance</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Fairer contributions policy</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our fairer contributions policy explains how we carry out financial
      assessments to determine how much, if anything, you will be asked to
      contribute towards the cost of your care. The financial assessment takes
      into account:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Your income, including benefits and pensions</li>
      <li>Your savings and capital</li>
      <li>Your essential living expenses, including housing costs</li>
      <li>Any disability-related expenditure</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      After the assessment, you will receive a written notification explaining
      your assessed contribution. If your financial circumstances change, you
      can ask for a reassessment at any time.
      </p>
      <div className="mt-4">
      <a href="https://www.walthamforest.gov.uk/sites\/default\/files\/2025-11\/Fairer_contributions_policy_25_26%20%28Updated%20Oct25%29_v3.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Fairer Contributions Policy 2025/26 (PDF)
      </a>
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Residential care charging</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      This policy sets out how the council calculates contributions for residential
      care — that is, care provided in a care home. It covers how the council
      assesses your income and capital, the treatment of property, and the rules
      around third-party top-up payments.
      </p>
      <div className="mt-4">
      <a href="https://www.walthamforest.gov.uk/adult-social-care\/paying-care-and-support\/paying-your-care-and-support" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Residential Care Charging Policy [PDF — link to be added]
      </a>
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Deferred payment agreements</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A deferred payment agreement allows people who own their home to delay paying
      some of their care home costs. Full information about deferred payment
      agreements, including eligibility and how to apply, is available on our
      dedicated page.
      </p>
      <div className="mt-4">
      <Link to="/adult-social-care/paying-for-care/deferred-payment-agreements" className="text-wf-blue underline hover:text-wf-green font-semibold">
        Deferred payment agreements (under Paying for your care) &rarr;
      </Link>
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Direct payment scheme</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Direct payments give people more choice and control over how their care and
      support is arranged. This document explains how the direct payment scheme
      works, including eligibility, what you can spend it on, and your
      responsibilities.
      </p>
      <div className="mt-4">
      <a href="https://www.walthamforest.gov.uk/adult-social-care\/paying-care-and-support\/direct-payments-and-personal-budgets" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Direct Payment Scheme [PDF — link to be added]
      </a>
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Services that are free</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The following services are always provided free of charge:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Care needs assessments and carer assessments</li>
      <li>Reablement services (usually for the first six weeks)</li>
      <li>Aftercare under Section 117 of the Mental Health Act</li>
      <li>Community equipment and minor adaptations costing less than £1,000</li>
      <li>Information and advice services</li>
      <li>Safeguarding services</li>
      </ul>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you have questions about charging or your financial assessment, contact
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