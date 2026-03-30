import { Phone } from 'lucide-react';

export default function CarersAssessmentRightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#bf3688] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#bf3688] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer" className="text-[#bf3688] hover:underline">Being a carer</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Carer's assessment and your rights</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Page Title and Standfirst */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Carer's assessment and your rights</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          A carer's assessment is a conversation about the impact caring has on your life and what support could help you.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Request a carer's assessment
          </a>
          <a
            href="tel:02084963130"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <Phone size={18} />
            Call Adult Social Care: 020 8496 3130
          </a>
        </div>

        {/* Contents Block */}
        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#what-is" className="text-[#bf3688] underline hover:no-underline">What a carer's assessment is</a></li>
            <li><a href="#who-can-get" className="text-[#bf3688] underline hover:no-underline">Who can get one</a></li>
            <li><a href="#what-happens" className="text-[#bf3688] underline hover:no-underline">What happens in the assessment</a></li>
            <li><a href="#after-assessment" className="text-[#bf3688] underline hover:no-underline">What happens after the assessment</a></li>
            <li><a href="#your-rights" className="text-[#bf3688] underline hover:no-underline">Your rights as a carer</a></li>
            <li><a href="#related-help" className="text-[#bf3688] underline hover:no-underline">Related help</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          
          {/* What a carer's assessment is */}
          <div id="what-is" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">What a carer's assessment is</h2>
            <p className="text-gray-700 mb-4">
              A carer's assessment is not a test of how well you care for someone.
            </p>
            <p className="text-gray-700">
              It is a chance to talk about your own needs, your wellbeing, and what support could make caring easier.
            </p>
          </div>

          {/* Who can get one */}
          <div id="who-can-get" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Who can get one</h2>
            <p className="text-gray-700 mb-4">
              You can ask for a carer's assessment if you are 18 or over and help care for another adult.
            </p>
            <p className="text-gray-700">
              The person you care for does not need to be receiving council support for you to ask for an assessment.
            </p>
          </div>

          {/* What happens in the assessment */}
          <div id="what-happens" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">What happens in the assessment</h2>
            <p className="text-gray-700 mb-4">We talk to you about:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">how caring affects your health and wellbeing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">what matters to you day to day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">whether you are able to work, study or have time for yourself</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">what support would help</span>
              </li>
            </ul>
          </div>

          {/* What happens after the assessment */}
          <div id="after-assessment" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">What happens after the assessment</h2>
            <p className="text-gray-700 mb-4">
              If you have eligible needs, we will agree a support plan with you.
            </p>
            <p className="text-gray-700 mb-4">This may include:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">help to take a break from caring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">practical support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">emotional support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">direct payments or a personal budget where appropriate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">signposting to other services</span>
              </li>
            </ul>
          </div>

          {/* Your rights as a carer */}
          <div id="your-rights" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Your rights as a carer</h2>
            <p className="text-gray-700 mb-4">
              As a carer, you may have rights under the Care Act and employment law.
            </p>
            <p className="text-gray-700">
              This includes the right to ask for an assessment and, in some cases, the right to request flexible working.
            </p>
          </div>

          {/* Related help */}
          <div id="related-help" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Related help</h2>
            <ul className="space-y-2">
              <li>
                <a href="#/adult-social-care/being-carer/support-for-carers" className="text-[#bf3688] underline hover:no-underline">Support for carers</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/support-for-carers/financial-support" className="text-[#bf3688] underline hover:no-underline">Financial support</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/support-for-carers/taking-a-break" className="text-[#bf3688] underline hover:no-underline">Taking a break from caring</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/work-education-and-training" className="text-[#bf3688] underline hover:no-underline">Work, education and training</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Last Updated */}
        <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
          <p><strong>Last updated:</strong> 28 March 2026</p>
          <p><strong>Next review:</strong> 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
