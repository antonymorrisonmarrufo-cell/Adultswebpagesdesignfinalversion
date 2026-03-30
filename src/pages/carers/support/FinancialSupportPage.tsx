import { Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-2 border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#bf3688] transition-transform flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FinancialSupportPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#bf3688] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#bf3688] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer" className="text-[#bf3688] hover:underline">Being a carer</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer/support-for-carers" className="text-[#bf3688] hover:underline">Support for carers</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Financial support</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Page Title and Standfirst */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Financial support for carers</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Find out about benefits, discounts, grants and where to get help with money worries.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://www.carersfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Get benefits and money advice
          </a>
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Request a carer's assessment
          </a>
        </div>

        {/* Contents Block */}
        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#carers-allowance" className="text-[#bf3688] underline hover:no-underline">Carer's Allowance</a></li>
            <li><a href="#carers-credit" className="text-[#bf3688] underline hover:no-underline">Carer's Credit</a></li>
            <li><a href="#council-tax" className="text-[#bf3688] underline hover:no-underline">Council Tax and other discounts</a></li>
            <li><a href="#grants" className="text-[#bf3688] underline hover:no-underline">Grants and extra help</a></li>
            <li><a href="#faqs" className="text-[#bf3688] underline hover:no-underline">Common questions about benefits</a></li>
            <li><a href="#get-advice" className="text-[#bf3688] underline hover:no-underline">Get advice</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          
          {/* Carer's Allowance */}
          <div id="carers-allowance" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Carer's Allowance</h2>
            <p className="text-gray-700 mb-4">
              Carer's Allowance is a benefit you may be able to claim if you care for someone for 35 hours or more a week.
            </p>
            <p className="text-gray-700 mb-4">
              The person you care for must be receiving certain disability benefits, such as Personal Independence Payment (PIP) or Attendance Allowance.
            </p>
            <p className="text-gray-700 mb-4">
              You do not need to be related to the person you care for or live with them to claim.
            </p>
            <div className="bg-white border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-4">
              <h3 className="font-bold text-gray-900 mb-2">How much is Carer's Allowance?</h3>
              <p className="text-gray-700 mb-2"><strong>£81.90 per week</strong> (2024/25)</p>
              <p className="text-gray-700 text-sm">You must care for someone at least 35 hours a week, and they must get certain disability benefits. You can't earn more than £139/week after deductions. You must be 16+ and not in full-time education.</p>
            </div>
            <p className="text-gray-700 mb-4">
              <a href="https://www.gov.uk/carers-allowance" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Find out more and apply for Carer's Allowance on GOV.UK</a>
            </p>
          </div>

          {/* Carer's Credit */}
          <div id="carers-credit" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Carer's Credit</h2>
            <p className="text-gray-700 mb-4">
              Carer's Credit helps protect your State Pension if you are caring for someone for 20 hours or more a week.
            </p>
            <p className="text-gray-700 mb-4">
              It fills gaps in your National Insurance record so caring does not reduce your future pension.
            </p>
            <p className="text-gray-700 mb-4">
              You can claim Carer's Credit even if you do not qualify for Carer's Allowance.
            </p>
            <p className="text-gray-700 mb-4">
              <a href="https://www.gov.uk/carers-credit" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Find out more about Carer's Credit on GOV.UK</a>
            </p>
          </div>

          {/* Council Tax and other discounts */}
          <div id="council-tax" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Council Tax and other discounts</h2>
            <p className="text-gray-700 mb-4">
              You may be able to get help with Council Tax if you are on a low income or receive certain benefits.
            </p>
            <p className="text-gray-700 mb-4">
              In some cases, you may be entitled to a reduction if you live with someone who needs care.
            </p>
            <div className="bg-white border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-4">
              <h3 className="font-bold text-gray-900 mb-2">Council Tax Reduction</h3>
              <p className="text-gray-700 mb-3">You may get up to 100% off your Council Tax if you're on a low income or benefits. Carers sometimes qualify for extra discounts.</p>
              <a href="#" className="text-[#bf3688] underline hover:no-underline font-semibold">Apply for Council Tax Reduction</a>
            </div>
            <p className="text-gray-700 mb-4">
              Contact the council to check if you are eligible for support.
            </p>
          </div>

          {/* Grants and extra help */}
          <div id="grants" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Grants and extra help</h2>
            <p className="text-gray-700 mb-4">
              Some charitable trusts and local funds offer small grants to carers for one-off costs or emergencies.
            </p>
            <p className="text-gray-700 mb-4">
              These may help with things like household bills, equipment, or a short break.
            </p>
            <p className="text-gray-700 mb-4">
              Carers First and local advice services can help you find out what may be available.
            </p>
          </div>

          {/* FAQs */}
          <div id="faqs" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-6">Common questions about benefits</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          {/* Get advice */}
          <div id="get-advice" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Get advice</h2>
            <p className="text-gray-700 mb-4">
              If you are worried about money or not sure what you may be entitled to, free advice is available.
            </p>
            <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-6">
              <h3 className="text-[#bf3688] font-bold text-lg mb-3">Benefits advice services</h3>
              <p className="text-gray-900 mb-4">Get free, confidential advice from local experts:</p>
              <ul className="space-y-2 text-gray-900">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                  <span><strong>Citizens Advice Waltham Forest:</strong> 0808 278 7835</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                  <span><strong>Age UK Waltham Forest:</strong> Benefits advice for older carers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                  <span><strong>Carers First:</strong> 0300 303 1555 (carer-specific benefits advice)</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-4">
              <h3 className="text-[#bf3688] font-bold text-lg mb-3">Carers First</h3>
              <p className="text-gray-900 mb-2">
                Carers First can help you understand what benefits you may be able to claim and support you through the process.
              </p>
              <p className="text-gray-900">
                <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Visit Carers First</a>
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              You can also contact local benefits advice services or Citizens Advice for help with money and benefits questions.
            </p>
          </div>

        </div>

        {/* Last Updated */}
        <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
          <p><strong>Last updated:</strong> 28 March 2026</p>
          <p><strong>Next review:</strong> 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}