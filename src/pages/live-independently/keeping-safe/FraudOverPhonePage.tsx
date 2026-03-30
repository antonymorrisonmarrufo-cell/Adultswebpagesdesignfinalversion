import { ArrowLeft, ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function FraudOverPhonePage() {
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
          <span>Fraud over the phone</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Fraud over the phone
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-12 text-base">
          Stay safe from phone scams by pausing, checking who is calling, and never sharing money or personal information under pressure.
        </p>

        <div className="max-w-3xl space-y-0">

          {/* How phone fraud works */}
          <div className="pb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">How phone fraud works</h2>
            <p className="text-gray-700 mb-4">
              Fraudsters often call pretending to be from a trusted organisation, such as:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                your bank
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                the police
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a utility company
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a government service
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a delivery company
              </li>
            </ul>
            <p className="text-gray-700">
              They may try to create urgency so you act without thinking.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* How to protect yourself */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">How to protect yourself</h2>
            <p className="text-gray-700 mb-4">
              To protect yourself:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                be cautious if a caller asks for personal or financial details
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                do not feel pressured to act immediately
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                hang up and call the organisation back using a number you trust
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                do not use a phone number given by the caller
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                never transfer money because of an unexpected phone call
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                talk to someone you trust if you are unsure
              </li>
            </ul>
          </div>

          {/* Previous / Next navigation */}
          <div className="pt-10 border-t border-gray-200 flex justify-between gap-4">
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/online-email-or-postal-fraud"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <ArrowLeft size={18} />
              <span>Online, email or postal fraud</span>
            </a>
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/fire-safety-advice-for-your-home"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <span>Fire safety advice for your home</span>
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