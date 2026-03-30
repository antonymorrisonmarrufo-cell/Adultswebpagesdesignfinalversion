import { ArrowLeft, ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function OnlineEmailPostalFraudPage() {
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
          <span>Online, email or postal fraud</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Online, email or postal fraud
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-12 text-base">
          Stay safe from online and mail fraud by spotting fake messages, avoiding unsafe links, and never sharing personal details.
        </p>

        <div className="max-w-3xl space-y-0">

          {/* Common scams */}
          <div className="pb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Common scams</h2>
            <p className="text-gray-700 mb-4">
              Fraudsters often use emails, texts or letters that look as if they come from a real organisation, such as:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a bank
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                HMRC
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                PayPal
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                Amazon
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                investment firms
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                delivery companies
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              These messages may ask you to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                click a link
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                open an attachment
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                confirm personal information
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                change security settings
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                move or invest money
              </li>
            </ul>
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
                delete unsolicited emails without opening them
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                do not open attachments you were not expecting
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                never provide personal information in response to an unexpected contact
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                shred or burn personal documents before disposing of them
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                keep anti-virus and anti-spam software up to date
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                remember that a message can include your name and still be fake
              </li>
            </ul>
          </div>

          {/* Previous / Next navigation */}
          <div className="pt-10 border-t border-gray-200 flex justify-between gap-4">
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/callers-to-your-door"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <ArrowLeft size={18} />
              <span>Callers to your door</span>
            </a>
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/fraud-over-the-phone"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <span>Fraud over the phone</span>
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