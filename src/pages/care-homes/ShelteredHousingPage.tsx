import { Link } from "react-router-dom";

export default function ShelteredHousingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care/housing-and-care-homes" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Sheltered housing</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#00635C]">Sheltered housing</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Sheltered housing provides independent living for older people with the
            reassurance of a scheme manager (warden) and an emergency alarm system.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* What is sheltered housing */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">What is sheltered housing?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Sheltered housing (also known as retirement housing) is purpose-built
            accommodation designed for older people who can live independently but want the
            security of having support nearby. Each property is self-contained with its own
            front door, and residents have access to shared communal facilities.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            A scheme manager or warden is usually available during office hours to provide
            help and reassurance. All flats are fitted with an emergency alarm system that
            connects to a 24-hour monitoring service, so help is always available if needed.
          </p>
        </section>

        {/* What is included */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">What is included?</h2>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>A self-contained flat or bungalow (usually one or two bedrooms)</li>
            <li>A scheme manager or warden available during working hours</li>
            <li>A 24-hour emergency alarm system</li>
            <li>Communal lounge, laundry, and garden areas</li>
            <li>Organised social activities and events</li>
            <li>Secure entry to the building</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Sheltered housing does not include personal care. If you need help with
            personal care such as washing, dressing, or taking medication, you may be able
            to receive home care services or may be better suited to{" "}
            <Link to="/adult-social-care/housing-and-care-homes/extra-care-housing" className="text-wf-blue underline hover:text-wf-green">
              extra care housing
            </Link>.
          </p>
        </section>

        {/* Eligibility */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Eligibility</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            To be eligible for sheltered housing in Waltham Forest, you will usually need
            to meet the following criteria:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Be aged 55 or over (age criteria may vary by scheme)</li>
            <li>Be able to live independently with minimal support</li>
            <li>Be registered on the Waltham Forest housing waiting list</li>
            <li>Have a local connection to the London Borough of Waltham Forest</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Priority is given to applicants whose current housing is no longer suitable for
            their needs, for example due to mobility difficulties or health conditions.
          </p>
        </section>

        {/* How to apply */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">How to apply</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            To apply for sheltered housing, you need to register on the Waltham Forest
            housing waiting list. You can do this by:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>
              Applying online through the{" "}
              <a
                href="https://www.walthamforest.gov.uk/housing"
                className="text-wf-blue underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Waltham Forest housing website
              </a>
            </li>
            <li>Contacting the housing team at Waltham Forest Town Hall</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you also have care needs and are unsure which type of housing is right for
            you, contact our Adult Social Care team for advice:
          </p>
          <p className="mt-3 text-wf-dark">
            <strong>Telephone:</strong>{" "}
            <a href="tel:02084963130" className="text-wf-blue underline font-semibold">
              020 8496 3130
            </a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">
            Monday to Friday, 9am to 5pm (excluding bank holidays)
          </p>
        </section>

        {/* Costs */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Costs</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            In sheltered housing, you will pay rent and a service charge. The service
            charge covers the cost of the scheme manager, alarm system, and communal
            facilities. You may be eligible for housing benefit to help with these costs.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Council tax and utility bills for your own flat are your responsibility.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/adult-social-care/housing-and-care-homes/extra-care-housing" className="text-wf-blue underline hover:text-wf-green">
                Extra care housing
              </Link>
            </li>
            <li>
              <Link to="/adult-social-care/housing-and-care-homes/request-support" className="text-wf-blue underline hover:text-wf-green">
                Request housing and care support
              </Link>
            </li>
            <li>
              <Link to="/adult-social-care/housing-and-care-homes/care-homes-and-nursing-homes" className="text-wf-blue underline hover:text-wf-green">
                Care homes and nursing homes
              </Link>
            </li>
            <li>
              <Link to="/adult-social-care/live-independently" className="text-wf-blue underline hover:text-wf-green">
                Live independently
              </Link>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
