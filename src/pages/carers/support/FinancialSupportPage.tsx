import { Link } from "react-router-dom";

export default function FinancialSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/carers" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">Support for carers</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Financial support</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Financial support for carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Being a carer can have a significant impact on your finances. There are benefits, discounts,
            and grants that may be available to help you.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Carer's Allowance */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Carer's Allowance</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Carer's Allowance is a weekly benefit you may be able to claim if you care for someone for at least
            35 hours a week. The person you care for must receive a qualifying disability benefit. You do not
            need to be related to or live with the person you care for.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            To be eligible, you must:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Be aged 16 or over</li>
            <li>Spend at least 35 hours a week caring for someone</li>
            <li>Not be in full-time education or earn more than the earnings limit after deductions</li>
            <li>Be in England, Scotland, or Wales for at least two of the last three years</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Apply for Carer's Allowance on{" "}
            <a href="https://www.gov.uk/carers-allowance" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">GOV.UK</a>.
          </p>
        </section>

        {/* Council tax discount */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Council tax discount</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You may be entitled to a council tax reduction or exemption if you are a carer. This includes:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Council tax discount if you are a live-in carer who is not the partner of the person you care for</li>
            <li>Council tax reduction scheme if you are on a low income</li>
            <li>Disability reduction if the person you care for needs an extra room or adapted bathroom</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Contact the Waltham Forest Council tax team to find out if you qualify.
          </p>
        </section>

        {/* Grants and other help */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Grants and other financial help</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            There are other sources of financial help that may be available to you:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Carers Trust grants</strong> - small grants for essential items, training, or wellbeing activities</li>
            <li><strong>Turn2us</strong> - a charity that helps people access benefits, grants, and other financial support</li>
            <li><strong>Direct payments</strong> - if you have eligible needs following a carers assessment, you may receive a direct payment to arrange your own support</li>
            <li><strong>Universal Credit carer element</strong> - an additional amount if you receive Universal Credit and have caring responsibilities</li>
            <li><strong>Pension credits</strong> - you may be able to protect your State Pension through Carer's Credit if you cannot work full-time</li>
          </ul>
        </section>

        {/* Benefits advice */}
        <section className="mb-8 rounded-md border-l-4 border-[#004E3E] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Get benefits advice</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            It can be difficult to know what you are entitled to. Free, confidential benefits advice is available from:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Citizens Advice Waltham Forest</li>
            <li>Carers First - who offer benefits advice as part of their carer support service</li>
            <li>The Waltham Forest Carers Hub</li>
          </ul>
          <p className="mt-3 text-wf-dark">
            Or call our Adult Social Care team on{" "}
            <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">
                Support for carers
              </Link>
            </li>
            <li>
              <Link to="/carers/tasks/money-benefits" className="text-wf-blue underline hover:text-wf-green">
                Money and benefits for carers
              </Link>
            </li>
            <li>
              <a href="https://www.gov.uk/carers-allowance" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                GOV.UK - Carer's Allowance
              </a>
            </li>
            <li>
              <a href="https://www.turn2us.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Turn2us - benefits calculator
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
