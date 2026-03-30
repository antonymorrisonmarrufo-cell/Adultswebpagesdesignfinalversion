import CarersHero from '../../../components/carers/CarersHero';
import { ArrowRight } from 'lucide-react';

const supportAreas = [
  {
    title: 'Get a carer\'s assessment',
    description: 'Find out what help you\'re entitled to. We look at your health, work, money, and caring tasks.',
    href: '#/carers/assessment',
    primary: true
  },
  {
    title: 'Money and benefits',
    description: 'Check what benefits you can claim, including Carer\'s Allowance and Council Tax reduction.',
    href: '#/carers/money-benefits'
  },
  {
    title: 'Breaks and respite',
    description: 'Get time away from caring. We can arrange replacement care or direct payments.',
    href: '#/carers/breaks-respite'
  },
  {
    title: 'Work and rights',
    description: 'Know your employment rights, flexible working, and help to stay in or return to work.',
    href: '#/carers/work-rights'
  },
  {
    title: 'Health and wellbeing',
    description: 'GP priority appointments, counselling, peer support groups, and health checks for carers.',
    href: '#/carers/health-wellbeing'
  },
  {
    title: 'Emergency planning',
    description: 'Create a plan for what happens if you can\'t care due to illness or emergency.',
    href: '#/carers/emergency-help'
  }
];

export default function AdultCarersHub() {
  return (
    <>
      <CarersHero 
        title="Adult Carers (18+)"
        description="If you care for a family member, friend, or neighbour aged 18 or over, you have a legal right to support. Get an assessment, find local services, and connect with other carers."
        chips={['AC', 'Get a carer\'s assessment', 'Professional referral']}
        urgentLink={{ text: 'Emergency help', href: '#/carers/emergency-help' }}
      />

      <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <section className="mb-12">
            <h2 className="text-[#EF3688] mb-6 font-bold text-3xl">What support is available?</h2>
            <p className="text-gray-700 mb-8 max-w-4xl text-lg">
              Caring can affect your health, work, relationships, and finances. We offer practical help, emotional support, 
              and connections to local groups. Your assessment is the starting point.
            </p>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportAreas.map((area, index) => (
                <a 
                  key={index}
                  href={area.href}
                  className={`p-6 rounded-lg transition-all block shadow-sm ${
                    area.primary 
                      ? 'bg-[#EF3688] text-white hover:bg-[#bf3688]' 
                      : 'bg-white border-2 border-gray-200 hover:border-[#EF3688] hover:shadow-lg'
                  }`}
                >
                  <h3 className={`font-bold text-xl ${area.primary ? 'text-white mb-3' : 'text-gray-900 mb-3'}`}>{area.title}</h3>
                  <p className={`text-sm mb-4 ${area.primary ? 'text-white opacity-90' : 'text-gray-700'}`}>
                    {area.description}
                  </p>
                  <div className="flex justify-end">
                    <ArrowRight className={`w-5 h-5 ${area.primary ? 'text-white' : 'text-[#EF3688]'}`} />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="bg-white border-2 border-[#EF3688] p-8 rounded-lg mb-12 shadow-sm">
            <h2 className="text-[#EF3688] mb-4 font-bold text-2xl">Am I eligible for support?</h2>
            <div className="space-y-4 text-gray-700 max-w-4xl">
              <p>You may be entitled to a carer&apos;s assessment if you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide care for someone who lives in Waltham Forest (or you live here yourself)</li>
                <li>Are caring regularly — this could be a few hours or many hours a week</li>
                <li>Are over 18 (young carers and parent carers have separate routes)</li>
              </ul>
              <p className="mt-6">
                <a href="#/carers/assessment" className="inline-flex items-center gap-2 text-[#EF3688] font-bold hover:underline">
                  Find out more and request an assessment <ArrowRight className="w-4 h-4" />
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#EF3688] mb-6 font-bold text-2xl">Who it's for</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-900 mb-3 font-bold">Family carers</h3>
                <p className="text-gray-700">Caring for a partner, parent, sibling, or other relative with health or care needs.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-900 mb-3 font-bold">Friend/neighbour carers</h3>
                <p className="text-gray-700">Helping someone you're not related to but care about and support regularly.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-900 mb-3 font-bold">Working carers</h3>
                <p className="text-gray-700">Balancing employment with caring. We can help with flexible working and rights.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}