import { ArrowLeft, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

const externalLinks = [
  {
    label: 'Crimestoppers',
    description: 'Crime prevention and anonymous reporting',
    href: 'https://crimestoppers-uk.org/'
  },
  {
    label: 'Metropolitan Police home security advice',
    description: 'Home security and crime prevention advice',
    href: 'https://www.met.police.uk/cp/crime-prevention/protect-home-crime/'
  },
  {
    label: 'Victim Support',
    description: 'Support for people affected by crime',
    href: 'https://www.victimsupport.org.uk/'
  },
  {
    label: 'London Fire Brigade home fire safety',
    description: 'Fire safety advice and home safety visits',
    href: 'https://www.london-fire.gov.uk/safety/the-home/'
  }
];

export default function FurtherInfoSafetyPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home" className="hover:underline">Keeping safe at home</a>
          <span className="mx-1">&gt;</span>
          <span>Further information about keeping your home safe</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Further information about keeping your home safe
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-12 text-base">
          Get clear home safety advice from Crimestoppers, the Met Police, Victim Support and the London Fire Brigade.
        </p>

        <div className="max-w-3xl space-y-0">

          {/* Trusted external support */}
          <div className="pb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Trusted external support</h2>
            <p className="text-gray-700 mb-6">
              These organisations have practical advice to help you keep yourself and your home safe:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                Crimestoppers for crime prevention and anonymous reporting
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                the Metropolitan Police for home security advice
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                Victim Support for people affected by crime
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                the London Fire Brigade for fire safety advice and home safety visits
              </li>
            </ul>

            {/* Link cards */}
            <div className="space-y-4">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 bg-gray-200 border border-gray-300 px-5 py-4 hover:bg-white hover:border-[#bf3688] transition-colors group"
                >
                  <div>
                    <p className="font-semibold text-[#bf3688] group-hover:underline text-sm mb-1">{link.label}</p>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                  <ExternalLink className="text-[#bf3688] flex-shrink-0 mt-0.5" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Previous navigation */}
          <div className="pt-10 border-t border-gray-200 flex justify-start">
            <a
              href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home/fire-safety-advice-for-your-home"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
            >
              <ArrowLeft size={18} />
              <span>Fire safety advice for your home</span>
            </a>
          </div>

        </div>

        {/* Metadata */}
        <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}