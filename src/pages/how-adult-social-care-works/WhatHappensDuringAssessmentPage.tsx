import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Who can get help", to: "/adult-social-care/how-adult-social-care-works/who-can-get-help" },
  { title: "Your care and support plan", to: "/adult-social-care/how-to-get-support/getting-your-care-and-support-plan" },
  { title: "How to ask for help", to: "/adult-social-care/how-adult-social-care-works/how-to-ask-for-help" },
  { title: "Paying for your care", to: "/adult-social-care/paying-for-care" },
];

export default function WhatHappensDuringAssessmentPage() {
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
          <li><span className="font-medium text-wf-dark">What happens during an assessment</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">What happens during an assessment</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          An assessment is a conversation about your life, your needs and what matters
          to you. It is not a test, and there are no wrong answers.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-3xl space-y-8">
          {/* Callout: always free */}
          <div className="rounded-md bg-white p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">Assessments are always free</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          A needs assessment is free for everyone, regardless of your income, savings
          or how much care you need. You will never be charged for an assessment.
          </p>
          </div>

          {/* What an assessment is */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What an assessment is</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          A needs assessment is a conversation between you and a trained assessor
          (usually a social worker or occupational therapist). Its purpose is to
          understand your care and support needs and how they affect your daily life.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          It is not a test. The assessor is not trying to catch you out or see what
          you can manage without help. They want to build an honest picture of your
          situation so they can work out the best way to support you.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The assessment can take place at your home, at a council office, at your
          hospital bedside, or over the telephone or video call, whichever is most
          convenient for you.
          </p>
          </section>

          {/* 6 areas discussed */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What the assessor will discuss with you</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The assessment covers six broad areas:
          </p>
          <ol className="mt-3 list-decimal pl-6 space-y-3 text-wf-dark leading-relaxed">
          <li>
          <strong>Your daily routine and personal care:</strong> how you manage
          activities like washing, dressing, eating, drinking and using the toilet
          </li>
          <li>
          <strong>Your home and safety:</strong> whether your home is suitable for
          your needs, any risks of falls or other hazards, and whether you can move
          around safely
          </li>
          <li>
          <strong>Your physical and mental health:</strong> any conditions, symptoms
          or treatments that affect your daily life, including memory, mood and
          emotional wellbeing
          </li>
          <li>
          <strong>Your relationships and social life:</strong> whether you have
          contact with family and friends, any feelings of loneliness or isolation,
          and activities you enjoy
          </li>
          <li>
          <strong>What matters to you:</strong> your goals, preferences and what a
          good life looks like for you, including things you want to be able to do
          </li>
          <li>
          <strong>Support you already have:</strong> any help you currently receive
          from family, friends, carers, or other services, and whether that support
          is sustainable
          </li>
          </ol>
          </section>

          {/* Who will be there */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who will be there</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The assessment will be carried out by a qualified assessor, usually a
          social worker or an occupational therapist. You are welcome to have someone
          with you during the assessment, such as:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>A family member or friend</li>
          <li>An unpaid carer</li>
          <li>An advocate (if you have difficulty communicating your needs or making decisions, you may be entitled to a free independent advocate)</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you have a carer, they may also be offered a separate carer's assessment
          to look at their own needs and wellbeing.
          </p>
          </section>

          {/* What happens afterwards */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What happens afterwards</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          After the assessment, the assessor will:
          </p>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Decide whether you meet the eligibility criteria for council-funded support</li>
          <li>Give you a written copy of the assessment and the decision</li>
          <li>If you are eligible, begin working with you on a care and support plan</li>
          <li>If you are not eligible, provide information and advice about other support available</li>
          <li>Refer you for a financial assessment if appropriate</li>
          </ol>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you disagree with the outcome of your assessment, you have the right to
          ask for it to be reviewed. You can also use the council's complaints
          procedure.
          </p>
          </section>

          {/* How long it takes */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How long it takes</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The assessment itself usually takes between one and two hours, depending on
          your situation. The whole process, from first contact to receiving the
          outcome, typically takes a few weeks.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If your needs are urgent, we can arrange support more quickly. In some cases,
          temporary support can be put in place while the assessment is being completed.
          </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Questions about your assessment?</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If you have been told you are going to have an assessment and want to know
          more about what to expect, contact us.
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
