import { Link } from "react-router-dom";

export default function CareHomesNursingHomesPage() {
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
            <li><Link to="/care-homes" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Care homes and nursing homes</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Care homes and nursing homes</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Care homes and nursing homes provide round-the-clock residential care for
            people who can no longer be supported to live in their own home. Understanding
            the differences and how to choose the right home is important.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Differences */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">The difference between care homes and nursing homes</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-md border border-wf-gray-light p-4">
              <h3 className="text-lg font-bold text-[#004E3E]">Care homes (residential care)</h3>
              <p className="mt-2 text-wf-dark leading-relaxed">
                Care homes provide accommodation, meals, and personal care such as help
                with washing, dressing, eating, and going to the toilet. Staff are trained
                care workers but are not nurses. Care homes are suitable for people who need
                help with daily living but do not have complex medical needs.
              </p>
            </div>
            <div className="rounded-md border border-wf-gray-light p-4">
              <h3 className="text-lg font-bold text-[#004E3E]">Nursing homes</h3>
              <p className="mt-2 text-wf-dark leading-relaxed">
                Nursing homes provide everything a care home does, plus 24-hour nursing
                care from registered nurses. Nursing homes are suitable for people who have
                ongoing medical needs, for example those recovering from a stroke, living
                with advanced dementia, or managing complex long-term conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Choosing a home */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Choosing a care home</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Choosing a care home is an important decision. Here are some things to consider:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Location -- is the home close to family and friends?</li>
            <li>The type of care provided -- does it match your needs?</li>
            <li>CQC rating -- what does the latest inspection report say?</li>
            <li>The atmosphere -- does the home feel welcoming and well-run?</li>
            <li>Staff -- are they friendly, attentive, and well-trained?</li>
            <li>Activities -- does the home offer social activities and outings?</li>
            <li>Food -- are meals nutritious and do they cater for dietary needs?</li>
            <li>Rooms -- are they comfortable, clean, and can you personalise them?</li>
            <li>Cost -- what is included in the fees and what is extra?</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            We recommend visiting at least two or three homes before making a decision. Ask
            to have a meal, meet other residents, and speak to staff. Your social worker can
            help you identify suitable homes.
          </p>
        </section>

        {/* CQC ratings */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">CQC ratings and inspections</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            All care homes and nursing homes in England are inspected and rated by the Care
            Quality Commission (CQC). Ratings range from Outstanding to Inadequate:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Outstanding</strong> -- the service is performing exceptionally well</li>
            <li><strong>Good</strong> -- the service is performing well and meeting expectations</li>
            <li><strong>Requires improvement</strong> -- the service is not performing as well as it should</li>
            <li><strong>Inadequate</strong> -- the service is performing badly and action has been taken</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You can search for care homes and read their latest inspection reports on the{" "}
            <a
              href="https://www.cqc.org.uk"
              className="text-wf-blue underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CQC website
            </a>.
          </p>
        </section>

        {/* Funding */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Funding care home fees</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            How your care home placement is funded depends on your financial situation. The
            council will carry out a financial assessment to determine what you can afford
            to pay. There are several possible outcomes:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>
              <strong>Council-funded:</strong> If your capital (savings, investments, and
              property) is below the lower capital threshold, the council will pay your care
              home fees. You will contribute most of your income, keeping a personal
              expenses allowance.
            </li>
            <li>
              <strong>Partly council-funded:</strong> If your capital is between the lower
              and upper capital thresholds, you will pay a contribution from your capital
              (called a tariff income) as well as most of your income.
            </li>
            <li>
              <strong>Self-funded:</strong> If your capital is above the upper capital
              threshold, you will be responsible for paying your own care home fees. The
              council can still help you find a suitable placement.
            </li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you have nursing needs, the NHS may contribute through NHS-funded nursing
            care (FNC). In some cases, you may qualify for NHS continuing healthcare, which
            covers the full cost of your care.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            For full details, see our{" "}
            <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
              paying for care
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Council-run homes */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Council-run care homes in Waltham Forest</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Waltham Forest Council operates several care facilities:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link
              to="/care-homes/george-mason-lodge"
              className="block rounded-md border border-wf-gray-light p-4 hover:border-[#004E3E] hover:shadow-md transition-all no-underline"
            >
              <h3 className="text-lg font-bold text-[#004E3E]">George Mason Lodge</h3>
              <p className="mt-2 text-sm text-wf-gray">Council-run residential care home</p>
            </Link>
            <Link
              to="/care-homes/mapleton-road"
              className="block rounded-md border border-wf-gray-light p-4 hover:border-[#004E3E] hover:shadow-md transition-all no-underline"
            >
              <h3 className="text-lg font-bold text-[#004E3E]">Mapleton Road</h3>
              <p className="mt-2 text-sm text-wf-gray">Care facility and services</p>
            </Link>
            <Link
              to="/care-homes/alliston-house"
              className="block rounded-md border border-wf-gray-light p-4 hover:border-[#004E3E] hover:shadow-md transition-all no-underline"
            >
              <h3 className="text-lg font-bold text-[#004E3E]">Alliston House</h3>
              <p className="mt-2 text-sm text-wf-gray">Residential support and services</p>
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">Get help choosing a care home</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
            Our Adult Social Care team can help you understand your options and find a
            suitable care home. Contact us:
          </p>
          <p className="mt-3 text-wf-dark font-semibold">
            Telephone:{" "}
            <a href="tel:02084963130" className="text-wf-blue underline">
              020 8496 3130
            </a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">
            Monday to Friday, 9am to 5pm (excluding bank holidays)
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/care-homes/request-housing-care-support" className="text-wf-blue underline hover:text-wf-green">
                Request housing and care support
              </Link>
            </li>
            <li>
              <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
                Paying for care
              </Link>
            </li>
            <li>
              <a href="https://www.cqc.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Care Quality Commission (CQC)
              </a>
            </li>
            <li>
              <a href="https://www.nhs.uk/conditions/social-care-and-support-guide/care-services-equipment-and-care-homes/care-homes/" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                NHS guide to care homes
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
