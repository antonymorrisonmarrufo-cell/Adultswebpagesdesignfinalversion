export default function IdosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
        <span> Intensive Dementia Outreach Service</span>
      </nav>

      <h1 className="text-5xl text-[#00635C] mb-6 font-bold leading-tight" id="top">Intensive Dementia Outreach Service (IDOS)</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        Specialist help to keep people living with dementia safe and supported at home for as long as possible. Support is offered in groups at the Hub or through home visits, depending on need.
      </p>

      <h2 className="text-[#D61F69] mb-8 font-bold" id="what">What IDOS does</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li>Practical, tailored support based on need and cognitive function.</li>
        <li>Links to home safety checks, Alzheimer's Society, Carers First and HEET (fuel support).</li>
        <li>Help to complete a Herbert Protocol.</li>
      </ul>

      <h2 className="text-[#D61F69] mb-8 font-bold" id="contact">Address and contact</h2>
      <div className="text-gray-700 max-w-4xl mb-12">
        <p className="mb-2"><strong>25 Sidmouth Road, London E10 5QZ</strong></p>
        <p className="mb-2">Tel: 020 8988 9906</p>
        <p>Email: <a href="mailto:dementia.hub@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">dementia.hub@walthamforest.gov.uk</a></p>
      </div>

      <h2 className="text-[#D61F69] mb-8 font-bold" id="refer">Who can refer</h2>
      <p className="text-gray-700 max-w-4xl mb-12">
        Memory Service clinicians, GPs, Adult Social Care or the <a href="#/adult-social-care/specialist-services/dementia/hub" className="text-[#D61F69] hover:underline">Dementia Hub</a> can help you access IDOS.
      </p>

      <h2 className="text-[#D61F69] mb-8 font-bold" id="satisfaction">Satisfaction</h2>
      <p className="text-gray-700 max-w-4xl">
        Latest survey: 77% 'very satisfied', 23% 'satisfied'.
      </p>
      </div>
    </div>
  );
}