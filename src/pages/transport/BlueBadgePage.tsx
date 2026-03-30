import { Link } from "react-router-dom";

export default function BlueBadgePage() {
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
          <li className="text-gray-900 font-medium">Blue Badge</li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20] mb-6">Blue Badge</h1>
          
          <p className="text-lg text-gray-700 mb-8">
          The Blue Badge scheme helps people with disabilities or health
          conditions that affect their mobility to park closer to their
          destination. Blue Badges are issued by Waltham Forest Council and are
          valid across the UK and some European countries.
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
          You may be eligible for a Blue Badge if you meet one or more of the
          following criteria:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          You receive the higher rate of the mobility component of Disability
          Living Allowance (DLA)
          </li>
          <li>
          You receive Personal Independence Payment (PIP) and scored 8 points
          or more in the &ldquo;moving around&rdquo; activity
          </li>
          <li>You are registered blind (severely sight impaired)</li>
          <li>
          You receive a War Pensioners&rsquo; Mobility Supplement
          </li>
          <li>
          You have been awarded a lump sum benefit at tariffs 1 to 8 of the
          Armed Forces Compensation Scheme and have been certified as having
          a permanent and substantial disability
          </li>
          <li>
          You have a permanent and substantial disability that means you
          cannot walk or find walking very difficult
          </li>
          <li>
          You have a non-visible (hidden) disability that means journeys by
          car would cause you considerable difficulty
          </li>
          <li>
          You are a child under 3 who has a medical condition requiring
          bulky medical equipment or needs to be kept near a vehicle for
          treatment
          </li>
          </ul>
          </section>

          {/* How to apply */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          How to apply
          </h2>
          <p className="text-gray-700 mb-4">
          You can apply for a Blue Badge online through the GOV.UK website.
          You will need:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>A recent digital photograph of yourself</li>
          <li>Proof of identity (such as a passport or driving licence)</li>
          <li>Proof of address</li>
          <li>
          Proof of any benefits you receive (such as a DLA or PIP award
          letter)
          </li>
          <li>
          Details of any relevant medication or treatment if applying under
          the discretionary criteria
          </li>
          </ul>
          <p className="text-gray-700 mt-4">
          The application is free. It can take up to 12 weeks to process your
          application. If you are applying under the discretionary criteria, we
          may ask you to attend a mobility assessment.
          </p>
          <div className="mt-4">
          <a
          href="https://www.gov.uk/apply-blue-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#004E3E] text-white font-medium px-6 py-3 rounded hover:bg-[#004d47] transition-colors"
          >
          Apply for a Blue Badge on GOV.UK
          </a>
          </div>
          </section>

          {/* Renewal */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Renewing your Blue Badge
          </h2>
          <p className="text-gray-700 mb-4">
          Blue Badges are valid for up to 3 years. You can apply to renew your
          badge up to 12 weeks before it expires. You should not use an expired
          badge as you could receive a parking fine.
          </p>
          <p className="text-gray-700">
          To renew, apply again through GOV.UK using the same process as a new
          application. You will need to provide up-to-date evidence of your
          eligibility and a new photograph.
          </p>
          </section>

          {/* Using your badge */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Using your Blue Badge
          </h2>
          <p className="text-gray-700 mb-4">
          When using your Blue Badge:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
          Display your badge on the dashboard or facia panel where it can be
          clearly read through the front windscreen
          </li>
          <li>
          Set the clock on your badge to show the time you arrived when
          parking in time-limited bays
          </li>
          <li>
          Your badge is for your personal use only &mdash; it must not be
          used by anyone else when you are not travelling in the vehicle
          </li>
          <li>
          You can use your badge in any vehicle you are travelling in,
          whether as a driver or a passenger
          </li>
          <li>
          You can park on single or double yellow lines for up to 3 hours
          (unless a loading ban is in place)
          </li>
          <li>
          You can park for free and without a time limit at on-street parking
          meters and pay-and-display machines
          </li>
          </ul>
          </section>

          {/* Lost or stolen */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Lost or stolen Blue Badges
          </h2>
          <p className="text-gray-700 mb-4">
          If your Blue Badge has been lost, stolen or damaged, you should
          report it to us as soon as possible. We can issue a replacement
          badge.
          </p>
          <p className="text-gray-700 mb-4">
          If your badge has been stolen, you should also report this to the
          police and obtain a crime reference number. Misuse of a Blue Badge
          is a criminal offence and can result in a fine of up to &pound;1,000.
          </p>
          <p className="text-gray-700">
          To request a replacement, apply again through{" "}
          <a
          href="https://www.gov.uk/apply-blue-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          GOV.UK
          </a>{" "}
          or contact Waltham Forest Customer Services.
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#bf3688] mb-4">
          Contact
          </h2>
          <p className="text-gray-700 mb-2">
          Blue Badges are managed via GOV.UK. You can{" "}
          <a
          href="https://www.gov.uk/apply-blue-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#004E3E] font-medium hover:underline"
          >
          apply online at GOV.UK
          </a>
          .
          </p>
          <p className="text-gray-700">
          For queries, contact the Blue Badge helpline or Waltham Forest
          Customer Services.
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
          to="/adult-social-care/travel-and-transport/blue-badge-organisations"
          className="hover:underline"
          >
          Blue Badge for organisations
          </Link>
          </li>
          <li>
          <Link
          to="/adult-social-care/travel-and-transport/taxicard"
          className="hover:underline"
          >
          Taxicard
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
