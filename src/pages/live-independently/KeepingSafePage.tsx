import { ArrowRight, Shield, Phone, Mail, Flame, Info } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const safetyCards = [
  {
    title: 'Callers to your door',
    icon: Shield,
    href: '#/adult-social-care/live-independently-at-home/keeping-safe-at-home/callers-to-your-door'
  },
  {
    title: 'Online, email or postal fraud',
    icon: Mail,
    href: '#/adult-social-care/live-independently-at-home/keeping-safe-at-home/online-email-or-postal-fraud'
  },
  {
    title: 'Fraud over the phone',
    icon: Phone,
    href: '#/adult-social-care/live-independently-at-home/keeping-safe-at-home/fraud-over-the-phone'
  },
  {
    title: 'Fire safety advice for your home',
    icon: Flame,
    href: '#/adult-social-care/live-independently-at-home/keeping-safe-at-home/fire-safety-advice-for-your-home'
  },
  {
    title: 'Further information about keeping your home safe',
    icon: Info,
    href: '#/adult-social-care/live-independently-at-home/keeping-safe-at-home/further-information-about-keeping-your-home-safe'
  }
];

export default function KeepingSafePage() {
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
          <span>Keeping safe at home</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Keeping safe at home
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          Practical advice to help you stay safe from scams, fraud, doorstep crime and fire risks at home.
        </p>

        {/* Intro copy */}
        <p className="text-gray-700 max-w-4xl mb-12">
          Use this section to find simple advice about common risks and where to get trusted help.
        </p>

        {/* Safety topic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {safetyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <a
                key={index}
                href={card.href}
                className="bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow relative block group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcedf3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#bf3688] transition-colors">
                    <Icon className="text-[#bf3688] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#bf3688] transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <ArrowRight className="text-[#bf3688] flex-shrink-0 mt-1" size={20} />
                </div>
              </a>
            );
          })}
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