import { Link } from "react-router-dom";

export default function WorkEducationPage() {
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
          <li><Link to="/adult-social-care/being-carer" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Work and education</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Work and education</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Balancing a caring role with work or education can be challenging. You have legal rights as a
          working carer, and there is support available to help you continue with work or study.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Flexible working */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Flexible working rights</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          As a carer, you have important rights at work. Since April 2024, all employees have the right
          to request flexible working from day one of employment. This means you can ask your employer for:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Changes to your working hours (for example, starting later or finishing earlier)</li>
          <li>Compressed hours (working your hours over fewer days)</li>
          <li>Working from home or a combination of home and office</li>
          <li>Part-time working</li>
          <li>Job sharing</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Your employer must consider your request reasonably and give you a decision within two months.
          They can only refuse for specific business reasons.
          </p>
          </section>

          {/* Carer's leave */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Carer's leave</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Since April 2024, employees who are carers have the right to one week of unpaid carer's leave
          per year. This can be taken flexibly, in individual or half days. You do not need to provide
          evidence of your caring role, and your employer cannot refuse the request.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You may also be entitled to reasonable time off for emergencies involving dependants.
          </p>
          </section>

          {/* Education support */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Education and training support</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you want to continue your education or take up new training, support is available:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Many colleges and universities have carer support policies, including flexibility with deadlines and attendance</li>
          <li>You may be eligible for additional funding or bursaries as a student carer</li>
          <li>The Open University offers flexible distance learning that can fit around caring</li>
          <li>Local adult education courses are available at Waltham Forest College</li>
          <li>Free online courses are available through platforms such as FutureLearn and the Skills Toolkit</li>
          </ul>
          </section>

          {/* Employment advice */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Employment advice</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you need help with work-related issues, the following services can provide advice:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>ACAS</strong> - free advice on workplace rights (call 0300 123 1100)</li>
          <li><strong>Citizens Advice</strong> - help with employment issues, benefits, and rights</li>
          <li><strong>Carers UK Employer Support</strong> - resources and toolkits for working carers</li>
          <li><strong>Jobcentre Plus</strong> - support with finding work that fits around your caring responsibilities</li>
          </ul>
          </section>

          {/* Talk to us */}
          <section className="mb-8 rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003078]">Talk to us</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If your caring role is affecting your ability to work or study, a carers assessment can help
          identify support. Contact us on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/adult-social-care/being-carer" className="text-wf-blue underline hover:text-wf-green">
          Being a carer
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/being-carer/support-for-carers/financial-support" className="text-wf-blue underline hover:text-wf-green">
          Financial support for carers
          </Link>
          </li>
          <li>
          <a href="https://www.gov.uk/flexible-working" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          GOV.UK - flexible working
          </a>
          </li>
          <li>
          <a href="https://www.carersuk.org/help-and-advice/work-and-career" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Carers UK - work and career
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
