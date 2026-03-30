import CarersHero from '../../../components/carers/CarersHero';
import Stepper from '../../../components/carers/Stepper';
import Callout from '../../../components/carers/Callout';

const residentSteps = [
  {
    number: 1,
    title: 'What do you need help with?',
    description: 'Think about how caring affects your health, work, sleep, relationships, and daily life. Write down anything that feels difficult.'
  },
  {
    number: 2,
    title: 'Request your assessment',
    description: 'Fill in our online form, call us, or email. Tell us you\'re a carer and would like an assessment. We aim to respond within 3 working days.'
  },
  {
    number: 3,
    title: 'We talk to you about your needs',
    description: 'A social care professional will contact you for a phone call or visit. This is your chance to explain what would help you care well and live your life.'
  },
  {
    number: 4,
    title: 'Get a support plan',
    description: 'We\'ll agree what support you\'ll receive — this might be breaks, equipment, groups, counselling, or direct payments to arrange your own support.'
  }
];

const professionalSteps = [
  {
    number: 1,
    title: 'Check the carer knows you\'re referring',
    description: 'Speak to the carer first and explain why you think they need support. Get their consent unless safeguarding concerns apply.'
  },
  {
    number: 2,
    title: 'Use the professional referral form',
    description: 'Complete our online referral form with carer details, your concerns, and any risks or urgent needs. Attach supporting evidence if helpful.'
  }
];

export default function CarersAssessmentPage() {
  return (
    <>
      <CarersHero 
        title="Get a carer's assessment"
        description="Find out what help you're entitled to. A carer's assessment looks at how caring affects your life and what support you need to stay healthy and keep caring."
        chips={['Get a carer\'s assessment', 'Professional referral']}
        urgentLink={{ text: 'Emergency help', href: '#/carers/emergency-help' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Callout type="info" title="Who can get an assessment?">
              <p>You&apos;re entitled to a carer&apos;s assessment if you:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide care for someone in Waltham Forest (or you live here)</li>
                <li>Are caring regularly — even a few hours a week counts</li>
                <li>Are 18 or over (young carers and parent carers have separate routes)</li>
              </ul>
              <p className="mt-3">You don&apos;t need to live with the person you care for, and the person you care for doesn&apos;t need to be receiving services from us.</p>
            </Callout>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">For residents: How to apply</h2>
              <Stepper steps={residentSteps} />
              
              <div className="mt-8 bg-gradient-to-br from-[#FFF0F7] to-white p-6 rounded-lg">
                <h3 className="text-gray-900 mb-4">Ready to request your assessment?</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors">
                    Start online form
                  </button>
                  <button className="bg-white border-2 border-[#EF3688] text-[#EF3688] px-6 py-3 rounded-lg hover:bg-[#FFF0F7] transition-colors">
                    Call us: 020 8496 3130
                  </button>
                </div>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">For professionals: How to refer</h2>
              <p className="text-gray-700 mb-6">
                If you're a health or social care professional and you're concerned about a carer, use our professional referral route.
              </p>
              <Stepper steps={professionalSteps} />
              
              <div className="mt-8">
                <button className="bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors">
                  Professional referral form
                </button>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">What happens next?</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white border-l-4 border-[#EF3688] p-4">
                  <h3 className="text-gray-900 mb-2">Within 3 working days</h3>
                  <p>We'll contact you to arrange your assessment. Urgent cases are prioritised.</p>
                </div>
                <div className="bg-white border-l-4 border-[#EF3688] p-4">
                  <h3 className="text-gray-900 mb-2">During assessment</h3>
                  <p>We talk about your caring role, your health, work, and what would help. It usually takes 30–60 minutes.</p>
                </div>
                <div className="bg-white border-l-4 border-[#EF3688] p-4">
                  <h3 className="text-gray-900 mb-2">After assessment</h3>
                  <p>We create a support plan and arrange services. You'll get a written copy and contact details for your social worker.</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-[#FFF0F7] p-6 rounded-lg">
                <h3 className="text-[#EF3688] mb-4">Topics in this section</h3>
                <ul className="space-y-3 text-sm">
                  <li><button onClick={() => { const el = document.getElementById('who'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">Who can get an assessment?</button></li>
                  <li><button onClick={() => { const el = document.getElementById('residents'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">For residents</button></li>
                  <li><button onClick={() => { const el = document.getElementById('professionals'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">For professionals</button></li>
                  <li><button onClick={() => { const el = document.getElementById('next'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">What happens next?</button></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EF3688] p-6 rounded-lg">
                <h3 className="text-gray-900 mb-3">Need help now?</h3>
                <p className="text-gray-700 text-sm mb-4">If you're in crisis or can't wait for an assessment:</p>
                <a href="#/carers/emergency-help" className="text-[#EF3688] hover:underline text-sm">
                  Emergency support →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}