import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';
import HelpOnlineForms from '../../components/transport/HelpOnlineForms';

const whatItCovers = [
  'most public transport in London 24 hours a day',
  'most National Rail services within the London area after 9.30am and all day at weekends and on public holidays',
  'local bus services in the rest of England',
];

export default function FreedomPassOlderPage() {
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
          <span>Freedom Pass for older people</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
          {/* H1 */}
          <h1 className="text-5xl text-[#00635C] mb-3 font-bold leading-tight">
            Freedom Pass for older people
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
            Free travel on most public transport in London for older people.
          </p>

          {/* Primary CTA */}
          <div className="mb-10">
            <a
              href="https://www.freedompass.org/apply-pass/older-persons-freedom-pass/apply-older-persons-freedom-pass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 font-bold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
            >
              Apply for a Freedom Pass for older people online
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="max-w-3xl space-y-0">

            {/* What it covers */}
            <div className="pb-10">
              <p className="text-gray-700 mb-4 font-semibold">The Freedom Pass for older people gives free travel on:</p>
              <ul className="space-y-3">
                {whatItCovers.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* Eligibility */}
            <div className="py-10">
              <h2 className="text-[#D61F69] font-bold text-2xl mb-4">Eligibility</h2>
              <p className="text-gray-700 mb-4 font-semibold">You can apply for the older person's Freedom Pass if:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                  you meet the age criteria
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                  your sole or main residence is in the London Borough of Waltham Forest
                </li>
              </ul>

              <div className="space-y-3">
                <a
                  href="https://www.freedompass.org/concessionary-travel/passengers/older-persons-freedom-pass/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#D61F69] underline hover:no-underline text-sm font-bold"
                >
                  <ArrowRight size={14} />
                  Check you meet the age criteria
                </a>
                <div className="pt-1">
                  <a
                    href="https://tfl.gov.uk/fares/free-and-discounted-travel/60-plus-oyster-photocard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#D61F69] underline hover:no-underline text-sm font-bold"
                  >
                    <ArrowRight size={14} />
                    TfL 60+ London Oyster Photocard
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href="https://www.freedompass.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#D61F69] underline hover:no-underline text-sm font-bold"
                  >
                    <ArrowRight size={14} />
                    Freedom Pass website
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href="https://www.londoncouncils.gov.uk/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#D61F69] underline hover:no-underline text-sm font-bold"
                  >
                    <ArrowRight size={14} />
                    London Councils contact details
                  </a>
                </div>
              </div>
            </div>

            {/* Help with online forms */}
            <HelpOnlineForms />

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