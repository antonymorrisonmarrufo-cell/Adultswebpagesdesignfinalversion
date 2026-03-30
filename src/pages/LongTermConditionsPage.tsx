import { ArrowRight } from 'lucide-react';

export default function LongTermConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
          <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
          <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
          <span> Long-term conditions</span>
        </nav>

        <h1 className="text-5xl text-[#231F20] mb-6 font-bold leading-tight" id="top">Long‑term conditions</h1>
        
        <p className="text-gray-700 max-w-4xl mb-12">
          If you live with a long‑term health condition, we can help you stay independent and connected.
        </p>

        <div className="bg-white border-2 border-gray-300 p-8 mb-12 shadow-sm max-w-4xl">
          <h2 className="text-[#bf3688] mb-8 font-bold text-2xl" id="support">Support you can get</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Advice, equipment and adaptations for daily tasks.</li>
            <li>Community activities and day opportunities.</li>
            <li>Social prescribing and early help networks for wellbeing and money matters.</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-300 p-8 mb-12 shadow-sm max-w-4xl">
          <h2 className="text-[#bf3688] mb-8 font-bold text-2xl" id="ask">Ask for help</h2>
          <p className="text-gray-700 mb-6">
            Request an Adult Social Care assessment online or by phone.
          </p>
          <a href="#/adult-social-care/live-independently-at-home/request-home-independence-assessment" className="inline-flex items-center gap-2 bg-[#bf3688] text-white px-6 py-3 hover:bg-[#B01758] transition-colors font-bold shadow-sm">
            Request an assessment <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}