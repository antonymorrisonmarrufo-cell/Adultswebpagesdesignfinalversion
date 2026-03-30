import { ArrowRight, FileText } from 'lucide-react';

export default function HowCareCostsWorkedOutPage() {
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
          <span>How care costs are worked out</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          How care costs are worked out
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you receive care or support arranged by the council, you may need to pay all or part of the cost. How much you pay depends on your income, savings, and personal circumstances.
        </p>

        {/* How we work out what you pay */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How we work out what you pay</h2>
          <p className="text-gray-700">
            If you are assessed as having eligible care and support needs, we use your assessment to understand your needs and work out the cost of your care and support plan. We then carry out a financial assessment to work out your contribution. This is based on your individual financial circumstances.
          </p>
        </section>

        {/* When charges start */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">When charges start</h2>
          <p className="text-gray-700">
            Charges start from the date your services begin. However, they do not come into effect until your financial assessment has been completed. You will not receive an invoice until we have finished assessing your finances and told you the outcome.
          </p>
        </section>

        {/* What you might need to pay */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What you might need to pay</h2>
          <p className="text-gray-700 mb-4">
            There are three possible outcomes from a financial assessment:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">You pay nothing.</strong>
                <span className="text-gray-700"> If your income is below a protected minimum level, you will not be asked to contribute towards your care costs.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">You pay a contribution.</strong>
                <span className="text-gray-700"> If you have some income above the protected minimum, you may be asked to pay a weekly amount towards your care. The exact amount depends on your circumstances.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">You pay the full cost.</strong>
                <span className="text-gray-700"> If you have savings and assets over £23,250, you will usually be expected to pay the full cost of your care. This is called self-funding.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* What happens after your financial assessment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens after your financial assessment</h2>
          <p className="text-gray-700 mb-4">
            After your financial assessment, we will:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Calculate what you can afford to pay</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Explain clearly how your contribution has been worked out</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Tell you how to pay</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Explain what to do if your financial circumstances change</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You should usually receive your first invoice within seven weeks of the financial assessment visit. If that is not possible, we will write to you to explain why.
          </p>
        </section>

        {/* If you pay for your own care */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">If you pay for your own care</h2>
          <p className="text-gray-700 mb-4">
            If your savings and assets are over £23,250, you will usually pay the full cost of your care. This is often called self-funding.
          </p>
          <p className="text-gray-700 mb-4">
            Even if you are a self-funder, the council can still help you. You have the right to:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A care needs assessment, if you want one</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Information and advice about the types of care available</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Help finding suitable care providers</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You do not have to arrange everything on your own.
          </p>
        </section>

        {/* If you own your home */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">If you own your home</h2>
          <p className="text-gray-700 mb-4">
            If you own your home and are moving into permanent residential care, a deferred payment agreement may allow you to delay some of the cost instead of selling your home straight away. See our page on paying for a care home for more detail.
          </p>
          <p className="text-gray-700">
            You should get independent legal and financial advice before making a decision about a deferred payment.
          </p>
        </section>

        {/* Charging policies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Charging policies</h2>
          <p className="text-gray-700 mb-4">
            The detailed rules for how contributions are calculated are set out in the council's charging policies:
          </p>
          <div className="space-y-3">
            <a 
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <FileText size={18} />
              <span>Fairer Contributions Policy 2025/26 (PDF)</span>
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

        {/* CTA Button */}
        <div className="mb-12">
          <a
            href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support/paying-your-care-and-support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Pay your adult social care bill online
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/paying-for-care/financial-assessment" className="text-[#bf3688] hover:underline">
                Financial assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care/paying-for-a-care-home" className="text-[#bf3688] hover:underline">
                Paying for a care home
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
