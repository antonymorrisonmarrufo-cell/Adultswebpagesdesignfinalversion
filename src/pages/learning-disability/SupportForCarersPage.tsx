import { Link } from "react-router-dom";

export default function SupportForCarersPage() {
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
            <li>
              <span className="font-medium text-wf-dark">Support for carers</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Support for carers
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          If you care for someone with a learning disability, you are entitled to support
          in your own right. Waltham Forest Council offers a range of services to help
          carers look after their own health and wellbeing.
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="space-y-10">
          {/* Carers assessment */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Carers assessment</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              A carers assessment looks at how caring affects your life and what support
              you need to continue in your caring role. You are entitled to an assessment
              regardless of the amount of care you provide or your financial situation.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              During the assessment, we will talk to you about:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>Your physical and emotional wellbeing</li>
              <li>Whether you are able or willing to continue caring</li>
              <li>The impact of caring on your work, education and social life</li>
              <li>What support would help you in your caring role</li>
              <li>Any emergency or future planning needs</li>
            </ul>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              To request a carers assessment, call us on{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">
                020 8496 3130
              </a>{" "}
              or ask the social worker involved with the person you care for.
            </p>
          </section>

          {/* Respite care */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Respite care</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Respite care gives you a break from caring, while the person you look after
              is supported by someone else. This can be for a few hours, a day or longer.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Types of respite care available include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>A support worker visiting the person you care for at home</li>
              <li>Day services or activities that the person you care for can attend</li>
              <li>Short stays in a residential care home or with a Shared Lives carer</li>
              <li>Emergency respite if you become unwell or have a crisis</li>
            </ul>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Respite care can be arranged as part of the support plan for the person
              you care for, or through your own carers assessment.
            </p>
          </section>

          {/* Support groups */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Support groups</h2>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              Meeting other carers who understand your situation can be a valuable source
              of support. There are several groups in Waltham Forest for carers of people
              with learning disabilities.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
              <li>
                <strong>Waltham Forest Carers Network</strong> - regular meetings,
                information sessions and social events for carers
              </li>
              <li>
                <strong>Parent carers forum</strong> - for parents of children and young
                adults with learning disabilities
              </li>
              <li>
                <strong>Sibling support group</strong> - for brothers and sisters of
                people with learning disabilities
              </li>
              <li>
                <strong>Online support groups</strong> - virtual meetings for carers who
                cannot attend in person
              </li>
            </ul>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              For details of meeting times and locations, contact us on{" "}
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
                to="/adult-social-care/learning-disability-support/ask-for-support"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Ask for support
              </Link>
            </li>
            <li>
              <Link
                to="/adult-social-care/learning-disability-support/easy-read-resources"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Easy read resources
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
