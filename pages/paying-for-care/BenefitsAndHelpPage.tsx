export default function BenefitsAndHelpPage() {
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
          <span>Benefits and help with costs</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Benefits and help with costs
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          You may be entitled to benefits or other financial support that can help with disability-related costs or caring responsibilities. Many people miss out because they do not know what is available.
        </p>

        {/* You may be missing out */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">You may be missing out</h2>
          <p className="text-gray-700 mb-4">
            Many people who could claim a benefit do not realise they are entitled. Some benefits are paid regardless of how much you earn or have in savings. Others are means-tested, but the rules change regularly, so it is worth checking even if you have been refused in the past.
          </p>
          <p className="text-gray-700">
            Claiming the right benefits can also reduce what you are asked to pay towards your care costs. During a financial assessment, we check whether you are receiving everything you are entitled to.
          </p>
        </section>

        {/* Benefits that may help you */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-6">Benefits that may help you</h2>
          
          {/* If you have a disability or long-term condition */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">If you have a disability or long-term condition</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Personal Independence Payment (PIP)</strong>
                  <span className="text-gray-700"> – helps with extra costs if you have a long-term health condition or disability and are under State Pension age.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Attendance Allowance</strong>
                  <span className="text-gray-700"> – for people over State Pension age who need help with personal care or supervision because of a disability or illness. You do not need to have someone caring for you to claim it.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* If you are a carer */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">If you are a carer</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Carer's Allowance</strong>
                  <span className="text-gray-700"> – if you spend at least 35 hours a week caring for someone who receives certain disability benefits.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Carer's Credit</strong>
                  <span className="text-gray-700"> – protects your State Pension if you are caring for someone but not earning enough to pay National Insurance.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Other support */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Other support</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <span>Council Tax Reduction – you may be able to reduce your council tax bill.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <span>Housing Benefit or help with rent through Universal Credit.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <span>Pension Credit – if you are over State Pension age and on a low income.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D61F69] mt-1">•</span>
                <span>Winter Fuel Payment – a yearly payment to help with heating costs.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-l-4 border-[#D61F69] p-6 mb-8">
          <p className="text-gray-900">
            <strong>Attendance Allowance is one of the most under-claimed benefits.</strong> You do not need someone caring for you to be eligible. If you are over State Pension age and need help with things like washing, dressing, or getting around safely, it is worth checking whether you qualify.
          </p>
        </div>

        {/* Where to get help checking your benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Where to get help checking your benefits</h2>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <a href="https://www.gov.uk/browse/benefits" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline font-bold">
                  GOV.UK
                </a>
                <span className="text-gray-700"> – benefit information and online applications</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <span className="text-gray-700 font-bold">Citizens Advice</span>
                <span className="text-gray-700"> – free, confidential advice on benefits and money</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <span className="text-gray-700 font-bold">Age UK Waltham Forest</span>
                <span className="text-gray-700"> – advice and support for older residents</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/paying-for-care/financial-assessment" className="text-[#D61F69] hover:underline">
                Financial assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/how-care-costs-are-worked-out" className="text-[#D61F69] hover:underline">
                How care costs are worked out
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
          <p>Last updated: 28 March 2026</p>
          <p>Next review: 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
