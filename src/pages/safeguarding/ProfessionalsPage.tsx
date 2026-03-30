import { ArrowRight, Phone } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const hubCards = [
  {
    title: 'Make a professional referral',
    body: 'Use this route to submit a safeguarding concern about an adult with care and support needs.',
    cta: 'Start professional referral',
    href: 'https://action-spider-46698300.figma.site/',
    external: true,
    primary: true,
  },
  {
    title: 'Read professional guidance',
    body: 'Read guidance on what information to include, when to refer, how agencies work together and where to find safeguarding policies, procedures and partnership resources.',
    cta: 'Read professional guidance',
    href: '#/adult-social-care/professional-guidance',
    external: false,
    primary: false,
  },
  {
    title: 'MARAC and related guidance',
    body: 'Read guidance on multi-agency risk processes, domestic abuse pathways and related safeguarding routes where these are relevant to professional practice.',
    cta: 'Read MARAC guidance',
    href: '#/adult-social-care/marac',
    external: false,
    primary: false,
  },
  {
    title: 'Safeguarding Adults Board (SAB)',
    body: 'Find safeguarding partnership information, policies, procedures, annual reports and wider adult safeguarding resources.',
    cta: 'Visit the Safeguarding Adults Board',
    href: '#/adult-social-care/safeguarding-adults-board',
    external: false,
    primary: false,
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/protecting-adults-at-risk" className="hover:underline">Protecting adults at risk of abuse</a>
          <span className="mx-1">&gt;</span>
          <span>Professionals and providers</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
          Professionals and providers
        </h1>

        {/* Intro */}
        <p className="text-gray-700 max-w-4xl mb-8 text-base">
          Use this page if you are making a safeguarding referral or need guidance as a professional, provider or partner organisation working with adults at risk.
        </p>

        {/* Emergency Alert */}
        <div className="bg-[#fcedf3] border-2 border-[#003078] bg-[#d7f8ff] px-6 py-5 mb-10 max-w-4xl">
          <div className="flex items-start gap-3">
            <Phone className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
            <div className="space-y-1 text-gray-900 text-sm">
              <p><strong>If someone is in immediate danger, call 999.</strong></p>
              <p>If you need urgent help outside normal office hours, contact the emergency duty team.</p>
            </div>
          </div>
        </div>

        {/* Notice: online referral only */}
        <div className="bg-gray-200 border border-gray-400 px-6 py-4 mb-10 max-w-4xl text-sm text-gray-700">
          <strong>For professionals:</strong> Adult safeguarding concerns must be submitted using the online referral form only. Do not use email as a referral route.
        </div>

        {/* Hub cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {hubCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              className={`group flex flex-col justify-between p-6 pb-20 relative border-2 hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] ${
                card.primary
                  ? 'border-[#bf3688] bg-[#fcedf3]'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div>
                <h2 className={`mb-3 font-bold text-lg ${card.primary ? 'text-[#bf3688]' : 'text-gray-900'}`}>
                  {card.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">{card.body}</p>
              </div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                <span className={`text-sm font-semibold ${card.primary ? 'text-[#bf3688]' : 'text-gray-700'}`}>
                  {card.cta}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#bf3688] group-hover:bg-[#a02d73] flex items-center justify-center flex-shrink-0 transition-colors">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Metadata */}
        <div className="max-w-4xl pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}