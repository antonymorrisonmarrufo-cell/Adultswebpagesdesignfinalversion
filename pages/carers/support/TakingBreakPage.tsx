export default function TakingBreakPage() {
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
            <a href="#/adult-social-care/being-carer/support-for-carers" className="text-[#D61F69] hover:underline">Support for carers</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Taking a break from caring</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">Taking a break from caring</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Taking a break can help protect your health and wellbeing. Find out what respite and short-break support may be available.
        </p>

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

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#why-matters" className="text-[#D61F69] underline hover:no-underline">Why taking a break matters</a></li>
            <li><a href="#get-respite" className="text-[#D61F69] underline hover:no-underline">How to get respite support</a></li>
            <li><a href="#types-of-breaks" className="text-[#D61F69] underline hover:no-underline">Types of breaks</a></li>
            <li><a href="#what-next" className="text-[#D61F69] underline hover:no-underline">What happens next</a></li>
          </ul>
        </div>

        <div className="prose max-w-none">
          
          <div id="why-matters" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Why taking a break matters</h2>
            <p className="text-gray-700 mb-4">
              Caring can be physically and emotionally demanding. Taking regular breaks can help you:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">protect your own health and wellbeing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">maintain relationships and interests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">keep caring sustainable in the long term</span>
              </li>
            </ul>
          </div>

          <div id="get-respite" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">How to get respite support</h2>
            <p className="text-gray-700 mb-4">
              The main route into funded respite support is through a carer's assessment.
            </p>
            <p className="text-gray-700 mb-4">
              During the assessment, we talk to you about what kind of break would help most and what may be available.
            </p>
            <p className="text-gray-700 mb-4">
              If you have eligible needs, we will work with you to arrange appropriate support.
            </p>
          </div>

          <div id="types-of-breaks" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Types of breaks</h2>
            <p className="text-gray-700 mb-4">
              Breaks from caring can take different forms depending on what works for you and the person you care for:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Day opportunities</strong> – activities and support during the day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Help at home</strong> – support at home so you can take time for yourself</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Short residential stays</strong> – planned short stays in a care setting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Direct payments or personal budgets</strong> – where eligible, you may be able to arrange your own support</span>
              </li>
            </ul>
          </div>

          <div id="what-next" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">What happens next</h2>
            <p className="text-gray-700 mb-4">
              To explore what respite support may be available to you:
            </p>
            <ol className="space-y-2 mb-4 list-decimal list-inside">
              <li className="text-gray-700">Request a carer's assessment using the link at the top of this page</li>
              <li className="text-gray-700">Talk to us about the kind of break that would help most</li>
              <li className="text-gray-700">If you have eligible needs, we will agree a support plan with you</li>
            </ol>
          </div>

        </div>

        <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
          <p><strong>Last updated:</strong> 28 March 2026</p>
          <p><strong>Next review:</strong> 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
