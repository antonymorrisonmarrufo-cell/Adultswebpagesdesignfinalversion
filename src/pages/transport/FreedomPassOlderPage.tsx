import { Link } from "react-router-dom";

export default function FreedomPassOlderPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          <li>
          <Link to="/" className="hover:underline text-[#004E3E]">
          Home
          </Link>
          <span className="mx-1">&gt;</span>
          </li>
          <li>
          <Link
          to="/adult-social-care"
          className="hover:underline text-[#004E3E]"
          >
          Adult Social Care
          </Link>
          <span className="mx-1">&gt;</span>
          </li>
          <li>
          <Link
          to="/transport"
          className="hover:underline text-[#004E3E]"
          >
          Travel and transport
          </Link>
          <span className="mx-1">&gt;</span>
          </li>
          <li className="text-gray-900 font-medium">
          Freedom Pass for older people
          </li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E] mb-6">
          Freedom Pass for older people
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
          The Older Persons Freedom Pass gives you free travel on public
          transport in London. It is available to Waltham Forest residents who
          are aged 60 or over.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Eligibility */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Who is eligible
          </h2>
          <p className="text-gray-700 mb-4">
          You can apply for an Older Persons Freedom Pass if you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Are aged 60 or over</li>
          <li>Live in the London Borough of Waltham Forest</li>
          </ul>
          <p className="text-gray-700 mt-4">
          There is no means test &mdash; eligibility is based solely on your
          age and residency. You can apply from the day of your 60th birthday.
          </p>
          </section>

          {/* How to apply */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          How to apply
          </h2>
          <p className="text-gray-700 mb-4">
          You can apply online through the London Councils website. To apply,
          you will need:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>A recent digital photograph</li>
          <li>
          Proof of your age (such as a passport, birth certificate or
          driving licence)
          </li>
          <li>
          Proof of your Waltham Forest address (such as a council tax bill,
          utility bill or bank statement dated within the last 3 months)
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          The pass is free of charge. Applications are usually processed
          within 3 to 4 weeks.
          </p>
          <div className="mt-4">
          <a
          href="https://www.londoncouncils.gov.uk/services/freedom-pass"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#004E3E] text-white font-medium px-6 py-3 rounded hover:bg-[#004d47] transition-colors"
          >
          Apply on the London Councils website
          </a>
          </div>
          </section>

          {/* What it covers */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          What the Freedom Pass covers
          </h2>
          <p className="text-gray-700 mb-4">
          With an Older Persons Freedom Pass you get free travel on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>All London buses (24 hours a day, 7 days a week)</li>
          <li>The Tube (Underground) &mdash; after 9am on weekdays and all day on weekends and public holidays</li>
          <li>DLR (Docklands Light Railway) &mdash; after 9am on weekdays</li>
          <li>London Overground &mdash; after 9am on weekdays</li>
          <li>Elizabeth line (within London) &mdash; after 9am on weekdays</li>
          <li>London trams &mdash; after 9am on weekdays</li>
          <li>
          Most National Rail services within London &mdash; after 9.30am on
          weekdays and all day on weekends and public holidays
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          Please note that free travel on rail services (other than buses)
          is not available during the morning peak period on weekdays. Bus
          travel is free at all times.
          </p>
          </section>

          {/* Renewal */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Renewing your Freedom Pass
          </h2>
          <p className="text-gray-700 mb-4">
          Freedom Passes are usually valid for 5 years. London Councils will
          contact you before your pass is due to expire. You will be asked to
          confirm your current address and provide a new photograph.
          </p>
          <p className="text-gray-700">
          Renewal is free and can be done online through the London Councils
          website. If you do not renew before your pass expires, you will not
          be able to use it for free travel.
          </p>
          </section>

          {/* Lost or stolen */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Lost, stolen or damaged passes
          </h2>
          <p className="text-gray-700">
          If your Freedom Pass is lost, stolen or damaged, you can request a
          replacement through the{" "}
          <a
          href="https://www.londoncouncils.gov.uk/services/freedom-pass"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          London Councils website
          </a>{" "}
          or by calling{" "}
          <a
          href="tel:03001234444"
          className="text-[#004E3E] font-medium hover:underline"
          >
          0300 123 4444
          </a>
          . A replacement fee of &pound;10 may apply.
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Contact
          </h2>
          <p className="text-gray-700 mb-2">
          Freedom Passes are managed by London Councils. For help with your
          application or any queries, contact the London Councils Freedom Pass
          team:
          </p>
          <p className="text-gray-700 mb-2">
          Telephone:{" "}
          <a
          href="tel:03432221234"
          className="text-[#004E3E] font-medium hover:underline"
          >
          0343 222 1234
          </a>
          </p>
          <p className="text-gray-700">
          Apply at{" "}
          <a
          href="https://www.freedompass.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          freedompass.org
          </a>
          </p>
          </section>

          {/* Related links */}
          <div className="bg-[#f3f2f1] rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#bf3688] mb-4">
          Related links
          </h2>
          <ul className="space-y-2 text-[#004E3E]">
          <li>
          <Link
          to="/transport"
          className="hover:underline"
          >
          Travel and transport
          </Link>
          </li>
          <li>
          <Link
          to="/transport/freedom-pass-disabled"
          className="hover:underline"
          >
          Freedom Pass for disabled people
          </Link>
          </li>
          <li>
          <Link
          to="/transport/taxicard"
          className="hover:underline"
          >
          Taxicard
          </Link>
          </li>
          <li>
          <Link
          to="/transport/transport-mobility"
          className="hover:underline"
          >
          Transport and mobility support
          </Link>
          </li>
          </ul>
          </div>

          <p className="text-sm text-gray-500">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
