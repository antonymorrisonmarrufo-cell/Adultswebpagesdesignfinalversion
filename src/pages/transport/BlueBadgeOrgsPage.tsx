import { Link } from "react-router-dom";

export default function BlueBadgeOrgsPage() {
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
          Blue Badge for organisations
          </li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20] mb-6">
          Blue Badge for organisations
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
          Organisations that care for and transport disabled people may be
          eligible to apply for Blue Badges for their vehicles. Organisational
          Blue Badges allow designated vehicles to use disabled parking bays
          when transporting people who would qualify for a Blue Badge in their
          own right.
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
          Your organisation may be eligible for an organisational Blue Badge
          if it:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          Cares for and transports disabled people who would be eligible for
          a Blue Badge in their own right
          </li>
          <li>
          Has vehicles that are used regularly to transport those people
          (for example, to day centres, medical appointments, or community
          activities)
          </li>
          <li>
          Is a registered charity, not-for-profit organisation, or local
          authority care provider
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          Organisational badges are issued for specific vehicles, not for the
          organisation as a whole. Each vehicle that needs a badge must be
          named in the application.
          </p>
          <p className="text-gray-700 mt-4">
          Businesses operating for profit, such as private taxi firms, are
          generally not eligible for organisational Blue Badges.
          </p>
          </section>

          {/* How to apply */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          How to apply
          </h2>
          <p className="text-gray-700 mb-4">
          To apply for an organisational Blue Badge, you will need to provide:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          Details of your organisation, including its legal status (charity,
          not-for-profit, etc.)
          </li>
          <li>
          The registration number and details of each vehicle you are
          applying for
          </li>
          <li>
          Evidence that the vehicles are used to transport disabled people
          who would qualify for a Blue Badge
          </li>
          <li>
          The name and contact details of the person responsible for managing
          the badges within the organisation
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          Applications can be made online through GOV.UK or by contacting
          Waltham Forest Council directly. The application is free and
          typically takes up to 12 weeks to process.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
          <a
          href="https://www.gov.uk/apply-blue-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#004E3E] text-white font-medium px-6 py-3 rounded hover:bg-[#004d47] transition-colors"
          >
          Apply on GOV.UK
          </a>
          </div>
          </section>

          {/* How organisations can use the badge */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          How to use an organisational Blue Badge
          </h2>
          <p className="text-gray-700 mb-4">
          Organisational Blue Badges must be used responsibly. The rules are:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          The badge can only be used when the named vehicle is being used to
          transport a disabled person who would qualify for a personal Blue
          Badge
          </li>
          <li>
          The badge must be displayed on the dashboard of the named vehicle
          so it can be clearly read through the front windscreen
          </li>
          <li>
          The parking clock must be set to show the arrival time when
          parking in a time-limited bay
          </li>
          <li>
          The badge must not be used for staff parking, personal errands, or
          any purpose not related to transporting disabled people
          </li>
          <li>
          Misuse of an organisational Blue Badge is a criminal offence and
          can result in a fine of up to &pound;1,000
          </li>
          </ul>
          </section>

          {/* Renewal */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Renewal and changes
          </h2>
          <p className="text-gray-700 mb-4">
          Organisational Blue Badges are valid for up to 3 years. To renew,
          submit a new application before the badge expires, providing updated
          vehicle and organisational details.
          </p>
          <p className="text-gray-700">
          If a vehicle is replaced or taken out of service, you must inform
          the council. The badge is linked to a specific vehicle and cannot be
          transferred to another vehicle without a new application.
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Contact
          </h2>
          <p className="text-gray-700 mb-2">
          Organisation Blue Badges can be applied for via{" "}
          <a
          href="https://www.gov.uk/apply-blue-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          GOV.UK
          </a>{" "}
          or through your local authority.
          </p>
          <p className="text-gray-700">
          For queries, contact Waltham Forest Customer Services.
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
          Blue Badge (personal)
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
          <li>
          <a
          href="https://www.gov.uk/blue-badge-scheme-information-council"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          >
          Blue Badge scheme on GOV.UK
          </a>
          </li>
          </ul>
          </div>

          <p className="text-sm text-gray-500">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
