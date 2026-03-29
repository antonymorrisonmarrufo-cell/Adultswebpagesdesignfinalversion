import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/our-policies" },
  { title: "Safeguarding adults", to: "/safeguarding" },
  { title: "Safeguarding for professionals", to: "/information-for-professionals/safeguarding-adults-professionals" },
];

export default function SafeguardingPoliciesReportsPage() {
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
              <span className="font-medium text-wf-dark">Safeguarding policies and reports</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Safeguarding policies and reports
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              Safeguarding adults is a core responsibility of the council. We work with
              partner organisations through the Safeguarding Adults Board (SAB) to
              protect adults at risk from abuse and neglect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Safeguarding Adults Board</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The Waltham Forest Safeguarding Adults Board (SAB) is a statutory
              partnership that brings together the council, NHS, police and other key
              organisations. The SAB is responsible for:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Developing and overseeing safeguarding strategy and policy</li>
              <li>Ensuring effective multi-agency working to protect adults at risk</li>
              <li>Commissioning Safeguarding Adults Reviews when serious incidents occur</li>
              <li>Publishing an annual report on safeguarding activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Annual reports</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The SAB publishes an annual report each year setting out what the Board has
              done, key statistics on safeguarding activity and priorities for the coming
              year. Annual reports cover:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>The number and types of safeguarding concerns raised</li>
              <li>Outcomes of Section 42 enquiries</li>
              <li>Key achievements and areas for improvement</li>
              <li>Safeguarding Adults Reviews completed and lessons learned</li>
              <li>Partner agency contributions to safeguarding</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Annual reports are available to download from the Waltham Forest Council
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Multi-agency procedures</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Waltham Forest follows the London Multi-Agency Adult Safeguarding Policy
              and Procedures. These procedures set out how organisations should work
              together to safeguard adults, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>How to recognise and report abuse or neglect</li>
              <li>Thresholds for safeguarding enquiries</li>
              <li>How enquiries are carried out</li>
              <li>Making Safeguarding Personal principles</li>
              <li>Information sharing protocols</li>
            </ul>
          </section>

          <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
            <h2 className="text-xl font-bold text-wf-pink">Report a safeguarding concern</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              If you are worried that an adult is being abused or neglected, contact our
              Adult Social Care team immediately.
            </p>
            <p className="mt-3 text-sm font-semibold text-wf-dark">
              Telephone:{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">
                020 8496 3130
              </a>
            </p>
            <p className="mt-1 text-sm text-wf-gray">
              Monday to Friday, 9am to 5pm. Out of hours: 020 8496 3000
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
