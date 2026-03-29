export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <span> Dementia, disabilities and specialist support</span>
      </nav>

      <h1 className="text-5xl text-[#00635C] mb-6 font-bold leading-tight">Dementia, disabilities and specialist support</h1>
      
      <div className="space-y-4 text-gray-700 max-w-4xl text-base leading-relaxed">
        <p>
          Waltham Forest offers a range of support for adults with disabilities and long- term conditions, including services for people living with dementia, learning disabilities, autism, sensory impairments, and physical health needs.
        </p>
        <p>
          Residents can access tailored advice, practical support, and specialist services, including help with employment, legal arrangements like power of attorney, and referrals to appropriate care teams.
        </p>
      </div>
    </section>
  );
}