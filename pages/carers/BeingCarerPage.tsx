import { ArrowRight, Phone } from 'lucide-react';

export default function BeingCarerPage() {
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
            A carer is someone who gives unpaid help to a family member, partner or friend who could not manage without support. Find out what help is available in Waltham Forest.
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
              href="tel:02084963130"
              className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              <Phone size={18} />
              Get help and advice: 020 8496 3130
            </a>
          </div>

          {/* Intro Panel */}
          <div className="bg-[#FFF0F7] border-l-4 border-[#D61F69] p-6 mb-8">
            <h2 className="text-[#D61F69] font-bold text-xl mb-3">You may be a carer if you regularly help someone with:</h2>
            <ul className="space-y-2 text-gray-900">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span>washing, dressing or eating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span>getting around</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span>shopping, cooking or cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span>managing money or medication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span>emotional support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span>keeping safe or managing day-to-day life</span>
              </li>
            </ul>
          </div>

          {/* Reassurance Block */}
          <div className="bg-gray-50 border border-gray-200 p-6 mb-12">
            <p className="text-gray-900 text-lg">
              Many people do not think of themselves as carers at first. If you regularly look after someone without being paid, support may be available to you.
            </p>
          </div>

          {/* How support works - Step by Step */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-6">How support works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="text-3xl font-bold text-[#D61F69] mb-3">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Tell us about your caring role</h3>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="text-3xl font-bold text-[#D61F69] mb-3">2</div>
                <h3 className="font-bold text-gray-900 mb-2">We talk to you about your needs and what matters to you</h3>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="text-3xl font-bold text-[#D61F69] mb-3">3</div>
                <h3 className="font-bold text-gray-900 mb-2">We help you find the right support, which may include an assessment, local services, benefits advice or a break from caring</h3>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="text-3xl font-bold text-[#D61F69] mb-3">4</div>
                <h3 className="font-bold text-gray-900 mb-2">We review support if your situation changes</h3>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grey Background Section */}
      <div className="bg-gray-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          
          {/* Main Topic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Carer's assessment and your rights */}
            <a href="#/adult-social-care/being-carer/carers-assessment-and-rights" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Carer's assessment and your rights</h3>
              <p className="text-gray-700 text-sm pr-12">Find out who can get an assessment, what it involves, and what support may follow.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Support for carers */}
            <a href="#/adult-social-care/being-carer/support-for-carers" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Support for carers</h3>
              <p className="text-gray-700 text-sm pr-12">Explore financial help, respite, emergency planning, wellbeing support, local groups and training.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Young carers */}
            <a href="#/adult-social-care/being-carer/young-carers" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Young carers</h3>
              <p className="text-gray-700 text-sm pr-12">Support for children and young people under 18 who help care for someone at home.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Parent carers */}
            <a href="#/adult-social-care/being-carer/parent-carers" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Parent carers</h3>
              <p className="text-gray-700 text-sm pr-12">Support and information for parents caring for a disabled child or young person.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Work, education and training */}
            <a href="#/adult-social-care/being-carer/work-education-and-training" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Work, education and training</h3>
              <p className="text-gray-700 text-sm pr-12">Help if you want to balance caring with work or study, or return to work after caring.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Support after caring ends */}
            <a href="#/adult-social-care/being-carer/support-after-caring-ends" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Support after caring ends</h3>
              <p className="text-gray-700 text-sm pr-12">Help with bereavement, practical issues and rebuilding life after a caring role ends.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

          </div>

          {/* Related Links */}
          <div className="bg-white border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-[#D61F69] mb-4">Related links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#/adult-social-care" className="text-[#D61F69] underline hover:no-underline">Adult social care</a>
              </li>
              <li>
                <a href="#" className="text-[#D61F69] underline hover:no-underline">Paying for care and support</a>
              </li>
              <li>
                <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] underline hover:no-underline">Carers First</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/young-carers" className="text-[#D61F69] underline hover:no-underline">Young carers</a>
              </li>
            </ul>
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