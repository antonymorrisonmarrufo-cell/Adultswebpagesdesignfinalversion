import { ArrowLeft, ArrowRight, AlertTriangle, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function FireSafetyPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home" className="hover:underline">Keeping safe at home</a>
          <span className="mx-1">&gt;</span>
          <span>Fire safety advice for your home</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Fire safety advice for your home
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-8 text-base">
          Stay fire-safe at home with clear advice and a free safety visit from the London Fire Brigade, including a smoke alarm if needed.
        </p>

        {/* Important alert box */}
        <div className="max-w-3xl mb-12">
          <div className="bg-red-50 border-l-4 border-red-600 px-5 py-4 flex items-start gap-3">
            <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={22} />
            <div>
              <p className="font-bold text-red-800 text-base">
                If there is a fire, call 999.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-0">

          {/* Preventing fires at home */}
          <div className="pb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Preventing fires at home</h2>
            <p className="text-gray-700 mb-4">
              Make sure your home is as safe as possible and reduce the risk of fire where you can.
            </p>
            <p className="text-gray-700 mb-4">
              Use the GOV.UK fire safety guidance for practical advice about:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                smoke alarms
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                common causes of house fires
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                escape plans
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                bedtime checks
              </li>
            </ul>
            <a
              href="https://www.gov.uk/government/publications/fire-safety-in-the-home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm"
            >
              Fire safety in the home (GOV.UK)
              <ExternalLink size={14} />
            </a>
          </div>

          <hr className="border-gray-200" />

          {/* Get a free fire safety check */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Get a free fire safety check</h2>
            <p className="text-gray-700 mb-4">
              The London Fire Brigade can provide a free home fire safety visit for people and homes where there is a higher risk of fire.
            </p>
            <p className="text-gray-700 mb-4">
              They can:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                give advice about making your home safer
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                fit a free smoke alarm if needed
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                help you think about escape plans and safety routines
              </li>
            </ul>
            <div className="space-y-3">
              <div>
                <a
                  href="https://www.london-fire.gov.uk/safety/the-home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm"
                >
                  London Fire Brigade fire safety advice
                  <ExternalLink size={14} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.london-fire.gov.uk/safety/the-home/home-fire-safety/home-fire-safety-checker-hfsc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm"
                >
                  Home Fire Safety Checker
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Previous / Next navigation */}
          <div className="pt-10 border-t border-gray-200 flex justify-between gap-4">
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/fraud-over-the-phone"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <ArrowLeft size={18} />
              <span>Fraud over the phone</span>
            </a>
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/further-information-about-keeping-your-home-safe"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <span>Further information about keeping your home safe</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>

        {/* Metadata */}
        <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}