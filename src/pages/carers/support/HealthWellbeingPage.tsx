export default function HealthWellbeingPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-gray-700">Your health and wellbeing</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Your health and wellbeing</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Looking after your own health matters too. Find support for your mental and physical wellbeing as a carer.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://www.carersfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Find wellbeing support
          </a>
          <a
            href="https://www.carersfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Get help from Carers First
          </a>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#mental-health" className="text-[#bf3688] underline hover:no-underline">Mental health support</a></li>
            <li><a href="#physical-health" className="text-[#bf3688] underline hover:no-underline">Physical health checks</a></li>
            <li><a href="#flu-jab" className="text-[#bf3688] underline hover:no-underline">Flu jab information</a></li>
            <li><a href="#local-support" className="text-[#bf3688] underline hover:no-underline">Related local support</a></li>
          </ul>
        </div>

        <div className="prose max-w-none">
          
          <div id="mental-health" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Mental health support</h2>
            <p className="text-gray-700 mb-4">
              Caring can affect your mental health. It is normal to feel stressed, worried, lonely or low at times.
            </p>
            <p className="text-gray-700 mb-4">
              Support is available if you are struggling. You do not need to wait until things feel unmanageable.
            </p>
            <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-4">
              <h3 className="text-[#bf3688] font-bold text-lg mb-3">Get help</h3>
              <ul className="space-y-2">
                <li className="text-gray-900">Talk to your GP about how you are feeling</li>
                <li className="text-gray-900">Contact Carers First for emotional support and counselling</li>
                <li className="text-gray-900">Call the Samaritans on 116 123 if you need someone to talk to</li>
              </ul>
            </div>
          </div>

          <div id="physical-health" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Physical health checks</h2>
            <p className="text-gray-700 mb-4">
              Carers sometimes put off their own health appointments or ignore symptoms because they are busy caring.
            </p>
            <p className="text-gray-700 mb-4">
              Try to:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">attend regular health checks and screenings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">see your GP if you have health concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">ask for support if caring is affecting your physical health</span>
              </li>
            </ul>
          </div>

          <div id="flu-jab" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Flu jab information</h2>
            <p className="text-gray-700 mb-4">
              If you are a carer, you may be eligible for a free flu jab to help protect you and the person you care for.
            </p>
            <p className="text-gray-700 mb-4">
              Contact your GP surgery to book an appointment.
            </p>
          </div>

          <div id="local-support" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Related local support</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline">Carers First – wellbeing support and counselling</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/support-for-carers/local-groups-and-services" className="text-[#bf3688] underline hover:no-underline">Local groups and services</a>
              </li>
              <li>
                <a href="#/adult-social-care/being-carer/support-for-carers/taking-a-break" className="text-[#bf3688] underline hover:no-underline">Taking a break from caring</a>
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
