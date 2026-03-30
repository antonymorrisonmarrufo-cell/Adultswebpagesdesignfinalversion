import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HelpOnlineFormsBlock from '../../components/live-independently/HelpOnlineFormsBlock';

export default function RequestTelecareForm() {
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
          <span>Request telecare or community alarm</span>
        </nav>

        <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">

          <h1 className="text-[36px] text-[#231F20] mb-4 font-bold leading-tight">
            Request telecare or community alarm
          </h1>

          <p className="text-gray-700 text-lg mb-10">
            Use this form if you think you or someone else may need a community alarm or telecare to stay safe at home.
          </p>

          <div className="mb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">This form can help with</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                a community alarm pendant or wrist alarm
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                telecare sensors
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                extra reassurance if someone is vulnerable at home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
                emergency support planning
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What you will need</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                the person's details
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                details of why the service may be needed
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                information about whether they live alone
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                emergency contact or keyholder details, if known
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                any urgent safety concerns
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="inline-flex items-center justify-center gap-3 bg-[#bf3688] text-white px-8 py-4 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 text-lg"
            >
              Start form
              <ArrowRight size={20} />
            </button>
            <a
              href="#/adult-social-care/live-independently-at-home/telecare-and-community-alarm"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            >
              Back to telecare information
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
