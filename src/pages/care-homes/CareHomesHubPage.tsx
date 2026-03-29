import { Link } from "react-router-dom";

const cards = [
  {
    title: "Request housing and care support",
    description:
      "Find out how to request an assessment for housing with care, and how to contact our team for advice.",
    to: "/care-homes/request-housing-care-support",
  },
  {
    title: "Supported living",
    description:
      "Living in your own home or shared accommodation with support tailored to your needs.",
    to: "/care-homes/supported-living",
  },
  {
    title: "Shared Lives",
    description:
      "Living with an approved carer in their family home, with matching and ongoing support.",
    to: "/care-homes/shared-lives",
  },
  {
    title: "Extra care housing",
    description:
      "Self-contained flats with on-site care staff, designed for older people who need some support.",
    to: "/care-homes/extra-care-housing",
  },
  {
    title: "Sheltered housing",
    description:
      "Independent living with the reassurance of a warden or scheme manager on hand to help.",
    to: "/care-homes/sheltered-housing",
  },
  {
    title: "Care homes and nursing homes",
    description:
      "Residential care for people who need round-the-clock support, including how to choose a home and funding.",
    to: "/care-homes/care-homes-nursing-homes",
  },
  {
    title: "George Mason Lodge",
    description:
      "A council-run residential care home in Waltham Forest providing personal care and support.",
    to: "/care-homes/george-mason-lodge",
  },
  {
    title: "Mapleton Road",
    description:
      "A care facility in Waltham Forest offering specialist support and accommodation.",
    to: "/care-homes/mapleton-road",
  },
  {
    title: "Alliston House",
    description:
      "A care facility providing residential support and services for adults in Waltham Forest.",
    to: "/care-homes/alliston-house",
  },
];

export default function CareHomesHubPage() {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li className="flex items-center gap-1">
              <Link to="/" className="text-wf-blue underline hover:text-wf-green">
                Home
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li className="flex items-center gap-1">
              <Link
                to="/adult-social-care"
                className="text-wf-blue underline hover:text-wf-green"
              >
                Adult Social Care
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Housing and care homes</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-[#004E3E] leading-tight">
          Housing and care homes
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          Waltham Forest Council offers a range of housing and care options for adults who
          need support. Whether you are looking for a little extra help to live
          independently or full-time residential care, we can help you find the right
          option.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#bf3688]"
            >
              <h2 className="text-xl font-bold text-[#bf3688] group-hover:underline">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-wf-gray leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact banner */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">Need advice?</h2>
          <p className="mt-2 text-sm text-wf-dark leading-relaxed">
            If you are unsure which housing or care option is right for you or someone you
            care about, our Adult Social Care team can help.
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
        </div>
      </div>

      {/* Last updated */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <p className="text-xs text-wf-gray">Last updated: March 2026</p>
      </div>
    </div>
  );
}
