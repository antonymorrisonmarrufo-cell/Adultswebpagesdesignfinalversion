import { Link } from "react-router-dom";

const steps = [
  { number: 1, title: "Learn what adult social care is", description: "Understand the types of help available and who provides it.", to: "/how-adult-social-care-works/what-is-adult-social-care" },
  { number: 2, title: "Find out if you can get help", description: "Check who is eligible and what the criteria are.", to: "/how-adult-social-care-works/who-can-get-help" },
  { number: 3, title: "Ask for help", description: "Contact us to request an assessment for yourself or someone else.", to: "/how-adult-social-care-works/how-to-ask-for-help" },
  { number: 4, title: "Have an assessment", description: "A social worker will discuss your needs with you.", to: "/how-adult-social-care-works/what-happens-during-assessment" },
  { number: 5, title: "Get a care and support plan", description: "If eligible, you will receive a plan setting out how your needs will be met.", to: "/how-adult-social-care-works/your-care-and-support-plan" },
  { number: 6, title: "Understand paying for care", description: "Find out how care costs work and what financial help is available.", to: "/paying-for-care" },
];

const topicCards = [
  { title: "What is adult social care?", description: "The types of help available, who provides it and your rights under the Care Act 2014.", to: "/how-adult-social-care-works/what-is-adult-social-care" },
  { title: "Who can get help?", description: "Eligibility criteria, what is assessed and what happens if you are or are not eligible.", to: "/how-adult-social-care-works/who-can-get-help" },
  { title: "How to ask for help", description: "How to request an assessment, who can ask and different ways to get in touch.", to: "/how-adult-social-care-works/how-to-ask-for-help" },
  { title: "What happens during an assessment", description: "What to expect, what is discussed and what happens afterwards.", to: "/how-adult-social-care-works/what-happens-during-assessment" },
  { title: "Your care and support plan", description: "What a care plan includes, who creates it and how it is reviewed.", to: "/how-adult-social-care-works/your-care-and-support-plan" },
];

const relatedPages = [
  { title: "Paying for your care", to: "/paying-for-care" },
  { title: "Support for carers", to: "/carers" },
  { title: "Safeguarding adults", to: "/safeguarding" },
  { title: "Understand your rights", to: "/understand-your-rights" },
];

export default function HowAdultSocialCareWorksHubPage() {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">How adult social care works</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">How adult social care works</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Adult social care helps people who need extra support to live their daily
            lives. This section explains how the process works, from your first contact
            with us through to getting a care and support plan.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Key things to know */}
        <div className="mb-8 rounded-md border-l-4 border-[#003078] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#bf3688]">Key things to know</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
            <li>Anyone can contact us to ask for help, not just the person who needs support</li>
            <li>You do not need a referral from your GP</li>
            <li>Assessments are always free, regardless of your income or savings</li>
            <li>You have the right to be involved in decisions about your care</li>
            <li>If you are not eligible for council-funded support, we will still give you information and advice</li>
          </ul>
        </div>

        {/* 6-step journey */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Your journey in 6 steps</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <Link
                key={step.number}
                to={step.to}
                className="flex items-start gap-4 rounded-md bg-white p-5 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#004E3E] text-lg font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#004E3E]">{step.title}</h3>
                  <p className="mt-1 text-sm text-wf-gray">{step.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Topic cards */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Explore this section</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {topicCards.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
              >
                <h3 className="text-lg font-bold text-[#004E3E]">{card.title}</h3>
                <p className="mt-2 text-sm text-wf-gray">{card.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick actions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Quick actions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              to="/how-adult-social-care-works/how-to-ask-for-help"
              className="block rounded-md bg-[#004E3E] p-5 text-center text-white shadow-sm hover:bg-[#004d48] transition-colors no-underline"
            >
              <span className="text-lg font-bold">Request an assessment</span>
            </Link>
            <a
              href="tel:02084963130"
              className="block rounded-md bg-[#004E3E] p-5 text-center text-white shadow-sm hover:bg-[#004d48] transition-colors no-underline"
            >
              <span className="text-lg font-bold">Call us now</span>
              <span className="block mt-1 text-sm text-white/80">020 8496 3130</span>
            </a>
            <Link
              to="/paying-for-care"
              className="block rounded-md bg-[#004E3E] p-5 text-center text-white shadow-sm hover:bg-[#004d48] transition-colors no-underline"
            >
              <span className="text-lg font-bold">Paying for care</span>
            </Link>
          </div>
        </section>

        {/* Emergency contact */}
        <section className="mb-8 rounded-md border-l-[6px] border-[#d4351c] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#bf3688]">Emergency contact</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
            If you or someone you know is in immediate danger, call <strong>999</strong>.
          </p>
          <p className="mt-2 text-wf-dark leading-relaxed">
            For urgent social care needs outside office hours, contact the Emergency
            Duty Team:
          </p>
          <p className="mt-3 text-sm font-semibold text-wf-dark">
            Telephone:{" "}
            <a href="tel:02084963000" className="text-wf-blue underline">020 8496 3000</a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">Available 24 hours a day, 7 days a week</p>
        </section>

        {/* Daytime contact */}
        <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#bf3688]">Contact Adult Social Care</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
            To ask about adult social care or request an assessment, contact us during
            office hours.
          </p>
          <p className="mt-3 text-sm font-semibold text-wf-dark">
            Telephone:{" "}
            <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm (excluding bank holidays)</p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
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

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
