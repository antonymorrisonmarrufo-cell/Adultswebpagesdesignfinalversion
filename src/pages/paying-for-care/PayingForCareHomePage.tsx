import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How care costs are worked out", to: "/paying-for-care/how-care-costs-worked-out" },
  { title: "Deferred payment agreements", to: "/paying-for-care/deferred-payment-agreements" },
  { title: "Financial assessment", to: "/paying-for-care/financial-assessment" },
  { title: "Get financial advice", to: "/paying-for-care/get-financial-advice" },
];

export default function PayingForCareHomePage() {
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
            <li><span className="font-medium text-wf-dark">Paying for a care home</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Paying for a care home</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Moving into a care home is a big decision and understanding how costs work
            is important. How you pay depends on your financial situation.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="max-w-3xl space-y-8">
          {/* Self-funding */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Self-funding your care home place</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If your capital (including savings, investments and in some cases your
              property) is above &#163;23,250, you will be expected to pay for your care
              home place yourself. This is called self-funding.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              As a self-funder, you can choose any care home you wish, and you negotiate
              the fees directly with the home. Even if you are self-funding, the council
              can still help you find a suitable care home and give you information and
              advice. You also have the right to ask for a care needs assessment.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If your savings reduce to below &#163;23,250 while you are in a care home,
              contact the council straight away. You may then be eligible for council
              funding.
            </p>
          </section>

          {/* Council-funded */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Council-funded care home places</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If your capital is below &#163;23,250 and your income is not enough to cover
              the full cost, the council may help pay for your care home. You will still
              need to contribute from your income and any capital above &#163;14,250.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The council will offer you a choice of care homes that can meet your
              assessed needs at the rate we would normally pay. You have the right to
              choose a different home, but if the fees are higher than the council's
              usual rate, a top-up fee will need to be paid (see below).
            </p>
          </section>

          {/* 12-week property disregard */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">12-week property disregard</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              When you first move into a care home on a permanent basis, the value of
              your home is not counted for the first 12 weeks. This is known as the
              12-week property disregard.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              During this period, the council will help fund your care as if your
              property did not exist. This gives you time to make decisions about your
              home without the pressure of needing to sell it immediately.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              After 12 weeks, the value of your property will usually be taken into
              account. However, your home will not be counted if:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Your partner or spouse still lives there</li>
              <li>A close relative aged 60 or over lives there</li>
              <li>A dependent child under 18 lives there</li>
              <li>A relative who is incapacitated lives there</li>
            </ul>
          </section>

          {/* Top-up fees */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Top-up fees</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you choose a care home that costs more than the amount the council
              would normally pay, someone will need to pay the difference. This is
              called a top-up fee (or third-party top-up).
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              A top-up can be paid by:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>A family member, friend or other third party</li>
              <li>You, from certain income sources (in limited circumstances)</li>
              <li>A charity or other organisation</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Before agreeing to a top-up, the person paying must sign a written
              agreement with the council. It is important to make sure the top-up is
              affordable in the long term. If the top-up payments stop, you may need
              to move to a different care home.
            </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-l-4 border-wf-green bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#bf3688]">Need advice about care home costs?</h2>
            <p className="mt-2 text-wf-dark leading-relaxed">
              Understanding care home funding can be complicated. Our team can help
              explain your options and guide you through the process.
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
