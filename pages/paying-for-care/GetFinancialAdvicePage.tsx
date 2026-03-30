import { ExternalLink } from 'lucide-react';

export default function GetFinancialAdvicePage() {
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
          <span>Get financial advice</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Get financial advice
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Before making big decisions about paying for care, it is usually best to get impartial financial advice from a qualified professional.
        </p>

        {/* Why advice matters */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Why advice matters</h2>
          <p className="text-gray-700 mb-4">
            Planning for care costs can involve decisions about savings, pensions, property, insurance, and how your affairs would be managed if you could no longer manage them yourself. An independent financial adviser can help you understand your options and make sure you get the best outcome for your situation.
          </p>
          <p className="text-gray-700">
            The council can give you general information, but we cannot give you personal financial advice. An independent adviser will look at your specific circumstances and recommend what is best for you.
          </p>
        </section>

        {/* Finding an adviser */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Finding an adviser</h2>
          <p className="text-gray-700 mb-4">
            When choosing a financial adviser, check that they are authorised by the Financial Conduct Authority (FCA). For care-related advice, look for an adviser who specialises in later-life planning.
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2 items-start">
              <ExternalLink size={18} className="text-[#D61F69] mt-1 flex-shrink-0" />
              <div>
                <a 
                  href="https://register.fca.org.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D61F69] hover:underline font-bold"
                >
                  FCA Register
                </a>
                <span className="text-gray-700"> – check whether an adviser is authorised</span>
              </div>
            </li>
            <li className="flex gap-2 items-start">
              <ExternalLink size={18} className="text-[#D61F69] mt-1 flex-shrink-0" />
              <div>
                <a 
                  href="https://societyoflaterlifeadvisers.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D61F69] hover:underline font-bold"
                >
                  Society of Later Life Advisers (SOLLA)
                </a>
                <span className="text-gray-700"> – find an adviser who specialises in financial planning for older people</span>
              </div>
            </li>
            <li className="flex gap-2 items-start">
              <ExternalLink size={18} className="text-[#D61F69] mt-1 flex-shrink-0" />
              <div>
                <a 
                  href="https://www.moneyhelper.org.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D61F69] hover:underline font-bold"
                >
                  MoneyHelper
                </a>
                <span className="text-gray-700"> – free, impartial guidance on choosing a financial adviser</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Free advice and support */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Free advice and support</h2>
          <p className="text-gray-700 mb-4">
            If you need free advice about benefits, debt, or managing your money:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span><strong>Citizens Advice Waltham Forest</strong> – free, confidential advice on benefits, debt, and money</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span><strong>Age UK Waltham Forest</strong> – advice and support for older residents</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span><strong>MoneyHelper</strong> – help with debt, budgeting, and financial planning</span>
            </li>
          </ul>
        </section>

        {/* If you are worried about debt */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">If you are worried about debt</h2>
          <p className="text-gray-700 mb-4">
            Getting into debt is nothing to be ashamed of, and the sooner you get help, the easier it is to manage. If you are struggling to pay bills or keep up with payments, contact Citizens Advice or MoneyHelper for free, confidential support.
          </p>
          <p className="text-gray-700">
            Do not ignore the problem. Many organisations will work with you to find a solution.
          </p>
        </section>

        {/* Planning ahead */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Planning ahead</h2>
          <p className="text-gray-700 mb-4">
            Even if you do not need care now, it is worth thinking about:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Whether your savings and pension will support you in later life</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Whether you could afford to pay for care if you needed it</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Whether your finances and affairs would be properly looked after if you were no longer able to manage them yourself</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Whether you have a valid will</span>
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
              <a href="#/adult-social-care/paying-for-care/benefits-and-help-with-costs" className="text-[#D61F69] hover:underline">
                Benefits and help with costs
              </a>
            </li>
            <li>
              <a href="https://www.walthamforest.gov.uk/housing-and-homes/money-advice-benefits-debt-and-budgeting" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline">
                Money advice: benefits, debt and budgeting
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
