export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
        <span> Activities and day support</span>
      </nav>

      <h1 className="text-5xl text-[#231F20] mb-6 font-bold leading-tight" id="top">Activities and day support</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        Staying active, social and independent can help you feel better day to day.
      </p>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="local">What's available locally</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li>Cognitive Stimulation groups (early‑stage).</li>
        <li>Hub‑based activities: dementia‑friendly walks, pampering/hairdressing, footcare, workshops and talks.</li>
        <li>IDOS groups or home visits for eligible needs.</li>
        <li>Day opportunities across the borough that build skills and confidence and give carers a break.</li>
      </ul>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="join">How to join</h2>
      <p className="text-gray-700 max-w-4xl">
        Contact the <a href="#/adult-social-care/specialist-services/dementia/hub" className="text-[#bf3688] hover:underline">Dementia Hub</a> for timetables and eligibility. If you need transport or help to attend, mention this when you get in touch.
      </p>
      </div>
    </div>
  );
}