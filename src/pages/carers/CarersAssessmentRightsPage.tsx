import { Link } from "react-router-dom";

export default function CarersAssessmentRightsPage() {
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
          <li><Link to="/carers" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Carers assessment and rights</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E]">Carers assessment and rights</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          As a carer, you have legal rights under the Care Act 2014. You are entitled to a carers assessment
          to look at how caring affects your life and what support you may need.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Your rights */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Your rights under the Care Act 2014</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The Care Act 2014 gives carers important legal rights. For the first time, carers were given the same
          recognition in law as the people they care for. Your key rights include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>The right to a carers assessment, regardless of the amount or type of care you provide</li>
          <li>The right to have your eligible needs met by the local authority</li>
          <li>The right to receive information and advice about caring and support available</li>
          <li>The right to be involved in decisions about the care and support of the person you look after</li>
          <li>The right to request a review of your support plan at any time</li>
          </ul>
          </section>

          {/* What is a carers assessment */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is a carers assessment?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          A carers assessment is a conversation between you and a trained professional. It looks at how your
          caring role affects your daily life, your health, your work, and your relationships. It is not a
          test and there are no wrong answers. The assessment is about understanding your needs as a carer.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          During the assessment, you will be asked about:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>The care you provide and how it affects your physical and mental health</li>
          <li>Whether you are able or willing to continue caring</li>
          <li>Your feelings about caring and what you would like to achieve in your own life</li>
          <li>Whether caring affects your work, education, or training</li>
          <li>Your social life, hobbies, and leisure activities</li>
          <li>Any emergency or contingency plans you may need</li>
          </ul>
          </section>

          {/* How to request */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to request a carers assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can request a carers assessment at any time, even if the person you care for does not receive
          any services or has not had their own assessment. You do not need to be registered as a carer.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To request an assessment, you can:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Phone our Adult Social Care team on <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a></li>
          <li>Visit the Carers Hub for a drop-in conversation</li>
          <li>Ask your GP or another health professional to refer you</li>
          <li>Ask a social worker involved with the person you care for</li>
          </ul>
          </section>

          {/* What happens after */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What happens after the assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          After your assessment, we will determine whether you have eligible needs. If you do, we will work
          with you to create a support plan that sets out how your needs will be met. This could include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>A direct payment so you can arrange your own support</li>
          <li>Respite or replacement care so you can take a break</li>
          <li>Support with your health and wellbeing</li>
          <li>Help with transport or equipment</li>
          <li>Referral to local carer support groups and services</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Even if you do not have eligible needs, we will provide you with information and advice about other
          sources of support available to you.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers" className="text-wf-blue underline hover:text-wf-green">
          Being a carer
          </Link>
          </li>
          <li>
          <Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">
          Support for carers
          </Link>
          </li>
          <li>
          <Link to="/carers/tasks/assessment" className="text-wf-blue underline hover:text-wf-green">
          Request a carers assessment
          </Link>
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
