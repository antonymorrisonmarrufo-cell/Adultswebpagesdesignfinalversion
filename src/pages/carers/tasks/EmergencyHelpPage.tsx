import CarersHero from '../../../components/carers/CarersHero';
import Callout from '../../../components/carers/Callout';
import { Phone, Download } from 'lucide-react';

const emergencyNumbers = [
  {
    service: 'Emergency Duty Team (out of hours)',
    phone: '020 8496 3130',
    when: 'Evenings, weekends, bank holidays',
    for: 'Urgent social care help when main services are closed'
  },
  {
    service: 'Adult Social Care (office hours)',
    phone: '020 8496 3130',
    when: 'Monday–Friday, 9am–5pm',
    for: 'Urgent carer assessments, replacement care, safeguarding'
  },
  {
    service: 'NHS 111',
    phone: '111',
    when: '24/7',
    for: 'Urgent medical advice for you or the person you care for'
  },
  {
    service: 'Samaritans',
    phone: '116 123',
    when: '24/7',
    for: 'Confidential emotional support if you\'re struggling to cope'
  },
  {
    service: 'Carers First crisis line',
    phone: '0300 303 1555',
    when: 'Monday–Friday, 9am–5pm',
    for: 'Urgent advice for carers, emotional support, signposting'
  }
];

export default function EmergencyHelpPage() {
  return (
    <>
      <CarersHero 
        title="Emergency help"
        description="Get urgent support if you can't care due to illness, injury, or crisis. Available 24/7 for carers who need immediate help."
        chips={['YC', 'PC', 'AC']}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Callout type="urgent" title="If someone is in immediate danger">
          <p className="mb-2">Call <strong>999</strong> if:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>You or the person you care for is seriously injured or unwell</li>
            <li>Someone is at risk of harm right now</li>
            <li>There's a crime in progress</li>
          </ul>
        </Callout>

        <section className="my-12">
          <h2 className="text-[#EF3688] mb-6">24/7 emergency numbers</h2>
          <div className="space-y-4">
            {emergencyNumbers.map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#EF3688] transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">{item.service}</h3>
                    <p className="text-gray-700 text-sm mb-2">{item.for}</p>
                    <p className="text-gray-600 text-sm">{item.when}</p>
                  </div>
                  <a 
                    href={`tel:${item.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    {item.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-[#EF3688] mb-6">Create your emergency plan</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Don't wait for a crisis. Download our template and write down what should happen if you suddenly can't care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#FFF0F7] to-white p-6 rounded-lg">
              <h3 className="text-gray-900 mb-3">What to include</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Who to call first (family, friends, professionals)</li>
                <li>The person's daily routine and medication</li>
                <li>Emergency contacts for services they use</li>
                <li>Where important documents are kept</li>
                <li>Backup care arrangements</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#EF3688] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-gray-900 mb-3">Download templates</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Use our step-by-step template to create your plan. Keep copies at home, with family, and give one to your GP.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors w-fit">
                <Download className="w-4 h-4" />
                Download emergency plan template
              </button>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-[#EF3688] mb-6">What happens in an emergency?</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-[#EF3688] p-6">
              <h3 className="text-gray-900 mb-2">If you're suddenly ill or injured</h3>
              <p className="text-gray-700">
                Call our Emergency Duty Team. We'll arrange urgent replacement care so the person you care for is safe. 
                If it's during office hours, call Adult Social Care directly.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#EF3688] p-6">
              <h3 className="text-gray-900 mb-2">If the person you care for is in crisis</h3>
              <p className="text-gray-700">
                Call 999 if it's life-threatening. For urgent (but not life-threatening) help, call NHS 111. 
                If it's a safeguarding concern, contact Adult Social Care or the Emergency Duty Team.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#EF3688] p-6">
              <h3 className="text-gray-900 mb-2">If you're at breaking point emotionally</h3>
              <p className="text-gray-700">
                Call Samaritans (116 123) any time for confidential support. During working hours, Carers First can help (0300 303 1555). 
                You can also request an urgent carer&apos;s assessment.
              </p>
            </div>
          </div>
        </section>

        <Callout type="info" title="Financial emergencies">
          <p>
            If you can't afford food, heating, or essentials, we have emergency support available. 
            Contact Adult Social Care or speak to Citizen's Advice Waltham Forest (0808 278 7835) about crisis grants and food bank referrals.
          </p>
        </Callout>

        <section className="mt-12 bg-[#FFF0F7] p-8 rounded-lg">
          <h2 className="text-[#EF3688] mb-4">Register for priority support</h2>
          <p className="text-gray-700 mb-6">
            If you or the person you care for rely on electricity for medical equipment, register with your energy supplier for priority support. 
            You'll get advance warning of power cuts and priority reconnection.
          </p>
          <a href="#" className="inline-block bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors">
            Find your energy supplier's priority register
          </a>
        </section>
      </div>
    </>
  );
}