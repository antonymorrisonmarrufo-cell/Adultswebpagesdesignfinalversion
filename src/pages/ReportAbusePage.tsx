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
          <li><span className="font-medium text-wf-dark">Report abuse</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Report abuse</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          If you are worried that an adult is being abused or neglected, or if you are being abused
          yourself, help is available. You can report your concerns quickly using the options below.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Emergency */}
          <div className="mb-8 rounded-md border-l-[6px] border-[#d4351c] bg-[#fcedf3] p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">If someone is in immediate danger</h2>
          <p className="mt-2 text-wf-dark text-lg">
          Call <strong className="text-3xl">999</strong> now.
          </p>
          <p className="mt-2 text-wf-dark">
          Do not wait to contact social services. If someone is at risk of harm right now, always call
          the emergency services first.
          </p>
          </div>

          {/* Quick contact options */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Report a safeguarding concern</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Phone */}
          <div className="rounded-md border-2 border-[#004E3E] p-6">
          <h3 className="text-lg font-bold text-[#231F20]">Call us</h3>
          <p className="mt-2 text-wf-dark">
          Speak to our Adult Social Care team about your concern:
          </p>
          <p className="mt-3 text-3xl font-bold text-[#231F20]">
          <a href="tel:02084963130" className="no-underline text-[#004E3E]">020 8496 3130</a>
          </p>
          <p className="mt-2 text-sm text-wf-gray">Monday to Friday, 9am to 5pm</p>
          <div className="mt-4 border-t border-wf-gray-light pt-4">
          <p className="text-wf-dark text-sm">
          <strong>Outside office hours:</strong>
          </p>
          <p className="text-lg font-bold text-[#231F20] mt-1">
          <a href="tel:02084966000" className="no-underline text-[#004E3E]">020 8496 6000</a>
          </p>
          <p className="text-sm text-wf-gray">Emergency Duty Team</p>
          </div>
          </div>

          {/* Online form */}
          <div className="rounded-md border-2 border-[#004E3E] p-6">
          <h3 className="text-lg font-bold text-[#231F20]">Report online</h3>
          <p className="mt-2 text-wf-dark">
          Use our online referral form to report your concerns. Available 24 hours a day, 7 days a week.
          </p>
          <a
          href="/safeguarding/referral-form"
          className="mt-4 inline-block rounded bg-[#004E3E] px-6 py-3 text-sm font-bold text-white no-underline hover:bg-[#004d47] transition-colors"
          >
          Complete the referral form
          </a>
          <p className="mt-4 text-sm text-wf-gray">
          Online referrals are reviewed during office hours. If urgent, please call.
          </p>
          </div>
          </div>
          </section>

          {/* What is abuse */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">What counts as abuse?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Abuse can take many forms, including physical harm, emotional cruelty, financial exploitation,
          neglect, sexual abuse, and more. You do not need to be certain that abuse is happening to
          report your concerns. If something does not seem right, tell us.
          </p>
          <p className="mt-3">
          <Link to="/safeguarding/abuse-and-neglect" className="text-wf-blue underline hover:text-wf-green font-medium">
          Learn about the different types of abuse and neglect
          </Link>
          </p>
          </section>

          {/* Who can report */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Anyone can report</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can raise a concern whether you are the person being harmed, a family member, a friend, a
          neighbour, a carer, a professional, or a member of the public. You can report anonymously,
          although giving your name helps us to follow up.
          </p>
          </section>

          {/* Concerned about a child */}
          <section className="mb-8 rounded-md border border-wf-gray-light bg-[#f3f2f1] p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Concerned about a child?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you are worried about a child or young person under 18, there is a separate reporting
          process through our MASH team.
          </p>
          <p className="mt-3">
          <Link to="/safeguarding/report-child-concern" className="text-wf-blue underline hover:text-wf-green font-medium">
          Find out how to report concerns about a child
          </Link>
          </p>
          </section>

          {/* More information */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">More information</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">
          Safeguarding adults - full information
          </Link>
          </li>
          <li>
          <Link to="/safeguarding/report-abuse" className="text-wf-blue underline hover:text-wf-green">
          Detailed guide to reporting abuse
          </Link>
          </li>
          <li>
          <Link to="/safeguarding/what-happens-after" className="text-wf-blue underline hover:text-wf-green">
          What happens after you report a concern
          </Link>
          </li>
          <li>
          <Link to="/safeguarding/professionals" className="text-wf-blue underline hover:text-wf-green">
          Information for professionals
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
