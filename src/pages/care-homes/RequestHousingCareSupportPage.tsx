import { ArrowRight, Phone } from 'lucide-react';

export default function RequestHousingCareSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/care-homes-and-supported-living" className="hover:underline">Care homes and supported living</a>
          <span className="mx-1">&gt;</span>
          <span>Request housing and care support</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Request housing and care support
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Use this form if you think you or someone else may need supported living, Shared Lives, extra care, sheltered housing or a care home.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Start form
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:02084963130"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <Phone size={18} />
            Call 020 8496 3130
          </a>
        </div>

        {/* Before you start */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Before you start</h2>
          <p className="text-gray-700 mb-4 font-semibold">You will need:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">the person's name, address and date of birth</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">contact details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">a short summary of the support they need</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">details of any urgent risks or unsafe situations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">details of any current care or support already in place</span>
            </li>
          </ul>
        </section>

        {/* What this form is for */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What this form is for</h2>
          <p className="text-gray-700 mb-4 font-semibold">Use this form if:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">home care is no longer enough</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">someone may need a different living arrangement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">someone needs more regular support to stay safe</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">you want advice about supported living, Shared Lives, extra care, sheltered housing or care homes</span>
            </li>
          </ul>
        </section>

        {/* What happens next */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens next</h2>
          <p className="text-gray-700 mb-4">
            We will review the information, contact you if we need more detail, and decide what the right next step is.
          </p>
          <p className="text-gray-700">
            This may include a needs assessment, care planning, a housing route, or signposting to another service.
          </p>
        </section>

        {/* Help with online forms */}
        <section className="mb-10 bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">If you cannot complete the form online yourself</h2>
          <p className="text-gray-700 mb-4">You can:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">ask someone you trust to help you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">call 020 8496 3130</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">use a self-service PC at a Waltham Forest Library</span>
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