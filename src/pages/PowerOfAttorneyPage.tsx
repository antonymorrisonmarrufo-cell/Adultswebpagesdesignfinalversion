export default function PowerOfAttorneyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <span> Power of attorney services</span>
      </nav>

      <h1 className="text-5xl text-[#231F20] mb-6 font-bold leading-tight" id="top">Power of attorney, deputyship and appointeeship</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        If someone can't manage their affairs, there are legal ways to let someone help them.
      </p>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="options">Your options</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li><strong>Lasting Power of Attorney (LPA)</strong> for health/welfare and property/finance.</li>
        <li><strong>Deputyship</strong> (through the Court of Protection) if an LPA isn't already in place.</li>
        <li><strong>Appointeeship</strong> (DWP) to manage benefits only.</li>
      </ul>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="advice">Get independent advice</h2>
      <p className="text-gray-700 max-w-4xl">
        Alzheimer's Society (for people with dementia), Age UK and MoneyHelper have useful guides.
      </p>
    </div>
  );
}