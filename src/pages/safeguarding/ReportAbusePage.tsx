import { Link } from "react-router-dom";

export default function ReportAbusePage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
          <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">Safeguarding adults</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Report abuse or neglect</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Report abuse or neglect</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          If you think an adult with care and support needs is being abused or neglected, it is important to
          act quickly. You do not need to be certain that abuse is happening to raise a concern.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Emergency */}
          <div className="mb-8 rounded-md border-2 border-[#d4351c] bg-[#fcedf3] p-6">
          <h2 className="text-2xl font-bold text-[#d4351c]">In an emergency</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If someone is in <strong>immediate danger</strong>, call <strong>999</strong> for emergency services.
          Do not delay contacting the police or ambulance service if you believe someone is being harmed right now.
          </p>
          </div>

          {/* Contact methods */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to report a safeguarding concern</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Anyone can raise a safeguarding concern. You do not have to be a professional or give your name,
          although it is helpful if you can. You can report in the following ways:
          </p>

          <div className="mt-6 rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h3 className="text-lg font-bold text-[#003078]">By phone</h3>
          <p className="mt-2 text-wf-dark">
          Call the Adult Social Care team:
          </p>
          <p className="mt-2 text-2xl font-bold text-[#231F20]">
          <a href="tel:02084963130" className="no-underline text-[#231F20]">020 8496 3130</a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">
          Monday to Friday, 9am to 5pm
          </p>
          <p className="mt-4 text-wf-dark">
          Outside office hours, call the Emergency Duty Team:
          </p>
          <p className="mt-1 text-xl font-bold text-[#231F20]">
          <a href="tel:02084966000" className="no-underline text-[#231F20]">020 8496 6000</a>
          </p>

          <hr className="my-6 border-[#003078]/20" />

          <h3 className="text-lg font-bold text-[#003078]">Online referral form</h3>
          <p className="mt-2 text-wf-dark">
          Complete our online safeguarding referral form. This is available 24 hours a day.
          </p>
          <a
          href="/safeguarding/referral-form"
          className="mt-4 inline-block rounded bg-[#bf3688] px-6 py-3 text-sm font-bold text-white no-underline hover:bg-[#a02d73] transition-colors"
          >
          Complete the referral form
          </a>
          <p className="mt-3 text-sm text-wf-gray">
          Online referrals are reviewed during office hours. If the situation is urgent, please phone us.
          </p>
          </div>
          </section>

          {/* What to include */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">What to include in your report</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          When reporting a concern, try to include as much detail as possible. This helps us to respond
          quickly and appropriately. Useful information includes:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
          <li>The name, address, and date of birth of the person you are concerned about (if known)</li>
          <li>A description of what has happened or what you have seen</li>
          <li>When and where the incident(s) took place</li>
          <li>Whether the person is in immediate danger</li>
          <li>Details of the person causing harm (if known)</li>
          <li>Whether the person knows you are making this report</li>
          <li>Any other relevant information, such as the person's care needs or living situation</li>
          <li>Your name and contact details (you can remain anonymous, but this may limit what we can do)</li>
          </ul>
          </section>

          {/* Who can report */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who can raise a safeguarding concern?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Anyone can raise a safeguarding concern, including:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
          <li>The person being abused or neglected</li>
          <li>A family member, friend, or neighbour</li>
          <li>A professional such as a social worker, doctor, nurse, or care worker</li>
          <li>A member of the public</li>
          <li>The police</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
          You do not need to have proof that abuse or neglect is happening. If something does not seem
          right, it is always better to report your concerns.
          </p>
          </section>

          {/* What happens next */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">What happens after you report</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          When we receive a safeguarding concern, our team will review the information and decide on the
          appropriate next steps. This may include a safeguarding enquiry under Section 42 of the Care Act 2014.
          </p>
          <p className="mt-3">
          <Link to="/safeguarding/what-happens-after" className="text-wf-blue underline hover:text-wf-green font-medium">
          Find out more about what happens after a concern is raised
          </Link>
          </p>
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
          <Link to="/safeguarding/abuse-and-neglect" className="text-wf-blue underline hover:text-wf-green">
          Types of abuse and neglect
          </Link>
          </li>
          <li>
          <Link to="/safeguarding/professionals" className="text-wf-blue underline hover:text-wf-green">
          Information for professionals
          </Link>
          </li>
          <li>
          <Link to="/safeguarding/report-child-concern" className="text-wf-blue underline hover:text-wf-green">
          Reporting concerns about a child
          </Link>
          </li>
          </ul>
          </section>

          {/* Last updated */}
          <p className="text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
