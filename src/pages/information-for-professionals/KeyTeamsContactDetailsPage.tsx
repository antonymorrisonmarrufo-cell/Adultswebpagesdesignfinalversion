import { Link } from "react-router-dom";

interface Team {
  name: string;
  phone: string | null;
  email: string | null;
  description: string;
  address?: string;
  note?: string;
  hours?: string;
}

interface TeamSection {
  heading: string;
  teams: Team[];
}

const teamSections: TeamSection[] = [
  {
    heading: "Referrals and enquiries",
    teams: [
      {
        name: "Adults Hub (general referrals and enquiries)",
        phone: "020 8496 3130",
        email: "socialcaredirect@walthamforest.gov.uk",
        description:
          "First point of contact for all new referrals, enquiries and requests for assessment.",
        hours: "Monday to Friday, 9am to 5pm",
      },
      {
        name: "Out of hours emergencies",
        phone: "020 8496 3130 (choose the emergency option)",
        email: null,
        description:
          "Urgent safeguarding and social care concerns outside office hours, weekends and bank holidays.",
      },
    ],
  },
  {
    heading: "Safeguarding",
    teams: [
      {
        name: "Multi-Agency Safeguarding Hub (MASH)",
        phone: "020 8496 3130",
        email: "MASHrequests@walthamforest.gov.uk",
        description:
          "Report safeguarding concerns about adults at risk of abuse or neglect.",
      },
      {
        name: "Safeguarding Adults Board",
        phone: null,
        email: "strategicpartnerships@walthamforest.gov.uk",
        description:
          "Strategic oversight of safeguarding arrangements across Waltham Forest.",
      },
    ],
  },
  {
    heading: "Mental health",
    teams: [
      {
        name: "NELFT Mental Health Single Point of Access",
        phone: "0300 300 1570 (option 4)",
        email: null,
        description:
          "For adults aged 18+ needing community mental health services.",
      },
      {
        name: "NELFT Older Adult Mental Health Team",
        phone: "0300 555 1270",
        email: null,
        description:
          "Mental health support for older adults.",
      },
      {
        name: "NELFT Community Recovery Team",
        phone: "0300 555 1268 or 0300 555 1233",
        email: null,
        description:
          "Community-based recovery support for adults with mental health conditions.",
        note: "Referrals accepted via the Access and Assessment Team",
      },
      {
        name: "NELFT Mental Health Direct (crisis)",
        phone: "0800 995 1000 (free, 24/7)",
        email: null,
        description:
          "24/7 crisis line for anyone experiencing a mental health crisis.",
      },
    ],
  },
  {
    heading: "Financial assessment",
    teams: [
      {
        name: "Financial Assessment Unit",
        phone: null,
        email: "residentialfau@walthamforest.gov.uk",
        description:
          "Financial assessments, charging queries and direct payment support.",
        note: "Phone number to be confirmed",
      },
    ],
  },
  {
    heading: "Specialist services",
    teams: [
      {
        name: "Community Learning Disability Team",
        phone: "020 8928 8300",
        email: null,
        description:
          "Support for adults with learning disabilities, including transition from children's services.",
        address: "30 Coleridge Road, Walthamstow, E17 6QU",
      },
      {
        name: "Shared Lives",
        phone: "020 8928 8300",
        email: "shared.lives@walthamforest.gov.uk",
        description:
          "Long-term placements, short breaks and day support with approved Shared Lives carers.",
        address: "30 Coleridge Road, Walthamstow, E17 6QU",
      },
      {
        name: "Occupational Therapy",
        phone: "020 8496 3130",
        email: "socialcaredirect@walthamforest.gov.uk",
        description:
          "Assessments for equipment, adaptations and support to maintain independence at home.",
        note: "Referrals via the Adults Hub",
      },
    ],
  },
];

const relatedPages = [
  { title: "Information for professionals", to: "/adult-social-care/information-for-professionals" },
  { title: "How to make a referral", to: "/adult-social-care/information-for-professionals/how-to-make-referral" },
  { title: "Contact us", to: "/adult-social-care/how-to-get-support/contact-us" },
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
                  the Adults Hub on{" "}
                  <a href="tel:02084963130" className="text-wf-blue underline">
                    020 8496 3130
                  </a>.
                </p>
              </section>

              {teamSections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-wf-pink">{section.heading}</h2>
                  <div className="mt-4 space-y-6">
                    {section.teams.map((team) => (
                      <div
                        key={team.name}
                        className="rounded-lg border border-gray-200 p-5"
                      >
                        <h3 className="text-lg font-bold text-[#231F20]">{team.name}</h3>
                        <p className="mt-1 text-sm text-wf-dark leading-relaxed">
                          {team.description}
                        </p>
                        <div className="mt-3 space-y-1">
                          {team.phone && (
                            <p className="text-sm text-wf-dark">
                              <strong>Telephone:</strong>{" "}
                              {team.phone}
                            </p>
                          )}
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
                          {team.address && (
                            <p className="text-sm text-wf-dark">
                              <strong>Address:</strong> {team.address}
                            </p>
                          )}
                          {team.hours && (
                            <p className="text-sm text-wf-dark">
                              <strong>Hours:</strong> {team.hours}
                            </p>
                          )}
                          {team.note && (
                            <p className="mt-2 text-sm text-wf-gray italic">
                              {team.note}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              {/* Callout box */}
              <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
                <h2 className="text-xl font-bold text-wf-pink">Not sure who to contact?</h2>
                <p className="mt-2 text-sm text-wf-dark leading-relaxed">
                  If you are unsure which team to contact, phone the Adults Hub on{" "}
                  <a href="tel:02084963130" className="text-wf-blue underline font-semibold">
                    020 8496 3130
                  </a>. They can direct you to the right team.
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
