export default function MemoryServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
        <span> NHS Memory Service</span>
      </nav>

      <h1 className="text-5xl text-[#231F20] mb-6 font-bold leading-tight" id="top">NHS Memory Service (assessment and diagnosis)</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        The Memory Service offers specialist assessment and diagnosis of dementia. Referrals are usually made by your <strong>GP</strong>.
      </p>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="expect">What to expect</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li>A memory check and health review.</li>
        <li>Cognitive testing and, where needed, scans or blood tests.</li>
        <li>Information and next steps after diagnosis.</li>
      </ul>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="refer">How to be referred</h2>
      <ol className="list-decimal list-inside space-y-4 text-gray-700 max-w-4xl mb-12">
        <li><strong>Book a GP appointment</strong> and ask for a Memory Service referral.</li>
        <li><strong>Bring notes</strong> on changes you've noticed (memory, daily tasks, mood).</li>
        <li><strong>Take a relative or friend</strong> if you wish.</li>
      </ol>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="after">After diagnosis</h2>
      <p className="text-gray-700 max-w-4xl">
        The <a href="#/adult-social-care/specialist-services/dementia/hub" className="text-[#bf3688] hover:underline">Dementia Hub</a> can link you to groups and community support. If daily tasks are difficult, ask Adult Social Care about equipment and adaptations.
      </p>
      </div>
    </div>
  );
}