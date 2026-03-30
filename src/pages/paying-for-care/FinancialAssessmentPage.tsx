import { ArrowRight } from 'lucide-react';

export default function FinancialAssessmentPage() {
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
          <span>Financial assessment</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Financial assessment
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          A financial assessment helps us work out whether you need to pay towards your care and support, and if so, how much.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <a
            href="https://www.walthamforest.gov.uk/adult-social-care-self-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Ask about a financial assessment
            <ArrowRight size={18} />
          </a>
        </div>

        {/* What a financial assessment is */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What a financial assessment is</h2>
          <p className="text-gray-700 mb-4">
            A financial assessment looks at your income, savings, and assets so we can work out what contribution, if any, you need to make towards the cost of your care. It is separate from your care needs assessment.
          </p>
          <p className="text-gray-700">
            Not everyone has to pay. The financial assessment is how we make sure that charges are fair and based on what you can afford.
          </p>
        </section>

        {/* What information we need from you */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What information we need from you</h2>
          <p className="text-gray-700 mb-4">
            Please have details of:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Income from benefits, pensions, wages or other sources</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Regular household and essential spending</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Savings and investments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Property or other assets</span>
            </li>
          </ul>
        </section>

        {/* What we do with this information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What we do with this information</h2>
          <p className="text-gray-700 mb-4">
            We use the information to:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Calculate what you can afford to pay</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Explain how your contribution has been worked out</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Check whether you may be entitled to benefits you are not currently claiming</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Tell you what to do if your finances change in the future</span>
            </li>
          </ul>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-8">
          <p className="text-gray-900">
            If we find that you are not claiming benefits you are entitled to, we will let the Department for Work and Pensions know so they can help you claim them. This could reduce what you need to pay towards your care.
          </p>
        </div>

        {/* What if I think my assessment is wrong? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What if I think my assessment is wrong?</h2>
          <p className="text-gray-700">
            If you think your financial assessment is incorrect, contact us as soon as possible and ask for it to be reviewed. The detailed rules are set out in the council's Fairer Contributions Policy.
          </p>
        </section>

        {/* What if I need help? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What if I need help?</h2>
          <p className="text-gray-700 mb-4">
            If you find it difficult to manage your finances, or if you need help understanding the assessment, you can ask a family member, friend or someone else you trust to support you. In some situations, another person can manage financial matters on your behalf.
          </p>
          <p className="text-gray-700">
            If you do not have anyone to help and you have difficulty being involved in the process, we can arrange an independent advocate.
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
              <a href="#/adult-social-care/paying-for-care/benefits-and-help-with-costs" className="text-[#bf3688] hover:underline">
                Benefits and help with costs
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/get-financial-advice" className="text-[#bf3688] hover:underline">
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
