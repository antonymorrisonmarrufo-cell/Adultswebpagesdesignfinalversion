import CarersHero from '../../../components/carers/CarersHero';
import Callout from '../../../components/carers/Callout';

export default function BreaksRespitePage() {
  return (
    <>
      <CarersHero 
        title="Breaks and respite"
        description="Get time away from caring. We can arrange replacement care, direct payments, or connect you with local services so you can rest and recharge."
        chips={['YC', 'PC', 'AC', 'Get a carer\'s assessment']}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Callout type="info" title="Why breaks matter">
              <p>
                Caring without a break affects your health, relationships, and ability to keep caring. Regular breaks aren't a luxury — they're essential. Taking time for yourself helps you care better in the long run.
              </p>
            </Callout>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">What types of breaks are available?</h2>
              
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-[#EF3688] p-6">
                  <h3 className="text-gray-900 mb-3">Short breaks (a few hours)</h3>
                  <p className="text-gray-700 mb-3">
                    Someone comes to your home or takes the person you care for to a local group or activity. 
                    You get time to yourself — go for a walk, meet friends, rest, or catch up on tasks.
                  </p>
                  <p className="text-sm text-gray-600">Examples: Day centres, befriending visits, sitting services</p>
                </div>

                <div className="bg-white border-l-4 border-[#EF3688] p-6">
                  <h3 className="text-gray-900 mb-3">Overnight or longer breaks</h3>
                  <p className="text-gray-700 mb-3">
                    The person you care for stays somewhere safe overnight or for a few days. 
                    This might be residential respite, staying with another family, or live-in care at home.
                  </p>
                  <p className="text-sm text-gray-600">Examples: Residential respite care, host family schemes</p>
                </div>

                <div className="bg-white border-l-4 border-[#EF3688] p-6">
                  <h3 className="text-gray-900 mb-3">Emergency replacement care</h3>
                  <p className="text-gray-700 mb-3">
                    If you're suddenly ill, have an accident, or need to attend an urgent appointment, 
                    we can arrange emergency cover quickly.
                  </p>
                  <p className="text-sm text-gray-600">See our <a href="#/carers/emergency-help" className="text-[#EF3688] hover:underline">emergency help page</a></p>
                </div>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">How to request a break</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF3688] text-white flex items-center justify-center">1</div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Get a carer&apos;s assessment</h3>
                    <p className="text-gray-700">
                      If you haven&apos;t had one yet, request a carer&apos;s assessment. We&apos;ll talk about what breaks would help you most.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF3688] text-white flex items-center justify-center">2</div>
                  <div>
                    <h3 className="text-gray-900 mb-2">We agree a plan</h3>
                    <p className="text-gray-700">
                      Based on your needs, we'll arrange services or give you a direct payment so you can book breaks yourself.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF3688] text-white flex items-center justify-center">3</div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Book and use your breaks</h3>
                    <p className="text-gray-700">
                      We'll connect you with local providers or you can choose your own. Take the breaks regularly — don't wait until you're burnt out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#FFF0F7] to-white p-6 rounded-lg">
                <h3 className="text-gray-900 mb-4">Ready to request respite?</h3>
                <button className="bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#D61F69] transition-colors">
                  Request a carer&apos;s assessment
                </button>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">What does it cost?</h2>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Costs depend on your financial assessment and the type of service. Some carers pay nothing; 
                  others pay a contribution. We'll never ask you to pay more than you can afford.
                </p>
                <p className="text-gray-700">
                  <strong>Direct payments:</strong> If we give you money to arrange your own breaks, you control how it's spent 
                  (as long as it meets the agreed outcomes in your support plan).
                </p>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-[#EF3688] mb-6">What if the person I care for refuses?</h2>
              <p className="text-gray-700 mb-4">
                Some people resist the idea of respite. It helps to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Start small — try a short visit or activity first</li>
                <li>Frame it as something they'll enjoy, not "time away from you"</li>
                <li>Involve them in choosing the service or activity</li>
                <li>Talk to their social worker or GP about the benefits</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Your wellbeing matters. Even if the person you care for is reluctant, you're still entitled to support. 
                Speak to us — we can help you work through this sensitively.
              </p>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-[#FFF0F7] p-6 rounded-lg">
                <h3 className="text-[#EF3688] mb-4">On this page</h3>
                <ul className="space-y-3 text-sm">
                  <li><button onClick={() => { const el = document.getElementById('types'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">Types of breaks</button></li>
                  <li><button onClick={() => { const el = document.getElementById('request'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">How to request</button></li>
                  <li><button onClick={() => { const el = document.getElementById('cost'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">What it costs</button></li>
                  <li><button onClick={() => { const el = document.getElementById('refuses'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-gray-700 hover:text-[#EF3688] text-left">If they refuse</button></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#EF3688] p-6 rounded-lg">
                <h3 className="text-gray-900 mb-3">Need a break urgently?</h3>
                <p className="text-gray-700 text-sm mb-4">If you're at crisis point or can't keep caring:</p>
                <a href="#/carers/emergency-help" className="text-[#EF3688] hover:underline text-sm">
                  Emergency respite options →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}