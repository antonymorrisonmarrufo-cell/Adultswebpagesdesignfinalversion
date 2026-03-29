import { Link } from "react-router-dom";

export default function IAFlowPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/carers" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Information and advice flow</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Information and advice flow</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            A step-by-step guide to understanding how to access carer support in Waltham Forest, from first
            contact through to ongoing help.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Step 1 */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 1: Recognise your role</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The first step is recognising that you are a carer. If you regularly help someone who could not
            manage without your support - whether a partner, parent, child, sibling, or friend - you are a
            carer. You do not need to live with the person or provide a set number of hours of care.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 2: Get in touch</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Contact us to let us know about your situation. You can:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Phone Adult Social Care on <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a></li>
            <li>Visit the Carers Hub for a drop-in conversation</li>
            <li>Ask your GP, hospital, or other health professional to refer you</li>
            <li>Contact Carers First on 0300 303 1555</li>
          </ul>
        </section>

        {/* Step 3 */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 3: Initial conversation</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            When you first contact us, we will have an initial conversation to understand your situation.
            We will provide you with information and advice, and discuss whether a carers assessment would
            be helpful. We may also signpost you to universal services that are available without an assessment.
          </p>
        </section>

        {/* Step 4 */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 4: Carers assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you would like a carers assessment, we will arrange one at a time and place that suits you.
            The assessment looks at how caring affects your life, your health, and your wellbeing. It
            identifies what support could help you.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            <Link to="/carers/assessment-rights" className="text-wf-blue underline hover:text-wf-green">
              Find out more about carers assessments
            </Link>
          </p>
        </section>

        {/* Step 5 */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 5: Support plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you have eligible needs, we will work with you to create a support plan. This sets out what
            support you will receive and how it will be provided. Your support could include direct payments,
            respite care, access to groups, or other services tailored to your needs.
          </p>
        </section>

        {/* Step 6 */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Step 6: Ongoing support and review</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Your support does not end after the assessment. We will review your support plan regularly to
            make sure it is still meeting your needs. You can also contact us at any time if your situation
            changes or you need additional help. Universal services at the Carers Hub remain available to
            you at all times.
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
              <Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">
                Carers Hub
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
