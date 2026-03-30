import { Phone } from 'lucide-react';

export default function CarerEmergencyPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#D61F69] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#D61F69] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer" className="text-[#D61F69] hover:underline">Being a carer</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer/support-for-carers" className="text-[#D61F69] hover:underline">Support for carers</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Carer emergency plan</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">Carer emergency plan</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Plan ahead so the person you care for is safe and supported if you suddenly cannot help.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Register for the emergency card scheme
          </a>
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Request a carer's assessment
          </a>
        </div>

        {/* Emergency Alert Banner */}
        <div className="bg-[#FFF0F7] border-l-4 border-[#D61F69] p-6 mb-8">
          <h2 className="font-bold text-[#D61F69] text-xl mb-3">If someone is in immediate danger</h2>
          <p className="text-gray-900 mb-2">Call <strong>999</strong> if:</p>
          <ul className="space-y-1 text-gray-900">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span>You or the person you care for is seriously injured or unwell</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span>Someone is at risk of harm right now</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span>There's a crime in progress</span>
            </li>
          </ul>
        </div>

        {/* 24/7 Emergency Numbers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">24/7 emergency numbers</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border-2 border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Emergency Duty Team (out of hours)</h3>
                  <p className="text-gray-700 text-sm mb-2">Urgent social care help when main services are closed</p>
                  <p className="text-gray-600 text-sm">Evenings, weekends, bank holidays</p>
                </div>
                <a 
                  href="tel:02084963130"
                  className="flex items-center gap-2 bg-[#D61F69] text-white px-6 py-3 hover:bg-[#b51858] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  020 8496 3130
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Adult Social Care (office hours)</h3>
                  <p className="text-gray-700 text-sm mb-2">Urgent carer assessments, replacement care, safeguarding</p>
                  <p className="text-gray-600 text-sm">Monday–Friday, 9am–5pm</p>
                </div>
                <a 
                  href="tel:02084963130"
                  className="flex items-center gap-2 bg-[#D61F69] text-white px-6 py-3 hover:bg-[#b51858] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  020 8496 3130
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">NHS 111</h3>
                  <p className="text-gray-700 text-sm mb-2">Urgent medical advice for you or the person you care for</p>
                  <p className="text-gray-600 text-sm">24/7</p>
                </div>
                <a 
                  href="tel:111"
                  className="flex items-center gap-2 bg-[#D61F69] text-white px-6 py-3 hover:bg-[#b51858] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  111
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Samaritans</h3>
                  <p className="text-gray-700 text-sm mb-2">Confidential emotional support if you're struggling to cope</p>
                  <p className="text-gray-600 text-sm">24/7</p>
                </div>
                <a 
                  href="tel:116123"
                  className="flex items-center gap-2 bg-[#D61F69] text-white px-6 py-3 hover:bg-[#b51858] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  116 123
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Carers First crisis line</h3>
                  <p className="text-gray-700 text-sm mb-2">Urgent advice for carers, emotional support, signposting</p>
                  <p className="text-gray-600 text-sm">Monday–Friday, 9am–5pm</p>
                </div>
                <a 
                  href="tel:03003031555"
                  className="flex items-center gap-2 bg-[#D61F69] text-white px-6 py-3 hover:bg-[#b51858] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  0300 303 1555
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#what-is" className="text-[#D61F69] underline hover:no-underline">What an emergency plan is</a></li>
            <li><a href="#what-to-include" className="text-[#D61F69] underline hover:no-underline">What information to include</a></li>
            <li><a href="#what-happens" className="text-[#D61F69] underline hover:no-underline">What happens in an emergency</a></li>
            <li><a href="#who-should-have" className="text-[#D61F69] underline hover:no-underline">Who should have a copy</a></li>
            <li><a href="#emergency-card" className="text-[#D61F69] underline hover:no-underline">Emergency card scheme</a></li>
            <li><a href="#priority-support" className="text-[#D61F69] underline hover:no-underline">Priority support registration</a></li>
            <li><a href="#related-help" className="text-[#D61F69] underline hover:no-underline">Related help</a></li>
          </ul>
        </div>

        <div className="prose max-w-none">
          
          <div id="what-is" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">What an emergency plan is</h2>
            <p className="text-gray-700 mb-4">
              An emergency plan sets out what should happen if you are suddenly unable to care for someone because of illness, an accident, or another emergency.
            </p>
            <p className="text-gray-700">
              It helps make sure the person you care for stays safe and gets the support they need, even if you cannot be there.
            </p>
          </div>

          <div id="what-to-include" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">What information to include</h2>
            <p className="text-gray-700 mb-4">
              Your emergency plan should include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">contact details for emergency contacts and family members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">the person's care and support needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">medication, medical conditions and doctor details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">daily routines and preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">where important documents are kept</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">backup care arrangements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">any pets or dependants who also need help</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Creating your plan: 3 simple steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="text-3xl font-bold text-[#D61F69] mb-3">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Choose emergency contacts</h3>
                <p className="text-gray-700 text-sm">Pick trusted people who can step in if needed</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="text-3xl font-bold text-[#D61F69] mb-3">2</div>
                <h3 className="font-bold text-gray-900 mb-2">Write down key information</h3>
                <p className="text-gray-700 text-sm">Include care needs, medication and routines</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="text-3xl font-bold text-[#D61F69] mb-3">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Share and review the plan</h3>
                <p className="text-gray-700 text-sm">Give copies to key people and update regularly</p>
              </div>
            </div>
          </div>

          <div id="what-happens" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">What happens in an emergency</h2>
            
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-[#D61F69] p-6">
                <h3 className="font-bold text-gray-900 mb-2">If you're suddenly ill or injured</h3>
                <p className="text-gray-700">
                  Call our Emergency Duty Team. We'll arrange urgent replacement care so the person you care for is safe. 
                  If it's during office hours, call Adult Social Care directly.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#D61F69] p-6">
                <h3 className="font-bold text-gray-900 mb-2">If the person you care for is in crisis</h3>
                <p className="text-gray-700">
                  Call 999 if it's life-threatening. For urgent (but not life-threatening) help, call NHS 111. 
                  If it's a safeguarding concern, contact Adult Social Care or the Emergency Duty Team.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#D61F69] p-6">
                <h3 className="font-bold text-gray-900 mb-2">If you're at breaking point emotionally</h3>
                <p className="text-gray-700">
                  Call Samaritans (116 123) any time for confidential support. During working hours, Carers First can help (0300 303 1555). 
                  You can also request an urgent carer's assessment.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#D61F69] p-6">
                <h3 className="font-bold text-gray-900 mb-2">Financial emergencies</h3>
                <p className="text-gray-700">
                  If you can't afford food, heating, or essentials, we have emergency support available. 
                  Contact Adult Social Care or speak to Citizens Advice Waltham Forest (0808 278 7835) about crisis grants and food bank referrals.
                </p>
              </div>
            </div>
          </div>

          <div id="who-should-have" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Who should have a copy</h2>
            <p className="text-gray-700 mb-4">
              Make sure the following people have a copy of your emergency plan:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">your emergency contacts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">the person you care for (if appropriate)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">family members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">your GP or social worker if involved</span>
              </li>
            </ul>
          </div>

          <div id="emergency-card" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Emergency card scheme</h2>
            <p className="text-gray-700 mb-4">
              An emergency card is a small card you carry in your wallet or purse that tells emergency services you are a carer.
            </p>
            <p className="text-gray-700 mb-4">
              If something happens to you, the card alerts them that someone relies on your care and needs immediate help.
            </p>
            <p className="text-gray-700 mb-4">
              Contact Carers First or Adult Social Care to register for an emergency card.
            </p>
          </div>

          <div id="priority-support" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Priority support registration</h2>
            <p className="text-gray-700 mb-4">
              If you or the person you care for rely on electricity for medical equipment, register with your energy supplier for priority support.
            </p>
            <p className="text-gray-700 mb-4">
              You'll get advance warning of power cuts and priority reconnection.
            </p>
            <p className="text-gray-700">
              Contact your energy supplier directly to register.
            </p>
          </div>

          <div id="related-help" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Related help</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] underline hover:no-underline">Carers First</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/carers-assessment-and-rights" className="text-[#D61F69] underline hover:no-underline">Carer's assessment and your rights</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/support-for-carers/taking-break" className="text-[#D61F69] underline hover:no-underline">Taking a break from caring</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
          <p><strong>Last updated:</strong> 28 March 2026</p>
          <p><strong>Next review:</strong> 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}