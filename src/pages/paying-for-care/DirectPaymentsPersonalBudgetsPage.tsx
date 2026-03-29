import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How care costs are worked out", to: "/paying-for-care/how-care-costs-worked-out" },
  { title: "Financial assessment", to: "/paying-for-care/financial-assessment" },
  { title: "Your care and support plan", to: "/how-adult-social-care-works/your-care-and-support-plan" },
  { title: "Get financial advice", to: "/paying-for-care/get-financial-advice" },
];

export default function DirectPaymentsPersonalBudgetsPage() {
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
            <li><span className="font-medium text-wf-dark">Direct payments and personal budgets</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Direct payments and personal budgets</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            A personal budget gives you more choice and control over how your care and
            support needs are met. A direct payment lets you manage that budget yourself.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="max-w-3xl space-y-8">
          {/* What is a personal budget */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">What is a personal budget?</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you are eligible for support from the council, you will be given a
              personal budget. This is the amount of money the council allocates to meet
              your assessed care and support needs.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your personal budget will be set out in your care and support plan. There
              are three ways it can be managed:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li><strong>Direct payment:</strong> the money is paid to you so you can arrange your own care</li>
              <li><strong>Managed budget:</strong> the council arranges and pays for services on your behalf</li>
              <li><strong>A combination:</strong> some of your budget is paid directly to you and some is managed by the council</li>
            </ul>
          </section>

          {/* What is a direct payment */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">What is a direct payment?</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              A direct payment is money from the council paid into a dedicated account
              so you can buy your own care and support. It gives you the freedom to
              choose who provides your care, when it happens and how.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              With a direct payment you can:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Employ a personal assistant directly</li>
              <li>Buy care from an agency of your choice</li>
              <li>Pay for activities, equipment or services that meet your care needs</li>
              <li>Combine your direct payment with your own money to buy more or different support</li>
            </ul>
          </section>

          {/* How direct payments work */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">How direct payments work</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you choose a direct payment:
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>We work out the amount of your personal budget based on your assessed needs</li>
              <li>Your assessed contribution (if any) is deducted, and the remainder is paid to you</li>
              <li>Payments are usually made every four weeks into a separate bank account or prepaid card</li>
              <li>You use the money to arrange and pay for your own care and support</li>
              <li>You keep records of how you spend the money</li>
              <li>We review your direct payment regularly to make sure it is meeting your needs</li>
            </ol>
          </section>

          {/* Managing your budget */}
          <section className="rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688]">Managing your budget</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you receive a direct payment, you are responsible for managing the money
              properly. This means:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Keeping the money in a separate account used only for your care</li>
              <li>Keeping receipts and records of what you spend</li>
              <li>Only spending the money on things that meet your assessed care needs</li>
              <li>Returning any money you do not use</li>
              <li>If employing a personal assistant, meeting your legal obligations as an employer (including tax, national insurance and holiday pay)</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You do not have to manage a direct payment on your own. A family member,
              friend or a direct payment support service can help you. Waltham Forest
              Council can put you in touch with local support organisations.
            </p>
          </section>

          {/* Contact */}
          <div className="rounded-md border-l-4 border-wf-green bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#bf3688]">Find out more about direct payments</h2>
            <p className="mt-2 text-wf-dark leading-relaxed">
              If you would like to discuss whether a direct payment is right for you, or
              need help getting started, contact us.
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
