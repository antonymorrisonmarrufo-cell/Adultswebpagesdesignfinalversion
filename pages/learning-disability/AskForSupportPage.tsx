import { ArrowRight, Phone } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function AskForSupportPage() {
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
            <a href="#/adult-social-care/specialist-services" className="hover:underline">Dementia, disabilities and specialist support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support" className="hover:underline">Learning disability support</a>
            <span className="mx-1">&gt;</span>
            <span>Ask for support</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-5xl text-[#00635C] mb-3 font-bold leading-tight">
              Ask for learning disability support
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
              Use this page to find out who can get help, how to ask for an assessment, and what happens next.
            </p>

            {/* Primary CTAs */}
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#/adult-social-care/learning-disability-support/request-support"
                className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 font-bold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
              >
                Start support request
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:02089288300"
                className="inline-flex items-center gap-3 bg-white border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
              >
                <Phone size={18} />
                Call 020 8928 8300
              </a>
            </div>

            {/* Hero image */}
            <div className="mb-12 max-w-xl">
              <img
                src="/Images/placeholder.svg"
                alt="An adult with a learning disability and a family member sitting together at a kitchen table at home, reviewing simple paperwork"
                className="w-full h-auto rounded border border-gray-200"
              />
            </div>

            <div className="max-w-3xl space-y-0">
              {/* Contents */}
              <div className="bg-gray-100 border border-gray-300 p-6 mb-10 shadow-inner">
                <h2 className="font-bold text-gray-900 mb-4 text-xl">Contents</h2>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollTo('who-can-get-help')} className="text-[#D61F69] font-bold underline hover:no-underline text-left">Who can get help?</button></li>
                  <li><button onClick={() => scrollTo('what-support')} className="text-[#D61F69] font-bold underline hover:no-underline text-left">What support can the team provide?</button></li>
                  <li><button onClick={() => scrollTo('how-to-ask')} className="text-[#D61F69] font-bold underline hover:no-underline text-left">How to ask for support</button></li>
                  <li><button onClick={() => scrollTo('what-happens')} className="text-[#D61F69] font-bold underline hover:no-underline text-left">What happens after referral?</button></li>
                  <li><button onClick={() => scrollTo('not-eligible')} className="text-[#D61F69] font-bold underline hover:no-underline text-left">What if I am not eligible?</button></li>
                  <li><button onClick={() => scrollTo('urgent-help')} className="text-[#D61F69] font-bold underline hover:no-underline text-left">Urgent help</button></li>
                  <li><button onClick={() => scrollTo('related')} className="text-[#D61F69] font-bold underline hover:no-underline text-left">Related support</button></li>
                </ul>
              </div>

              {/* Who can get help? */}
              <div id="who-can-get-help" className="pb-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Who can get help?</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  You may be able to get help if:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you are aged 18 or over
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you live in Waltham Forest
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you have a learning disability that started before adulthood
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    your learning disability has a significant effect on daily life and independence
                  </li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A learning disability is different from a learning difficulty. For example, dyslexia or ADHD on their own would not usually come under this specialist service.
                </p>
                <div className="bg-[#FFF0F7] border-l-4 border-[#D61F69] p-6">
                  <p className="text-gray-900">
                    If you only need autism support and do not have a learning disability, use the <a href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/information-send-conditions/autism" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] font-bold underline hover:no-underline">autism route</a> instead.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* What support can the team provide? */}
              <div id="what-support" className="py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">What support can the team provide?</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  The Community Learning Disability Team can help with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    assessment and care planning
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    health and wellbeing support with NHS partners
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    specialist therapies and health input
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    support to stay healthy and independent
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    advice and information for carers and families
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    support to connect with activities and community opportunities
                  </li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* How to ask for support */}
              <div id="how-to-ask" className="py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">How to ask for support</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  You can ask for support in two ways:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    complete the online support request form
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    call 020 8928 8300 if you need help to do this
                  </li>
                </ul>
                <a
                  href="#/adult-social-care/learning-disability-support/request-support"
                  className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 font-bold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
                >
                  Start support request
                  <ArrowRight size={18} />
                </a>
              </div>

              <hr className="border-gray-200" />

              {/* What happens after referral? */}
              <div id="what-happens" className="py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">What happens after referral?</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  After you contact us:
                </p>
                <ol className="space-y-3">
                  <li className="flex gap-3 text-gray-700">
                    <span className="font-bold text-[#D61F69] flex-shrink-0">1.</span>
                    <span>We review the information you give us.</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="font-bold text-[#D61F69] flex-shrink-0">2.</span>
                    <span>We decide whether the Community Learning Disability Team is the right service.</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="font-bold text-[#D61F69] flex-shrink-0">3.</span>
                    <span>If needed, we carry out an assessment.</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="font-bold text-[#D61F69] flex-shrink-0">4.</span>
                    <span>We talk with you about the outcomes you want and agree what support may help.</span>
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="font-bold text-[#D61F69] flex-shrink-0">5.</span>
                    <span>If you are eligible, we put a plan in place and review it regularly.</span>
                  </li>
                </ol>
              </div>

              <hr className="border-gray-200" />

              {/* What if I am not eligible? */}
              <div id="not-eligible" className="py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">What if I am not eligible?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                  If this service is not the right route, we should not leave you without help.
                </p>
                <p className="text-gray-700 mb-4 font-semibold">
                  We may signpost you to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    mainstream adult social care support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    autism support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    day opportunities
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    work and learning support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    community activities
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    other health or social care services
                  </li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* Urgent help */}
              <div id="urgent-help" className="py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Urgent help</h2>
                <p className="text-gray-900 mb-3">
                  For urgent social care issues outside working hours, call <a href="tel:02084963130" className="text-[#D61F69] font-bold underline hover:no-underline">020 8496 3130</a>.
                </p>
                <p className="text-gray-900 mb-3">
                  For mental health crisis support, call <strong>111</strong> and press option 2.
                </p>
                <p className="text-gray-900">
                  If there is immediate danger, call <strong>999</strong>.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Related support */}
              <div id="related" className="pt-10">
                <h2 className="text-gray-900 font-bold text-2xl mb-4">Related support</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/getting-help-social-services" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] font-bold underline hover:no-underline">
                      Getting help from social services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nelft.nhs.uk/community-learning-disability-team-waltham-forest/" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] font-bold underline hover:no-underline">
                      Community Learning Disability Team (NELFT)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/information-send-conditions/autism" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] font-bold underline hover:no-underline">
                      Autism support
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