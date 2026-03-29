import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Complaints and compliments", to: "/complaints-compliments" },
  { title: "Independent help and advocacy", to: "/complaints-compliments/independent-help-advocacy" },
  { title: "Understand your rights", to: "/understand-your-rights" },
];

export default function MakeComplaintPage() {
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
              <span className="font-medium text-wf-dark">Make a complaint</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Make a complaint
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              If you are unhappy with a service you have received from Adult Social Care,
              you have the right to make a complaint. We take all complaints seriously
              and will work to resolve your concerns as quickly as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to make a complaint</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You can make a complaint in the following ways:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Online:</strong> Complete the online complaints form on the
                Waltham Forest Council website
              </li>
              <li>
                <strong>By phone:</strong> Call{" "}
                <a href="tel:02084963130" className="text-wf-blue underline">
                  020 8496 3130
                </a>{" "}
                (Monday to Friday, 9am to 5pm)
              </li>
              <li>
                <strong>By email:</strong>{" "}
                <a
                  href="mailto:socialcaredirect@walthamforest.gov.uk"
                  className="text-wf-blue underline hover:text-wf-green"
                >
                  socialcaredirect@walthamforest.gov.uk
                </a>
              </li>
              <li>
                <strong>In writing:</strong> Write to Adult Social Care Complaints,
                Waltham Forest Council, Town Hall, Forest Road, Walthamstow, London E17 4JF
              </li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You can also ask someone else to make the complaint on your behalf, such as
              a family member, friend or advocate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">The complaints process</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Adult social care complaints follow a single-stage process:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>We will acknowledge your complaint within 3 working days</li>
              <li>A complaints officer will contact you to discuss your concerns and agree how the complaint will be investigated</li>
              <li>We will investigate your complaint thoroughly and fairly</li>
              <li>You will receive a written response within 25 working days. If the investigation takes longer, we will keep you informed of progress</li>
              <li>The response will explain what we found, what action we will take and your options if you remain dissatisfied</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">If you are not satisfied</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you are not happy with the outcome of your complaint, you can escalate
              it to the Local Government and Social Care Ombudsman (LGSCO). The
              Ombudsman is an independent body that investigates complaints about
              councils and adult social care providers.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              <strong>Local Government and Social Care Ombudsman</strong><br />
              Telephone: 0300 061 0614<br />
              Website: www.lgo.org.uk
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The Ombudsman will usually expect you to have completed the council's
              complaints process before they investigate.
            </p>
          </section>

          <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
            <h2 className="text-xl font-bold text-wf-pink">Need help making a complaint?</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              An independent advocate can help you make a complaint. Visit our{" "}
              <Link
                to="/complaints-compliments/independent-help-advocacy"
                className="text-wf-blue underline hover:text-wf-green"
              >
                independent help and advocacy
              </Link>{" "}
              page for more information.
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
