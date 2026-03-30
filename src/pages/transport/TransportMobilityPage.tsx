import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const anchorSections = [
  { id: 'public-transport', label: 'Using public transport with a disability' },
  { id: 'discounts', label: 'Travel discounts and passes' },
  { id: 'nhs-travel', label: 'NHS help with travel costs' },
  { id: 'community', label: 'Community transport schemes' },
  { id: 'cars', label: 'Cars, parking and Motability' },
  { id: 'related', label: 'Related links' },
];

const publicTransportPoints = [
  'buses and trains usually have priority seating and wheelchair space',
  'some services have ramps, though staff assistance may still be needed',
  'the Underground is being upgraded for better step-free access',
  'the DLR and London trams are step-free',
];

const communityLinks = [
  { label: 'Community Transport Waltham Forest', href: 'https://communitytransportwf.co.uk/' },
  { label: 'Get Up and Go', href: 'https://communitytransportwf.co.uk/services/get-up-and-go/' },
  { label: 'Door to Store', href: 'https://communitytransportwf.co.uk/services/get-up-and-go/door-to-store/' },
  { label: 'Excursion Club', href: 'https://communitytransportwf.co.uk/services/get-up-and-go/excursion-club/' },
];

const carsLinks = [
  { label: 'Apply for a Blue Badge parking permit', href: 'https://www.walthamforest.gov.uk/parking-roads-and-travel/blue-badges-and-disabled-bays/apply-blue-badge-parking-permit' },
  { label: 'Apply for a disabled parking bay', href: 'https://www.walthamforest.gov.uk/parking-roads-and-travel/blue-badges-and-disabled-bays/apply-disabled-parking-bay' },
  { label: 'GOV.UK vehicle tax', href: 'https://www.gov.uk/vehicle-tax' },
  { label: 'GOV.UK help with vehicles and transport', href: 'https://www.gov.uk/financial-help-disabled/vehicles-and-transport' },
  { label: 'Motability', href: 'https://www.motability.co.uk/' },
];

const relatedLinks = [
  { label: 'Taxicard scheme', href: 'https://www.walthamforest.gov.uk/adult-social-care/help-getting-around/taxicard-scheme' },
  { label: 'Freedom Pass for older people', href: 'https://www.walthamforest.gov.uk/adult-social-care/help-getting-around/freedom-pass-older-people' },
  { label: 'Freedom Pass for disabled people', href: 'https://www.walthamforest.gov.uk/adult-social-care/help-getting-around/freedom-pass-disabled-people' },
  { label: 'Request parking enforcement', href: 'https://www.walthamforest.gov.uk/parking-roads-and-travel/car-parks-and-street-parking/request-parking-enforcement' },
];

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="space-y-3">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-semibold"
        >
          <ArrowRight size={14} className="flex-shrink-0" />
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function TransportMobilityPage() {
  const [activeSection, setActiveSection] = useState('public-transport');

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          <a href="#/adult-social-care/travel-and-transport" className="hover:underline">Travel and transport</a>
          <span className="mx-1">&gt;</span>
          <span>Transport and mobility support</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
            Transport and mobility support
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-10 text-base font-semibold">
            Find support if buses, trains and standard travel options are difficult because of mobility issues.
          </p>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sticky side nav */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:hidden mb-8">
                <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">On this page</p>
                <div className="space-y-1">
                  {anchorSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left px-4 py-2 text-sm border-l-4 transition-colors ${
                        activeSection === s.id
                          ? 'border-[#bf3688] text-[#bf3688] font-bold bg-[#fcedf3]'
                          : 'border-gray-200 text-gray-700 hover:border-[#bf3688] hover:text-[#bf3688]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block sticky top-6">
                <p className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">On this page</p>
                <nav className="space-y-0.5">
                  {anchorSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left px-4 py-3 text-sm border-l-4 transition-colors ${
                        activeSection === s.id
                          ? 'border-[#bf3688] text-[#bf3688] font-bold bg-pink-50'
                          : 'border-gray-300 text-gray-700 hover:border-[#bf3688] hover:text-[#bf3688] hover:bg-gray-100'
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
              <div id="public-transport" className="scroll-mt-6 pb-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Using public transport with a disability</h2>
                <p className="text-gray-700 mb-4 font-medium">
                  Public transport is becoming more accessible for disabled and older people, but it is still worth checking with the operator before you travel if you need assistance.
                </p>
                <ul className="space-y-2 mb-6">
                  {publicTransportPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <a href="https://tfl.gov.uk/transport-accessibility/wheelchair-access-and-avoiding-stairs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                    <ArrowRight size={14} />TfL step-free access
                  </a>
                  <div className="pt-1">
                    <a href="https://tfl.gov.uk/modes/dlr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                      <ArrowRight size={14} />DLR
                    </a>
                  </div>
                  <div className="pt-1">
                    <a href="https://tfl.gov.uk/modes/trams/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                      <ArrowRight size={14} />London trams
                    </a>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Section 2 */}
              <div id="discounts" className="scroll-mt-6 py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Travel discounts and passes</h2>
                <p className="text-gray-700 mb-6 font-semibold">Older people and disabled people may be able to get free or discounted travel.</p>
                <div className="space-y-3">
                  <a href="https://www.walthamforest.gov.uk/adult-social-care/help-getting-around/freedom-pass-older-people" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                    <ArrowRight size={14} />Freedom Pass for older people
                  </a>
                  <div className="pt-1">
                    <a href="https://www.walthamforest.gov.uk/adult-social-care/help-getting-around/freedom-pass-disabled-people" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                      <ArrowRight size={14} />Freedom Pass for disabled people
                    </a>
                  </div>
                  <div className="pt-1">
                    <a href="https://www.disabledpersons-railcard.co.uk/are-you-eligible/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                      <ArrowRight size={14} />Disabled Persons Railcard
                    </a>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Section 3 */}
              <div id="nhs-travel" className="scroll-mt-6 py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">NHS help with travel costs</h2>
                <p className="text-gray-700 mb-6 font-semibold">
                  You may be able to get help with travel costs for hospital or NHS-funded treatment if you are on a low income or certain benefits.
                </p>
                <div className="space-y-3">
                  <a href="https://www.nhs.uk/nhs-services/help-with-health-costs/healthcare-travel-costs-scheme-htcs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                    <ArrowRight size={14} />Healthcare Travel Costs Scheme
                  </a>
                  <div className="pt-1">
                    <a href="https://www.nhsbsa.nhs.uk/nhs-low-income-scheme" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold">
                      <ArrowRight size={14} />NHS Low Income Scheme
                    </a>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Section 4 */}
              <div id="community" className="scroll-mt-6 py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Community transport schemes</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Community Transport Waltham Forest offers local support for residents with mobility needs, including shopping trips and social outings.
                </p>
                <LinkList links={communityLinks} />
              </div>

              <hr className="border-gray-200" />

              {/* Section 5 */}
              <div id="cars" className="scroll-mt-6 py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Cars, parking and Motability</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If you have mobility problems and need a car or similar powered vehicle to get around, you may be able to get support with costs or parking.
                </p>
                <LinkList links={carsLinks} />
              </div>

              <hr className="border-gray-200" />

              {/* Section 6 — Related links */}
              <div id="related" className="scroll-mt-6 py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Related links</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 border border-gray-300 bg-white p-4 hover:shadow-md hover:border-[#bf3688] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] shadow-sm"
                    >
                      <span className="text-gray-900 text-sm font-bold group-hover:text-[#bf3688] transition-colors">{link.label}</span>
                      <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a02d73] transition-colors shadow-sm">
                        <ArrowRight className="text-white w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Metadata */}
          <div className="max-w-4xl mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
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