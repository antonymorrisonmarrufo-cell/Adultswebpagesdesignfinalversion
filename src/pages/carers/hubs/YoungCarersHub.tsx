import CarersHero from '../../../components/carers/CarersHero';
import Callout from '../../../components/carers/Callout';
import Stepper from '../../../components/carers/Stepper';
import Chip from '../../../components/carers/Chip';

const steps = [
  {
    number: 1,
    title: 'Tell us about yourself',
    description: 'Share what caring is like for you. You can speak to us confidentially — we won\'t tell anyone without your permission unless we\'re worried about your safety.'
  },
  {
    number: 2,
    title: 'We listen and understand',
    description: 'We\'ll talk about what would help make things easier. This might be time for yourself, help at school, or someone to talk to.'
  },
  {
    number: 3,
    title: 'Get the right support',
    description: 'We can connect you with activities, groups, counselling, or practical help. Everything is designed to fit around your life and caring.'
  },
  {
    number: 4,
    title: 'Check in regularly',
    description: 'We\'ll keep in touch to make sure you\'re getting what you need. You can always reach out if things change.'
  }
];

export default function YoungCarersHub() {
  return (
    <>
      <CarersHero 
        title="Young Carers (0–18)"
        description="If you care for someone at home — a parent, brother, sister, or someone else — you deserve support too. Get help to balance caring with school, friends, and your own life."
        chips={['YC', 'Get a carer\'s assessment']}
        urgentLink={{ text: 'Need urgent help?', href: '#/carers/emergency-help' }}
      />

      <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Callout type="warning" title="Your safety matters">
            <p>If you feel unsafe or too much is being asked of you, tell a trusted adult straight away. You can also call Childline on <a href="tel:0800 1111" className="text-[#bf3688] font-bold hover:underline">0800 1111</a> any time, day or night.</p>
          </Callout>

          <Callout type="info" title="We keep things confidential">
            <p>Everything you tell us stays private unless we're worried you might be in danger. If we need to speak to someone else, we'll talk to you about it first.</p>
          </Callout>

          <section className="my-12">
            <h2 className="text-[#bf3688] mb-8 font-bold text-3xl">How we can help you (step by step)</h2>
            <Stepper steps={steps} />
          </section>

          <section className="my-12 bg-white border-2 border-[#bf3688] p-8 rounded-lg shadow-sm">
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">Get help now</h2>
            <p className="text-gray-700 mb-6">
              You don't need permission from your parent or guardian to talk to us. Call, email, or fill in our online form — whatever feels easiest.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/carers/assessment" className="bg-[#bf3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors font-bold">
                Request a young carer's assessment
              </a>
              <a href="#/carers/contacts" className="bg-white border-2 border-[#bf3688] text-[#bf3688] px-6 py-3 rounded-lg hover:bg-[#FFF0F7] transition-colors font-bold">
                Find local young carers groups
              </a>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">What young carers tell us helps most</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-900 mb-3 font-bold">Time for me</h3>
                <p className="text-gray-700">Activities, trips and groups where you can relax and be yourself.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-900 mb-3 font-bold">Someone to talk to</h3>
                <p className="text-gray-700">Counselling or mentoring with people who understand caring.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-900 mb-3 font-bold">Help at school</h3>
                <p className="text-gray-700">Support with homework, exams, or talking to teachers about your situation.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}