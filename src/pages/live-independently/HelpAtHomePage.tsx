import { ArrowRight, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HelpAtHomePage() {
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
          <span>Help at home and personal care</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
            Help at home and personal care
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
            Find practical advice and support if everyday tasks like washing, dressing, preparing meals, shopping, cleaning or staying safe at home are becoming difficult.
          </p>

          {/* Primary CTA */}
          <div className="mb-10">
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

          {/* Hero image */}
          <div className="mb-12 max-w-2xl">
            <img
              src="https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwZWxkZXJseSUyMHdvbWFuJTIwYXQlMjBob21lJTIwcGVyc29uYWwlMjBjYXJlfGVufDF8fHx8MTc3NDY0NDY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Care worker helping a resident with personal care at home"
              className="w-full h-auto rounded border border-gray-200"
            />
          </div>

          <div className="max-w-3xl space-y-0">

            {/* Contents */}
            <div className="bg-gray-100 border border-gray-300 p-6 mb-10 shadow-inner">
              <h2 className="font-bold text-gray-900 mb-4 text-xl">Contents</h2>
              <ul className="space-y-2">
                <li><button onClick={() => scrollTo('personal-care')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Help with personal care</button></li>
                <li><button onClick={() => scrollTo('meals')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Help with meals and food</button></li>
                <li><button onClick={() => scrollTo('housework')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Help with housework and home maintenance</button></li>
                <li><button onClick={() => scrollTo('everyday-tasks')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Help with everyday tasks at home</button></li>
                <li><button onClick={() => scrollTo('when-to-ask')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">When to ask us for support</button></li>
                <li><button onClick={() => scrollTo('related')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Related help</button></li>
              </ul>
            </div>

            {/* Help with personal care */}
            <div id="personal-care" className="pb-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Help with personal care</h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
                Personal care includes things like:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  washing and bathing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  dressing and undressing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  using the toilet
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  moving around safely at home
                </li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Some people can manage with equipment and minor changes to their routine. Others may need more support.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Simple ideas that may help include:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  non-slip mats or strips in the bathroom
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  better lighting
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  putting regularly used items within easy reach
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  using rails, frames or raised seating
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  using adapted clothing or simple dressing aids
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you are not sure what will help, ask for an assessment before buying equipment.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Help with meals and food */}
            <div id="meals" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Help with meals and food</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If eating, drinking or preparing food is becoming difficult, there may be simple changes that help.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                For example:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  a supportive dining chair
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  quiet, familiar meal settings
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  adapted cutlery or crockery
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  mugs with lids or large handles
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  high-sided plates or plate guards
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  pre-sliced, chopped or frozen food to reduce effort
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  keeping everyday items within easy reach
                </li>
              </ul>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 text-sm text-gray-500 italic font-medium">
                  AskSARA (Coming soon)
                </div>
                <div className="pt-1">
                  <a
                    href="https://livingmadeeasy.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bf3688] font-bold underline hover:no-underline inline-flex items-center gap-1 text-sm"
                  >
                    Living Made Easy
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Help with housework and home maintenance */}
            <div id="housework" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Help with housework and home maintenance</h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                Looking after your home, garden and laundry can become difficult if you have a health condition, disability or reduced mobility.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                You may be able to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  use equipment that makes cleaning easier
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  use benefits to help pay for support
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  ask voluntary organisations about smaller jobs
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  use trusted council or community services for practical help
                </li>
              </ul>
              <div className="space-y-3">
                <a
                  href="https://www.gov.uk/attendance-allowance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf3688] font-bold underline hover:no-underline inline-flex items-center gap-1 text-sm"
                >
                  Attendance Allowance
                  <ExternalLink size={14} />
                </a>
                <div className="pt-1">
                  <a
                    href="https://www.gov.uk/disability-living-allowance-children"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bf3688] font-bold underline hover:no-underline inline-flex items-center gap-1 text-sm"
                  >
                    Disability Living Allowance
                    <ExternalLink size={14} />
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href="https://walthamforestservicestore.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bf3688] font-bold underline hover:no-underline inline-flex items-center gap-1 text-sm"
                  >
                    Waltham Forest Service Store
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Help with everyday tasks at home */}
            <div id="everyday-tasks" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Help with everyday tasks at home</h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
                You may need a care assessment if you are struggling with things like:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  washing or dressing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  using the toilet safely
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  preparing meals
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  cleaning or maintaining your home
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  shopping
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  moving safely around your home
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  staying safe on your own
                </li>
              </ul>
              <p className="text-gray-700 mb-4 font-semibold">
                Support may include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  advice and signposting
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  equipment or adaptations
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  short-term support after illness or hospital
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  ongoing care and support at home if eligible
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* When to ask us for support */}
            <div id="when-to-ask" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">When to ask us for support</h2>
              <p className="text-gray-700 mb-6 font-medium leading-relaxed">
                Ask for help if daily tasks are becoming unsafe, exhausting or difficult to manage on your own.
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
                  <a href="#/adult-social-care/live-independently-at-home/equipment-and-assistive-technology" className="text-[#bf3688] font-bold underline hover:no-underline">
                    Equipment and assistive technology
                  </a>
                </li>
                <li>
                  <a href="#/adult-social-care/live-independently-at-home/falls-prevention-and-reablement" className="text-[#bf3688] font-bold underline hover:no-underline">
                    Falls prevention and reablement
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