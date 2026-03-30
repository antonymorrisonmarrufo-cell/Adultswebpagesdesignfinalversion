import { ArrowRight, Phone, FileText } from 'lucide-react';

export default function OurPoliciesHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Our policies</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Our policies
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Access adult social care policy documents, charging policies, safeguarding reports, market information, and privacy notices.
        </p>

        {/* Section: In this section */}
        <h2 className="text-2xl font-bold text-[#D61F69] mb-6">In this section</h2>

        {/* Topic cards container - white background for deeper level pages */}
        <div className="space-y-4 mb-12">
          
          {/* Charging and financial policies */}
          <a 
            href="#/adult-social-care/our-policies/charging-and-financial-policies"
            className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
          >
            <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">
              Charging and financial policies
            </h3>
            <p className="text-gray-700 text-sm pr-12">
              How we calculate what you pay towards your care, including our fairer contributions policy, residential care charging policy, and deferred payment scheme.
            </p>
            <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
              <ArrowRight className="text-white" size={20} />
            </div>
          </a>

          {/* Safeguarding policies and reports */}
          <a 
            href="#/adult-social-care/our-policies/safeguarding-policies-reports"
            className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
          >
            <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">
              Safeguarding policies and reports
            </h3>
            <p className="text-gray-700 text-sm pr-12">
              How we work with partners to protect adults at risk, including the Safeguarding Adults Board annual report and multi-agency procedures.
            </p>
            <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
              <ArrowRight className="text-white" size={20} />
            </div>
          </a>

          {/* Market sustainability and commissioning */}
          <a 
            href="#/adult-social-care/our-policies/market-sustainability-commissioning"
            className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
          >
            <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">
              Market sustainability and commissioning
            </h3>
            <p className="text-gray-700 text-sm pr-12">
              Our fair cost of care exercises, market sustainability plan, and market position statements for care providers.
            </p>
            <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
              <ArrowRight className="text-white" size={20} />
            </div>
          </a>

          {/* Privacy and data */}
          <a 
            href="#/adult-social-care/our-policies/privacy-and-data"
            className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
          >
            <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">
              Privacy and data
            </h3>
            <p className="text-gray-700 text-sm pr-12">
              How we collect, use, and share your personal information when providing adult social care services.
            </p>
            <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
              <ArrowRight className="text-white" size={20} />
            </div>
          </a>

          {/* Consultations */}
          <a 
            href="#/adult-social-care/our-policies/consultations"
            className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
          >
            <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">
              Consultations
            </h3>
            <p className="text-gray-700 text-sm pr-12">
              Current and recent consultations about changes to adult social care services and policies.
            </p>
            <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
              <ArrowRight className="text-white" size={20} />
            </div>
          </a>

        </div>

        {/* Key documents — quick links */}
        <section className="mb-12 bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Key documents — quick links</h2>
          <p className="text-gray-700 mb-4">For quick access to the most commonly requested documents:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-0.5 flex-shrink-0" />
              <div>
                <a href="#" className="text-[#D61F69] hover:underline font-semibold">Fairer Contributions Policy 2025/26</a>
                <span className="text-gray-600 text-sm ml-2">(PDF)</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-0.5 flex-shrink-0" />
              <div>
                <a href="#" className="text-[#D61F69] hover:underline font-semibold">Residential Care Charging Policy</a>
                <span className="text-gray-600 text-sm ml-2">(PDF)</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-0.5 flex-shrink-0" />
              <div>
                <a href="#" className="text-[#D61F69] hover:underline font-semibold">Safeguarding Adults Board Annual Report 2024/25</a>
                <span className="text-gray-600 text-sm ml-2">(PDF)</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-0.5 flex-shrink-0" />
              <div>
                <a href="#" className="text-[#D61F69] hover:underline font-semibold">Market Sustainability Plan</a>
                <span className="text-gray-600 text-sm ml-2">(PDF)</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-0.5 flex-shrink-0" />
              <div>
                <a href="#/adult-social-care/our-policies/privacy-and-data" className="text-[#D61F69] hover:underline font-semibold">Adult Social Care Privacy Notice</a>
              </div>
            </li>
          </ul>
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
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#D61F69] hover:underline">
                Keeping adults safe
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#D61F69] hover:underline">
                How adult social care works
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/complaints-compliments" className="text-[#D61F69] hover:underline">
                Complaints, compliments and help shape our future services
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
