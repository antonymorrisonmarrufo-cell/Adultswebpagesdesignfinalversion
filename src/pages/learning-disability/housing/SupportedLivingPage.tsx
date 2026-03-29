import { Link } from "react-router-dom";

export default function SupportedLivingPage() {
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
                to="/learning-disability-support"
                className="text-wf-blue underline hover:text-wf-green"
              >
                Learning disability support
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li className="flex items-center gap-1">
              <Link
                to="/learning-disability-support/housing-options"
                className="text-wf-blue underline hover:text-wf-green"
              >
                Housing options
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Supported living</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Supported living
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          Supported living means having your own home, or sharing a home with others,
          while receiving the support you need to live as independently as possible.
          You have your own tenancy and control over your daily life.
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="space-y-10">
          {/* What it is */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What is supported living?</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              In supported living, you rent your own home or a room in a shared house.
              A support provider visits you or is available at set times to help you with
              the things you need assistance with.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Supported living is different from residential care because:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>You have your own tenancy agreement and more control over where you live</li>
              <li>You choose who you live with, if anyone</li>
              <li>You can change your support provider without having to move home</li>
              <li>Your housing and support are arranged separately, giving you more flexibility</li>
            </ul>
          </section>

          {/* How it works */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How it works</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              The amount of support you receive depends on your needs. Some people need
              just a few hours of support each week, while others need someone available
              around the clock. Your support plan will set out:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>What support you need and when</li>
              <li>Who will provide the support</li>
              <li>What you want to achieve and how support will help you get there</li>
              <li>How your support will be reviewed and updated</li>
            </ul>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Your rent is usually covered by Housing Benefit, and your support is funded
              by the council following a needs assessment. You may also receive other
              benefits to help with living costs.
            </p>
          </section>

          {/* Support available */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Support available</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Support workers in supported living can help you with a wide range of
              tasks, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>Personal care such as washing, dressing and taking medication</li>
              <li>Cooking, cleaning and managing your home</li>
              <li>Managing your money and paying bills</li>
              <li>Getting out and about in the community</li>
              <li>Attending appointments and activities</li>
              <li>Building relationships and staying in touch with friends and family</li>
              <li>Learning new skills to become more independent over time</li>
            </ul>
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
                to="/learning-disability-support/housing-options/independent-living"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Independent living
              </Link>
            </li>
            <li>
              <Link
                to="/learning-disability-support/housing-options/shared-lives"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Shared Lives
              </Link>
            </li>
            <li>
              <Link
                to="/learning-disability-support/housing-options"
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
