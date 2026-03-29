import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Who can get help", to: "/how-adult-social-care-works/who-can-get-help" },
  { title: "What happens during an assessment", to: "/how-adult-social-care-works/what-happens-during-assessment" },
  { title: "Your care and support plan", to: "/how-adult-social-care-works/your-care-and-support-plan" },
  { title: "Paying for your care", to: "/paying-for-care" },
];

export default function HowToAskForHelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/how-adult-social-care-works" className="text-wf-blue underline hover:text-wf-green">How adult social care works</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">How to ask for help</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">How to ask for help</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            If you think you or someone you know needs adult social care, getting in
            touch is straightforward. You do not need a referral from a GP or anyone else.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="max-w-3xl space-y-8">
          {/* Callout: get help early */}
          <div className="rounded-md border-l-4 border-wf-green bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#bf3688]">Get help early</h2>
            <p className="mt-2 text-wf-dark leading-relaxed">
              You do not have to wait until things become a crisis before asking for help.
              Getting in touch early means we can provide advice, information and support
              that may prevent your situation from getting worse. Even if you do not need
              council-funded care, we can point you towards other services and community
              support.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <Link to="/live-independently/social-prescribing" className="text-wf-blue underline hover:text-wf-green">
                  Browse community support and activities
                </Link>
              </li>
              <li>
                <Link to="/live-independently/equipment" className="text-wf-blue underline hover:text-wf-green">
                  Equipment and aids to stay independent
                </Link>
              </li>
            </ul>
          </div>

          {/* Support without assessment */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Support you can access without an assessment</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Many services are available without a formal care assessment. You can access
              these directly:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <Link to="/live-independently/equipment" className="text-wf-blue underline hover:text-wf-green">
                  Equipment and aids
                </Link>{" "}
                to help you stay independent at home
              </li>
              <li>
                <Link to="/live-independently/telecare" className="text-wf-blue underline hover:text-wf-green">
                  Telecare
                </Link>{" "}
                personal alarms and monitoring for safety and peace of mind
              </li>
              <li>
                <Link to="/live-independently/social-prescribing" className="text-wf-blue underline hover:text-wf-green">
                  Community groups and social prescribing
                </Link>{" "}
                to stay active and connected
              </li>
              <li>
                <Link to="/carers/hubs/universal-offer" className="text-wf-blue underline hover:text-wf-green">
                  Carers Hub universal offer
                </Link>{" "}
                for anyone in a caring role
              </li>
              <li>
                <Link to="/live-independently/social-prescribing" className="text-wf-blue underline hover:text-wf-green">
                  Social prescribing
                </Link>{" "}
                connecting you to local activities, groups and services that support your wellbeing
              </li>
            </ul>
          </section>

          {/* Primary CTA */}
          <section className="rounded-md bg-[#004E3E] p-6 shadow-sm text-white">
            <h2 className="text-2xl font-bold">Start a self-assessment online</h2>
            <p className="mt-3 leading-relaxed text-white/90">
              You can complete a short online self-assessment to help us understand your
              situation. This is not a formal assessment but will give us the information
              we need to respond to you quickly.
            </p>
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care-self-assessment"
              className="mt-4 inline-block rounded-md bg-white px-6 py-3 font-bold text-[#004E3E] hover:bg-gray-100 transition-colors no-underline"
            >
              Start self-assessment
            </a>
          </section>

          {/* Who can ask */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Who can ask for help</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You do not have to ask for yourself. The following people can contact us:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li><strong>The person who needs help:</strong> you can contact us directly to ask about your own care and support needs</li>
              <li><strong>Family members or friends:</strong> if you are worried about someone, you can contact us on their behalf</li>
              <li><strong>Carers:</strong> if you care for someone and are finding it difficult to cope, you can ask for an assessment of your own needs as well as theirs</li>
              <li><strong>Professionals:</strong> GPs, hospital staff, community nurses, social workers and other professionals can make a referral (see below)</li>
            </ul>
          </section>

          {/* Contact methods */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Ways to contact us</h2>

            <div className="mt-4 space-y-4">
              <div className="rounded-md border-l-4 border-wf-green bg-[#d7f8ff] p-4">
                <p className="font-semibold text-wf-dark">Online</p>
                <p className="mt-1 text-sm text-wf-dark">
                  Complete the online self-assessment form on the Waltham Forest Council website. This is available 24 hours a day.
                </p>
              </div>

              <div className="rounded-md border-l-4 border-wf-green bg-[#d7f8ff] p-4">
                <p className="font-semibold text-wf-dark">By telephone</p>
                <p className="mt-1 text-sm text-wf-dark">
                  Call us on{" "}
                  <a href="tel:02084963130" className="text-wf-blue underline font-semibold">020 8496 3130</a>
                </p>
                <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm (excluding bank holidays)</p>
              </div>

              <div className="rounded-md border-l-[6px] border-[#d4351c] bg-[#fcedf3] p-4">
                <p className="font-semibold text-wf-dark">In an emergency</p>
                <p className="mt-1 text-sm text-wf-dark">
                  If someone is in immediate danger, call <strong>999</strong>.
                </p>
                <p className="mt-1 text-sm text-wf-dark">
                  For urgent social care needs outside office hours, call the Emergency
                  Duty Team on{" "}
                  <a href="tel:02084963000" className="text-wf-blue underline font-semibold">020 8496 3000</a>
                  {" "}(available 24/7).
                </p>
              </div>
            </div>
          </section>

          {/* Professional referral */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Professional referrals</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you are a health or social care professional and want to refer someone
              for an assessment, you can:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Call the Adult Social Care line on 020 8496 3130 during office hours</li>
              <li>Submit a referral through the professional referral form on the council website</li>
              <li>For hospital discharges, contact the hospital social work team directly</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              When making a referral, please have the person's details, a summary of
              their needs and any relevant medical information available.
            </p>
          </section>

          {/* What happens next */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">What happens after you contact us</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              When you get in touch, we will:
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Listen to your situation and ask some initial questions</li>
              <li>Give you information and advice straight away where possible</li>
              <li>Decide whether a full assessment of your needs is appropriate</li>
              <li>If an assessment is needed, arrange for a social worker or assessor to contact you</li>
            </ol>
          </section>
        </div>

        {/* Related links */}
        <div className="max-w-3xl mt-8">
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
            <ul className="mt-4 space-y-3">
              {relatedPages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
