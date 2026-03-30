import { ArrowRight, Phone } from 'lucide-react';

export default function SupportForCarersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#D61F69] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#D61F69] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer" className="text-[#D61F69] hover:underline">Being a carer</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Support for carers</span>
          </nav>
        </div>
      </div>

      {/* White Background Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Page Title and Standfirst */}
          <h1 className="text-5xl font-bold text-[#00635C] mb-4">Support for carers</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            Explore the practical, financial and emotional support available to help you in your caring role.
          </p>

          {/* Primary and Secondary CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
            >
              Request a carer's assessment
            </a>
            <a
              href="https://www.carersfirst.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Get help from Carers First
            </a>
          </div>

          {/* Intro */}
          <p className="text-lg text-gray-700 mb-8">
            Support may be available whether you need advice, a short break, financial guidance, emotional support or help planning for emergencies.
          </p>

          {/* Reassurance Panel */}
          <div className="bg-[#FFF0F7] border-l-4 border-[#D61F69] p-6 mb-12">
            <p className="text-gray-900 text-lg">
              You do not need to sort everything out on your own. Start with the support that matters most to you now.
            </p>
          </div>

        </div>
      </div>

      {/* Grey Background Section */}
      <div className="bg-gray-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          
          {/* Support Topic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Financial support */}
            <a href="#/adult-social-care/being-carer/support-for-carers/financial-support" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Financial support</h3>
              <p className="text-gray-700 text-sm pr-12">Find out about benefits, discounts, grants and where to get help with money worries.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Taking a break from caring */}
            <a href="#/adult-social-care/being-carer/support-for-carers/taking-a-break" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Taking a break from caring</h3>
              <p className="text-gray-700 text-sm pr-12">Find out what respite and short-break support may be available.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Carer emergency plan */}
            <a href="#/adult-social-care/being-carer/support-for-carers/carer-emergency-plan" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Carer emergency plan</h3>
              <p className="text-gray-700 text-sm pr-12">Plan ahead so the person you care for is safe if you suddenly cannot help.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Your health and wellbeing */}
            <a href="#/adult-social-care/being-carer/support-for-carers/your-health-and-wellbeing" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Your health and wellbeing</h3>
              <p className="text-gray-700 text-sm pr-12">Find support for your mental and physical wellbeing as a carer.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Local groups and services */}
            <a href="#/adult-social-care/being-carer/support-for-carers/local-groups-and-services" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Local groups and services</h3>
              <p className="text-gray-700 text-sm pr-12">Find local groups, community activities and specialist organisations that support carers.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Training and workshops */}
            <a href="#/adult-social-care/being-carer/support-for-carers/training-and-workshops" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Training and workshops</h3>
              <p className="text-gray-700 text-sm pr-12">Build your confidence, learn new skills and connect with other carers.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Carers' feedback and testimonials */}
            <a href="#/adult-social-care/being-carer/support-for-carers/carers-feedback-and-testimonials" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Carers' feedback and testimonials</h3>
              <p className="text-gray-700 text-sm pr-12">Hear from carers and tell us what would make support better.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

          </div>

          {/* Last Updated */}
          <div className="text-sm text-gray-600 mb-8">
            <p><strong>Last updated:</strong> 28 March 2026</p>
            <p><strong>Next review:</strong> 28 March 2027</p>
          </div>

        </div>
      </div>
    </div>
  );
}
