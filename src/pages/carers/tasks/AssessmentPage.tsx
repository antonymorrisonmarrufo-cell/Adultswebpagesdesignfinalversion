import { Link } from "react-router-dom";

export default function AssessmentPage() {
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
          <li><span className="font-medium text-wf-dark">Request a carers assessment</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E]">Request a carers assessment</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          How to request a carers assessment in Waltham Forest, what you will need, and what to expect.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Before you start */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Before you start</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can request a carers assessment if you provide care for someone who lives in Waltham Forest.
          You do not need to:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Live with the person you care for</li>
          <li>Provide a minimum number of hours of care</li>
          <li>Be a registered carer</li>
          <li>Wait for the person you care for to have their own assessment</li>
          </ul>
          </section>

          {/* What you will need */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What you will need</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          It is helpful to have the following information ready when you contact us:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Your name, address, and contact details</li>
          <li>The name and address of the person you care for</li>
          <li>A brief description of the care you provide</li>
          <li>Any health conditions or disabilities the person you care for has</li>
          <li>Whether they are already receiving any services</li>
          </ul>
          </section>

          {/* How to request */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to request an assessment</h2>
          <div className="mt-4 space-y-4">
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#004E3E]">By phone</h3>
          <p className="mt-2 text-wf-dark">
          Call Adult Social Care on <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          Lines are open Monday to Friday, 9am to 5pm.
          </p>
          </div>
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#004E3E]">In person</h3>
          <p className="mt-2 text-wf-dark">
          Visit the Carers Hub during opening hours. You do not need an appointment.
          </p>
          </div>
          <div className="rounded-md border border-wf-gray-light p-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Through a professional</h3>
          <p className="mt-2 text-wf-dark">
          Ask your GP, social worker, hospital discharge team, or any health professional to refer you.
          </p>
          </div>
          </div>
          </section>

          {/* What happens next */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What happens next</h2>
          <ol className="mt-3 ml-6 list-decimal space-y-2 text-wf-dark leading-relaxed">
          <li>We will contact you to arrange a convenient time for the assessment</li>
          <li>The assessment will take place at a location that suits you - at home, at the Carers Hub, or by phone</li>
          <li>A professional will talk with you about your caring role and how it affects your life</li>
          <li>After the assessment, we will tell you whether you have eligible needs</li>
          <li>If you do, we will create a support plan with you</li>
          <li>If you do not, we will still provide information and advice about other support available</li>
          </ol>
          </section>

          {/* Related links */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers/assessment-rights" className="text-wf-blue underline hover:text-wf-green">
          Carers assessment and rights
          </Link>
          </li>
          <li>
          <Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">
          Support for carers
          </Link>
          </li>
          <li>
          <Link to="/carers/ia-flow" className="text-wf-blue underline hover:text-wf-green">
          Information and advice flow
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
