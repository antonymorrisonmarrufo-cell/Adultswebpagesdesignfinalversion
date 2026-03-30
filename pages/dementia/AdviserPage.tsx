export default function AdviserPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
        <span> Dementia Adviser</span>
      </nav>

      <h1 className="text-5xl text-[#00635C] mb-6 font-bold leading-tight" id="top">Dementia Adviser (Alzheimer's Society)</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        One‑to‑one support if you have a diagnosis of dementia or you're being assessed.
      </p>

      <h2 className="text-[#D61F69] mb-8 font-bold" id="offer">What the service offers</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li>Information about dementia and treatments.</li>
        <li>Support to understand your diagnosis.</li>
        <li>Help to plan next steps, including benefits and local services.</li>
        <li>Advice for family and carers.</li>
      </ul>

      <div className="text-gray-700 max-w-4xl">
        <p className="mb-4">
          <strong>Contact (Waltham Forest):</strong> 020 8556 8171 • <a href="mailto:walthamforest@alzheimers.org.uk" className="text-[#D61F69] hover:underline">walthamforest@alzheimers.org.uk</a>
        </p>
        <p>
          Ask the Dementia Hub or your GP to introduce you, or contact the service directly.
        </p>
      </div>
      </div>
    </div>
  );
}