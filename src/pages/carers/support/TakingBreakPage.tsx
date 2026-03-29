import { Link } from "react-router-dom";

export default function TakingBreakPage() {
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
          <li><span className="font-medium text-wf-dark">Taking a break from caring</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Taking a break from caring</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Taking regular breaks is important for your health and wellbeing. There are different types of
          respite and replacement care available to give you time to rest and recharge.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Why breaks matter */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Why taking a break matters</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Caring for someone can be physically and emotionally demanding. Without regular breaks, carers
          are at risk of burnout, poor health, and social isolation. Taking time away from caring is not
          selfish - it helps you to sustain your caring role in the long term and maintain your own quality of life.
          </p>
          </section>

          {/* Respite care */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Respite care</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Respite care provides temporary care for the person you look after, allowing you to have a break.
          This can include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Day care services</strong> - the person you care for attends a day centre for activities and social contact</li>
          <li><strong>Sitting services</strong> - a trained worker stays with the person you care for at home while you go out</li>
          <li><strong>Overnight or residential respite</strong> - the person you care for stays in a care home or other setting for a short period</li>
          </ul>
          </section>

          {/* Replacement care */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Replacement care</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Replacement care (sometimes called substitute care) is when someone else takes over your caring
          responsibilities for a period of time. This could be arranged through:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>A care agency providing a carer to come into the home</li>
          <li>A family member or friend stepping in</li>
          <li>A direct payment to arrange your own replacement care</li>
          </ul>
          </section>

          {/* Short breaks */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Short breaks</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Short breaks can range from a few hours to a few weeks. They give you time to do things like:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Attend medical appointments</li>
          <li>Spend time with friends or family</li>
          <li>Take a holiday or have a day out</li>
          <li>Catch up on rest and sleep</li>
          <li>Pursue hobbies or interests</li>
          </ul>
          </section>

          {/* How to arrange */}
          <section className="mb-8 rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003078]">How to arrange a break</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Speak to us about what kind of break would help you. We can discuss options following a carers assessment.
          Contact our Adult Social Care team on{" "}
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
          <Link to="/carers/assessment-rights" className="text-wf-blue underline hover:text-wf-green">
          Carers assessment and rights
          </Link>
          </li>
          <li>
          <Link to="/carers/tasks/breaks-respite" className="text-wf-blue underline hover:text-wf-green">
          Arranging breaks and respite
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
