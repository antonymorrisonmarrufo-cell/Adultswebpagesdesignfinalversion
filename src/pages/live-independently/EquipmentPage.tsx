import { ArrowRight, Phone, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function EquipmentPage() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <span>Equipment and assistive technology</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
            Equipment and assistive technology
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
            Find simple aids, home equipment and practical technology that can make everyday tasks safer and easier.
          </p>

          {/* Primary CTAs */}
          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#/adult-social-care/live-independently-at-home/request-home-independence-assessment"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
            >
              Request a home independence assessment
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:02084963130"
              className="inline-flex items-center gap-3 bg-white border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
            >
              <Phone size={18} />
              Call 020 8496 3130
            </a>
          </div>

          {/* Hero image */}
          <div className="mb-12 max-w-2xl">
            <img
              src="/Images/equipment.jpg"
              alt="Person using a mobility trolley safely in their home"
              className="w-full h-auto rounded border border-gray-200"
            />
          </div>

          <div className="max-w-3xl space-y-0">

            {/* Contents */}
            <div className="bg-white border border-gray-300 p-6 mb-10 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4 text-xl">Contents</h2>
              <ul className="space-y-2">
                <li><button onClick={() => scrollTo('what-equipment')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">What equipment can help with</button></li>
                <li><button onClick={() => scrollTo('get-yourself')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Get equipment yourself</button></li>
                <li><button onClick={() => scrollTo('provided-by-us')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">If equipment is provided by us</button></li>
                <li><button onClick={() => scrollTo('repairs')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Faulty equipment and repairs</button></li>
                <li><button onClick={() => scrollTo('returning')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Returning equipment</button></li>
                <li><button onClick={() => scrollTo('assessment')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">When to ask for an assessment</button></li>
                <li><button onClick={() => scrollTo('related')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Related help</button></li>
              </ul>
            </div>

            {/* What equipment can help with */}
            <div id="what-equipment" className="pb-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">What equipment can help with</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Equipment can make everyday activities safer and easier if you are finding tasks more difficult.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                It might help with:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  getting in and out of bed
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  using stairs
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  getting on and off the toilet
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  washing and bathing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  carrying items around the home
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  standing up from a chair
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  staying safe at home
                </li>
              </ul>
              <p className="text-gray-700 mb-4 font-semibold">
                Examples include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  grab rails, bed handles and stair rails
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  raised toilet seating
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  bath boards and shower chairs
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  perching stools
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  trolleys for carrying meals
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  adjustable beds
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                  hoists or more specialist equipment where needed
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* Get equipment yourself */}
            <div id="get-yourself" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Get equipment yourself</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you already know what you need, you may prefer to buy simple aids yourself instead of waiting for an assessment.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                You can try:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  high street retailers such as Argos, B&Q, Halfords and Screwfix
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  specialist suppliers
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  trusted advice tools that help you choose equipment
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
                <div className="pt-1">
                  <a
                    href="https://www.completecareshop.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bf3688] font-bold underline hover:no-underline inline-flex items-center gap-1 text-sm"
                  >
                    Complete Care Shop
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* If equipment is provided by us */}
            <div id="provided-by-us" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">If equipment is provided by us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you are eligible for social care funding, equipment may be provided free of charge.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                More complex equipment, such as profiling beds and hoists, may be provided on loan. Loaned equipment remains the property of Waltham Forest and should be maintained in good condition.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you choose a different colour, model or upgrade, you may need to pay the difference.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Faulty equipment and repairs */}
            <div id="repairs" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Faulty equipment and repairs</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If equipment provided by the council is faulty, contact the service so it can be checked, repaired or replaced.
              </p>
              <div className="bg-white p-6 border border-gray-300 shadow-sm">
                <p className="text-gray-900 mb-2 font-bold text-lg">
                  Current provider: Enabled Living
                </p>
                <p className="text-gray-700">
                  Telephone: <a href="tel:02033738800" className="text-[#bf3688] font-bold underline hover:no-underline">0203 373 8800</a>
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Returning equipment */}
            <div id="returning" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Returning equipment</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you no longer need equipment that was loaned to you, return it so it can be cleaned, reused and offered to someone else.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
                If you have equipment you no longer need, arrange a collection through the service provider.
              </p>
              <div className="bg-white p-6 border border-gray-300 shadow-sm">
                <p className="text-gray-700">
                  Current provider phone: <a href="tel:02033738800" className="text-[#bf3688] font-bold underline hover:no-underline">0203 373 8800</a>
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* When to ask for an assessment */}
            <div id="assessment" className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">When to ask for an assessment</h2>
              <p className="text-gray-700 mb-4 font-semibold">
                Ask for an assessment if:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  you are not sure what equipment is right for you
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  your needs have changed
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  simple equipment is no longer enough
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  you think you may need more complex equipment or home adaptations
                </li>
              </ul>
              <a
                href="#/adult-social-care/live-independently-at-home/request-home-independence-assessment"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                Request a home independence assessment
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
                  <a href="#/adult-social-care/live-independently-at-home/falls-prevention-and-reablement" className="text-[#bf3688] font-bold underline hover:no-underline">
                    Falls prevention and reablement
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