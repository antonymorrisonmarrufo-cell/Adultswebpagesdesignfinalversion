import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Information for professionals", to: "/information-for-professionals" },
  { title: "Market sustainability and commissioning", to: "/our-policies/market-sustainability-commissioning" },
  { title: "Our policies", to: "/our-policies" },
];

export default function CommissioningProviderInformationPage() {
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
      <Link to="/adult-social-care/information-for-professionals" className="text-wf-blue underline hover:text-wf-green">Information for professionals</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Commissioning and provider information</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Commissioning and provider information
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
      This page provides information for care providers and organisations
      interested in delivering adult social care services in Waltham Forest.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Current contracts and frameworks</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Waltham Forest commissions a range of adult social care services including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Home care and domiciliary care</li>
      <li>Residential and nursing care</li>
      <li>Supported living</li>
      <li>Day opportunities and activities</li>
      <li>Reablement and rehabilitation</li>
      <li>Carers support services</li>
      <li>Mental health support services</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Opportunities to tender for contracts are published on the council's
      procurement portal. Providers are encouraged to register to receive
      notifications about upcoming opportunities.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Quality standards</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      All commissioned providers are expected to meet the following quality
      standards:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Registration with the Care Quality Commission (CQC) where required</li>
      <li>Compliance with all relevant legislation and regulations</li>
      <li>Person-centred care that promotes dignity and independence</li>
      <li>Safe recruitment practices and adequate staffing levels</li>
      <li>Robust safeguarding policies and procedures</li>
      <li>Effective complaints handling</li>
      <li>Regular training and supervision for staff</li>
      <li>Transparent and accurate record keeping</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Market position statement</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our market position statement sets out the council's commissioning
      intentions and provides market intelligence for providers. It includes
      data on demand, supply and opportunities in the local care market. Visit
      our{" "}
      <Link
      to="/adult-social-care/our-policies/market-sustainability-commissioning"
      className="text-wf-blue underline hover:text-wf-green"
      >
      market sustainability and commissioning
      </Link>{" "}
      page for the full document.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Provider forums</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We hold regular provider forums where commissioned providers can:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Receive updates on commissioning plans and policy changes</li>
      <li>Share good practice and challenges</li>
      <li>Contribute to service development and quality improvement</li>
      <li>Network with other providers and council staff</li>
      </ul>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For commissioning enquiries, contact our team.
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