import { Link } from "react-router-dom";

const relatedPages = [
  { title: "What happens during an assessment", to: "/how-adult-social-care-works/what-happens-during-assessment" },
  { title: "Direct payments and personal budgets", to: "/paying-for-care/direct-payments-personal-budgets" },
  { title: "Paying for your care", to: "/paying-for-care" },
  { title: "Understand your rights", to: "/understand-your-rights" },
];

export default function YourCareAndSupportPlanPage() {
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
          <li><Link to="/how-adult-social-care-works" className="text-wf-blue underline hover:text-wf-green">How adult social care works</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Your care and support plan</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Your care and support plan</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          If you are eligible for council-funded support, you will receive a care and
          support plan. This is a written document that sets out your needs and how
          they will be met.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-3xl space-y-8">
          {/* What it is */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What a care and support plan is</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          A care and support plan is a document that records your assessed needs, the
          outcomes you want to achieve, and the services and support that will be
          provided to meet those needs. It is your plan, written with you at the
          centre.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The plan should be written in language you can understand and given to you
          in a format that works for you. You are entitled to a copy.
          </p>
          </section>

          {/* 7 elements */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What your plan includes</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Your care and support plan will set out:
          </p>
          <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Your assessed needs:</strong> a clear description of the care and support needs identified during your assessment</li>
          <li><strong>The outcomes you want to achieve:</strong> what you want to be able to do, how you want to live and what matters most to you</li>
          <li><strong>How your needs will be met:</strong> the specific services, activities or support that will be provided</li>
          <li><strong>Your personal budget:</strong> how much the council is allocating to meet your needs and how it will be managed (direct payment, council-managed or a combination)</li>
          <li><strong>Your contribution:</strong> how much (if anything) you are assessed as needing to pay towards your care</li>
          <li><strong>Who is involved:</strong> the roles of the people and organisations providing your care, including any support from family, friends or carers</li>
          <li><strong>When it will be reviewed:</strong> the date of your next review and how to request a review if your needs change</li>
          </ol>
          </section>

          {/* Who creates it */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who creates your plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Your care and support plan is created by you and your social worker (or
          other professional) working together. You should be fully involved in
          developing your plan.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you find it difficult to be involved due to a mental health condition,
          learning disability or other reason, you may be entitled to a free
          independent advocate to help represent your views and wishes.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can also ask a family member, friend or carer to be involved in
          creating your plan.
          </p>
          </section>

          {/* Reviews */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Reviews of your plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Your care and support plan is a living document. It should change as your
          needs and circumstances change. Reviews happen at key checkpoints:
          </p>
          <ol className="mt-3 list-decimal pl-6 space-y-3 text-wf-dark leading-relaxed">
          <li>
          <strong>Initial review (6 to 8 weeks):</strong> a review shortly after
          your plan starts to check that the support is working and to make any
          early adjustments
          </li>
          <li>
          <strong>Annual review:</strong> at least once a year, your plan will be
          formally reviewed to make sure it still meets your needs
          </li>
          <li>
          <strong>Change of circumstances:</strong> if something significant changes
          (such as a hospital admission, a change in health or a change in your
          living situation), your plan will be reviewed
          </li>
          <li>
          <strong>At your request:</strong> you can ask for a review at any time if
          you feel your plan is no longer meeting your needs
          </li>
          </ol>
          <p className="mt-3 text-wf-dark leading-relaxed">
          During a review, the social worker will discuss how things are going, whether
          the support is making a difference, and whether any changes are needed.
          </p>
          </section>

          {/* If unhappy */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">If you are unhappy with your plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you are not happy with your care and support plan, or you feel it does
          not meet your needs, you can:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Talk to your social worker and ask them to review the plan</li>
          <li>Request a reassessment of your needs</li>
          <li>Ask for a different social worker if you feel the relationship is not working</li>
          <li>Use the council's formal complaints procedure</li>
          <li>Contact the Local Government and Social Care Ombudsman if you have been through the complaints process and are still not satisfied</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can also get support from an independent advocate if you need help
          expressing your concerns.
          </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Need help with your care plan?</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If you have questions about your care and support plan, want to request a
          review, or need help understanding what is in your plan, contact us.
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
