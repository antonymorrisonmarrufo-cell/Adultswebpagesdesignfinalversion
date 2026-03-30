import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How to ask for help", to: "/adult-social-care/how-adult-social-care-works/how-to-ask-for-help" },
  { title: "What happens during an assessment", to: "/adult-social-care/how-to-get-support/what-happens-during-your-assessment" },
  { title: "What is adult social care?", to: "/adult-social-care/how-adult-social-care-works/what-is-adult-social-care" },
  { title: "Paying for your care", to: "/adult-social-care/paying-for-care" },
];

export default function WhoCanGetHelpPage() {
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
          <li><Link to="/adult-social-care/how-adult-social-care-works" className="text-wf-blue underline hover:text-wf-green">How adult social care works</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Who can get help</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Who can get help</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Not everyone who contacts adult social care will be eligible for
          council-funded support, but anyone can ask for an assessment. Here is how
          eligibility works.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-3xl space-y-8">
          {/* Callout */}
          <div className="rounded-md bg-white p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">You do not need a GP referral</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          Anyone can contact us to ask for an assessment. You do not need a referral
          from your GP or any other professional. You can refer yourself, or a family
          member, friend or professional can contact us on your behalf.
          </p>
          </div>

          {/* Eligibility criteria */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Eligibility criteria</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To be eligible for council-funded care and support, you must meet
          criteria set out in the Care Act 2014. The council uses a three-part
          framework to decide if you are eligible.
          </p>
          </section>

          {/* 3-part framework */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">The three-part assessment framework</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To be eligible, all three of the following must apply:
          </p>
          <ol className="mt-3 list-decimal pl-6 space-y-4 text-wf-dark leading-relaxed">
          <li>
          <strong>Your needs arise from a physical or mental condition</strong>
          <p className="mt-1">
          This includes physical disability, sensory impairment, learning
          disability, mental health condition, illness, substance misuse or
          age-related frailty.
          </p>
          </li>
          <li>
          <strong>Because of your needs, you cannot achieve two or more specified outcomes</strong>
          <p className="mt-1">
          There are 10 activities (outcomes) that are assessed (see below). If
          your condition means you cannot achieve at least two of them without
          assistance, you may meet this part of the criteria.
          </p>
          </li>
          <li>
          <strong>As a result, there is a significant impact on your wellbeing</strong>
          <p className="mt-1">
          This means your inability to achieve those outcomes causes (or is likely
          to cause) a significant effect on your day-to-day life, dignity, safety
          or ability to participate in family and community life.
          </p>
          </li>
          </ol>
          </section>

          {/* 10 activities */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">The 10 activities assessed</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          During your assessment, we look at whether you can achieve the following
          outcomes:
          </p>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Managing and maintaining nutrition (preparing and eating food and drink)</li>
          <li>Maintaining personal hygiene (washing, bathing, oral care)</li>
          <li>Managing toilet needs</li>
          <li>Being appropriately clothed</li>
          <li>Being able to make use of your home safely</li>
          <li>Maintaining a habitable home environment</li>
          <li>Developing and maintaining family or other personal relationships</li>
          <li>Accessing and engaging in work, training, education or volunteering</li>
          <li>Making use of necessary facilities or services in the local community</li>
          <li>Carrying out any caring responsibilities you have for a child</li>
          </ol>
          </section>

          {/* If eligible */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What happens if you are eligible</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you meet the eligibility criteria, the council has a legal duty to meet
          your needs. We will:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Work with you to create a care and support plan</li>
          <li>Carry out a financial assessment to work out what (if anything) you need to pay</li>
          <li>Arrange services to meet your assessed needs</li>
          <li>Review your plan regularly to check it is still working for you</li>
          </ul>
          </section>

          {/* If not eligible */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What happens if you are not eligible</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you do not meet the eligibility criteria, you are still entitled to:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Free information and advice about other support available in the community</li>
          <li>Signposting to voluntary organisations, local groups and other services that may help</li>
          <li>A written record of your assessment and why you were not found eligible</li>
          <li>The right to request a reassessment if your needs change</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can also arrange and pay for care privately if you wish.
          </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Not sure if you are eligible?</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If you are unsure whether you or someone you know would be eligible for
          support, contact us. We can talk through your situation and explain the
          next steps.
          </p>
          <p className="mt-3 text-sm font-semibold text-wf-dark">
          Telephone:{" "}
          <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm (excluding bank holidays)</p>
          </div>
          </div>

          {/* Related links */}
          <div className="max-w-3xl mt-8">
          <section className="mb-8 p-6">
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
        </div>
      </div>
    </div>
  );
}
