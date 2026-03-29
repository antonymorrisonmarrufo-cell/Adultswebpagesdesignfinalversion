import { Link } from "react-router-dom";

export default function ProfessionalsPage() {
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
            <li><span className="font-medium text-wf-dark">Information for professionals</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#00635C]">Information for professionals</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Guidance for professionals working with adults at risk of abuse or neglect in Waltham Forest.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Duty to report */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Duty to report</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            All professionals who work with adults with care and support needs have a responsibility to
            identify, respond to, and report suspected abuse or neglect. Under the Care Act 2014, the local
            authority has a duty to make enquiries or cause enquiries to be made when it has reasonable cause
            to suspect that an adult in its area:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Has needs for care and support (whether or not the authority is meeting any of those needs)</li>
            <li>Is experiencing, or is at risk of, abuse or neglect</li>
            <li>As a result of those needs is unable to protect himself or herself against the abuse or neglect, or the risk of it</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            If you are a professional and you suspect abuse or neglect, you must report your concerns.
            Failure to do so could have serious consequences for the adult at risk and could constitute a
            breach of your professional obligations.
          </p>
        </section>

        {/* Making a referral */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Making a safeguarding referral</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            As a professional, you can make a safeguarding referral using the following methods:
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#00635C]">Professional referral form</h3>
              <p className="mt-2 text-wf-dark">
                Complete the online professional safeguarding referral form. This provides a structured format
                to ensure all relevant information is captured.
              </p>
              <a
                href="/safeguarding/professional-referral-form"
                className="mt-4 inline-block rounded bg-[#00635C] px-6 py-3 text-sm font-bold text-white no-underline hover:bg-[#004d47] transition-colors"
              >
                Complete the professional referral form
              </a>
            </div>

            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#00635C]">By phone</h3>
              <p className="mt-2 text-wf-dark">
                Contact the Adult Social Care safeguarding team directly:
              </p>
              <p className="mt-2 text-xl font-bold text-[#00635C]">
                <a href="tel:02084963130" className="no-underline text-[#00635C]">020 8496 3130</a>
              </p>
              <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm</p>
              <p className="mt-3 text-wf-dark">
                Outside office hours: <strong><a href="tel:02084966000" className="no-underline text-[#00635C]">020 8496 6000</a></strong> (Emergency Duty Team)
              </p>
            </div>
          </div>
        </section>

        {/* Professional responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Professional responsibilities</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            When you identify a safeguarding concern, you should:
          </p>
          <ol className="mt-4 space-y-3 list-decimal pl-6 text-wf-dark">
            <li>
              <strong>Ensure immediate safety</strong> - If someone is in immediate danger, call 999. Take any
              necessary steps to make sure the person is safe.
            </li>
            <li>
              <strong>Speak to the adult</strong> - Where safe and appropriate, speak to the adult about your
              concerns. Establish their wishes and feelings. The principle of Making Safeguarding Personal
              should underpin your response.
            </li>
            <li>
              <strong>Preserve evidence</strong> - Do not interfere with or remove any evidence. If a crime
              may have been committed, try to preserve the scene for police investigation.
            </li>
            <li>
              <strong>Record your concerns</strong> - Write down exactly what you have observed, been told,
              or are concerned about. Include dates, times, and the names of anyone involved.
            </li>
            <li>
              <strong>Report without delay</strong> - Submit a safeguarding referral to Waltham Forest Council
              as soon as possible. Do not investigate the allegation yourself.
            </li>
            <li>
              <strong>Follow your organisation's procedures</strong> - Ensure you also follow your own
              organisation's internal safeguarding procedures and inform your safeguarding lead.
            </li>
          </ol>
        </section>

        {/* Making safeguarding personal */}
        <section className="mb-8 rounded-md border border-wf-gray-light bg-wf-gray-light p-6">
          <h2 className="text-2xl font-bold text-[#D61F69]">Making Safeguarding Personal</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Making Safeguarding Personal (MSP) is a person-centred approach that puts the adult at the
            centre of safeguarding. It means working with the adult to find out what outcomes they want and
            ensuring that the safeguarding process supports their choices and promotes their wellbeing.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            As a professional, you should ensure that the adult's views and wishes are central to any
            safeguarding response. This includes asking what they would like to happen and keeping them
            informed throughout the process.
          </p>
        </section>

        {/* Consent and information sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Consent and information sharing</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You should seek the consent of the adult before making a safeguarding referral where possible.
            However, there are circumstances where you can share information without consent, including:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>The adult lacks capacity to consent, and sharing is in their best interests</li>
            <li>Other people are at risk of harm</li>
            <li>A serious crime has been or may be committed</li>
            <li>Staff or volunteers are implicated</li>
            <li>There is a high risk to the health and safety of the adult</li>
            <li>The person causing harm has care and support needs</li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/safeguarding/professional-guidance" className="text-wf-blue underline hover:text-wf-green">
                Professional guidance and resources
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/marac" className="text-wf-blue underline hover:text-wf-green">
                MARAC - Multi-Agency Risk Assessment Conference
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
              <Link to="/safeguarding/abuse-and-neglect" className="text-wf-blue underline hover:text-wf-green">
                Types of abuse and neglect
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
