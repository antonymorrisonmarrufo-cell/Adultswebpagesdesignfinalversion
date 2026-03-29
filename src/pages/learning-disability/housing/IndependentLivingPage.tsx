import { Link } from "react-router-dom";

export default function IndependentLivingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
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
            <li className="flex items-center gap-1">
              <Link
                to="/adult-social-care/learning-disability-support/housing-options"
                className="text-wf-blue underline hover:text-wf-green"
              >
                Housing options
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Independent living</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Independent living
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          With the right support, many people with learning disabilities can live
          independently in their own home. We provide a range of services to help
          you build the skills and confidence you need.
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="space-y-10">
          {/* Support to live independently */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">
              Support to live independently
            </h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Independent living does not mean doing everything on your own. It means
              having the freedom to make your own choices about how you live, with
              support when you need it.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              We can help you with:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>Learning everyday skills such as cooking, cleaning and laundry</li>
              <li>Managing your money, paying bills and budgeting</li>
              <li>Using public transport and getting around your local area</li>
              <li>Staying safe at home and in the community</li>
              <li>Building social connections and avoiding isolation</li>
              <li>Accessing healthcare and managing your health needs</li>
              <li>Finding and keeping a job or volunteering</li>
            </ul>
          </section>

          {/* Tenancy support */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Tenancy support</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              If you have your own tenancy or are looking to get one, we can provide
              tenancy support to help you manage your home. This includes:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>Help with finding a suitable property and applying for housing</li>
              <li>Support with understanding your tenancy agreement and your rights as a tenant</li>
              <li>Assistance with setting up utilities, claiming Housing Benefit and managing bills</li>
              <li>Help with reporting repairs and dealing with your landlord or housing association</li>
              <li>Support if you are at risk of losing your tenancy</li>
            </ul>
          </section>

          {/* Technology and equipment */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">
              Technology and equipment
            </h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Assistive technology can help you live more independently and stay safe
              at home. We can provide or help you access:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>Medication reminders and dispensers</li>
              <li>Smart home devices that you can control with your voice</li>
              <li>Door sensors and personal alarms for safety</li>
              <li>Apps and devices to help with daily routines and communication</li>
              <li>Telecare and monitoring systems for peace of mind</li>
            </ul>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              An occupational therapist can assess your home and recommend equipment or
              adaptations that would help you.
            </p>
          </section>

          {/* Getting started */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Getting started</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              If you are interested in living more independently, speak to your social
              worker or contact us to discuss your options. We can arrange an assessment
              to understand what support you would need and help you plan your next steps.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Call us on{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">
                020 8496 3130
              </a>{" "}
              to find out more.
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
                to="/adult-social-care/learning-disability-support/housing-options/supported-living"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Supported living
              </Link>
            </li>
            <li>
              <Link
                to="/adult-social-care/learning-disability-support/preparing-for-adulthood"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Preparing for adulthood
              </Link>
            </li>
            <li>
              <Link
                to="/adult-social-care/learning-disability-support/housing-options"
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
  );
}
