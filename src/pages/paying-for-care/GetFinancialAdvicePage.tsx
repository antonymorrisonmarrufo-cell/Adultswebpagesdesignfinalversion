import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How care costs are worked out", to: "/paying-for-care/how-care-costs-worked-out" },
  { title: "Financial assessment", to: "/paying-for-care/financial-assessment" },
  { title: "Deferred payment agreements", to: "/paying-for-care/deferred-payment-agreements" },
  { title: "Benefits and help with costs", to: "/paying-for-care/benefits-and-help" },
];

export default function GetFinancialAdvicePage() {
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
            <li><Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">Paying for your care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Get financial advice</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Get financial advice</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Getting professional financial advice can help you understand your options
            and make the best decisions about paying for care. Some advice is free.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="max-w-3xl space-y-8">
          {/* Why get advice */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Why get financial advice?</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Planning how to pay for care can be complex. A specialist financial adviser
              can help you:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Understand the full range of options for paying for care</li>
              <li>Work out how long your savings might last</li>
              <li>Consider products such as care fees annuities or investment plans</li>
              <li>Make sure you are claiming all the benefits you are entitled to</li>
              <li>Protect your assets while meeting your care needs</li>
              <li>Plan for the future if your needs change</li>
            </ul>
          </section>

          {/* Independent financial advisers */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Independent financial advisers</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              An independent financial adviser (IFA) who specialises in care funding can
              give you personalised advice. Look for an adviser who is:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Regulated by the Financial Conduct Authority (FCA)</li>
              <li>A member of the Society of Later Life Advisers (SOLLA)</li>
              <li>Experienced in advising on care fees planning</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You can find a specialist adviser through the{" "}
              <a
                href="https://societyoflaterlifeadvisers.co.uk"
                className="text-wf-blue underline hover:text-wf-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                Society of Later Life Advisers (SOLLA)
              </a>{" "}
              website, or by contacting{" "}
              <a
                href="https://www.unbiased.co.uk"
                className="text-wf-blue underline hover:text-wf-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unbiased
              </a>
              .
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Independent financial advisers may charge a fee for their services. Ask
              about costs before you commit to an appointment.
            </p>
          </section>

          {/* Free advice services */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Free advice services</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Several organisations offer free, impartial advice about paying for care:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Citizens Advice Waltham Forest:</strong> provides free advice on
                benefits, debt and money matters. You can visit in person, call or use
                their online service.
              </li>
              <li>
                <strong>Age UK:</strong> offers a free advice line and fact sheets covering
                all aspects of paying for care, benefits and housing options.
              </li>
              <li>
                <strong>MoneyHelper (formerly Money Advice Service):</strong> provides
                free, government-backed guidance on care costs and paying for care,
                including a care costs calculator.
              </li>
              <li>
                <strong>Independent Age:</strong> offers free advice on care funding,
                benefits and entitlements for older people.
              </li>
            </ul>
          </section>

          {/* SCIE resources */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">SCIE resources</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The Social Care Institute for Excellence (SCIE) provides a range of
              independent resources to help you understand care funding:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Guides on how care is funded in England</li>
              <li>Information about what financial assessments involve</li>
              <li>Advice on choosing and paying for a care home</li>
              <li>Resources for carers who are managing someone else's finances</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Visit the{" "}
              <a
                href="https://www.scie.org.uk"
                className="text-wf-blue underline hover:text-wf-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCIE website
              </a>{" "}
              for their full range of guides and factsheets.
            </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-l-4 border-wf-green bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#bf3688]">Talk to us about your options</h2>
            <p className="mt-2 text-wf-dark leading-relaxed">
              Our team can help point you in the right direction for financial advice
              and answer general questions about paying for care.
            </p>
            <p className="mt-3 text-sm font-semibold text-wf-dark">
              Telephone:{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a>
            </p>
            <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm (excluding bank holidays)</p>
          </div>
        </div>

        {/* Related links */}
        <div className="max-w-3xl mt-8">
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
            <ul className="mt-4 space-y-3">
              {relatedPages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
