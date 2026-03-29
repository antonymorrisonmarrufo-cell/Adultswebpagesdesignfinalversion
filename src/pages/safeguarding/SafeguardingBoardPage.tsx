import { Link } from "react-router-dom";

export default function SafeguardingBoardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">Safeguarding adults</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Safeguarding Adults Board</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#00635C]">Waltham Forest Safeguarding Adults Board</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            The Safeguarding Adults Board (SAB) brings together key organisations to ensure that local
            safeguarding arrangements work effectively to protect adults at risk.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Role of the SAB */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Role of the Safeguarding Adults Board</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Under the Care Act 2014, every local authority must establish a Safeguarding Adults Board. The
            Waltham Forest SAB has three core duties:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>
              <strong>Publish a strategic plan</strong> - setting out its strategy for achieving its
              objectives and how members will contribute to delivering the plan
            </li>
            <li>
              <strong>Publish an annual report</strong> - detailing the work of the Board and its members
              to implement the strategic plan, and what each member has done to carry out the strategy
            </li>
            <li>
              <strong>Conduct Safeguarding Adults Reviews (SARs)</strong> - when an adult in its area dies
              or has experienced serious abuse or neglect and there is concern that partner agencies could
              have worked more effectively to protect the adult
            </li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            The Board also provides strategic leadership and oversight for safeguarding activity across
            Waltham Forest, promotes multi-agency working, and seeks assurance that safeguarding practice
            is person-centred and outcome-focused.
          </p>
        </section>

        {/* Membership */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Membership</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The SAB is chaired by an independent chair and includes statutory partners and other key
            organisations. The three statutory partners are:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>London Borough of Waltham Forest</li>
            <li>NHS North East London Integrated Care Board</li>
            <li>Metropolitan Police Service</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            Other members include representatives from:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Barts Health NHS Trust</li>
            <li>North East London NHS Foundation Trust (NELFT)</li>
            <li>London Fire Brigade</li>
            <li>National Probation Service</li>
            <li>Healthwatch Waltham Forest</li>
            <li>Voluntary and community sector organisations</li>
            <li>Housing providers</li>
          </ul>
        </section>

        {/* Strategic plan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Strategic plan</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The SAB's strategic plan sets out the Board's priorities for safeguarding adults in Waltham
            Forest. The current strategic priorities include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Making Safeguarding Personal - ensuring that safeguarding is person-led and outcome-focused</li>
            <li>Prevention - developing strategies to prevent abuse and neglect from occurring</li>
            <li>Learning and development - ensuring the workforce has the right skills and knowledge</li>
            <li>Quality assurance - monitoring the effectiveness of safeguarding practice across partners</li>
            <li>Community engagement - raising awareness among residents about safeguarding</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            The strategic plan is reviewed and updated regularly to reflect emerging priorities and learning
            from safeguarding activity.
          </p>
        </section>

        {/* Annual reports */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Annual reports</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The SAB publishes an annual report that provides an overview of safeguarding activity and
            performance in Waltham Forest. The report includes:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
            <li>Data on safeguarding concerns and enquiries received during the year</li>
            <li>Progress against the strategic plan priorities</li>
            <li>Summary of Safeguarding Adults Reviews conducted</li>
            <li>Details of training and awareness-raising activity</li>
            <li>Partner contributions to safeguarding</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
            Annual reports are available on the Waltham Forest Council website. If you would like a copy
            of a previous annual report, please contact the SAB business unit.
          </p>
        </section>

        {/* Safeguarding Adults Reviews */}
        <section className="mb-8 rounded-md border border-wf-gray-light bg-wf-gray-light p-6">
          <h2 className="text-2xl font-bold text-[#D61F69]">Safeguarding Adults Reviews</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            A Safeguarding Adults Review (SAR) is carried out when an adult with care and support needs has
            died or experienced serious harm as a result of abuse or neglect, and there is concern that
            partner agencies could have worked more effectively to protect the adult.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The purpose of a SAR is not to apportion blame, but to learn lessons about how agencies can
            improve their practice and work together more effectively. Published SARs and their findings
            are available from the SAB.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Contact the SAB</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            For enquiries about the Safeguarding Adults Board, including its work, publications, or how to
            get involved, please contact the SAB business unit:
          </p>
          <p className="mt-3 text-wf-dark">
            <strong>Email:</strong>{" "}
            <a href="mailto:sab@walthamforest.gov.uk" className="text-wf-blue underline hover:text-wf-green">
              sab@walthamforest.gov.uk
            </a>
          </p>
          <p className="mt-2 text-wf-dark">
            <strong>Phone:</strong>{" "}
            <a href="tel:02084963130" className="font-bold text-[#00635C] no-underline">020 8496 3130</a>
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">
                Safeguarding adults overview
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/resources-improve-practice" className="text-wf-blue underline hover:text-wf-green">
                Resources to improve practice
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/professionals" className="text-wf-blue underline hover:text-wf-green">
                Information for professionals
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
