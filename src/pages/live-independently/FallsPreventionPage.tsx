import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
// Image placeholder - source from Figma;
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function FallsPreventionPage() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <span>Falls prevention and reablement</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
            Falls prevention and reablement
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
            Find support to reduce your risk of falling and rebuild your confidence and independence after illness, injury or a stay in hospital.
          </p>

          {/* Primary CTAs */}
          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
            >
              Get a care assessment
              <ArrowRight size={18} />
            </a>
            <a
              href="#/adult-social-care/live-independently-at-home/request-home-independence-assessment"
              className="inline-flex items-center gap-3 bg-white border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
            >
              Request a home independence assessment
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Hero image */}
          <div className="mb-12 max-w-2xl">
            <img
              src="/Images/placeholder.svg"
              alt="A group of diverse older adults taking part in a balance and stability class in a community hall"
              className="w-full h-auto rounded border border-gray-200"
            />
          </div>

          <div className="max-w-3xl space-y-0">

            {/* Contents */}
            <div className="bg-gray-100 border border-gray-300 p-6 mb-10 shadow-inner">
              <h2 className="font-bold text-gray-900 mb-4 text-xl">Contents</h2>
              <ul className="space-y-2">
                <li><button onClick={() => scrollTo('why-falls')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Why falls happen</button></li>
                <li><button onClick={() => scrollTo('reduce-risk')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">How to reduce your risk of falling</button></li>
                <li><button onClick={() => scrollTo('activities')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Local activities and exercise</button></li>
                <li><button onClick={() => scrollTo('reablement')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">What reablement is</button></li>
                <li><button onClick={() => scrollTo('who-can-help')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Who reablement can help</button></li>
                <li><button onClick={() => scrollTo('how-to-get-support')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">How to get support</button></li>
                <li><button onClick={() => scrollTo('related')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Related help</button></li>
              </ul>
            </div>

            {/* Why falls happen */}
            <div id="why-falls" className="pb-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Why falls happen</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Falls are more common as people get older, but they should not be treated as inevitable.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Some common reasons people fall include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  loss of strength and balance
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  changes in medication
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  foot problems
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  medical conditions such as Parkinson's disease
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  trip hazards in the home
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  ice and snow
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  rushing or overreaching
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* How to reduce your risk */}
            <div id="reduce-risk" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">How to reduce your risk of falling</h2>
              <p className="text-gray-700 mb-4 font-semibold">
                You can often reduce your risk by:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  improving balance and leg strength
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  removing clutter and trip hazards
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  improving lighting
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  reviewing unsuitable footwear
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  using the right equipment
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  getting advice if you feel unsteady at home
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you are worried about falling at home, we may be able to assess you and recommend equipment or adaptations.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Local activities and exercise */}
            <div id="activities" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Local activities and exercise</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Exercise can help improve strength, balance and confidence.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Suggested activities may include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  gardening
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  dancing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  tai chi
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  balance and stability classes
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://www.walthamforest.gov.uk/sites/default/files/2021-11/get_the_best_out_of_living_in_waltham_forest_-_web_final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#bf3688] font-bold underline hover:no-underline text-sm"
                >
                  <FileText size={16} />
                  Guide to services and activities for the over 50s (PDF)
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* What reablement is */}
            <div id="reablement" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">What reablement is</h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                Reablement is free, short-term support in your home to help you manage personal and practical daily tasks more independently.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It focuses on helping you rebuild skills and confidence, rather than doing things for you.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Reablement can help you:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  become more independent
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  relearn daily living skills
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  get mobile again
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  re-establish routines
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  feel more confident at home
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* Who reablement can help */}
            <div id="who-can-help" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Who reablement can help</h2>
              <p className="text-gray-700 mb-4 font-semibold">
                You may benefit from reablement if:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  you have been ill
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  you have been in hospital
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  your long-term condition has got worse
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  you want support to become more independent at home
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  you are over 18 and live in Waltham Forest
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* How to get support */}
            <div id="how-to-get-support" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">How to get support</h2>
              <p className="text-gray-700 mb-6 font-medium leading-relaxed">
                If you think you need this kind of support, start with a care assessment or ask us for advice.
              </p>
              <a
                href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
              >
                Get a care assessment
                <ArrowRight size={18} />
              </a>
            </div>

            <hr className="border-gray-200" />

            {/* Related help */}
            <div id="related" className="pt-10">
              <h2 className="text-gray-900 font-bold text-2xl mb-4">Related help</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy" className="text-[#bf3688] font-bold underline hover:no-underline">
                    Home adaptations and occupational therapy
                  </a>
                </li>
                <li>
                  <a href="#/adult-social-care/live-independently-at-home/help-at-home-and-personal-care" className="text-[#bf3688] font-bold underline hover:no-underline">
                    Help at home and personal care
                  </a>
                </li>
                <li>
                  <a href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home" className="text-[#bf3688] font-bold underline hover:no-underline">
                    Keeping safe at home
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Metadata */}
          <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
            <p>Last updated: 27 March 2026</p>
            <p>Next review: 27 March 2027</p>
          </div>
        </div>

      </section>
    </div>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}