import { Link } from "react-router-dom";

const teams = [
  {
    name: "Adult Social Care Direct (front door)",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "First point of contact for all new referrals, enquiries and requests for assessment.",
  },
  {
    name: "Emergency Duty Team (out of hours)",
    phone: "020 8496 3000",
    email: null,
    description: "Urgent safeguarding and social care concerns outside office hours, weekends and bank holidays.",
  },
  {
    name: "Safeguarding Adults Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Report safeguarding concerns about adults at risk of abuse or neglect.",
  },
  {
    name: "Community Teams (Older People and Physical Disability)",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Assessment, care planning and review for older adults and people with physical disabilities.",
  },
  {
    name: "Learning Disability Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Support for adults with learning disabilities, including transition from children's services.",
  },
  {
    name: "Mental Health Social Care Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Social care support for adults with severe and enduring mental health conditions.",
  },
  {
    name: "Occupational Therapy Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Assessments for equipment, adaptations and support to maintain independence at home.",
  },
  {
    name: "Reablement Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Short-term intensive support to help people regain independence after illness or hospital stay.",
  },
  {
    name: "Financial Assessment Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Financial assessments, charging queries and direct payment support.",
  },
  {
    name: "Commissioning Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "Provider contracts, quality monitoring and commissioning enquiries.",
  },
  {
    name: "Deprivation of Liberty Safeguards (DoLS) Team",
    phone: "020 8496 3130",
    email: "socialcaredirect@walthamforest.gov.uk",
    description: "DoLS applications, Best Interest Assessments and authorisations.",
  },
];

const relatedPages = [
  { title: "Information for professionals", to: "/information-for-professionals" },
  { title: "How to make a referral", to: "/information-for-professionals/how-to-make-referral" },
  { title: "Contact us", to: "/how-to-get-support/contact-us" },
];

export default function KeyTeamsContactDetailsPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link to="/adult-social-care/information-for-professionals" className="text-wf-blue underline hover:text-wf-green">Information for professionals</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Key teams and contact details</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Key teams and contact details
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      <section>
      <p className="text-wf-dark leading-relaxed">
      Below you will find contact details for the key Adult Social Care teams
      in Waltham Forest. For all new referrals, the first point of contact is
      Adult Social Care Direct on{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Team directory</h2>
      <div className="mt-4 space-y-6">
      {teams.map((team) => (
      <div
      key={team.name}
      className="rounded-lg border border-gray-200 p-5"
      >
      <h3 className="text-lg font-bold text-[#231F20]">{team.name}</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      {team.description}
      </p>
      <div className="mt-3 space-y-1">
      <p className="text-sm text-wf-dark">
      <strong>Telephone:</strong>{" "}
      <a
      href={`tel:${team.phone.replace(/\s/g, "")}`}
      className="text-wf-blue underline"
      >
      {team.phone}
      </a>
      </p>
      {team.email && (
      <p className="text-sm text-wf-dark">
      <strong>Email:</strong>{" "}
      <a
      href={`mailto:${team.email}`}
      className="text-wf-blue underline hover:text-wf-green"
      >
      {team.email}
      </a>
      </p>
      )}
      </div>
      </div>
      ))}
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Office hours</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      All teams are available Monday to Friday, 9am to 5pm, except for the
      Emergency Duty Team which operates outside these hours, including evenings,
      weekends and bank holidays.
      </p>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Main contact number</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For all enquiries, the main contact number is:
      </p>
      <p className="mt-3 text-sm font-semibold text-wf-dark">
      Telephone:{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </p>
      <p className="mt-1 text-sm text-wf-gray">
      Monday to Friday, 9am to 5pm. Out of hours: 020 8496 3000
      </p>
      </section>
      </div>
      </div>

      {/* Related pages */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="pt-8">
      <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
      <ul className="mt-4 space-y-2">
      {relatedPages.map((page) => (
      <li key={page.to}>
      <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
      {page.title}
      </Link>
      </li>
      ))}
      </ul>
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