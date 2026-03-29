import { Link } from "react-router-dom";

export default function AdultCarersHub() {
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
          <li><Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">Carers Hub</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Adult carers hub</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Adult carers hub</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Dedicated support, activities, and resources for adult carers aged 18 and over in Waltham Forest.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* What we offer */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What the adult carers hub offers</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The adult carers hub is a dedicated space within the Carers Hub for carers aged 18 and over. Whether
          you care for a partner, parent, adult child, or friend, you can access:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Information and advice</strong> - on benefits, rights, services, and support options</li>
          <li><strong>Carers assessments</strong> - have your assessment in a comfortable, familiar environment</li>
          <li><strong>One-to-one support</strong> - from a dedicated caseworker who understands your situation</li>
          <li><strong>Peer support groups</strong> - meet other adult carers who share similar experiences</li>
          <li><strong>Counselling</strong> - free emotional support when you need it</li>
          <li><strong>Activities and events</strong> - social activities, wellbeing sessions, and outings</li>
          </ul>
          </section>

          {/* Regular activities */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Regular activities</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The adult carers hub runs a programme of regular activities, including:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Coffee mornings and social drop-ins</li>
          <li>Mindfulness and relaxation sessions</li>
          <li>Arts, crafts, and creative workshops</li>
          <li>Exercise and movement classes</li>
          <li>Information sessions on topics relevant to carers</li>
          <li>Seasonal events and celebrations</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          All activities are free. Contact us to find out the current timetable.
          </p>
          </section>

          {/* Specialist support */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Specialist support</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          We also offer specialist sessions for carers in particular situations:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Dementia carers group - for those caring for someone with dementia</li>
          <li>Mental health carers group - for those caring for someone with a mental health condition</li>
          <li>Working carers drop-in - evening sessions for carers who work during the day</li>
          <li>Male carers group - a space for men in caring roles</li>
          </ul>
          </section>

          {/* Contact */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <h2 className="text-2xl font-bold text-[#003078]">Visit or contact us</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The adult carers hub is open Monday to Friday, 9am to 5pm. No appointment is needed for drop-in
          sessions. Phone: <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
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
