export default function PlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
        <span> Planning ahead</span>
      </nav>

      <h1 className="text-5xl text-[#231F20] mb-6 font-bold leading-tight" id="top">Planning ahead and end of life care</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        It's helpful to put legal and care arrangements in place early.
      </p>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="legal">Legal arrangements</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li><strong>Lasting Power of Attorney (LPA)</strong> – choose someone you trust to make decisions.</li>
        <li>
          <strong>Deputyship/Appointeeship</strong> – learn more on our <a href="#/adult-social-care/specialist-services/power-attorney-deputyship-and-appointeeship" className="text-[#bf3688] hover:underline">Power of attorney, deputyship and appointeeship</a> page.
        </li>
      </ul>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="care">Care planning</h2>
      <p className="text-gray-700 max-w-4xl">
        Talk to your GP about advance care planning. Adult Social Care can help plan support at home, including equipment, adaptations and care.
      </p>
      </div>
    </div>
  );
}