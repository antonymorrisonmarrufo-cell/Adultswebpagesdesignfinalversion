import { ArrowRight } from 'lucide-react';

export default function PhysicalDisabilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#" className="hover:underline">Home</a> &gt; 
          <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
          <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
          <span> Physical disabilities</span>
        </nav>

        <h1 className="text-5xl text-[#00635C] mb-6 font-bold leading-tight" id="top">Physical disabilities</h1>
        
        <p className="text-gray-700 max-w-4xl mb-12">
          Get practical help to live independently and safely at home.
        </p>

        <div className="bg-white border border-gray-300 p-8 mb-12 shadow-sm max-w-4xl">
          <h2 className="text-[#D61F69] mb-8 font-bold text-2xl" id="offer">What we can help with</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Care and support assessment; personal budgets and Direct Payments.</li>
            <li>Equipment and home adaptations after OT advice.</li>
            <li>Telecare (community alarm) for 24/7 help with optional sensors.</li>
            <li>Falls prevention advice and support.</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-300 p-8 mb-12 shadow-sm max-w-4xl">
          <h2 className="text-[#D61F69] mb-8 font-bold text-2xl" id="get-help">How to get help</h2>
          <p className="text-gray-700 mb-6">
            Request an assessment online or by phone.
          </p>
          <a href="#/adult-social-care/live-independently-at-home/request-home-independence-assessment" className="inline-flex items-center gap-2 bg-[#D61F69] text-white px-6 py-3 hover:bg-[#B01758] transition-colors font-bold shadow-sm">
            Request an assessment <ArrowRight size={18} />
          </a>
        </div>

        <h2 className="text-[#D61F69] mb-8 font-bold text-2xl">Related</h2>
        <p className="text-gray-700 max-w-4xl">
          See <a href="#/adult-social-care/work-and-disability" className="text-[#D61F69] font-bold hover:underline">Work and disability</a> for employment support.
        </p>
      </div>
    </div>
  );
}