import { Link } from "react-router-dom";

export default function ProfessionalGuidancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">Safeguarding adults</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Professional guidance and resources</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#00635C]">Professional guidance and resources</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Practice standards, training opportunities, and toolkits to support professionals working in
            adult safeguarding in Waltham Forest.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Practice standards */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Practice standards</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            All professionals working with adults at risk in Waltham Forest are expected to follow the
            London Multi-Agency Adult Safeguarding Policy and Procedures. In addition, the Waltham Forest
            Safeguarding Adults Board has developed local practice standards that set out the expected
            quality of safeguarding work.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Key practice standards include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>
              <strong>Making Safeguarding Personal</strong> - all safeguarding activity should be
              person-centred, with the adult's wishes and desired outcomes guiding the response
            </li>
            <li>
              <strong>Timely referrals</strong> - safeguarding concerns should be reported within 24 hours
              of identification, or immediately if the adult is at imminent risk
            </li>
            <li>
              <strong>Multi-agency working</strong> - effective information sharing and collaboration
              between agencies to ensure a coordinated response
            </li>
            <li>
              <strong>Recording and documentation</strong> - clear, accurate, and contemporaneous records
              of all safeguarding activity
            </li>
            <li>
              <strong>Mental capacity</strong> - assessment of mental capacity where there is reason to
              believe the adult may lack capacity to make decisions about their safety
            </li>
          </ul>
        </section>

        {/* Training */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Training</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The Waltham Forest Safeguarding Adults Board provides a range of training opportunities for
            professionals across all partner agencies. Training is available at different levels depending
            on your role and responsibilities.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#00635C]">Level 1: Basic awareness</h3>
              <p className="mt-2 text-wf-dark">
                For all staff and volunteers. Covers what safeguarding is, how to recognise abuse and
                neglect, and how to report concerns. Available as an e-learning module.
              </p>
            </div>

            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#00635C]">Level 2: Responding to concerns</h3>
              <p className="mt-2 text-wf-dark">
                For staff who may need to respond to safeguarding concerns as part of their role. Covers
                the referral process, information sharing, and Making Safeguarding Personal.
              </p>
            </div>

            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#00635C]">Level 3: Enquiry managers</h3>
              <p className="mt-2 text-wf-dark">
                For professionals who lead or manage safeguarding enquiries. Covers the Section 42 enquiry
                process, risk assessment, safeguarding planning, and complex case management.
              </p>
            </div>

            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#00635C]">Specialist topics</h3>
              <p className="mt-2 text-wf-dark">
                Workshops and seminars on specific topics such as self-neglect, modern slavery, domestic
                abuse, financial abuse, mental capacity, and organisational abuse.
              </p>
            </div>
          </div>

          <p className="mt-4 text-wf-dark leading-relaxed">
            For details of upcoming training sessions, please contact the SAB business unit or check the
            Waltham Forest learning and development portal.
          </p>
        </section>

        {/* Toolkits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Toolkits and frameworks</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The following toolkits and frameworks are available to support professionals in their
            safeguarding practice:
          </p>
          <ul className="mt-4 space-y-3 text-wf-dark">
            <li>
              <strong>Self-neglect and hoarding toolkit</strong> - guidance on working with adults who
              self-neglect, including risk assessment tools and multi-agency escalation pathways
            </li>
            <li>
              <strong>Financial abuse toolkit</strong> - guidance on identifying and responding to financial
              abuse, including scams targeting vulnerable adults
            </li>
            <li>
              <strong>Mental capacity assessment guidance</strong> - a step-by-step guide to carrying out
              capacity assessments in safeguarding contexts
            </li>
            <li>
              <strong>Safeguarding adults risk assessment framework</strong> - a structured approach to
              assessing and managing risk in safeguarding cases
            </li>
            <li>
              <strong>Information sharing protocol</strong> - guidance on lawful information sharing between
              agencies in safeguarding situations
            </li>
          </ul>
        </section>

        {/* Policies and procedures */}
        <section className="mb-8 rounded-md border border-wf-gray-light bg-wf-gray-light p-6">
          <h2 className="text-2xl font-bold text-[#D61F69]">Key policies and procedures</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href="https://londonadass.org.uk/safeguarding/policy-and-procedures/" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                London Multi-Agency Adult Safeguarding Policy and Procedures
              </a>
            </li>
            <li>
              <a href="https://www.legislation.gov.uk/ukpga/2014/23/contents/enacted" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Care Act 2014
              </a>
            </li>
            <li>
              <a href="https://www.gov.uk/government/publications/care-act-statutory-guidance" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Care and Support Statutory Guidance (Chapter 14: Safeguarding)
              </a>
            </li>
            <li>
              <a href="https://www.legislation.gov.uk/ukpga/2005/9/contents" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Mental Capacity Act 2005
              </a>
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/safeguarding/professionals" className="text-wf-blue underline hover:text-wf-green">
                Information for professionals
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/resources-improve-practice" className="text-wf-blue underline hover:text-wf-green">
                Resources to improve practice
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/safeguarding-board" className="text-wf-blue underline hover:text-wf-green">
                Waltham Forest Safeguarding Adults Board
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/marac" className="text-wf-blue underline hover:text-wf-green">
                MARAC - Multi-Agency Risk Assessment Conference
              </Link>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
