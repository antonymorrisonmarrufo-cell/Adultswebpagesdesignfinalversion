import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HelpOnlineFormsBlock from '../../components/live-independently/HelpOnlineFormsBlock';

export default function RequestHomeAssessmentForm() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <span>Request a home independence assessment</span>
        </nav>

        {/* Form container */}
        <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">

          <h1 className="text-[36px] text-[#231F20] mb-4 font-bold leading-tight">
            Request help to live independently at home
          </h1>

          <p className="text-gray-700 text-lg mb-10">
            Use this form if you need help with daily living, home adaptations, equipment or staying safe at home.
          </p>

          {/* Before you start */}
          <div className="bg-[#fcedf3] border-2 border-[#003078] bg-[#d7f8ff] px-5 py-4 mb-10">
            <h2 className="font-bold text-gray-900 mb-2">Before you start</h2>
            <p className="text-gray-900 text-sm mb-2">
              This form is for adults aged 18 or over who live in Waltham Forest.
            </p>
            <p className="text-gray-900 text-sm">
              You can complete it:
            </p>
            <ul className="list-disc list-inside text-gray-900 text-sm mt-2 space-y-1">
              <li>for yourself</li>
              <li>for somebody else, with their knowledge where possible</li>
            </ul>
          </div>

          {/* What this form is for */}
          <div className="mb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What this form is for</h2>
            <p className="text-gray-700 mb-4">
              Use this form if you need help with:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                getting washed or dressed
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                using the toilet
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                getting in or out of bed
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                using stairs
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                moving around your home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                preparing meals
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                using equipment
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                home adaptations
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                staying safe at home
              </li>
            </ul>
          </div>

          {/* What you will need */}
          <div className="mb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What you will need</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                the person's name, address and date of birth
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                contact details
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a summary of what they are finding difficult
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                details of any urgent risks
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                details of who is helping them now, if anyone
              </li>
            </ul>
          </div>

          {/* What happens next */}
          <div className="bg-gray-200 border border-gray-300 p-6 mb-10">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">What happens next</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700 text-sm">
              <li>We will acknowledge your request</li>
              <li>A member of our team will review the information</li>
              <li>If an assessment is needed, we will arrange to visit or speak with you</li>
              <li>We will agree recommendations with you</li>
              <li>You will receive a reference number at the end of this form</li>
            </ol>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://safeguardingapp.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#bf3688] text-white px-8 py-4 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 text-lg"
            >
              Start form
              <ArrowRight size={20} />
            </a>
            <a
              href="#/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            >
              Back to home adaptations
            </a>
          </div>

        </div>

        <HelpOnlineFormsBlock />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: 27 March 2026</p>
        </div>

      </div>
    </div>
  );
}
