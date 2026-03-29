import { Link } from "react-router-dom";

export default function UniversalOfferHub() {
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
            <li><Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">Carers Hub</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Universal offer</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Universal offer for carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            The universal offer is the support that is available to all carers in Waltham Forest, regardless
            of whether you have had a carers assessment. You do not need to meet any eligibility criteria.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* What is included */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is included in the universal offer</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The following support is available to any carer in Waltham Forest, without the need for an assessment:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Information and advice</strong> - about your rights, local services, benefits, and support options</li>
            <li><strong>Carers Hub drop-in sessions</strong> - come in for a chat, a cup of tea, and informal advice</li>
            <li><strong>Carer support groups</strong> - meet other carers in a supportive environment</li>
            <li><strong>Carer emergency card</strong> - a card to carry so emergency services know you are a carer</li>
            <li><strong>Training and workshops</strong> - free courses on practical caring skills</li>
            <li><strong>Wellbeing activities</strong> - mindfulness, exercise classes, and social events</li>
            <li><strong>Signposting</strong> - to local and national organisations that can help</li>
            <li><strong>Newsletter</strong> - regular updates about carer services and events</li>
          </ul>
        </section>

        {/* Who can access */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who can access the universal offer</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The universal offer is for everyone who cares for someone in Waltham Forest. This includes:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Adult carers of any age</li>
            <li>Parent carers of children with disabilities</li>
            <li>Young carers (with age-appropriate activities)</li>
            <li>Former carers who may still need support</li>
            <li>People who are not sure if they are a carer</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You do not need to be registered as a carer, and you do not need a referral. Simply get in touch
            or visit the Carers Hub.
          </p>
        </section>

        {/* Beyond universal */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Need more support?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you need more support than the universal offer provides, you can request a carers assessment.
            This will look at your specific needs and may lead to additional support such as direct payments,
            respite care, or specialist services.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            <Link to="/carers/assessment-rights" className="text-wf-blue underline hover:text-wf-green">
              Find out about carers assessments and your rights
            </Link>
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8 rounded-md border-l-4 border-[#004E3E] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Get started</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            To find out more about the universal offer, visit the Carers Hub or call us on{" "}
            <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">
                Carers Hub
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
      </main>
    </div>
  );
}
