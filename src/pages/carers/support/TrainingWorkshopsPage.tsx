import { Link } from "react-router-dom";

export default function TrainingWorkshopsPage() {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
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
            <li><Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">Support for carers</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Training and workshops</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Training and workshops</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Free training courses and workshops are available to help you develop the skills and confidence
            you need in your caring role.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Moving and handling */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Moving and handling</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you help the person you care for to move, transfer, or reposition, it is important to know
            how to do this safely. Moving and handling training teaches you:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>How to move someone safely without injuring yourself or them</li>
            <li>How to use hoists, slide sheets, and other equipment</li>
            <li>Techniques for helping someone to sit, stand, or get into bed</li>
            <li>How to protect your back and joints</li>
          </ul>
        </section>

        {/* First aid */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">First aid</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Basic first aid skills can give you confidence to handle medical situations at home. Training covers:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>What to do if someone falls</li>
            <li>How to deal with choking</li>
            <li>Basic wound care and managing bleeding</li>
            <li>When to call 999 and what information to give</li>
            <li>CPR and using a defibrillator</li>
          </ul>
        </section>

        {/* Condition-specific */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Condition-specific training</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            We offer workshops tailored to the specific conditions or needs of the person you care for. These include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Dementia awareness</strong> - understanding dementia, communication techniques, and managing challenging behaviour</li>
            <li><strong>Mental health awareness</strong> - recognising signs of mental health conditions and how to provide support</li>
            <li><strong>Medication management</strong> - safely managing and administering medication</li>
            <li><strong>Nutrition and hydration</strong> - supporting healthy eating and drinking for the person you care for</li>
            <li><strong>Managing continence</strong> - practical skills and advice for dealing with continence issues</li>
            <li><strong>End of life care</strong> - understanding palliative care and how to support someone approaching the end of life</li>
          </ul>
        </section>

        {/* How to book */}
        <section className="mb-8 rounded-md border-l-4 border-[#004E3E] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to book</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            All training is free for carers in Waltham Forest. Courses are held at the Carers Hub and other
            community venues, with some available online. To find out about upcoming courses or to book a place,
            contact us on{" "}
            <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>{" "}
            or ask at the Carers Hub.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
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
            <li>
              <Link to="/carers/support/local-groups-services" className="text-wf-blue underline hover:text-wf-green">
                Local groups and services
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
