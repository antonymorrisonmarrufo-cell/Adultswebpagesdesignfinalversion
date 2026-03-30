import { ArrowLeft, ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function CallersToYourDoorPage() {
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
          <span>Callers to your door</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Callers to your door
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-12 text-base">
          Stay safe from doorstep callers by checking ID, using a door chain, avoiding pressure, and never sharing personal details.
        </p>

        <div className="max-w-3xl space-y-0">

          {/* Why this matters */}
          <div className="pb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Why this matters</h2>
            <p className="text-gray-700 mb-4">
              Many legitimate companies call at people's homes, but criminals also use doorstep visits to pressure people into sharing information or paying for things they do not want.
            </p>
            <p className="text-gray-700 mb-4">
              They may pretend to be:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                utility workers
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                officials
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                survey staff
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                traders
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                people checking something at your home
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Ways to protect yourself */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Ways to protect yourself</h2>
            <p className="text-gray-700 mb-4">
              Ways to protect yourself include:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                fit a door chain and spy hole if possible
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                always ask for and check identification
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                do not let people in if you are unsure who they are
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                if you are interested in something, ask them to leave contact details so you can arrange a later appointment
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                do not sign on the spot
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                get at least three written quotes for work
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                never share personal or financial details at the door
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* If you decide to buy */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">If you decide to buy</h2>
            <p className="text-gray-700 mb-4">
              If you do decide to buy something:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                ask for references from previous customers
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                get any agreement in writing
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                check the cooling-off period
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                do not pay for work before it is completed and you are satisfied
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="pt-10 border-t border-gray-200 flex justify-between gap-4">
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <ArrowLeft size={18} />
              <span>Keeping safe at home</span>
            </a>
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/online-email-or-postal-fraud"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <span>Online, email or postal fraud</span>
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