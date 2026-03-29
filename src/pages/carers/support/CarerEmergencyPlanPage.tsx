import { Link } from "react-router-dom";

export default function CarerEmergencyPlanPage() {
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
          <li><Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">Support for carers</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Carer emergency plan</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Carer emergency plan</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          If something unexpected happens to you, having an emergency plan in place means the person you
          care for will still be looked after. Planning ahead gives you peace of mind.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Why plan */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Why you need an emergency plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Emergencies can happen at any time. You might have an accident, become unwell, or be unable to
          get home. An emergency plan ensures that the person you care for will receive the support they
          need, even if you are suddenly unavailable. It also reduces stress for both you and the person
          you look after.
          </p>
          </section>

          {/* What to include */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What to include in your plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          A good emergency plan should include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Contact details</strong> for people who can step in at short notice (family, friends, neighbours)</li>
          <li><strong>Key information</strong> about the person you care for, including their medical conditions, medication, and daily routine</li>
          <li><strong>Details of professionals</strong> involved in their care (GP, social worker, district nurse)</li>
          <li><strong>Practical information</strong> such as where keys are kept, how to use any equipment, and dietary needs</li>
          <li><strong>Important documents</strong> such as care plans, medication lists, and emergency numbers</li>
          </ul>
          </section>

          {/* Backup care */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Backup care arrangements</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Think about who could provide care in an emergency. Ideally, you should have at least two people
          who could step in. Talk to them in advance and make sure they:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Understand the care needs of the person you look after</li>
          <li>Know where to find the emergency plan and key information</li>
          <li>Have access to the home if needed</li>
          <li>Know how to contact relevant professionals</li>
          </ul>
          </section>

          {/* Carer emergency card */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Carer emergency card</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          We can provide you with a carer emergency card to carry in your wallet or purse. This card lets
          emergency services know that you are a carer and that someone depends on you. It includes a
          contact number so that backup care can be arranged quickly.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To get a carer emergency card or help setting up your plan, contact us on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">
          Support for carers
          </Link>
          </li>
          <li>
          <Link to="/carers/tasks/emergency-help" className="text-wf-blue underline hover:text-wf-green">
          Getting emergency help as a carer
          </Link>
          </li>
          <li>
          <Link to="/carers/assessment-rights" className="text-wf-blue underline hover:text-wf-green">
          Carers assessment and rights
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
