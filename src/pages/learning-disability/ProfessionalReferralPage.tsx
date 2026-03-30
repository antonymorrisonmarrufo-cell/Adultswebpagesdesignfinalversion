import { Phone } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function ProfessionalReferralPage() {
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
            <a href="#/adult-social-care/specialist-services" className="hover:underline">Dementia, disabilities and specialist support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support" className="hover:underline">Learning disability support</a>
            <span className="mx-1">&gt;</span>
            <span>Professional referral</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#231F20] mb-3 font-bold leading-tight">
              Professional referral
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
              Use this route if you are a professional referring an adult for learning disability support in Waltham Forest.
            </p>

            {/* Primary CTA - online form only */}
            <div className="mb-10">
              <a
                href="https://safeguardingapp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                Start professional referral
              </a>
            </div>

            <div className="max-w-3xl space-y-0">
              {/* Contents */}
              <div className="bg-gray-100 border border-gray-300 p-6 mb-10 shadow-inner">
                <h2 className="font-bold text-gray-900 mb-4 text-xl">Contents</h2>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollTo('who-should-use')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Who should use this route</button></li>
                  <li><button onClick={() => scrollTo('what-information')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">What information to include</button></li>
                  <li><button onClick={() => scrollTo('what-happens')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">What happens next</button></li>
                  <li><button onClick={() => scrollTo('urgent-help')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Urgent help</button></li>
                </ul>
              </div>

              {/* Who should use this route */}
              <div id="who-should-use" className="pb-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Who should use this route</h2>
                <p className="text-gray-700 leading-relaxed">
                  Use this route if you are a GP, hospital team member, social worker, education professional, community worker or another professional referring an adult who may need specialist learning disability support.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* What information to include */}
              <div id="what-information" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">What information to include</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  Have the following details ready:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    name and contact details
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    date of birth
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    address
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    why you believe the person may have a learning disability
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    current risks or urgent concerns
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    current support in place
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    consent details where possible
                  </li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* What happens next */}
              <div id="what-happens" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">What happens next</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We will review the referral and decide whether the Community Learning Disability Team is the right service.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If needed, an assessment will be arranged.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If another service is more appropriate, the referral should be redirected or signposted rather than simply rejected.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Urgent help */}
              <div id="urgent-help" className="pt-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Urgent help</h2>
                <p className="text-gray-900 mb-3">
                  For urgent social care issues outside normal working hours, call <a href="tel:02084963130" className="text-[#bf3688] font-bold underline hover:no-underline">020 8496 3130</a>.
                </p>
                <p className="text-gray-900 mb-3">
                  For mental health crisis support, call <strong>111</strong> and press option 2.
                </p>
                <p className="text-gray-900">
                  If there is immediate danger, call <strong>999</strong>.
                </p>
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