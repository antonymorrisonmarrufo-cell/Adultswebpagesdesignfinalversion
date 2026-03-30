import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const relatedPages = [
  {
    title: 'Telecare services',
    description: 'Community alarm and sensor equipment',
    href: '#/adult-social-care/live-independently-at-home/telecare-and-community-alarm'
  },
  {
    title: 'Travel and transport',
    description: 'Blue Badge, Freedom Pass and Taxicard',
    href: '#/adult-social-care/travel-and-transport'
  }
];

const relatedLinks = [
  { title: 'Royal National Institute of Blind People (RNIB)', href: '#' },
  { title: 'Action on Hearing Loss', href: '#' },
  { title: 'Sense (for deafblind people)', href: '#' },
  { title: 'Guide Dogs', href: '#' },
  { title: 'British Deaf Association', href: '#' }
];

export default function VisualHearingPage() {
  const [telecareOpen, setTelecareOpen] = useState(false);
  const [homeAdaptationsOpen, setHomeAdaptationsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
          <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
          <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
          <span> Visual and hearing impairments</span>
        </nav>

        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">Visual and hearing impairments</h1>
        
        <p className="text-gray-700 mb-12">
          If you're blind, partially sighted, deaf or hard of hearing, our Sensory Support Service can assess your needs and help you stay independent. We also link you to equipment, interpreters and local travel or community support.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
            {/* What the Sensory Support Service offers */}
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">What the Sensory Support Service offers</h2>
            
            <p className="text-gray-700 mb-4">Depending on your needs, we can provide:</p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>a specialist sensory assessment</li>
              <li>rehabilitation (for example, mobility and daily- living skills )</li>
              <li>equipment and alerting devices (such as flashing doorbells, TV amplifiers, vibrating/ visual alerts)</li>
              <li>communication support and training (Braille, BSL, Deafblind Manual), plus help to book BSL interpreters</li>
              <li>help with sensory loss registration if you're eligible</li>
              <li>information and advice about local and national services</li>
            </ul>

            <div className="bg-white border-2 border-[#0066CC] p-4 mb-8 flex gap-3 shadow-sm">
              <div className="text-[#0066CC] text-2xl">📹</div>
              <p className="text-gray-700">
                <strong>We can also arrange a video assessment for BSL users</strong>
              </p>
            </div>

            {/* Adaptations, equipment and technology */}
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">Adaptations, equipment and technology to help you</h2>

            {/* Telecare Section - Collapsible */}
            <div className="border border-gray-300 mb-4 bg-white shadow-sm">
              <button
                onClick={() => setTelecareOpen(!telecareOpen)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-100 transition-colors text-left border-b border-gray-300"
              >
                <h3 className="font-bold text-gray-900">Telecare (Community Alarm)</h3>
                {telecareOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </button>
              
              {telecareOpen && (
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">What it is</h4>
                    <p className="text-gray-700 mb-3">
                      Telecare is a small base unit in your home and a pendant or wrist button you can press to reach a 24/7 response centre. It can add sensors (for example: falls, smoke/heat, gas, door or night-time movement). If an alarm is triggered, an operator checks you're safe and can contact a family member, a responder, or the emergency services.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">When it helps</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>You live alone or are often at home without support</li>
                      <li>You've had falls or feel unwell at times, or want a quick way to call for help</li>
                      <li>Family/carers want reassurance someone is checking in with you</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Sensors and alarms that help you live safely at home; your system can automatically call for help.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">What to do next</h4>
                    <p className="text-gray-700 mb-3">
                      For full details (what's available, costs, and how to apply), go to our dedicated Telecare page:
                    </p>
                    <a
                      href="#/adult-social-care/live-independently-at-home/telecare-and-community-alarm"
                      className="inline-block bg-[#bf3688] text-white px-6 py-3 hover:bg-[#B01758] transition-colors font-bold shadow-sm"
                    >
                      Find out about Telecare
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Home Adaptations Section - Collapsible */}
            <div className="border border-gray-300 mb-8 bg-white shadow-sm">
              <button
                onClick={() => setHomeAdaptationsOpen(!homeAdaptationsOpen)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-100 transition-colors text-left border-b border-gray-300"
              >
                <h3 className="font-bold text-gray-900">Home adaptations and occupational therapy</h3>
                {homeAdaptationsOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </button>
              
              {homeAdaptationsOpen && (
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">How can I get a home adaptation?</h4>
                    <p className="text-gray-700 mb-3">
                      An occupational therapist looks at the everyday tasks you find difficult (for example, getting in and out of the bath, using stairs, preparing meals). They recommend equipment and home changes (adaptations) to keep you safe and independent.
                    </p>
                    
                    <p className="text-gray-700 mb-2"><strong>Examples:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                      <li>Small changes: grab rails, bath boards, raised toilet seats, portable ramps</li>
                      <li>Bigger changes: level access showers, stairlifts, widened doorways, permanent ramps</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">How to get to request a home adaptation</h4>
                    <p className="text-gray-700 mb-2">
                      Request support from Adult Social Care (online) — choose the option for equipment/adaptations or OT. We'll triage your request and, if appropriate, book an OT assessment.
                    </p>
                    <p className="text-gray-700 mb-3">
                      Or call <strong>020 8496 3130</strong> if you'd prefer to speak to someone or need help with the form.
                    </p>
                    <p className="text-gray-700 mb-3">
                      If larger works are recommended, we'll explain funding (for example, a Disabled Facilities Grant) and who pays in different housing situations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">When it helps</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                      <li>Small changes: grab rails, bath boards, raised toilet seats, small ramps</li>
                      <li>Bigger changes: level access showers, stairlifts, wider doorways or permanent ramps</li>
                    </ul>
                    <p className="text-gray-700">
                      Sensors and alarms that help you live safely at home; your system can automatically call for help.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">What to do next</h4>
                    <p className="text-gray-700 mb-3 font-semibold">
                      For full details (what's available, costs, and how to apply), go to our dedicated Telecare page:
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* How to get help */}
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">How to get help</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-3">
                    Use our online self-assessment form to check your eligibility and request a care needs assessment. Or ask our Adult Front Door team to complete an assessment over the phone
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b" target="_blank" rel="noopener noreferrer"
                      className="inline-block bg-[#bf3688] text-white px-6 py-3 hover:bg-[#B01758] transition-colors text-center font-bold shadow-sm"
                    >
                      Complete a self assessment
                    </a>
                    <a
                      href="tel:02084963130"
                      className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 hover:bg-gray-200 transition-colors font-bold shadow-sm"
                    >
                      <span className="text-xl">📞</span> 020 8496 3130
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 font-semibold">Or email the Sensory Support Service:</p>
                  <p className="mb-2">
                    <a href="mailto:Waltham.forest@sensoryspecialists.com" className="text-[#0066CC] font-bold hover:underline">
                      📧 Waltham.forest@sensoryspecialists.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <a href="tel:02085517766" className="text-[#0066CC] font-bold hover:underline">
                      📞 Telephone: 020 8551 7766
                    </a>
                  </p>
                  <p className="text-gray-700 font-semibold">
                    📱 Text: 07393 233 570
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2">
                    <strong>If you've just left hospital</strong>, contact your GP so they can make any referrals you need
                  </p>
                  <p className="text-gray-700">
                    <strong>Need BSL?</strong> Tell us when you get in touch. We can set up a video assessment and help you book BSL interpreters for council services.
                  </p>
                </div>
              </div>
            </div>

            {/* Help with getting around */}
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">Help with getting around</h2>
            
            <p className="text-gray-700 mb-3">You may be able to get:</p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>a <strong>Blue Badge</strong> (to park closer to where you need to be)</li>
              <li>a <strong>Freedom Pass</strong> (free travel in London, with further help if travel without assistance is too difficult)</li>
              <li><strong>Taxicard</strong> (subsidised taxi trips- including for people who are severely sight impaired)</li>
            </ul>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 mb-8 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Quick links</h3>
              <div className="space-y-3">
                <a href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b" target="_blank" rel="noopener noreferrer" className="block text-[#0066CC] font-semibold hover:underline">
                  → Complete a self assessment
                </a>
                <a href="tel:02084963130" className="block text-[#0066CC] font-semibold hover:underline">
                  → Call 020 8496 3130
                </a>
                <a href="mailto:Waltham.forest@sensoryspecialists.com" className="block text-[#0066CC] font-semibold hover:underline">
                  → Email Sensory Support Service
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h2 className="text-[#bf3688] mb-4 font-bold text-xl">Related links:</h2>
              <ul className="space-y-3 mb-8">
                {relatedLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-[#0066CC] font-semibold hover:underline">
                      &gt; {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Pages section */}
        <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {relatedPages.map((page, index) => (
            <a
              key={index}
              href={page.href}
              className="bg-[#BF3688] text-white p-6 rounded flex items-start justify-between hover:bg-[#A02E73] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="font-bold mb-2 text-xl">{page.title}</h3>
                <p className="text-sm opacity-90">{page.description}</p>
              </div>
              <div className="ml-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#BF3688] flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>

        {/* Green feedback banner */}
        <div className="bg-[#8DC640] p-4 mb-8 flex items-center justify-between shadow-sm">
          <p className="text-gray-900 font-semibold">
            We are improving our website and value your feedback to better meet your needs
          </p>
          <button className="text-gray-900 hover:underline text-sm font-bold flex items-center gap-2">
            ✕ Hide
          </button>
        </div>
      </div>
    </div>
  );
}