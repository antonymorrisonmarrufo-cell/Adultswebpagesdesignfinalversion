import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const cards = [
  {
    title: 'Apply or renew a Blue Badge',
    summary: 'Apply for or renew a Blue Badge if a disability or health condition makes walking difficult.',
    href: '#/adult-social-care/travel-and-transport/blue-badge',
  },
  {
    title: 'Freedom Pass for disabled people',
    summary: 'Free travel on most public transport in London if you\'re eligible because of a disability.',
    href: '#/adult-social-care/travel-and-transport/freedom-pass-disabled',
  },
  {
    title: 'Taxicard scheme',
    summary: 'Apply for subsidised taxi journeys if you cannot easily use public transport.',
    href: '#/adult-social-care/travel-and-transport/taxicard',
  },
  {
    title: 'Freedom Pass for older people',
    summary: 'Free travel on most public transport in London if you\'ve reached the eligible age.',
    href: '#/adult-social-care/travel-and-transport/freedom-pass-older',
  },
  {
    title: 'Transport and mobility support',
    summary: 'Find Dial-a-Ride, community transport, Motability and help with NHS travel costs.',
    href: '#/adult-social-care/travel-and-transport/transport-mobility-support',
  },
  {
    title: 'Blue Badge for organisations',
    summary: 'Apply for or renew an organisation Blue Badge if you regularly transport people who would qualify for a Blue Badge.',
    href: '#/adult-social-care/travel-and-transport/blue-badge-organisations',
  },
];

export default function TravelTransportPage() {
  return (
    <>
      <section className="bg-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <a href="#/adult-social-care" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <span>Travel and transport</span>
          </nav>

          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
            Travel and transport
          </h1>

          {/* Intro */}
          <p className="text-gray-700 max-w-4xl mb-10 text-base">
            Find Freedom Passes, Blue Badge parking, Taxicard and other travel support, including community transport, Dial-a-Ride and mobility help.
          </p>

          {/* Section heading */}
          <h2 className="text-[#bf3688] font-bold text-xl mb-8">Topics in this section</h2>

          {/* 2×3 card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="group bg-white border border-gray-200 shadow-sm p-6 pb-16 hover:shadow-md transition-shadow relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688]"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.summary}</p>
                <div className="absolute right-5 bottom-5 w-10 h-10 rounded-full bg-[#bf3688] group-hover:bg-[#a02d73] flex items-center justify-center transition-colors">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}