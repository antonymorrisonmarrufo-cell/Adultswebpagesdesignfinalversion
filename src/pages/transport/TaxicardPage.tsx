import { Link } from "react-router-dom";

export default function TaxicardPage() {
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
          to="/adult-social-care/travel-and-transport"
          className="hover:underline text-[#004E3E]"
          >
          Travel and transport
          </Link>
          <span className="mx-1">&gt;</span>
          </li>
          <li className="text-gray-900 font-medium">Taxicard</li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20] mb-6">Taxicard</h1>
          
          <p className="text-lg text-gray-700 mb-8">
          The Taxicard scheme provides subsidised door-to-door taxi and private
          hire vehicle journeys for London residents with serious mobility
          impairments or who are severely visually impaired. The scheme is
          jointly funded by Transport for London and the London Borough of
          Waltham Forest.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* How it works */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          How the Taxicard scheme works
          </h2>
          <p className="text-gray-700 mb-4">
          With a Taxicard, you pay a fixed contribution towards each journey
          and the scheme pays the rest. The amount you pay depends on the
          length of your journey:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          You pay a subsidised flat fare for each trip (typically around
          &pound;2.50 to &pound;3.50 depending on the journey)
          </li>
          <li>
          The scheme covers the remainder of the fare up to a maximum
          subsidy per trip
          </li>
          <li>
          If the fare exceeds the maximum subsidy, you will need to pay the
          difference
          </li>
          <li>
          You are allocated a set number of trips per year (typically around
          104 trips)
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          You can use your Taxicard with licensed black cabs and participating
          private hire vehicles. Trips can be booked in advance or hailed on
          the street (black cabs only).
          </p>
          </section>

          {/* Eligibility */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Who is eligible
          </h2>
          <p className="text-gray-700 mb-4">
          You may be eligible for a Taxicard if you are a Waltham Forest
          resident and:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          You have a permanent disability that means you are unable to use
          buses, trains or the Tube
          </li>
          <li>
          You receive the higher rate of the mobility component of Disability
          Living Allowance (DLA)
          </li>
          <li>
          You receive Personal Independence Payment (PIP) and scored 8 points
          or more in the &ldquo;moving around&rdquo; activity
          </li>
          <li>
          You are registered blind or severely sight impaired
          </li>
          <li>
          You have a severe mobility impairment that is not adequately
          addressed by other transport services
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          You do not need to hold a Disabled Persons Freedom Pass or Blue
          Badge to apply, though having one of these may support your
          application.
          </p>
          </section>

          {/* How to apply */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          How to apply
          </h2>
          <p className="text-gray-700 mb-4">
          You can apply for a Taxicard online or by post. To apply, you will
          need:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          Proof of your Waltham Forest address (such as a council tax bill
          or utility bill)
          </li>
          <li>
          Evidence of your disability or qualifying benefit (such as a DLA
          or PIP award letter)
          </li>
          <li>A recent photograph</li>
          </ul>
          <p className="text-gray-700 mt-4">
          The Taxicard itself is free. Applications are usually processed
          within 4 weeks.
          </p>
          <div className="mt-4">
          <a
          href="https://www.londoncouncils.gov.uk/services/taxicard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#bf3688] text-white font-medium px-6 py-3 rounded hover:bg-[#a02d73] transition-colors"
          >
          Apply on the London Councils website
          </a>
          </div>
          </section>

          {/* Booking trips */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Booking trips
          </h2>
          <p className="text-gray-700 mb-4">
          You can book a Taxicard trip by:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          Calling the Taxicard booking line on{" "}
          <a
          href="tel:08003601111"
          className="text-[#004E3E] font-medium hover:underline"
          >
          0800 360 1111
          </a>
          </li>
          <li>Hailing a licensed black cab on the street and showing your Taxicard</li>
          <li>Booking in advance for a specific date and time</li>
          </ul>
          <p className="text-gray-700 mt-4">
          When you travel, show your Taxicard to the driver at the start of
          the journey. You will pay your contribution directly to the driver
          at the end of the trip.
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Contact
          </h2>
          <p className="text-gray-700 mb-2">
          Taxicard is managed by London Councils. For queries about your
          Taxicard, contact the London Councils Taxicard team:
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
          To book trips, contact ComCab London:{" "}
          <a
          href="tel:02079080271"
          className="text-[#004E3E] font-medium hover:underline"
          >
          020 7908 0271
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
          to="/adult-social-care/travel-and-transport"
          className="hover:underline"
          >
          Travel and transport
          </Link>
          </li>
          <li>
          <Link
          to="/adult-social-care/travel-and-transport/freedom-pass-disabled"
          className="hover:underline"
          >
          Freedom Pass for disabled people
          </Link>
          </li>
          <li>
          <Link
          to="/adult-social-care/travel-and-transport/blue-badge"
          className="hover:underline"
          >
          Blue Badge
          </Link>
          </li>
          <li>
          <Link
          to="/adult-social-care/travel-and-transport/transport-mobility-support"
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
