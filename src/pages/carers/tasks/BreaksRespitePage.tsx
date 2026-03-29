import { Link } from "react-router-dom";

export default function BreaksRespitePage() {
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
            <li><span className="font-medium text-wf-dark">Arranging breaks and respite</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#00635C]">Arranging breaks and respite</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            How to arrange a break from caring, the types of respite available, and how to access them.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Types of breaks */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Types of breaks available</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Breaks from caring can be arranged in different ways depending on your needs:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Day services</strong> - the person you care for attends a day centre while you have time off</li>
            <li><strong>Sitting service</strong> - someone comes to your home to be with the person you care for</li>
            <li><strong>Overnight respite</strong> - the person you care for stays in a care home or respite unit</li>
            <li><strong>Direct payments</strong> - money to arrange your own replacement care in a way that suits you</li>
            <li><strong>Shared Lives</strong> - the person you care for stays with an approved carer in their home</li>
          </ul>
        </section>

        {/* How to arrange */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">How to arrange a break</h2>
          <ol className="mt-3 ml-6 list-decimal space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Contact us</strong> - call <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a> or visit the Carers Hub</li>
            <li><strong>Have an assessment</strong> - if you have not had a carers assessment, we will arrange one to understand your needs</li>
            <li><strong>Discuss options</strong> - we will talk through the types of breaks that would work for you and the person you care for</li>
            <li><strong>Make a plan</strong> - we will help you set up the break, including any practical arrangements</li>
            <li><strong>Ongoing breaks</strong> - regular breaks can be built into your support plan</li>
          </ol>
        </section>

        {/* Paying for breaks */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Paying for breaks</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The cost of respite care depends on your circumstances:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>If you have eligible needs following a carers assessment, the council may fund respite care</li>
            <li>The person you care for may need a financial assessment to determine any contribution</li>
            <li>Some breaks, such as Carers Hub activities and support groups, are free</li>
            <li>Charities such as the Carers Trust may offer small grants towards the cost of a break</li>
          </ul>
        </section>

        {/* Emergency breaks */}
        <section className="mb-8 rounded-md border-l-4 border-[#00635C] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Emergency breaks</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you need an urgent break because you are at risk of burnout or your health is suffering,
            contact us as soon as possible on{" "}
            <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
            We will try to arrange emergency respite as quickly as we can.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/carers/support/taking-a-break" className="text-wf-blue underline hover:text-wf-green">
                Taking a break from caring
              </Link>
            </li>
            <li>
              <Link to="/carers/tasks/assessment" className="text-wf-blue underline hover:text-wf-green">
                Request a carers assessment
              </Link>
            </li>
            <li>
              <Link to="/carers/support/financial-support" className="text-wf-blue underline hover:text-wf-green">
                Financial support for carers
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
