import { ArrowRight, Phone, FileText } from 'lucide-react';

export default function ChargingFinancialPoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/our-policies" className="hover:underline">Our policies</a>
          <span className="mx-1">&gt;</span>
          <span>Charging and financial policies</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Charging and financial policies
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          The council follows government rules and local policies when working out how much you need to pay towards your care. These policies explain how contributions are calculated and what financial support may be available.
        </p>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 mb-4">
            Under the Care Act 2014, local councils must follow national rules when charging for adult social care. Waltham Forest has adopted local policies that set out in detail how we apply these rules.
          </p>
          <p className="text-gray-700">
            The policies on this page are technical documents intended for financial assessment staff, but you may find them useful if you want to understand how your contribution has been worked out.
          </p>
        </section>

        {/* Fairer Contributions Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Fairer Contributions Policy</h2>
          <p className="text-gray-700 mb-4">
            This policy explains how we work out contributions for care services provided in your own home (also known as domiciliary care or care at home). It covers:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
            <li>What income and savings are included in the financial assessment</li>
            <li>What allowances and disregards apply</li>
            <li>The minimum income guarantee</li>
            <li>How disability-related expenditure is taken into account</li>
            <li>The maximum weekly charge</li>
          </ul>
          <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Fairer Contributions Policy 2025/26</p>
                <p className="text-sm text-gray-700 mb-2">PDF document</p>
                <p className="text-sm text-gray-600 italic">
                  Document available on request. Contact the Financial Assessment team for a copy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Care Charging Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Residential Care Charging Policy</h2>
          <p className="text-gray-700 mb-4">
            This policy explains how we work out contributions for care homes (residential care and nursing care). It covers:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
            <li>How your capital and savings are assessed</li>
            <li>What income counts towards your contribution</li>
            <li>The personal expenses allowance</li>
            <li>Treatment of your property</li>
            <li>The 12-week property disregard</li>
            <li>Deferred payment agreements</li>
          </ul>
          <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Residential Care Charging Policy</p>
                <p className="text-sm text-gray-700 mb-2">PDF document</p>
                <p className="text-sm text-gray-600 italic">
                  Document available on request. Contact the Financial Assessment team for a copy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deferred Payment Agreements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Deferred payment agreements</h2>
          <p className="text-gray-700 mb-4">
            If you own your home and need to move permanently into a care home, a deferred payment agreement may help you pay for your care without having to sell your home straight away.
          </p>
          <p className="text-gray-700 mb-6">
            A deferred payment agreement allows you to defer (delay) paying some of your care home costs until a later date. The council pays part of your fees on your behalf, and in return places a legal charge against your property. The debt is usually repaid when the property is sold.
          </p>
          <a
            href="#/adult-social-care/paying-for-care/deferred-payment-agreements"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Read about deferred payment agreements
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Capital limits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Capital limits and thresholds</h2>
          <p className="text-gray-700 mb-4">
            The government sets financial thresholds that determine whether you need to pay towards your care and how much you pay. These limits are reviewed regularly and may change each year.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 mb-4">
            <h3 className="font-bold text-gray-900 mb-3">Current capital limits (2025/26)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Upper capital limit:</strong> £23,250 — if you have capital above this amount, you will usually pay the full cost of your care
              </li>
              <li>
                <strong>Lower capital limit:</strong> £14,250 — if you have capital below this amount, you will not have to pay anything from your savings towards your care
              </li>
              <li>
                <strong>Tariff income:</strong> For every £250 (or part of £250) you have between the lower and upper limits, £1 per week is added to your assessed income
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">
              Note: These figures apply to people receiving care in a care home or in their own home. Different rules apply to people receiving NHS Continuing Healthcare.
            </p>
          </div>
        </section>

        {/* What counts as capital */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What counts as capital</h2>
          <p className="text-gray-700 mb-4">
            Capital includes savings, investments, premium bonds, property you own (in some circumstances), and other assets. Some types of capital are not counted, known as disregards.
          </p>
          <p className="text-gray-700 mb-4">
            Your financial assessment will explain what has been included and why. If you disagree with how your capital has been assessed, you can ask for the decision to be reviewed.
          </p>
        </section>

        {/* Disability-related expenditure */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Disability-related expenditure</h2>
          <p className="text-gray-700 mb-4">
            If you are receiving care at home, you can ask for certain disability-related costs to be taken into account in your financial assessment. This could reduce the amount you have to pay towards your care.
          </p>
          <p className="text-gray-700 mb-6">
            Examples of disability-related expenditure include the cost of specialist equipment, additional heating costs, or paying for help that is not provided by the council.
          </p>
          <a href="#/adult-social-care/paying-for-care/how-care-costs-worked-out" className="text-[#D61F69] hover:underline">
            Read more about disability-related expenditure
          </a>
        </section>

        {/* Get help understanding your financial assessment */}
        <section className="mb-12 bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Get help understanding your financial assessment</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about how your contribution has been worked out, or if you think there has been a mistake, contact the Financial Assessment team.
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={20} className="text-[#D61F69]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm mb-3 ml-8">Monday to Friday, 9am to 5pm</p>
          <p className="text-gray-700 text-sm ml-8">
            <strong>Email:</strong> residentialfau@walthamforest.gov.uk
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#D61F69] hover:underline">
                Paying for your care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/how-care-costs-worked-out" className="text-[#D61F69] hover:underline">
                How care costs are worked out
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/paying-for-care-home" className="text-[#D61F69] hover:underline">
                Paying for a care home
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/deferred-payment-agreements" className="text-[#D61F69] hover:underline">
                Deferred payment agreements
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/get-financial-advice" className="text-[#D61F69] hover:underline">
                Get financial advice
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
