import { FileText, ExternalLink } from 'lucide-react';

export default function PayingForCareHomePage() {
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
          <span>Paying for a care home</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Paying for a care home
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Find out how care home costs work, including self-funding, top-up payments, and deferred payment agreements.
        </p>

        {/* If you pay for your own care home */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">If you pay for your own care home</h2>
          <p className="text-gray-700 mb-4">
            If your savings and assets are above £23,250, you will usually pay your own care home costs. This is called self-funding.
          </p>
          <p className="text-gray-700">
            Even if you are a self-funder, you still have the right to ask the council for a care needs assessment. You can also ask us for information and advice about choosing a care home.
          </p>
        </section>

        {/* What the council pays */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What the council pays</h2>
          <p className="text-gray-700">
            If your savings and assets are below £23,250, the council will usually contribute towards the cost of your care home. You may still need to pay a weekly contribution from your income. This is worked out through a financial assessment.
          </p>
        </section>

        {/* Top-up payments */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Top-up payments</h2>
          <p className="text-gray-700 mb-6">
            If you choose a care home that costs more than the council's agreed rate, someone will need to pay the difference. This is called a top-up payment.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Who pays the top-up?</h3>
          <p className="text-gray-700 mb-4">
            The top-up is usually paid by a family member, friend, or other third party directly to the care home. You can only pay the top-up yourself in limited circumstances, including:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Where a 12-week property disregard applies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Where you have entered into a deferred payment agreement with the council</span>
            </li>
          </ul>

          {/* Important callout */}
          <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-6">
            <p className="text-gray-900 font-bold mb-2">Important</p>
            <p className="text-gray-900">
              Top-up arrangements must be affordable for as long as you are in the care home. If the top-up can no longer be paid, it may be necessary to move to a home that accepts the council's standard rate. Please make sure the arrangement is sustainable before agreeing to it.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Cost increases</h3>
          <p className="text-gray-700">
            Care home fees usually increase each year. You or the person paying the top-up will be responsible for any increase to the top-up amount. The care home must give at least four weeks' written notice of any change, and increases can only take effect on the anniversary of the placement.
          </p>
        </section>

        {/* Deferred payment agreements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Deferred payment agreements</h2>
          <p className="text-gray-700 mb-6">
            If you own your home and are moving into permanent residential care, a deferred payment agreement may allow you to delay paying some of the cost. The council pays the care home on your behalf and places a legal charge against your property. The deferred amount is repaid later, usually when the property is sold or from your estate.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Who is eligible?</h3>
          <p className="text-gray-700 mb-6">
            Deferred payment agreements are generally available to people whose non-property assets (savings, investments and other capital excluding the value of the home) are below £23,250.
          </p>

          {/* Get advice first callout */}
          <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-6">
            <p className="text-gray-900 font-bold mb-2">Get advice first</p>
            <p className="text-gray-900">
              A deferred payment agreement is a significant financial decision. You should get independent legal and financial advice before agreeing to one. The council can provide information, but we cannot give you personal financial advice.
            </p>
          </div>
        </section>

        {/* Supporting downloads */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Supporting downloads</h2>
          <div className="space-y-3">
            <a 
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <FileText size={18} />
              <span>Deferred Payment Scheme factsheet (PDF)</span>
            </a>
            <a 
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <FileText size={18} />
              <span>Residential Care Charging Policy (PDF)</span>
            </a>
          </div>
        </section>

        {/* Further information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Further information</h2>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <ExternalLink size={18} className="text-[#bf3688] mt-1 flex-shrink-0" />
              <a 
                href="https://www.ageuk.org.uk/information-advice/care/paying-for-care/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#bf3688] hover:underline"
              >
                Age UK – paying for care
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <ExternalLink size={18} className="text-[#bf3688] mt-1 flex-shrink-0" />
              <a 
                href="https://www.nhs.uk/conditions/social-care-and-support-guide/care-services-equipment-and-care-homes/choosing-and-moving-into-a-care-home/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#bf3688] hover:underline"
              >
                NHS – choosing and moving into a care home
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <ExternalLink size={18} className="text-[#bf3688] mt-1 flex-shrink-0" />
              <a 
                href="https://www.moneyhelper.org.uk/en/family-and-care/long-term-care/deferred-payment-agreements" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#bf3688] hover:underline"
              >
                MoneyHelper – deferred payment agreements
              </a>
            </li>
          </ul>
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
              <a href="#/adult-social-care/paying-for-care/get-financial-advice" className="text-[#bf3688] hover:underline">
                Get financial advice
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/care-homes-and-supported-living" className="text-[#bf3688] hover:underline">
                Care homes and supported living
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
