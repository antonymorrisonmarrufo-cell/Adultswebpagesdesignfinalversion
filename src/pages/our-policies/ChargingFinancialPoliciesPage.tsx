import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/our-policies" },
  { title: "Paying for care", to: "/paying-for-care" },
  { title: "Getting a care and support plan", to: "/how-to-get-support/getting-care-and-support-plan" },
];

export default function ChargingFinancialPoliciesPage() {
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
              <Link to="/our-policies" className="text-wf-blue underline hover:text-wf-green">Our policies</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Charging and financial policies</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Charging and financial policies
        </h1>
      </div>

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

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
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
