import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Complaints and compliments", to: "/complaints-compliments" },
  { title: "Consultations", to: "/our-policies/consultations" },
  { title: "Our policies", to: "/our-policies" },
];

export default function HelpShapeServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li className="flex items-center gap-1">
              <Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li className="flex items-center gap-1">
              <Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li className="flex items-center gap-1">
              <Link to="/complaints-compliments" className="text-wf-blue underline hover:text-wf-green">Complaints and compliments</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Help shape our services</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Help shape our services
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              We believe that the people who use our services are best placed to help
              us improve them. There are many ways you can get involved and have your
              voice heard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Co-production</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Co-production means working together with people who use services and
              their carers to design, deliver and evaluate adult social care. In Waltham
              Forest, we are committed to co-production and involve people with lived
              experience in decisions about:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>How services are designed and commissioned</li>
              <li>What quality standards we set for care providers</li>
              <li>How we communicate with the people we support</li>
              <li>Policy development and strategic planning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Surveys and consultations</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              We regularly run surveys and consultations to gather feedback about our
              services. These may include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>The annual Adult Social Care Survey, which asks about your experience of care and support</li>
              <li>Service-specific consultations when we are making changes</li>
              <li>Budget consultations about how we spend our resources</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Visit our{" "}
              <Link
                to="/our-policies/consultations"
                className="text-wf-blue underline hover:text-wf-green"
              >
                consultations
              </Link>{" "}
              page to see current opportunities to have your say.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Focus groups and panels</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              We run focus groups and panels on specific topics where we need in-depth
              feedback. These are small group discussions, usually lasting one to two
              hours, where you can share your views and experiences in detail. Topics
              may include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Reviewing how a particular service is working</li>
              <li>Testing new ideas before they are implemented</li>
              <li>Exploring how we can improve access to services</li>
              <li>Evaluating the quality of commissioned care providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to get involved</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you would like to get involved in shaping adult social care services,
              you can:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Register your interest by contacting our team</li>
              <li>Join the Waltham Forest Involvement Network</li>
              <li>Attend public consultation events</li>
              <li>Respond to online surveys when they are published</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              We welcome involvement from people who use services, carers, family members
              and anyone with an interest in adult social care.
            </p>
          </section>

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              To register your interest in getting involved, contact our team.
            </p>
            <p className="mt-3 text-sm font-semibold text-wf-dark">
              Telephone:{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">
                020 8496 3130
              </a>
            </p>
            <p className="mt-1 text-sm text-wf-gray">
              Monday to Friday, 9am to 5pm (excluding bank holidays)
            </p>
          </section>
        </div>
      </div>

      {/* Related pages */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
          <ul className="mt-4 space-y-2">
            {relatedPages.map((page) => (
              <li key={page.to}>
                <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
                  {page.title}
                </Link>
              </li>
            ))}
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
