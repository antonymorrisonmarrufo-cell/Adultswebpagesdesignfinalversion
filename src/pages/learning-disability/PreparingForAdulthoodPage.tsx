import { Link } from "react-router-dom";

export default function PreparingForAdulthoodPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">
      Home
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/adult-social-care"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Adult Social Care
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/adult-social-care/learning-disability-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Learning disability support
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Preparing for adulthood</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Preparing for adulthood
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      Moving from children's to adult services is a big change. We work with young
      people and their families to plan this transition early, so you feel prepared
      and supported every step of the way.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="space-y-10">
      {/* Transition */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">
      Transition from children's to adult services
      </h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      We start planning for the move to adult services when a young person is
      around 14 years old. This gives everyone time to think about what the future
      looks like and what support will be needed.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      The transition process involves:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>A transition assessment to understand the young person's needs and wishes</li>
      <li>Regular reviews involving the young person, their family and professionals</li>
      <li>A transition plan that sets out goals and the support needed to achieve them</li>
      <li>A gradual handover from children's to adult services, usually completed by age 18 or up to age 25 in some cases</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      A dedicated transition worker will support the young person and their family
      throughout this process.
      </p>
      </section>

      {/* Education */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Education and training</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Young people with learning disabilities have the right to continue their
      education and training after leaving school. Options include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Further education courses at local colleges, including supported learning programmes</li>
      <li>Specialist colleges that offer residential and day programmes</li>
      <li>Supported internships and apprenticeships</li>
      <li>Community-based learning opportunities</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      An Education, Health and Care (EHC) plan can continue until the age of 25
      if the young person needs ongoing support with their education.
      </p>
      </section>

      {/* Employment */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Employment</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      We believe that everyone should have the opportunity to work. Our supported
      employment programme helps people with learning disabilities find and keep
      paid work.
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Job coaching and support in the workplace</li>
      <li>Help with CV writing, job applications and interview preparation</li>
      <li>Work experience placements and volunteering opportunities</li>
      <li>Support for employers to make reasonable adjustments</li>
      </ul>
      </section>

      {/* Independent living */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Independent living</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Preparing for adulthood includes thinking about where and how a young person
      will live in the future. We can help with:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Learning everyday skills such as cooking, budgeting and using public transport</li>
      <li>Exploring different housing options including supported living and Shared Lives</li>
      <li>Understanding benefits and managing money</li>
      <li>Building social connections and taking part in community activities</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      For more information about housing, visit our{" "}
      <Link
      to="/adult-social-care/learning-disability-support/housing-and-support-options"
      className="text-wf-blue underline hover:text-wf-green"
      >
      housing options
      </Link>{" "}
      page.
      </p>
      </section>
      </div>
      </div>

      {/* Related links */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
      <ul className="mt-4 space-y-2">
      <li>
      <Link
      to="/adult-social-care/learning-disability-support/ask-for-support"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Ask for support
      </Link>
      </li>
      <li>
      <Link
      to="/adult-social-care/learning-disability-support/support-for-carers-and-families"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Support for carers
      </Link>
      </li>
      <li>
      <Link
      to="/adult-social-care/learning-disability-support/housing-and-support-options"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Housing options
      </Link>
      </li>
      </ul>
      </div>
      </div>

      {/* Last updated */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <p className="text-xs text-wf-gray">Last updated: March 2026</p>
      </div>
        </div>
      </div>
    </div>
  );
}
