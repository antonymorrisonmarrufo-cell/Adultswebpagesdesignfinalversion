import { Link } from "react-router-dom";

export default function SupportAfterCaringPage() {
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
          <li><span className="font-medium text-wf-dark">Support after caring ends</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E]">Support after caring ends</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          When your caring role comes to an end, whether through bereavement, the person moving into
          residential care, or another change, it can be a difficult time. Support is available to help
          you adjust.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Bereavement */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Bereavement support</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Losing the person you cared for is one of the most difficult experiences you may face. On top of
          grief, you may also feel a loss of purpose or identity. It is important to know that support is
          available:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Bereavement counselling</strong> - free counselling through your GP or through Cruse Bereavement Care</li>
          <li><strong>Bereavement support groups</strong> - local groups where you can share your experience with others</li>
          <li><strong>Practical help</strong> - assistance with registering a death, probate, and managing affairs</li>
          <li><strong>Continued peer support</strong> - you can continue to attend carer groups if you wish</li>
          </ul>
          </section>

          {/* Returning to work */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Returning to work</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you gave up work or reduced your hours to care for someone, returning to work can feel daunting.
          Help is available:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Jobcentre Plus</strong> - can help with job searching, CV writing, and interview skills</li>
          <li><strong>Waltham Forest Works</strong> - the council's employment support service</li>
          <li><strong>Retraining</strong> - you may be eligible for free courses to update your skills</li>
          <li><strong>Volunteering</strong> - a good way to rebuild confidence and gain recent experience</li>
          <li><strong>Carers UK Back to Work resources</strong> - online tools and guides for former carers</li>
          </ul>
          </section>

          {/* Continued support */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Continued support</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Your needs do not disappear when caring ends. You may continue to access support including:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Health and wellbeing services, including mental health support</li>
          <li>Benefits advice to help you understand changes to your entitlements</li>
          <li>Social activities and groups to reduce isolation</li>
          <li>Advice on housing, finances, and other practical matters</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Under the Care Act 2014, former carers can request an assessment of their needs if they feel
          they still need support after their caring role ends.
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">We are here to help</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If your caring role has recently ended and you need support, please contact us on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          You do not have to go through this alone.
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
          <Link to="/carers/support/health-wellbeing" className="text-wf-blue underline hover:text-wf-green">
          Health and wellbeing for carers
          </Link>
          </li>
          <li>
          <a href="https://www.cruse.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Cruse Bereavement Care
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
