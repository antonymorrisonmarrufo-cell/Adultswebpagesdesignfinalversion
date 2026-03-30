import { ArrowRight, FileText } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';
import HelpOnlineForms from '../../components/transport/HelpOnlineForms';

const relatedLinks = [
  { title: 'Freedom Pass for older people', href: 'https://www.walthamforest.gov.uk/adult-social-care/help-getting-around/freedom-pass-older-people' },
  { title: 'Freedom Pass for disabled people', href: 'https://www.walthamforest.gov.uk/adult-social-care/help-getting-around/freedom-pass-disabled-people' },
  { title: 'Apply for a Blue Badge parking permit', href: 'https://www.walthamforest.gov.uk/parking-roads-and-travel/blue-badges-and-disabled-bays/apply-blue-badge-parking-permit' },
  { title: 'Apply for a Blue Badge for organisations', href: 'https://www.walthamforest.gov.uk/parking-roads-and-travel/blue-badges-and-disabled-bays/apply-blue-badge-organisations' },
  { title: 'Apply for a disabled parking bay', href: 'https://www.walthamforest.gov.uk/parking-roads-and-travel/blue-badges-and-disabled-bays/apply-disabled-parking-bay' },
];

export default function TaxicardPage() {
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
          <span>Taxicard scheme</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
            Taxicard scheme
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-2 text-base font-semibold">
            Reduced taxi fares for people who find it difficult to use public transport.
          </p>

          <div className="max-w-3xl mt-6 space-y-0">

            {/* Intro */}
            <div className="pb-10">
              <p className="text-gray-700 mb-4 font-medium">
                Taxicard offers subsidised travel in licensed taxis and private hire vehicles to residents with serious mobility impairments or who are severely sight impaired.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The scheme helps disabled people who cannot use the bus or Tube get out and about with subsidised taxi trips.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Double swiping */}
            <div className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Double swiping</h2>
              <p className="text-gray-700 mb-3 font-semibold">Waltham Forest allows double swiping for Taxicard holders.</p>
              <p className="text-gray-700 mb-3">Double swiping allows you to use two trip allocations to cover one longer journey.</p>
              <p className="text-gray-700 leading-relaxed">
                If you choose to double swipe, you will be charged double the minimum fare contribution and receive double the maximum subsidy for that journey.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* How to apply */}
            <div className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">How to apply for a Taxicard</h2>
              <p className="text-gray-700 mb-6 font-semibold">Visit London Councils to apply for a Taxicard.</p>
              <a
                href="https://www.londoncouncils.gov.uk/services/taxicard/apply-taxicard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 mb-6 shadow-sm"
              >
                Apply for a Taxicard
                <ArrowRight size={18} />
              </a>
              <p className="text-gray-700 mb-2 font-medium">
                If you meet the automatic criteria you will need to provide proof of your entitlement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You will also need proof that you are a permanent resident of the London Borough of Waltham Forest and a passport-size photograph.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Replacing a lost Taxicard */}
            <div className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Replacing a lost Taxicard</h2>
              <p className="text-gray-700 mb-6">
                To replace a lost Taxicard, download and complete the replacement form and return it to London Councils.
              </p>
              <a
                href="https://www.walthamforest.gov.uk/sites/default/files/2021-11/lost_taxicard.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gray-400 bg-white px-5 py-4 hover:bg-gray-50 hover:border-[#bf3688] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] group shadow-sm"
              >
                <FileText className="text-[#bf3688] flex-shrink-0" size={24} />
                <span className="text-gray-900 font-bold text-sm group-hover:text-[#bf3688] transition-colors">
                  Taxicard replacement form (PDF)
                </span>
                <ArrowRight className="text-[#bf3688] ml-8" size={20} />
              </a>
            </div>

            <hr className="border-gray-200" />

            {/* Contacting the Taxicard service */}
            <div className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Contacting the Taxicard service</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Taxicard service is operated by{' '}
                <a
                  href="https://www.londoncouncils.gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf3688] underline hover:no-underline font-bold"
                >
                  London Councils
                </a>{' '}
                on behalf of all the London boroughs.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.londoncouncils.gov.uk/taxicard?postcode=E17+4jf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold"
                >
                  <ArrowRight size={14} />
                  Taxicard service — Waltham Forest details
                </a>
                <div className="pt-1">
                  <a
                    href="https://www.londoncouncils.gov.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-bold"
                  >
                    <ArrowRight size={14} />
                    London Councils website
                  </a>
                </div>
              </div>
            </div>

            {/* Help with online forms */}
            <HelpOnlineForms />

            <hr className="border-gray-200 mt-10" />

            {/* Related links */}
            <div className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Related information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border border-gray-300 bg-white p-4 hover:shadow-md hover:border-[#bf3688] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] shadow-sm"
                  >
                    <span className="text-gray-900 text-sm font-bold group-hover:text-[#bf3688] transition-colors">{link.title}</span>
                    <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a02d73] transition-colors shadow-sm">
                      <ArrowRight className="text-white w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Metadata */}
          <div className="max-w-3xl pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
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