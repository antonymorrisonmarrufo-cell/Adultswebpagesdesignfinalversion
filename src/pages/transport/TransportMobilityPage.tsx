import { Link } from "react-router-dom";

export default function TransportMobilityPage() {
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
          Transport and mobility support
          </li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20] mb-6">
          Transport and mobility support
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
          There are a range of transport and mobility services available to help
          you get around Waltham Forest and London. These services are designed
          for people who find it difficult to use conventional public transport
          due to a disability, age or mobility impairment.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Dial-a-Ride */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Dial-a-Ride
          </h2>
          <p className="text-gray-700 mb-4">
          Dial-a-Ride is a free, door-to-door transport service for disabled
          and older people who cannot use buses, trains or the Tube. The
          service is run by Transport for London (TfL).
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          Available to London residents who have a permanent or long-term
          disability or health condition that prevents them from using public
          transport
          </li>
          <li>
          The service operates minibuses with wheelchair access and trained
          drivers who can assist you
          </li>
          <li>
          Trips can be booked for shopping, medical appointments, social
          activities, visiting friends and family, and other day-to-day needs
          </li>
          <li>
          You need to register with Dial-a-Ride before you can use the
          service
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          To register or book a trip, call Dial-a-Ride on{" "}
          <a
          href="tel:03431221234"
          className="text-[#004E3E] font-medium hover:underline"
          >
          0343 122 1234
          </a>{" "}
          or visit the{" "}
          <a
          href="https://tfl.gov.uk/modes/dial-a-ride/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          TfL Dial-a-Ride page
          </a>
          .
          </p>
          </section>

          {/* Community transport */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Community transport
          </h2>
          <p className="text-gray-700 mb-4">
          Community transport services are run by local voluntary and
          community organisations. They offer affordable, accessible transport
          for people who cannot easily use mainstream public transport.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          Group trips and outings for older people and people with
          disabilities
          </li>
          <li>
          Minibus hire for community groups and voluntary organisations
          </li>
          <li>
          Volunteer car schemes where volunteer drivers take you to medical
          appointments or other essential trips
          </li>
          <li>
          Hospital transport for those who need help getting to and from
          hospital appointments
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          Contact your local community transport provider for details of
          services in your area.
          </p>
          </section>

          {/* Mobility aids */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Mobility aids and equipment
          </h2>
          <p className="text-gray-700 mb-4">
          If you have difficulty walking or moving around, you may be able to
          get help with mobility aids and equipment:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          <strong>Wheelchairs:</strong> The NHS wheelchair service can
          provide manual or powered wheelchairs if you have a long-term
          mobility need. Ask your GP or health professional for a referral.
          </li>
          <li>
          <strong>Walking aids:</strong> Walking sticks, frames and rollators
          can be provided through the NHS or purchased from mobility
          retailers.
          </li>
          <li>
          <strong>Motability scheme:</strong> If you receive the enhanced
          rate of the mobility component of PIP or the higher rate mobility
          component of DLA, you can lease a car, powered wheelchair or
          mobility scooter through the{" "}
          <a
          href="https://www.motability.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          Motability scheme
          </a>
          .
          </li>
          <li>
          <strong>Shopmobility:</strong> Borrow a wheelchair or mobility
          scooter to help you shop and visit leisure facilities in the local
          area.
          </li>
          </ul>
          </section>

          {/* Accessible transport options */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Accessible transport options
          </h2>
          <p className="text-gray-700 mb-4">
          London&rsquo;s public transport network is increasingly accessible.
          Key accessibility features include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          <strong>Buses:</strong> All London buses are wheelchair accessible
          with low floors and ramps. Drivers can lower the bus for people
          with mobility difficulties.
          </li>
          <li>
          <strong>Tube:</strong> Many stations now have step-free access.
          Check the TfL website for step-free station maps.
          </li>
          <li>
          <strong>London Overground and Elizabeth line:</strong> Most stations
          have step-free access from street to platform.
          </li>
          <li>
          <strong>Turn Up and Go:</strong> A service for wheelchair users and
          disabled passengers at staffed stations. Staff will help you board
          and alight the train without needing to book in advance.
          </li>
          <li>
          <strong>Travel mentoring:</strong> TfL offers a free travel
          mentoring service to help you build confidence using public
          transport. A mentor will accompany you on practice journeys.
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          For more information about accessible transport in London, visit the{" "}
          <a
          href="https://tfl.gov.uk/transport-accessibility/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          TfL accessibility pages
          </a>
          .
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Contact
          </h2>
          <p className="text-gray-700 mb-2">
          <strong>Dial-a-Ride</strong> is managed by TfL. To register or book
          trips, contact TfL Dial-a-Ride:
          </p>
          <p className="text-gray-700 mb-4">
          Telephone:{" "}
          <a
          href="tel:03432227777"
          className="text-[#004E3E] font-medium hover:underline"
          >
          0343 222 7777
          </a>
          </p>
          <p className="text-gray-700 mb-2">
          <strong>Motability</strong> is managed by Motability Operations:
          </p>
          <p className="text-gray-700">
          Telephone:{" "}
          <a
          href="tel:03004564566"
          className="text-[#004E3E] font-medium hover:underline"
          >
          0300 456 4566
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
          to="/transport/blue-badge"
          className="hover:underline"
          >
          Blue Badge
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
          to="/transport/freedom-pass-disabled"
          className="hover:underline"
          >
          Freedom Pass for disabled people
          </Link>
          </li>
          <li>
          <Link
          to="/live-independently"
          className="hover:underline"
          >
          Living independently
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
