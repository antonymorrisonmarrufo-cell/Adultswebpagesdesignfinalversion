import { useState } from 'react';
import { ArrowRight, FileText, Phone, Mail, MapPin } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';
import HelpOnlineForms from '../../components/transport/HelpOnlineForms';

const sections = [
  { id: 'eligibility', label: 'Are you eligible for a Blue Badge?' },
  { id: 'apply', label: 'Apply or renew a Blue Badge' },
  { id: 'using', label: 'Using your Blue Badge' },
  { id: 'replace', label: 'Replace a lost, stolen or damaged badge' },
  { id: 'appeal', label: 'Appeal a Blue Badge decision' },
];

const autoEligible = [
  'are registered severely sight impaired',
  'get the higher rate of the mobility component of Disability Living Allowance (DLA)',
  'get Personal Independence Payment (PIP) Mobility Component and score 8 points or more for the "Moving Around" activity',
  'get Personal Independence Payment (PIP) Mobility Component and score 10 points specifically because you cannot undertake any journey because it would cause overwhelming psychological distress',
  'get War Pensioners Mobility Supplement',
  'have received a qualifying Armed Forces and Reserve Forces Compensation Scheme lump sum and certification of a permanent and substantial disability causing inability to walk or very considerable difficulty walking',
];

const mayBeEligible = [
  'are unable to walk or have considerable difficulty in walking',
  'have a non-visible disability that causes very considerable difficulty or serious risk when walking',
  'have a child under 3 with a medical condition requiring proximity to a vehicle or bulky medical equipment',
  'are terminally ill with a progressive disease and are not expected to live more than 12 months',
  'have a severe disability in both arms and cannot operate some or all parking meters',
];

const beforeYouStart = [
  'a recent passport-size photo showing your head and shoulders',
  'proof of identity, such as a passport, birth certificate or driving licence',
  'proof of address, such as a Council Tax bill or government letter',
  'proof of benefits, if you get any',
  'your National Insurance number, if you have one',
  'details of your current Blue Badge, if you are renewing',
];

function ApplyCTA() {
  return (
    <a
      href="https://www.gov.uk/apply-blue-badge"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
    >
      Start your application
      <ArrowRight size={18} />
    </a>
  );
}

export default function BlueBadgePage() {
  const [activeSection, setActiveSection] = useState('eligibility');

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
          <a href="#/adult-social-care/travel-and-transport" className="hover:underline">Travel and transport</a>
          <span className="mx-1">&gt;</span>
          <span>Apply or renew a Blue Badge</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm">
          {/* H1 */}
          <h1 className="text-5xl text-[#00635C] mb-3 font-bold leading-tight">
            Apply or renew a Blue Badge
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-2 text-base font-semibold">
            Blue Badges help people with disabilities or health conditions park closer to their destination.
          </p>
          <p className="text-gray-700 max-w-4xl mb-6 text-base">
            You can apply for a badge for yourself, on behalf of somebody else, or for an organisation that transports people who need a Blue Badge.
          </p>

          {/* Primary CTA */}
          <div className="mb-6 flex flex-wrap gap-4 items-center">
            <ApplyCTA />
            <a
              href="https://www.figma.com/make/HfSZHxAa97T4Ckss7gE5la/Disabilities-and-specialist-support?p=f&t=LflrHaLP8jjnmof1-0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
            >
              Apply or renew an organisation Blue Badge
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mt-10">

            {/* Sticky side nav — desktop */}
            <aside className="lg:w-72 flex-shrink-0">
              {/* Mobile: stacked nav buttons */}
              <div className="lg:hidden mb-8">
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">On this page</p>
                <div className="space-y-1">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left px-4 py-2 text-sm border-l-4 transition-colors ${
                        activeSection === s.id
                          ? 'border-[#D61F69] text-[#D61F69] font-bold bg-[#FADADD]'
                          : 'border-gray-200 text-gray-700 hover:border-[#D61F69] hover:text-[#D61F69]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop sticky nav */}
              <div className="hidden lg:block sticky top-6">
                <p className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">On this page</p>
                <nav className="space-y-0.5">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left px-4 py-3 text-sm border-l-4 transition-colors ${
                        activeSection === s.id
                          ? 'border-[#D61F69] text-[#D61F69] font-bold bg-pink-50'
                          : 'border-gray-300 text-gray-700 hover:border-[#D61F69] hover:text-[#D61F69] hover:bg-gray-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 max-w-3xl space-y-0">

              {/* Section 1 */}
              <div id="eligibility" className="scroll-mt-6 pb-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Are you eligible for a Blue Badge?</h2>
                <p className="text-gray-700 mb-4">
                  A Blue Badge allows some disabled people to park closer to their destination, as they are less able to walk long distances or take public transport.
                </p>
                <p className="text-gray-700 mb-6">
                  This does not include temporary conditions that are likely to get better in the 3 years the badge is issued for.
                </p>

                <h3 className="font-bold text-gray-900 mb-3">You may be automatically eligible if you:</h3>
                <ul className="space-y-2 mb-6">
                  {autoEligible.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-gray-900 mb-3">You may still be eligible if you:</h3>
                <ul className="space-y-2 mb-6">
                  {mayBeEligible.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.gov.uk/government/publications/blue-badge-can-i-get-one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D61F69] underline hover:no-underline text-sm font-bold"
                >
                  More information about eligibility
                  <ArrowRight size={14} />
                </a>
              </div>

              <hr className="border-gray-200" />

              {/* Section 2 */}
              <div id="apply" className="scroll-mt-6 py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Apply or renew a Blue Badge</h2>
                <p className="text-gray-700 mb-4 font-semibold">Before you start, you will need:</p>
                <ul className="space-y-2 mb-6">
                  {beforeYouStart.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mb-6">Once your application is approved, you will be asked to pay for your badge.</p>
                <ApplyCTA />
              </div>

              <hr className="border-gray-200" />

              {/* Section 3 */}
              <div id="using" className="scroll-mt-6 py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Using your Blue Badge</h2>
                <p className="text-gray-700 mb-2 font-semibold">Use your badge only when the person it belongs to is travelling.</p>
                <p className="text-gray-700 mb-2">Read the rules carefully before using your badge.</p>
                <p className="text-gray-700 mb-6">If you misuse a badge, it may be withdrawn and enforcement action may be taken.</p>
                <div className="space-y-3">
                  <a
                    href="https://www.walthamforest.gov.uk/parking-roads-and-travel/blue-badges-and-disabled-bays/apply-disabled-parking-bay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-bold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
                  >
                    Apply for a disabled parking bay
                    <ArrowRight size={18} />
                  </a>
                  <div className="pt-2">
                    <a
                      href="https://www.walthamforest.gov.uk/parking-roads-and-travel/car-parks-and-street-parking/request-parking-enforcement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#D61F69] underline hover:no-underline text-sm font-bold"
                    >
                      <ArrowRight size={14} />
                      Request parking enforcement
                    </a>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Section 4 */}
              <div id="replace" className="scroll-mt-6 py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Replace a lost, stolen or damaged badge</h2>
                <p className="text-gray-700 leading-relaxed">
                  If your Blue Badge has been lost, stolen or damaged, contact the Mobility Team for advice about replacement.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Section 5 */}
              <div id="appeal" className="scroll-mt-6 py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Appeal a Blue Badge decision</h2>
                <p className="text-gray-700 leading-relaxed">
                  If your application is refused and you think the decision is wrong, contact the Mobility Team to ask about the review or appeal process.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Contact box */}
              <div className="py-10">
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Contact details</h2>
                <div className="bg-white border border-gray-300 p-6 space-y-4 shadow-sm">
                  <div className="flex items-start gap-3 text-sm text-gray-700">
                    <MapPin className="text-[#D61F69] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Mobility Services — Waltham Forest</p>
                      <p>PO Box 459</p>
                      <p>Hartlepool</p>
                      <p>TS24 4JD</p>
                      <p className="mt-2 text-gray-500 italic">Postal address only — we are unable to see personal callers.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Phone className="text-[#D61F69] flex-shrink-0" size={18} />
                    <span className="font-semibold text-gray-900">Telephone: <a href="tel:02084963130" className="text-[#D61F69] underline hover:no-underline font-bold">020 8496 3130</a></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Mail className="text-[#D61F69] flex-shrink-0" size={18} />
                    <a href="mailto:walthamforest.mobilityservices@necsws.com" className="text-[#D61F69] underline hover:no-underline font-bold">
                      walthamforest.mobilityservices@necsws.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Help with online forms */}
              <HelpOnlineForms />

            </div>
          </div>

          {/* Metadata */}
          <div className="max-w-4xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
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