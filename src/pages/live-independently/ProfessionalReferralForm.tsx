import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProfessionalReferralForm() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">

        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <span>Professional referral</span>
        </nav>

        <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">

          <h1 className="text-[36px] text-[#231F20] mb-4 font-bold leading-tight">
            Professional referral for support to live independently at home
          </h1>

          <p className="text-gray-700 text-lg mb-10">
            Use this form if you are a professional referring an adult for occupational therapy, home adaptations, telecare, equipment or related support to help them live independently at home.
          </p>

          <div className="mb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Use this form for</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                occupational therapy and home adaptations
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                telecare and community alarm
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                equipment needs linked to daily living
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                support after illness or hospital where independence at home is affected
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                urgent home safety concerns linked to care and support needs
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Information you will need</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                the adult's name, address, date of birth and contact details
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                NHS number if known
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                reason for referral
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                functional difficulties
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                urgency and risks
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                consent details
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                any support already in place
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="inline-flex items-center justify-center gap-3 bg-[#bf3688] text-white px-8 py-4 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 text-lg"
            >
              Start professional referral
              <ArrowRight size={20} />
            </button>
            <a
              href="#/adult-social-care/live-independently-at-home"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            >
              Back to live independently at home
            </a>
          </div>

        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: 27 March 2026</p>
        </div>

      </div>
    </div>
  );
}