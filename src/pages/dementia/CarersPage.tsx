export default function CarersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
        <span> Help for carers</span>
      </nav>

      <h1 className="text-5xl text-[#231F20] mb-6 font-bold leading-tight" id="top">Help for carers of people with dementia</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        Get emotional support, practical help and a break from caring.
      </p>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="start">Where to start</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li>
          <strong>Carers First:</strong> 0300 303 1555 • <a href="mailto:hello@carersfirst.org.uk" className="text-[#bf3688] hover:underline">hello@carersfirst.org.uk</a>
        </li>
        <li>
          <strong>Carer's assessment:</strong> ask Adult Social Care to look at your needs and plan support.
        </li>
      </ul>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="local">Local offers for carers</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl">
        <li>Discussion groups at the Dementia Hub; a Residents' Panel to shape services.</li>
        <li>Short breaks/day opportunities to provide respite.</li>
      </ul>
      </div>
    </div>
  );
}