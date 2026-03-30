import CarersHero from '../../../components/carers/CarersHero';
import Callout from '../../../components/carers/Callout';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Can I claim Carer\'s Allowance if I work?',
    answer: 'Yes, as long as you earn £139 or less a week after tax, National Insurance, and expenses. This is about 16 hours at minimum wage. If you earn more, you may still get other carer benefits.'
  },
  {
    question: 'Will Carer\'s Allowance affect the person I care for?',
    answer: 'It might. If they get Severe Disability Premium, they could lose it when you claim Carer\'s Allowance. Check with a benefits advisor first to make sure you\'re both better off.'
  },
  {
    question: 'What if I care for more than one person?',
    answer: 'You can only get one Carer\'s Allowance even if you care for multiple people. But other benefits like Council Tax Reduction still apply, and each person you care for may qualify for their own disability benefits.'
  },
  {
    question: 'I\'m on Universal Credit — can I still claim as a carer?',
    answer: 'You can\'t get Carer\'s Allowance and Universal Credit at the same time, but Universal Credit includes a Carer Element (£198.44/month extra). Tell your work coach you\'re a carer.'
  },
  {
    question: 'Do I have to pay Council Tax if I\'m a carer?',
    answer: 'You may get a reduction or exemption. If you live with the person you care for, you might be "disregarded" for Council Tax purposes. Apply through our Council Tax team.'
  }
];

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-200 transition-colors"
      >
        <span className="text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#EF3688] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function MoneyBenefitsPage() {
  return (
    <>
      <CarersHero 
        title="Money and benefits"
        description="Find out what benefits you can claim as a carer, get a benefits check, and learn about Council Tax reductions and financial support."
        chips={['PC', 'AC']}
        urgentLink={{ text: 'Emergency financial help', href: '#/carers/emergency-help' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-[#EF3688] mb-6">Check what you can claim</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Many carers don't claim benefits they're entitled to. Use our free benefits calculator to see what you could get.
              </p>
              
              <div className="bg-gradient-to-br from-[#FFF0F7] to-white p-6 rounded-lg mb-8">
                <h3 className="text-gray-900 mb-4">Free benefits check</h3>
                <p className="text-gray-700 mb-4">
                  Answer a few questions online and find out which benefits you qualify for. Takes about 10 minutes.
                </p>
                <button className="bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors">
                  Start benefits calculator
                </button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-[#EF3688] mb-6">Main benefits for carers</h2>
              
              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <h3 className="text-gray-900 mb-2">Carer&apos;s Allowance</h3>
                  <p className="text-[#EF3688] mb-3">£81.90 per week (2024/25)</p>
                  <p className="text-gray-700 mb-3">
                    The main benefit for carers. You must care for someone at least 35 hours a week, and they must get certain disability benefits.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>You can't earn more than £139/week after deductions</li>
                    <li>You must be 16+ and not in full-time education</li>
                    <li>Claim through GOV.UK or call 0800 731 0297</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <h3 className="text-gray-900 mb-2">Council Tax Reduction</h3>
                  <p className="text-gray-700 mb-3">
                    You may get up to 100% off your Council Tax if you're on a low income or benefits. Carers sometimes qualify for extra discounts.
                  </p>
                  <a href="#" className="text-[#EF3688] hover:underline text-sm">Apply for Council Tax Reduction →</a>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <h3 className="text-gray-900 mb-2">Pension Credit (if you're over State Pension age)</h3>
                  <p className="text-gray-700 mb-3">
                    If you've reached State Pension age and have a low income, Pension Credit tops up your money. Carers can get an extra amount.
                  </p>
                  <a href="#" className="text-[#EF3688] hover:underline text-sm">Check Pension Credit eligibility →</a>
                </div>
              </div>
            </section>

            <Callout type="info" title="Benefits advice services">
              <p className="mb-2">Get free, confidential advice from local experts:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Citizen's Advice Waltham Forest:</strong> 0808 278 7835</li>
                <li><strong>Age UK Waltham Forest:</strong> Benefits advice for older carers</li>
                <li><strong>Carers First:</strong> 0300 303 1555 (carer-specific benefits advice)</li>
              </ul>
            </Callout>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">Top questions about money and benefits</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-[#FFF0F7] p-6 rounded-lg">
                <h3 className="text-[#EF3688] mb-4">Quick links</h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-gray-700 hover:text-[#EF3688]">Benefits calculator</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-[#EF3688]">Claim Carer&apos;s Allowance</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-[#EF3688]">Council Tax Reduction</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-[#EF3688]">Book benefits advice appointment</a></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EF3688] p-6 rounded-lg">
                <h3 className="text-gray-900 mb-3">Financial crisis?</h3>
                <p className="text-gray-700 text-sm mb-4">If you can't afford food, heating, or essentials:</p>
                <a href="#/carers/emergency-help" className="text-[#EF3688] hover:underline text-sm">
                  Emergency financial help →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}