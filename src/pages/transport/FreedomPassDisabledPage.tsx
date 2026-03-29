import { Link } from "react-router-dom";

export default function FreedomPassDisabledPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:underline text-[#00635C]">
                Home
              </Link>
              <span className="mx-1">&gt;</span>
            </li>
            <li>
              <Link
                to="/adult-social-care"
                className="hover:underline text-[#00635C]"
              >
                Adult Social Care
              </Link>
              <span className="mx-1">&gt;</span>
            </li>
            <li>
              <Link
                to="/adult-social-care/transport"
                className="hover:underline text-[#00635C]"
              >
                Travel and transport
              </Link>
              <span className="mx-1">&gt;</span>
            </li>
            <li className="text-gray-900 font-medium">
              Freedom Pass for disabled people
            </li>
          </ol>
        </nav>

        {/* Page heading */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-6">
          Freedom Pass for disabled people
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          The Disabled Persons Freedom Pass gives you free travel on buses, the
          Tube, DLR, London Overground, Elizabeth line, trams, and most National
          Rail services in London. It is funded by London boroughs and
          administered by London Councils.
        </p>

        {/* Eligibility */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#D61F69] mb-4">
            Who is eligible
          </h2>
          <p className="text-gray-700 mb-4">
            You may be eligible for a Disabled Persons Freedom Pass if you are a
            Waltham Forest resident and meet one or more of the following
            criteria:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You are registered blind or partially sighted</li>
            <li>You are profoundly or severely deaf</li>
            <li>You are without speech</li>
            <li>
              You have a disability, or have suffered an injury, which has a
              substantial and long-term adverse effect on your ability to walk
            </li>
            <li>You do not have arms or have long-term loss of the use of both arms</li>
            <li>
              You have a learning disability (defined as a state of arrested or
              incomplete development of mind which includes significant
              impairment of intelligence and social functioning)
            </li>
            <li>
              You would be refused a driving licence on medical grounds (other
              than for persistent misuse of drugs or alcohol)
            </li>
            <li>
              You receive the higher rate of the mobility component of Disability
              Living Allowance (DLA)
            </li>
            <li>
              You receive Personal Independence Payment (PIP) and scored 8 points
              or more in the &ldquo;moving around&rdquo; activity, or 12 points
              in the &ldquo;planning and following a journey&rdquo; activity
            </li>
            <li>
              You receive the War Pensioners&rsquo; Mobility Supplement
            </li>
          </ul>
        </section>

        {/* How to apply */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#D61F69] mb-4">
            How to apply
          </h2>
          <p className="text-gray-700 mb-4">
            You can apply for a Disabled Persons Freedom Pass online through the
            London Councils website. You will need:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>A recent digital photograph</li>
            <li>
              Proof of your Waltham Forest address (such as a council tax bill
              or utility bill dated within the last 3 months)
            </li>
            <li>
              Evidence of your disability or qualifying benefit (such as a DLA
              or PIP award letter, registration certificate, or letter from your
              GP or consultant)
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            The pass is free of charge. Applications typically take up to 4
            weeks to process. If we need further evidence of your eligibility,
            it may take longer.
          </p>
          <div className="mt-4">
            <a
              href="https://www.londoncouncils.gov.uk/services/freedom-pass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00635C] text-white font-medium px-6 py-3 rounded hover:bg-[#004d47] transition-colors"
            >
              Apply on the London Councils website
            </a>
          </div>
        </section>

        {/* What it covers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#D61F69] mb-4">
            What the Freedom Pass covers
          </h2>
          <p className="text-gray-700 mb-4">
            With a Disabled Persons Freedom Pass you get free travel on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All London buses (24 hours a day, 7 days a week)</li>
            <li>The Tube (Underground)</li>
            <li>DLR (Docklands Light Railway)</li>
            <li>London Overground</li>
            <li>Elizabeth line (within London)</li>
            <li>London trams</li>
            <li>
              Most National Rail services within London (some restrictions may
              apply during peak hours depending on the train operator)
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Unlike the Older Persons Freedom Pass, the disabled pass allows free
            travel at all times of day, including peak hours.
          </p>
        </section>

        {/* Renewing or replacing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#D61F69] mb-4">
            Renewing or replacing your pass
          </h2>
          <p className="text-gray-700 mb-4">
            Freedom Passes are usually valid for 5 years. London Councils will
            write to you before your pass expires to explain how to renew.
          </p>
          <p className="text-gray-700">
            If your pass is lost, stolen or damaged, you can request a
            replacement through the London Councils website or by calling{" "}
            <a
              href="tel:03001234444"
              className="text-[#00635C] font-medium hover:underline"
            >
              0300 123 4444
            </a>
            . A replacement fee of &pound;10 may apply.
          </p>
        </section>

        {/* Help applying */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#D61F69] mb-4">
            Need help applying?
          </h2>
          <p className="text-gray-700">
            If you need help with your application, contact Waltham Forest
            Adult Social Care on{" "}
            <a
              href="tel:02084963130"
              className="text-[#00635C] font-medium hover:underline"
            >
              020 8496 3130
            </a>
            . We can help you gather the right evidence and complete your
            application.
          </p>
        </section>

        {/* Related links */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#D61F69] mb-4">
            Related links
          </h2>
          <ul className="space-y-2 text-[#00635C]">
            <li>
              <Link
                to="/adult-social-care/transport"
                className="hover:underline"
              >
                Travel and transport
              </Link>
            </li>
            <li>
              <Link
                to="/adult-social-care/transport/freedom-pass-older"
                className="hover:underline"
              >
                Freedom Pass for older people
              </Link>
            </li>
            <li>
              <Link
                to="/adult-social-care/transport/taxicard"
                className="hover:underline"
              >
                Taxicard
              </Link>
            </li>
            <li>
              <Link
                to="/adult-social-care/transport/blue-badge"
                className="hover:underline"
              >
                Blue Badge
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-500">Last updated: March 2026</p>
      </div>
    </div>
  );
}
