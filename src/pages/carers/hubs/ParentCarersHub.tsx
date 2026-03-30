import CarersHero from '../../../components/carers/CarersHero';
import Callout from '../../../components/carers/Callout';
import { ArrowRight } from 'lucide-react';

const quickLinks = [
  { title: 'Short breaks for your child', href: '#/carers/breaks-respite' },
  { title: 'Money and benefits', href: '#/carers/money-benefits' },
  { title: 'Emergency and crisis planning', href: '#/carers/emergency-help' },
  { title: 'Health and wellbeing support', href: '#/carers/health-wellbeing' },
  { title: 'SEND support at school', href: '#' },
  { title: 'Connect with other parent carers', href: '#/carers/contacts' }
];

export default function ParentCarersHub() {
  return (
    <>
      <CarersHero 
        title="Parent Carers"
        description="Caring for a disabled child or young person brings unique challenges. Get assessment, support, and connections with other parent carers who understand."
        chips={['PC', 'Get a parent carer\'s assessment', 'Professional referral']}
        urgentLink={{ text: 'Crisis help', href: '#/carers/emergency-help' }}
      />

      <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Callout type="info" title="What is a parent carer's assessment?">
            <p>
              It&apos;s a conversation about your needs as a carer — your health, work, sleep, and the support you need to care well. 
              It&apos;s separate from your child&apos;s assessment and focuses on <strong>you</strong>.
            </p>
          </Callout>

          <section className="my-12">
            <h2 className="text-[#bf3688] mb-6 font-bold text-3xl">Who can help</h2>
            <p className="text-gray-700 mb-8 max-w-4xl text-lg">
              Request a parent carer&apos;s assessment from Adult Social Care. If your child has complex needs, you may also work with 
              Children&apos;s Services, health teams, and the SEND team. We&apos;ll coordinate everything together.
            </p>
            
            <div className="bg-white border-2 border-[#bf3688] p-8 rounded-lg mb-8 shadow-sm">
              <h3 className="text-gray-900 mb-4 font-bold text-2xl">Ready to get started?</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#/carers/assessment" className="bg-[#bf3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors font-bold">
                  Request a parent carer&apos;s assessment
                </a>
                <a href="#/carers/assessment" className="bg-white border-2 border-[#bf3688] text-[#bf3688] px-6 py-3 rounded-lg hover:bg-[#FFF0F7] transition-colors font-bold">
                  Professional referral form
                </a>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">Quick links for parent carers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between group shadow-sm"
                >
                  <span className="text-gray-900 font-semibold">{link.title}</span>
                  <ArrowRight className="w-5 h-5 text-[#bf3688] group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </section>

          <Callout type="urgent" title="Crisis support available 24/7">
            <p className="mb-2">If you&apos;re at breaking point or your child is in crisis:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Call our emergency duty team: <a href="tel:02084963130" className="text-[#bf3688] font-bold hover:underline">020 8496 3130</a> (out of hours)</li>
              <li>Contact <a href="tel:999" className="text-[#bf3688] font-bold hover:underline">999</a> if there&apos;s immediate danger</li>
              <li>See our <a href="#/carers/emergency-help" className="text-[#bf3688] font-bold hover:underline">full crisis plan guidance</a></li>
            </ul>
          </Callout>
        </div>
      </section>
    </>
  );
}