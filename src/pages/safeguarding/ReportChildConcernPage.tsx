import { ArrowRight, Phone } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const cards = [
  { title: 'Report a concern about a child', body: 'Tell us if you think a child is being harmed, neglected or is at risk. You can report even if you are not sure.' },
  { title: 'Worried about a child in your family', body: 'Find out about early help, family support services and what happens when a concern is raised.' },
  { title: 'Professionals — make a child safeguarding referral', body: "Guidance for professionals making a referral to children's services." },
  { title: 'What happens after a referral', body: "Learn what happens when a concern about a child is received by children's services." },
];

export default function ReportChildConcernPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        <nav className="text-sm text-gray-600 mb-6">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#" className="hover:underline">Children and families</a>
          <span className="mx-1">&gt;</span>
          <span>Report a concern about a child</span>
        </nav>

        <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">Report a concern about a child</h1>

        <p className="text-gray-700 max-w-4xl mb-8 text-base">
          Use this page if you are worried that a child is being harmed, neglected or is not safe.
        </p>

        <div className="bg-[#fcedf3] border-2 border-[#003078] bg-[#d7f8ff] px-6 py-5 mb-10 max-w-4xl">
          <div className="flex items-start gap-3">
            <Phone className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
            <div className="space-y-1 text-gray-900 text-sm">
              <p><strong>If a child is in immediate danger, call 999.</strong></p>
              <p>If you are worried about an adult, <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#bf3688] underline hover:no-underline">use the adult safeguarding route</a>.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 pb-16 relative">
              <h2 className="text-gray-900 font-bold text-lg mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.body}</p>
              <div className="absolute right-5 bottom-5 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

      </section>
      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}