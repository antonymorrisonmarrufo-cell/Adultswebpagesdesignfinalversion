import { Link } from "react-router-dom";

export default function ProtectingAdultsPage() {
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
          <li><span className="font-medium text-wf-dark">Safeguarding adults</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Safeguarding adults</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Safeguarding means protecting an adult's right to live in safety, free from abuse and neglect.
          If you are worried about yourself or someone else, we can help.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Emergency banner */}
          <div className="mb-8 rounded-md border-l-[6px] border-[#d4351c] bg-[#fcedf3] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#bf3688]">If someone is in immediate danger</h2>
          <p className="mt-2 text-wf-dark">
          Call <strong>999</strong> immediately. Do not wait to contact social services if someone is at risk of harm right now.
          </p>
          </div>

          {/* What is safeguarding */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is safeguarding?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Safeguarding is about people and organisations working together to prevent and stop both the
          risks and experience of abuse or neglect. It is about making sure that adults who have care and
          support needs and who may be at risk are kept safe from harm, while ensuring their wellbeing is promoted.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The Care Act 2014 sets out a clear legal framework for how local authorities and other parts of
          the system should protect adults at risk of abuse or neglect. Waltham Forest Council works with
          partners including the NHS, police, and voluntary organisations to keep adults safe.
          </p>
          </section>

          {/* Hub links grid */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Safeguarding information and guidance</h2>
          <div className="grid gap-4 md:grid-cols-2">
          <Link
          to="/safeguarding/report-abuse"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">Report abuse or neglect</h3>
          <p className="text-sm text-[#231F20] flex-1">
          How to raise a safeguarding concern, who to contact, and what information you will need.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/abuse-and-neglect"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">Types of abuse and neglect</h3>
          <p className="text-sm text-[#231F20] flex-1">
          Understand the different forms of abuse and neglect, including physical, emotional, financial, and more.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/what-happens-after"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">What happens after a concern is raised</h3>
          <p className="text-sm text-[#231F20] flex-1">
          Learn about the safeguarding process, from screening through to enquiry and outcomes.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/professionals"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">Information for professionals</h3>
          <p className="text-sm text-[#231F20] flex-1">
          Duty to report, making a safeguarding referral, and professional responsibilities.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/professional-guidance"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">Professional guidance and resources</h3>
          <p className="text-sm text-[#231F20] flex-1">
          Practice standards, training opportunities, and toolkits for practitioners.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/safeguarding-board"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">Safeguarding Adults Board</h3>
          <p className="text-sm text-[#231F20] flex-1">
          The role and work of the Waltham Forest Safeguarding Adults Board, including the strategic plan.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/marac"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">MARAC</h3>
          <p className="text-sm text-[#231F20] flex-1">
          Multi-Agency Risk Assessment Conference for high-risk domestic abuse cases.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/resources-improve-practice"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">Resources to improve practice</h3>
          <p className="text-sm text-[#231F20] flex-1">
          Research, case studies, and learning from safeguarding adult reviews.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>

          <Link
          to="/safeguarding/report-child-concern"
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">Reporting concerns about a child</h3>
          <p className="text-sm text-[#231F20] flex-1">
          If you are worried about a child, there is a separate process. Find out how to report.
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>
          </div>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/how-to-get-support" className="text-wf-blue underline hover:text-wf-green">
          How to get support from Adult Social Care
          </Link>
          </li>
          <li>
          <Link to="/understand-your-rights" className="text-wf-blue underline hover:text-wf-green">
          Understand your rights
          </Link>
          </li>
          <li>
          <a href="https://www.ann-craft-trust.org" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Ann Craft Trust - safeguarding adults
          </a>
          </li>
          <li>
          <a href="https://www.legislation.gov.uk/ukpga/2014/23/contents/enacted" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Care Act 2014
          </a>
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
