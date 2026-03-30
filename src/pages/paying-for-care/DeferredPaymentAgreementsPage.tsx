import { ArrowRight, Phone, AlertCircle } from 'lucide-react';

export default function DeferredPaymentAgreementsPage() {
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
          <span>Deferred payment agreements</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Deferred payment agreements
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you own your home and need to move permanently into a care home, a deferred payment agreement may help you pay for your care without having to sell your home straight away.
        </p>

        {/* What a deferred payment agreement is */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What a deferred payment agreement is</h2>
          <p className="text-gray-700 mb-4">
            A deferred payment agreement is an arrangement between you and the council. The council pays part of your care home fees on your behalf, and in return places a legal charge against your property (similar to a mortgage). The amount the council pays builds up as a debt, which is repaid later — usually when the property is sold, or from your estate after your death.
          </p>
          <p className="text-gray-700">
            This means you do not have to sell your home during your lifetime to pay for care. You can also choose to repay the debt from another source at any time.
          </p>
        </section>

        {/* Who is eligible */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who is eligible</h2>
          <p className="text-gray-700 mb-4">
            Under the Care Act 2014, the council has a duty to offer a deferred payment agreement to everyone who meets the eligibility criteria. To be eligible, you must:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Have been assessed by Adult Social Care as needing to move permanently into a care home</li>
            <li>Have non-property capital (savings, investments, and other assets excluding the value of your home) of less than £23,250</li>
            <li>Own or have part legal ownership of a property that would be included in your financial assessment</li>
            <li>Have agreement from all parties with a legal interest in the property to enter the scheme</li>
            <li>Ensure the property is registered with the Land Registry (if it is not, you must arrange this at your own expense)</li>
            <li>Have no other beneficial interests on the property that would prevent a legal charge being placed on it (for example, an outstanding mortgage or equity release)</li>
          </ul>
        </section>

        {/* The 12-week property disregard */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">The 12-week property disregard</h2>
          <p className="text-gray-700">
            When you first move into permanent residential care, the value of your property is not counted in your financial assessment for the first 12 weeks. During this period, you will only need to pay a contribution based on your income and non-property capital. The deferred payment agreement starts after this 12-week period ends.
          </p>
        </section>

        {/* How much you can defer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How much you can defer</h2>
          <p className="text-gray-700 mb-4">
            The amount you can defer is based on the value of your property. In Waltham Forest, the council will defer up to 90% of the property value, minus an allowance of £14,250 (the lower capital limit).
          </p>
          <p className="text-gray-700">
            A professional valuation of your property will be needed. The council can arrange this, or you can arrange your own.
          </p>
        </section>

        {/* What you pay from your income */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What you pay from your income</h2>
          <p className="text-gray-700 mb-4">
            Even with a deferred payment agreement, you will still pay a contribution from your income each week towards the cost of your care. This is calculated through your financial assessment in the same way as for any other care home resident.
          </p>
          <p className="text-gray-700">
            Under a deferred payment agreement, you are allowed to keep a higher amount of your income each week to help with the upkeep of your property. The exact amount you can retain will be confirmed as part of your agreement.
          </p>
        </section>

        {/* Interest */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Interest</h2>
          <p className="text-gray-700 mb-4">
            The council charges interest on the deferred amount. The interest rate is set by the government and is based on the gilt rate published in the Office for Budget Responsibility's Economic and Fiscal Outlook. The rate changes on 1 January and 1 July each year.
          </p>
          <p className="text-gray-700">
            Interest is charged from the date your deferred payment agreement starts and is compounded daily. The current interest rate will be confirmed when you apply. You will receive regular statements (at least every six months) showing how the charge is building up and what the total outstanding amount is. You can request a statement at any time.
          </p>
        </section>

        {/* Set-up costs */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Set-up costs</h2>
          <p className="text-gray-700 mb-4">
            There are costs involved in setting up a deferred payment agreement. These may include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
            <li>Property valuation</li>
            <li>Drawing up a legal agreement</li>
            <li>Placing a legal charge on your property</li>
            <li>Land Registry searches and other legal costs</li>
          </ul>
          <p className="text-gray-700">
            You can pay these costs upfront, or they can be added to the deferred amount. If they are added to the deferred amount, they will be subject to interest.
          </p>
        </section>

        {/* Rental income */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Rental income</h2>
          <p className="text-gray-700">
            If you decide to rent out your property while you are in the care home, the rental income will be included in your financial assessment. This will increase the contribution you pay from your income each week, which reduces the amount being deferred and the eventual debt.
          </p>
        </section>

        {/* Top-up payments */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Top-up payments</h2>
          <p className="text-gray-700">
            If your care home costs more than the council's agreed rate, the difference (the top-up) can sometimes be included within the deferred payment agreement. This means the top-up amount is added to the deferred debt rather than needing to be paid separately by a third party. Discuss this with the Financial Assessment team when you apply.
          </p>
        </section>

        {/* How the agreement ends */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How the agreement ends</h2>
          <p className="text-gray-700 mb-4">
            The deferred payment agreement ends when:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>You sell your property and repay the debt</li>
            <li>You choose to repay the debt from another source</li>
            <li>You pass away, in which case the debt must be repaid from your estate within 90 days</li>
          </ul>
          <p className="text-gray-700 mt-4">
            The council cannot cancel the agreement without your consent.
          </p>
        </section>

        {/* What happens if your debt reaches the limit */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens if your debt reaches the limit</h2>
          <p className="text-gray-700">
            If the total deferred amount approaches the maximum (90% of the property value minus £14,250), the council will contact you to discuss your options. This might include selling the property, finding another way to pay, or reviewing your financial situation.
          </p>
        </section>

        {/* Your responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Your responsibilities</h2>
          <p className="text-gray-700 mb-4">
            If you enter into a deferred payment agreement, you must:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Maintain the property in a reasonable condition</li>
            <li>Keep the property insured (buildings insurance)</li>
            <li>Inform the council of any changes that affect the property or your financial situation</li>
            <li>Not take out any additional loans or charges against the property without the council's agreement</li>
          </ul>
        </section>

        {/* Refusing or appealing a decision */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Refusing or appealing a decision</h2>
          <p className="text-gray-700">
            If the council refuses your application for a deferred payment, you will be told the reason in writing. You have the right to appeal the decision. Contact the Financial Assessment team to discuss your options.
          </p>
        </section>

        {/* Get independent advice first - Callout box */}
        <section className="mb-8">
          <div className="bg-[#FFF4E6] border-2 border-[#003078] bg-[#d7f8ff] p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-[#bf3688] mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Get independent advice first</h3>
                <p className="text-gray-700 mb-4">
                  A deferred payment agreement is a significant financial and legal decision. You should get independent financial and legal advice before entering into one. The council can provide information about how the scheme works, but we cannot advise you on whether it is the right option for your personal circumstances.
                </p>
                <p className="text-gray-700">
                  See our page on <a href="#/adult-social-care/paying-for-care/get-financial-advice" className="text-[#bf3688] underline hover:no-underline">getting financial advice</a> for information about independent advisers, including the Society of Later Life Advisers (SOLLA) which specialises in care funding advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to apply</h2>
          <p className="text-gray-700 mb-4">
            To apply for a deferred payment agreement, or to find out more, contact the Financial Assessment team.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6">
            <div className="flex items-center gap-3 text-gray-900 mb-2">
              <Phone size={20} className="text-[#bf3688]" />
              <span className="font-bold">Phone: 020 8496 3130</span>
            </div>
            <p className="text-gray-700 text-sm mb-3 ml-8">Monday to Friday, 9am to 5pm</p>
            <p className="text-gray-700 text-sm ml-8">
              <strong>Email:</strong> residentialfau@walthamforest.gov.uk
            </p>
          </div>
        </section>

        {/* Further information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Further information</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.moneyhelper.org.uk/en/care/care-homes/deferred-payment-agreements-for-long-term-care" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf3688] hover:underline"
              >
                MoneyHelper — deferred payment agreements for long-term care
              </a>
            </li>
            <li>
              <a 
                href="https://www.ageuk.org.uk/information-advice/care/paying-for-care/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf3688] hover:underline"
              >
                Age UK — paying for care
              </a>
            </li>
            <li>
              <a 
                href="https://www.gov.uk/government/publications/care-act-statutory-guidance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf3688] hover:underline"
              >
                GOV.UK — Care Act statutory guidance on deferred payments
              </a>
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/paying-for-care/paying-for-care-home" className="text-[#bf3688] hover:underline">
                Paying for a care home
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/how-care-costs-worked-out" className="text-[#bf3688] hover:underline">
                How care costs are worked out
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/get-financial-advice" className="text-[#bf3688] hover:underline">
                Get financial advice
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/financial-assessment" className="text-[#bf3688] hover:underline">
                Financial assessment
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6">
          <p>Last updated: 29 March 2026</p>
          <p>Next review: 29 March 2027</p>
        </div>

      </div>
    </div>
  );
}
