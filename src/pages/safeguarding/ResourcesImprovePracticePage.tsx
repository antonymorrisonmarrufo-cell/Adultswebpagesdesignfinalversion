import { Link } from "react-router-dom";

export default function ResourcesImprovePracticePage() {
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
            <li><span className="font-medium text-wf-dark">Resources to improve practice</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Resources to improve practice</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Research, case studies, and learning from safeguarding reviews to help professionals improve
            their safeguarding practice.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Learning from SARs */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Learning from Safeguarding Adults Reviews</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Safeguarding Adults Reviews (SARs) are conducted when an adult with care and support needs has
            died or experienced serious harm, and there is concern that agencies could have worked more
            effectively together. The purpose is to learn lessons, not to apportion blame.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Key themes emerging from SARs nationally and locally include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>The importance of professional curiosity - looking beyond the presenting issue and asking questions</li>
            <li>Effective multi-agency communication and information sharing</li>
            <li>Understanding and applying the Mental Capacity Act correctly</li>
            <li>Recognising the impact of self-neglect and knowing when to escalate</li>
            <li>Ensuring the voice of the adult is heard throughout the process</li>
            <li>Managing transitions between services and avoiding cases falling through gaps</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            Published SARs from Waltham Forest and other areas are available from the Safeguarding Adults
            Board. Learning briefings summarising key findings are also circulated to partner agencies.
          </p>
        </section>

        {/* Research and evidence */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Research and evidence base</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Keeping up to date with research and evidence is essential for effective safeguarding practice.
            The following resources provide access to current research and thinking:
          </p>
          <ul className="mt-4 space-y-3 text-wf-dark">
            <li>
              <a href="https://www.scie.org.uk/safeguarding/adults" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Social Care Institute for Excellence (SCIE) - Safeguarding adults
              </a>
              <br />
              <span className="text-sm text-wf-gray">Research summaries, practice guides, and e-learning resources</span>
            </li>
            <li>
              <a href="https://www.local.gov.uk/topics/social-care-health-and-integration/adult-social-care/adult-safeguarding" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Local Government Association - Adult safeguarding
              </a>
              <br />
              <span className="text-sm text-wf-gray">National resources and case studies for local authorities</span>
            </li>
            <li>
              <a href="https://www.researchinpractice.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Research in Practice for Adults (RiPfA)
              </a>
              <br />
              <span className="text-sm text-wf-gray">Evidence-informed resources for adult social care practitioners</span>
            </li>
          </ul>
        </section>

        {/* Case studies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Case studies</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Learning from real cases helps professionals to develop their skills and understanding. The
            following anonymised case studies illustrate common themes and challenges in safeguarding practice:
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#004E3E]">Self-neglect: working with reluctant engagement</h3>
              <p className="mt-2 text-wf-dark">
                An older adult living alone was reported by neighbours due to concerns about hoarding and
                self-neglect. The case study explores how a multi-agency approach, using relationship-based
                practice and persistent engagement, led to positive outcomes while respecting the person's
                autonomy.
              </p>
            </div>

            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#004E3E]">Financial abuse: recognising the signs</h3>
              <p className="mt-2 text-wf-dark">
                A person with learning disabilities was found to have been financially exploited by a family
                member over several years. This case study highlights the importance of professional
                curiosity and how routine financial checks can help identify patterns of abuse.
              </p>
            </div>

            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#004E3E]">Organisational abuse: responding to systemic concerns</h3>
              <p className="mt-2 text-wf-dark">
                Concerns were raised about the standard of care in a residential setting. This case study
                demonstrates how a coordinated multi-agency response, including quality monitoring and
                provider engagement, can address systemic issues and improve outcomes for residents.
              </p>
            </div>
          </div>
        </section>

        {/* Reflective practice */}
        <section className="mb-8 rounded-md border border-wf-gray-light bg-[#f3f2f1] p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Reflective practice</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Reflective practice is a key component of effective safeguarding work. Professionals are
            encouraged to:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Regularly reflect on their safeguarding practice, both individually and with colleagues</li>
            <li>Participate in supervision and use it to discuss complex safeguarding cases</li>
            <li>Attend multi-agency learning events and workshops</li>
            <li>Share good practice examples with colleagues and partner agencies</li>
            <li>Consider what they would do differently if faced with a similar situation</li>
          </ul>
        </section>

        {/* Useful frameworks */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Useful frameworks and models</h2>
          <ul className="mt-4 space-y-3 text-wf-dark">
            <li>
              <strong>The six safeguarding principles</strong> - empowerment, prevention, proportionality,
              protection, partnership, and accountability
            </li>
            <li>
              <strong>Making Safeguarding Personal</strong> - a person-centred, outcome-focused approach
            </li>
            <li>
              <strong>Professional curiosity</strong> - the capacity and communication skill to explore
              and understand what is happening rather than making assumptions
            </li>
            <li>
              <strong>Think Family approach</strong> - considering the needs of the whole family when
              assessing risk and planning interventions
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/safeguarding/professional-guidance" className="text-wf-blue underline hover:text-wf-green">
                Professional guidance and resources
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/safeguarding-board" className="text-wf-blue underline hover:text-wf-green">
                Waltham Forest Safeguarding Adults Board
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/professionals" className="text-wf-blue underline hover:text-wf-green">
                Information for professionals
              </Link>
            </li>
            <li>
              <Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">
                Safeguarding adults overview
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
