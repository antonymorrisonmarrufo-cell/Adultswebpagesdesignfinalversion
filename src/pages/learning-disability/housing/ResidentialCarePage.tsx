import { Link } from "react-router-dom";

export default function ResidentialCarePage() {
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
              <span className="font-medium text-wf-dark">Residential care</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Residential care
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          Residential care homes provide accommodation and around-the-clock support for
          people with learning disabilities who need a higher level of care than can be
          provided at home.
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="space-y-10">
          {/* What it is */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What is residential care?</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Residential care means living in a care home where trained staff are
              available at all times. The care home provides your accommodation, meals
              and all the support you need.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Care homes for people with learning disabilities are usually smaller homes
              in the community. They aim to provide a home-like environment while
              ensuring that residents receive the care and support they need.
            </p>
          </section>

          {/* When it's needed */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">When residential care may be needed</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Residential care may be the right option if:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>You need support with personal care and daily living throughout the day and night</li>
              <li>Your needs are too complex to be safely met in a supported living arrangement</li>
              <li>You have health needs that require regular monitoring or specialist care</li>
              <li>Your family can no longer provide the level of care you need</li>
              <li>You need a temporary placement while a longer-term plan is put in place</li>
            </ul>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Residential care is not the only option for people with higher levels of
              need. We will always explore whether supported living or other alternatives
              could meet your needs first.
            </p>
          </section>

          {/* How to access */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to access residential care</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              To access residential care, you will need a needs assessment from our
              learning disability team. The process involves:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>A full assessment of your care and support needs</li>
              <li>A discussion about the different options available and what would work best for you</li>
              <li>Visits to care homes that may be suitable, so you can see what they are like</li>
              <li>A financial assessment to determine how your care will be funded</li>
              <li>A transition plan to help you settle into your new home</li>
            </ul>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              You have the right to be involved in choosing your care home, and we will
              take your preferences into account. We will also review your placement
              regularly to make sure it continues to meet your needs.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              To discuss residential care options, call us on{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">
                020 8496 3130
              </a>
              .
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
                to="/adult-social-care/learning-disability-support/ask-for-support"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Ask for support
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
