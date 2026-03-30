export default function DirectPaymentsPersonalBudgetsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/paying-for-care" className="hover:underline">Paying for your care</a>
          <span className="mx-1">&gt;</span>
          <span>Direct payments and personal budgets</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Direct payments and personal budgets
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you are eligible for care and support, you will receive a personal budget. You can choose how this is managed, including receiving it as a direct payment so you can arrange your own support.
        </p>

        {/* What is a personal budget? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What is a personal budget?</h2>
          <p className="text-gray-700">
            A personal budget is the amount of money needed to meet the cost of your eligible care and support needs. It includes any amount the council pays and any amount you contribute yourself. Everyone whose eligible needs are met by the council receives a personal budget as part of their care and support plan.
          </p>
        </section>

        {/* How a personal budget can be managed */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How a personal budget can be managed</h2>
          <p className="text-gray-700 mb-4">
            There are three main ways your personal budget can be used:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">As a direct payment</strong>
                <span className="text-gray-700"> – the money is paid to you (usually onto a prepaid card) so you can arrange and pay for your own support.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">As a council-managed account</strong>
                <span className="text-gray-700"> – the council holds the budget and arranges support on your behalf, in line with your wishes.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">As a third-party managed account</strong>
                <span className="text-gray-700"> – another organisation holds the budget and arranges support on your behalf.</span>
              </div>
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can also choose a mix of these options. For example, you might take a direct payment for some of your support and ask the council to arrange the rest.
          </p>
        </section>

        {/* What is a direct payment? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What is a direct payment?</h2>
          <p className="text-gray-700 mb-4">
            A direct payment gives you the money to arrange your own care and support. Some people use direct payments to employ a personal assistant, hire a care agency of their choice, or pay for activities and services that help them stay independent.
          </p>
          <p className="text-gray-700">
            Direct payments can give you more choice and flexibility. You decide who provides your support and when.
          </p>
        </section>

        {/* Do I have to pay anything myself? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Do I have to pay anything myself?</h2>
          <p className="text-gray-700">
            If your financial assessment shows that you need to contribute towards the cost of your care, the council will usually subtract your contribution from your personal budget before paying the direct payment to you. This means you receive the council's share of the budget, not the full amount.
          </p>
        </section>

        {/* What can I spend it on? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What can I spend it on?</h2>
          <p className="text-gray-700">
            Your personal budget must be spent on meeting the outcomes agreed in your care and support plan. It cannot be used for anything unrelated to your eligible care needs. You will need to keep records of how the money is spent.
          </p>
        </section>

        {/* What if I cannot manage it myself? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What if I cannot manage it myself?</h2>
          <p className="text-gray-700 mb-4">
            You do not need to manage a direct payment on your own. A family member, friend, or nominated person can manage it for you. If you lack the capacity to consent to direct payments, an authorised person can request and manage them on your behalf.
          </p>
          <p className="text-gray-700">
            The Direct Payment Support Service at Waltham Forest Citizens Advice Bureau offers free help and advice for people using direct payments.
          </p>
        </section>

        {/* What if I do not want a direct payment? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What if I do not want a direct payment?</h2>
          <p className="text-gray-700">
            Direct payments are optional. If you prefer, the council can arrange your care and support directly, or through a managed account. Whatever you choose will be set out in your care and support plan.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/paying-for-care/how-care-costs-are-worked-out" className="text-[#bf3688] hover:underline">
                How care costs are worked out
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/financial-assessment" className="text-[#bf3688] hover:underline">
                Financial assessment
              </a>
            </li>
            <li>
              <a href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/new-care-and-support" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] hover:underline">
                New to care and support
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6">
          <p>Last updated: 28 March 2026</p>
          <p>Next review: 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
