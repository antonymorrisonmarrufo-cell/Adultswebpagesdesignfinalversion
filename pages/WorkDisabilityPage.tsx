export default function WorkDisabilityPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <span> Work and disability</span>
      </nav>

      <h1 className="text-5xl text-[#00635C] mb-6 font-bold leading-tight" id="top">Work and disability</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        Guidance, training and local support to get into work, stay in work and progress.
      </p>

      <h2 className="text-[#D61F69] mb-8 font-bold" id="expect">What you can expect</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li>Employment advice and links to local programmes.</li>
        <li>Support with reasonable adjustments and Access to Work.</li>
        <li>Training and skills, including adult learning and community wellbeing sessions.</li>
      </ul>

      <h2 className="text-[#D61F69] mb-8 font-bold" id="start">Get started</h2>
      <p className="text-gray-700 max-w-4xl">
        Use the form on this page or speak to Jobcentre Plus/National Careers Service.
      </p>
      </div>
    </div>
  );
}