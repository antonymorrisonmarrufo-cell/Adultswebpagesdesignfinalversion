import { Link } from "react-router-dom";

export default function ReportChildConcernPage() {
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
            <li><span className="font-medium text-wf-dark">Reporting concerns about a child</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Reporting concerns about a child</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            If you are worried about a child or young person under 18, there is a separate process from
            adult safeguarding. Find out how to report your concerns.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Important notice */}
        <div className="mb-8 rounded-md border-l-4 border-wf-red bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">If a child is in immediate danger</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
            Call <strong>999</strong> immediately. Do not wait to contact other services if a child is at
            risk of harm right now.
          </p>
        </div>

        {/* Separate process */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Children's safeguarding is a separate process</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Safeguarding children and safeguarding adults are handled by different teams within Waltham
            Forest Council. If your concern is about a child or young person under 18, you should contact
            the Multi-Agency Safeguarding Hub (MASH) rather than the Adult Social Care team.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The MASH brings together professionals from different agencies to share information and make
            decisions about the safety and welfare of children. This ensures a coordinated and effective
            response to concerns.
          </p>
        </section>

        {/* How to report */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to report concerns about a child</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#004E3E]">Contact the MASH team</h3>
              <p className="mt-2 text-wf-dark">
                If you are worried about a child, contact the Waltham Forest MASH:
              </p>
              <p className="mt-3 text-2xl font-bold text-[#004E3E]">
                <a href="tel:02084962310" className="no-underline text-[#004E3E]">020 8496 2310</a>
              </p>
              <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm</p>
              <p className="mt-3 text-wf-dark">
                Outside office hours, contact the Emergency Duty Team:
              </p>
              <p className="mt-1 font-bold text-[#004E3E]">
                <a href="tel:02084966000" className="no-underline text-[#004E3E]">020 8496 6000</a>
              </p>
            </div>

            <div className="rounded-md border border-wf-gray-light p-6">
              <h3 className="text-lg font-bold text-[#004E3E]">Online referral</h3>
              <p className="mt-2 text-wf-dark">
                You can also make a referral to children's social care online. Professionals should use the
                Multi-Agency Referral Form (MARF).
              </p>
              <a
                href="/children/referral-form"
                className="mt-4 inline-block rounded bg-[#004E3E] px-6 py-3 text-sm font-bold text-white no-underline hover:bg-[#004d47] transition-colors"
              >
                Make a children's safeguarding referral
              </a>
            </div>
          </div>
        </section>

        {/* What to report */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">What should you report?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You should report any concern about a child's welfare, including:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Physical, emotional, or sexual abuse</li>
            <li>Neglect - a child not being properly cared for</li>
            <li>A child being exposed to domestic abuse</li>
            <li>A child at risk of exploitation, including criminal or sexual exploitation</li>
            <li>A child being radicalised</li>
            <li>A child who is missing from home or school</li>
            <li>Any other concern about a child's safety or wellbeing</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            You do not need to be sure that a child is being harmed. If you have a concern, it is always
            better to report it and let professionals assess the situation.
          </p>
        </section>

        {/* Other contacts */}
        <section className="mb-8 rounded-md border border-wf-gray-light bg-wf-gray-light p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Other useful contacts</h2>
          <ul className="mt-4 space-y-4 text-wf-dark">
            <li>
              <strong>NSPCC Helpline:</strong>{" "}
              <a href="tel:08088005000" className="font-bold text-[#004E3E] no-underline">0808 800 5000</a>
              <br />
              <span className="text-sm text-wf-gray">For adults concerned about a child. Available 24/7.</span>
            </li>
            <li>
              <strong>Childline:</strong>{" "}
              <a href="tel:08001111" className="font-bold text-[#004E3E] no-underline">0800 1111</a>
              <br />
              <span className="text-sm text-wf-gray">For children and young people who need support. Available 24/7.</span>
            </li>
            <li>
              <strong>Police (non-emergency):</strong>{" "}
              <a href="tel:101" className="font-bold text-[#004E3E] no-underline">101</a>
              <br />
              <span className="text-sm text-wf-gray">For non-urgent police concerns about a child.</span>
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">
                Safeguarding adults overview
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/report-abuse" className="text-wf-blue underline hover:text-wf-green">
                Report abuse or neglect (adults)
              </Link>
            </li>
            <li>
              <a href="https://www.walthamforest.gov.uk/children-and-families" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Waltham Forest Children and Families services
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
