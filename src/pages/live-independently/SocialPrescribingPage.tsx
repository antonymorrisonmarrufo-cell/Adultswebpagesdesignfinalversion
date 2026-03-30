import { ArrowRight, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

export default function SocialPrescribingPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <span>Social prescribing</span>
        </nav>

        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Social prescribing and link workers
        </h1>

        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          Social prescribing helps people improve their health and wellbeing by connecting them to practical, emotional and community support.
        </p>

        <div className="mb-10">
          <a
            href="https://www.walthamforest.gov.uk/health-and-wellbeing/waltham-forest-social-prescribing-service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2"
          >
            Visit the social prescribing service
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="mb-12 max-w-2xl">
          <img
            src="/Images/social-prescribing.jpg"
            alt="Community wellbeing activity bringing people together"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="max-w-3xl space-y-0">

          <div className="pb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What social prescribing is</h2>
            <p className="text-gray-700">
              Social prescribing supports people to improve their health and social wellbeing by connecting them to local community services run by the council, health services, voluntary organisations and community groups.
            </p>
          </div>

          <hr className="border-gray-200" />

          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Who it can help</h2>
            <p className="text-gray-700 mb-4">
              It can be useful if you:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                feel isolated
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                want to improve your mental wellbeing
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                live with a long-term health condition
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                need support to become more connected, confident or active
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                have practical non-clinical needs affecting your wellbeing
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What happens</h2>
            <p className="text-gray-700">
              A social prescribing conversation focuses on what matters to you and what kind of support might help. This may lead to community groups, local activities or practical support.
            </p>
          </div>

        </div>

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