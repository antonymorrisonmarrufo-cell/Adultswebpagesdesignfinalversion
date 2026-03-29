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
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
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
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Housing and care homes
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      Waltham Forest Council offers a range of housing and care options for adults who
      need support. Whether you are looking for a little extra help to live
      independently or full-time residential care, we can help you find the right
      option.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Cards grid */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card) => (
      <Link
      key={card.to}
      to={card.to}
      className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
      >
      <h3 className="text-base font-bold text-[#bf3688] mb-2">
      {card.title}
      </h3>
      <p className="text-sm text-[#231F20] flex-1">
      {card.description}
      </p>
      <div className="flex justify-end mt-4">
        <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
      </Link>
      ))}
      </div>
      </div>

      {/* Contact banner */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <div className="mb-3">
        <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
      </div>
      <h2 className="text-xl font-bold text-[#003078]">Need advice?</h2>
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
      </div>
    </div>
  );
}
