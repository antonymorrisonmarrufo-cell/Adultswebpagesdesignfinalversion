import { Link } from "react-router-dom";

export default function WhatHappensAfterPage() {
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
            <li><span className="font-medium text-wf-dark">What happens after a concern is raised</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">What happens after a safeguarding concern is raised</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            When a safeguarding concern is reported to us, we follow a clear process to make sure the adult
            is safe and their wishes are at the centre of everything we do.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Overview */}
        <section className="mb-8">
          <p className="text-wf-dark leading-relaxed">
            The safeguarding process is guided by the principles of the Care Act 2014 and the approach known
            as Making Safeguarding Personal. This means we will always try to understand what the adult wants
            to happen and work with them to achieve the best possible outcome.
          </p>
        </section>

        {/* Step 1: Screening */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 1: Screening the concern</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            When we receive a safeguarding concern, a trained member of the Adult Social Care team will
            review the information provided. During screening, we will consider:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Whether the person has care and support needs</li>
            <li>Whether the concern relates to abuse or neglect</li>
            <li>Whether the person is unable to protect themselves because of their care and support needs</li>
            <li>Whether immediate action is needed to keep the person safe</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            If the concern does not meet the safeguarding threshold, it may be signposted to other services
            that can help, such as community support, advocacy, or adult social care assessments.
          </p>
        </section>

        {/* Step 2: Section 42 Enquiry */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 2: Section 42 enquiry</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If the concern meets the safeguarding threshold, a Section 42 enquiry will be carried out under
            the Care Act 2014. The purpose of the enquiry is to:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Establish the facts about what has happened</li>
            <li>Ascertain the adult's views and wishes</li>
            <li>Assess what, if any, risk remains</li>
            <li>Determine what action should be taken to safeguard the adult</li>
            <li>Support the adult to achieve the outcomes they want</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            The enquiry may be led by the local authority or another organisation, such as the NHS or the
            police. We will involve the adult (and their representative or advocate where appropriate)
            throughout the process.
          </p>
        </section>

        {/* Step 3: Safeguarding plan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 3: Developing a safeguarding plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Where ongoing risks are identified, a safeguarding plan may be put in place. This plan will set
            out the actions to be taken to protect the adult and reduce risk. The plan is developed with the
            adult and may include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Changes to the person's care and support arrangements</li>
            <li>Referral to other services such as counselling or advocacy</li>
            <li>Action by the police if a crime has been committed</li>
            <li>Restrictions or conditions placed on the person causing harm</li>
            <li>Monitoring and review arrangements</li>
          </ul>
        </section>

        {/* Step 4: Outcomes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 4: Outcomes and closure</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            At the end of the safeguarding process, we will review the outcomes with the adult to check
            whether the actions taken have achieved what they wanted. We will ask:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Were the adult's desired outcomes met, partially met, or not met?</li>
            <li>Is the adult now safer?</li>
            <li>Is any further action or support needed?</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            The case will be closed when the enquiry is complete and appropriate actions have been taken.
            If the adult's needs change or new concerns arise, a new safeguarding concern can be raised at
            any time.
          </p>
        </section>

        {/* Ongoing support */}
        <section className="mb-8 rounded-md border border-wf-gray-light bg-[#f3f2f1] p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Ongoing support</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Even after the safeguarding process has ended, support remains available. The adult may be
            offered a care and support assessment, referred to community services, or supported through
            an advocate. We are committed to working alongside individuals to promote their safety and
            independence.
          </p>
        </section>

        {/* Your rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Your rights during the process</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Throughout the safeguarding process, you have the right to:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Be listened to and have your views taken into account</li>
            <li>Be kept informed about what is happening</li>
            <li>Have an independent advocate if you have substantial difficulty being involved</li>
            <li>Make a complaint if you are unhappy with the process</li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/safeguarding/report-abuse" className="text-wf-blue underline hover:text-wf-green">
                Report abuse or neglect
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/abuse-and-neglect" className="text-wf-blue underline hover:text-wf-green">
                Types of abuse and neglect
              </Link>
            </li>
            <li>
              <Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">
                Safeguarding adults overview
              </Link>
            </li>
            <li>
              <Link to="/understand-your-rights" className="text-wf-blue underline hover:text-wf-green">
                Understand your rights
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
