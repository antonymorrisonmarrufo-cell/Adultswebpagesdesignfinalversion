import { Link } from "react-router-dom";

export default function SupportForCarersPage() {
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
          <li><span className="font-medium text-wf-dark">Support for carers</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Support for carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          There is a range of support available to help you in your caring role. From financial help and respite
          breaks to health services, local groups, and training opportunities.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Support links grid */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Types of support available</h2>
          <div className="grid gap-4 md:grid-cols-2">
          <Link
          to="/carers/support/financial-support"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Financial support</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Carer's Allowance, council tax discounts, grants, and other financial help for carers.
          </p>
          </Link>

          <Link
          to="/carers/support/taking-a-break"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Taking a break from caring</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Respite care, replacement care, and short breaks to help you recharge.
          </p>
          </Link>

          <Link
          to="/carers/support/emergency-plan"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Carer emergency plan</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Planning for emergencies so the person you care for is looked after if something happens to you.
          </p>
          </Link>

          <Link
          to="/carers/support/health-wellbeing"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Health and wellbeing</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Free health checks, mental health support, exercise programmes, and wellbeing services.
          </p>
          </Link>

          <Link
          to="/carers/support/local-groups-services"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Local groups and services</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Carer support groups, Carers First, and local organisations that can help.
          </p>
          </Link>

          <Link
          to="/carers/support/training-workshops"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Training and workshops</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Free training in moving and handling, first aid, and condition-specific care skills.
          </p>
          </Link>

          <Link
          to="/carers/support/feedback"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Carers feedback</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Share your experience, give feedback, make a complaint, or send a compliment.
          </p>
          </Link>

          <Link
          to="/carers/support/useful-contacts"
          className="block rounded-md bg-[#d7f8ff] p-6 shadow-sm hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#231F20]">Useful contacts</h3>
          <p className="mt-2 text-sm text-wf-gray">
          National helplines and local services for carers.
          </p>
          </Link>
          </div>
          </section>

          {/* Contact */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Need help finding the right support?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Our team can help you find the support that is right for you. Contact Adult Social Care on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>{" "}
          (Monday to Friday, 9am to 5pm).
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
          <Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">
          Carers Hub
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
