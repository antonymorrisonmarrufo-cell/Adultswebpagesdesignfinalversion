import { Link } from "react-router-dom";

export default function StrategyCouncilDutiesPage() {
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
          <li><span className="font-medium text-wf-dark">Carers strategy and council duties</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Carers strategy and council duties</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Waltham Forest Council has a clear strategy for supporting carers and legal duties under the
          Care Act 2014. Find out about our commitments and how we work to improve services for carers.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Local carers strategy */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Local carers strategy</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The Waltham Forest Carers Strategy sets out our vision for supporting carers in the borough. The
          strategy was developed in partnership with carers, carer organisations, health partners, and
          council services. Our key priorities are:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Identification and recognition</strong> - making it easier for carers to be identified and recognised across health, education, and social care</li>
          <li><strong>Information and advice</strong> - ensuring carers have access to clear, timely, and relevant information</li>
          <li><strong>Assessment and support</strong> - providing high-quality carers assessments and personalised support</li>
          <li><strong>Health and wellbeing</strong> - supporting carers to maintain their physical and mental health</li>
          <li><strong>Employment and education</strong> - helping carers to balance caring with work and study</li>
          <li><strong>Young carers and parent carers</strong> - addressing the specific needs of young carers and parent carers</li>
          <li><strong>Carer voice</strong> - involving carers in the design and review of services</li>
          </ul>
          </section>

          {/* Legal duties */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Legal duties under the Care Act 2014</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The Care Act 2014 places specific duties on local authorities in relation to carers. These include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Duty to assess</strong> - we must carry out a carers assessment where it appears a carer may have needs for support</li>
          <li><strong>Duty to meet eligible needs</strong> - where a carer has eligible needs, we must prepare a support plan and meet those needs</li>
          <li><strong>Duty to provide information and advice</strong> - we must provide comprehensive information and advice about care and support</li>
          <li><strong>Duty to promote wellbeing</strong> - we must promote the wellbeing of carers when carrying out any function under the Act</li>
          <li><strong>Duty to prevent needs</strong> - we must provide services to prevent or delay the development of care and support needs</li>
          <li><strong>Duty to involve</strong> - we must involve carers in assessments, care planning, and reviews</li>
          </ul>
          </section>

          {/* How we deliver */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How we deliver on our commitments</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          We deliver our carers strategy through:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>The Waltham Forest Carers Hub, providing a dedicated space for carer support</li>
          <li>Commissioning Carers First to deliver specialist carer support services</li>
          <li>Training staff across health and social care to identify and support carers</li>
          <li>Working with GP practices to improve carer identification and support</li>
          <li>Monitoring and reviewing our services through the annual carers survey</li>
          <li>The Carers Partnership Board, which brings together carers, council officers, and partners</li>
          </ul>
          </section>

          {/* Have your say */}
          <section className="mb-8 rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003078]">Have your say</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          We welcome feedback from carers about our strategy and services. If you would like to get involved
          in shaping carer services, contact us on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>{" "}
          or speak to a member of staff at the Carers Hub.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
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
          <Link to="/carers/support/feedback" className="text-wf-blue underline hover:text-wf-green">
          Carers feedback
          </Link>
          </li>
          <li>
          <a href="https://www.legislation.gov.uk/ukpga/2014/23/contents/enacted" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Care Act 2014
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
