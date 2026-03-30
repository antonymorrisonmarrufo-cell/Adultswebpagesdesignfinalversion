import { ArrowRight, Phone } from 'lucide-react';

export default function PayingForCareHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Paying for your care</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Paying for your care
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          Find out how care costs work, what you might need to pay, and where to get financial help and advice.
        </p>

        {/* How the process works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">How the process works</h2>
          
          <p className="text-gray-700 mb-6">
            If you are assessed as needing care and support from the council, we may carry out a financial assessment to work out whether you need to pay towards the cost. This is how it works:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We assess your care needs</h3>
                <p className="text-gray-700">A care needs assessment looks at the help you need and whether you have eligible care and support needs. This is always free.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We work out the cost of your support</h3>
                <p className="text-gray-700">If you qualify, we work out how much it will cost to meet your eligible needs.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We assess your finances</h3>
                <p className="text-gray-700">We ask about your income, spending, savings and any other assets so we can work out what you can afford to pay.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We tell you the outcome</h3>
                <p className="text-gray-700">We explain whether you need to pay all, some or none of the cost, and what happens next.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We arrange payment</h3>
                <p className="text-gray-700">If charges apply, we explain how to pay and when you will receive your first invoice.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-l-4 border-[#D61F69] p-6">
            <p className="text-gray-900">
              <strong>A care needs assessment is always free.</strong> You do not need to pay anything to find out whether you are eligible for support.
            </p>
          </div>
        </section>

        {/* Key things to know */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">Key things to know</h2>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Some people pay the full cost of their care, some pay a contribution, and some pay nothing. It depends on your individual financial circumstances.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>If you have savings and assets over £23,250, you will usually pay your own care costs. This is called self-funding.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>If you own your home and need to move into a care home, a deferred payment agreement may help you avoid selling your home straight away.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>You may be entitled to benefits you are not currently claiming. These can reduce or remove your contribution towards care costs.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>If you are already receiving care, you can pay your adult social care bill online.</span>
            </li>
          </ul>
        </section>

        {/* In this section - Card links */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-8">In this section</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a
              href="#/adult-social-care/paying-for-care/how-care-costs-are-worked-out"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">How care costs are worked out</h3>
              <p className="text-gray-700 text-sm pr-12">What you might need to pay, when charges start, the self-funding threshold, and what happens after your financial assessment.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#/adult-social-care/paying-for-care/financial-assessment"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Financial assessment</h3>
              <p className="text-gray-700 text-sm pr-12">What a financial assessment is, what information we need from you, and how to ask us a question about your assessment.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#/adult-social-care/paying-for-care/benefits-and-help-with-costs"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Benefits and help with costs</h3>
              <p className="text-gray-700 text-sm pr-12">Check if you could be claiming benefits that help with disability-related costs or caring responsibilities.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="#/adult-social-care/paying-for-care/direct-payments-and-personal-budgets"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Direct payments and personal budgets</h3>
              <p className="text-gray-700 text-sm pr-12">Find out how personal budgets work and how you can have more choice and control over how your care is arranged.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 5 */}
            <a
              href="#/adult-social-care/paying-for-care/paying-for-a-care-home"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Paying for a care home</h3>
              <p className="text-gray-700 text-sm pr-12">Self-funding, top-up payments, and deferred payment agreements for residential care.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 6 */}
            <a
              href="#/adult-social-care/paying-for-care/get-financial-advice"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Get financial advice</h3>
              <p className="text-gray-700 text-sm pr-12">Where to get impartial advice before making big financial decisions about paying for care.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">Quick actions</h2>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support/paying-your-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
            >
              Pay your adult social care bill online
              <ArrowRight size={18} />
            </a>
            <a
              href="https://portal.walthamforest.gov.uk/AchieveForms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Ask about a financial assessment
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Need help */}
        <section className="mb-12 bg-gray-100 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Need help?</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about paying for care, or if you need help understanding your options, contact the Adult Social Care team.
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={20} className="text-[#D61F69]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm ml-8">Monday to Friday, 9am to 5pm</p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/new-care-and-support" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline">
                New to care and support
              </a>
            </li>
            <li>
              <a href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/who-qualifies-social-care-support" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline">
                Who qualifies for social care support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/live-independently-at-home" className="text-[#D61F69] hover:underline">
                Support at home
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