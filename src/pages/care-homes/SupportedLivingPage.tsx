import { Link } from "react-router-dom";

export default function SupportedLivingPage() {
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
            <li><Link to="/care-homes" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Supported living</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Supported living</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Supported living helps you live as independently as possible in your own home or
            shared accommodation, with care and support tailored to your individual needs.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* What is supported living */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is supported living?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Supported living is an arrangement where you live in your own home -- either alone
            or with other people -- and receive support from trained care workers. Unlike a
            care home, you hold your own tenancy or licence to occupy the property, giving
            you more choice and control over your daily life.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Support can range from a few hours a week to 24-hour care, depending on your
            needs. It can include help with personal care, cooking, managing money, taking
            medication, and getting out and about in the community.
          </p>
        </section>

        {/* Who is it for */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who is supported living for?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Supported living may be suitable for you if you:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Have a learning disability and want to live more independently</li>
            <li>Have a mental health condition and need ongoing support</li>
            <li>Have a physical disability and need help with daily tasks</li>
            <li>Are an older person who needs some support but does not need a care home</li>
            <li>Are moving on from a hospital or residential setting</li>
          </ul>
        </section>

        {/* What support is available */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What support is available?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The support you receive will depend on your assessed needs. It might include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Personal care such as washing, dressing, and toileting</li>
            <li>Help with cooking, cleaning, and household tasks</li>
            <li>Support with managing money and paying bills</li>
            <li>Help with medication</li>
            <li>Support to access education, employment, and leisure activities</li>
            <li>Help to build and maintain relationships</li>
            <li>Support to stay safe in the community</li>
          </ul>
        </section>

        {/* Providers in Waltham Forest */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Supported living providers in Waltham Forest</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Waltham Forest Council works with a number of approved supported living
            providers. These organisations are regularly monitored to ensure they deliver
            high-quality care and support. Your social worker will help you choose a
            provider that meets your needs and preferences.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            All supported living services in Waltham Forest are registered with and
            inspected by the Care Quality Commission (CQC). You can check the latest
            inspection reports on the{" "}
            <a
              href="https://www.cqc.org.uk"
              className="text-wf-blue underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CQC website
            </a>.
          </p>
        </section>

        {/* How to access */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to access supported living</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            To access supported living, you will need a care and support assessment from
            Waltham Forest Council. Contact our Adult Social Care team to request an
            assessment:
          </p>
          <p className="mt-3 text-wf-dark">
            <strong>Telephone:</strong>{" "}
            <a href="tel:02084963130" className="text-wf-blue underline font-semibold">
              020 8496 3130
            </a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">
            Monday to Friday, 9am to 5pm (excluding bank holidays)
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/care-homes/request-housing-care-support" className="text-wf-blue underline hover:text-wf-green">
                Request housing and care support
              </Link>
            </li>
            <li>
              <Link to="/care-homes/shared-lives" className="text-wf-blue underline hover:text-wf-green">
                Shared Lives
              </Link>
            </li>
            <li>
              <Link to="/care-homes/extra-care-housing" className="text-wf-blue underline hover:text-wf-green">
                Extra care housing
              </Link>
            </li>
            <li>
              <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
                Paying for care
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
