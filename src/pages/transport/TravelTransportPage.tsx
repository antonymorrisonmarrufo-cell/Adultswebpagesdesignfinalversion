import { Link } from "react-router-dom";

const transportCards = [
  {
    title: "Blue Badge",
    description:
      "Apply for a Blue Badge to park closer to your destination if you have a disability or health condition that affects your mobility.",
    link: "/transport/blue-badge",
  },
  {
    title: "Freedom Pass (disabled people)",
    description:
      "Free travel on buses, tubes and trains in London for people with an eligible disability.",
    link: "/transport/freedom-pass-disabled",
  },
  {
    title: "Freedom Pass (older people)",
    description:
      "Free travel on buses, tubes and trains in London for residents aged 60 and over.",
    link: "/transport/freedom-pass-older",
  },
  {
    title: "Taxicard",
    description:
      "Subsidised door-to-door taxi and private hire vehicle journeys for residents with serious mobility or visual impairments.",
    link: "/transport/taxicard",
  },
  {
    title: "Transport and mobility support",
    description:
      "Dial-a-Ride, community transport, mobility aids and other accessible transport options available in Waltham Forest.",
    link: "/transport/transport-mobility",
  },
  {
    title: "Blue Badge for organisations",
    description:
      "How organisations that transport disabled people can apply for Blue Badges for their vehicles.",
    link: "/transport/blue-badge-organisations",
  },
];

export default function TravelTransportPage() {
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
          <li className="text-gray-900 font-medium">
          Travel and transport
          </li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E] mb-6">
          Travel and transport
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
          We offer a range of travel and transport services to help you get
          around if you have a disability, mobility difficulty or are an older
          resident. Find out about Blue Badges, Freedom Passes, Taxicards and
          other transport support available in Waltham Forest.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {transportCards.map((card) => (
          <Link
          key={card.title}
          to={card.link}
          className="block bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#004E3E] transition-all"
          >
          <h2 className="text-xl font-semibold text-[#bf3688] mb-2">
          {card.title}
          </h2>
          <p className="text-gray-700 text-sm">{card.description}</p>
          </Link>
          ))}
          </div>

          {/* Related links */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#bf3688] mb-4">
          Related links
          </h2>
          <ul className="space-y-2 text-[#004E3E]">
          <li>
          <Link
          to="/live-independently"
          className="hover:underline"
          >
          Living independently
          </Link>
          </li>
          <li>
          <Link
          to="/how-to-get-support"
          className="hover:underline"
          >
          How to get support
          </Link>
          </li>
          <li>
          <a
          href="https://tfl.gov.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          >
          Transport for London (TfL)
          </a>
          </li>
          </ul>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#bf3688] mb-4">
          Contact information
          </h2>
          <p className="text-gray-700">
          Most transport services are managed by Transport for London (TfL) or
          London Councils. Visit their websites or contact them directly using
          the links on each page.
          </p>
          </div>

          <p className="text-sm text-gray-500">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
