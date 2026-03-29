import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/our-policies" },
  { title: "Help shape our services", to: "/complaints-compliments/help-shape-services" },
  { title: "Complaints and compliments", to: "/complaints-compliments" },
];

export default function ConsultationsPage() {
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
              <Link to="/our-policies" className="text-wf-blue underline hover:text-wf-green">Our policies</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Consultations</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Consultations
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              We regularly consult with residents, carers and stakeholders about changes
              to adult social care services. Your views help us make better decisions
              about how we deliver care and support in Waltham Forest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Current consultations</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              There are currently no open consultations on adult social care. Please
              check back regularly or sign up to receive notifications when new
              consultations are published.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              When consultations are open, you will find details here including what the
              consultation is about, how to respond, and the closing date for responses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Past consultations</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              We publish the outcomes of past consultations so you can see how your
              feedback has been used. Recent past consultations include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Adult Social Care charging policy review (2025):</strong>{" "}
                Consultation on proposed changes to our charging policy and fairer
                contributions framework
              </li>
              <li>
                <strong>Day opportunities service redesign (2025):</strong>{" "}
                Consultation on how day services for adults with learning disabilities
                and older people should be delivered
              </li>
              <li>
                <strong>Carers strategy (2024):</strong>{" "}
                Consultation on the council's strategy for supporting unpaid carers
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to participate</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              When a consultation is open, you can take part by:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Completing the online survey</li>
              <li>Attending a public consultation event or focus group</li>
              <li>Submitting a written response by email or post</li>
              <li>Requesting an accessible version of consultation documents (such as Easy Read or large print)</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              We aim to make all consultations accessible and will provide reasonable
              adjustments on request. If you need help participating, please contact us.
            </p>
          </section>

          <section className="rounded-lg border-l-4 border-wf-green bg-[#d7f8ff] p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              For questions about consultations or to request accessible formats, contact
              our team.
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
