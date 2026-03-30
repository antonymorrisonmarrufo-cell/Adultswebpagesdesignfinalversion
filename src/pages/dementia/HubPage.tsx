import { ArrowRight } from 'lucide-react';

const relatedPages = [
  {
    title: 'Intensive Dementia Outreach Service (IDOS)',
    href: '#/adult-social-care/specialist-services/dementia/idos'
  },
  {
    title: 'Activities and day support',
    href: '#/adult-social-care/specialist-services/dementia/activities'
  },
  {
    title: 'Dementia Adviser (Alzheimer\'s Society)',
    href: '#/adult-social-care/specialist-services/dementia/adviser'
  }
];

export default function HubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
        <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
        <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
        <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
        <span> Waltham Forest Dementia Hub</span>
      </nav>

      <h1 className="text-5xl text-[#231F20] mb-6 font-bold leading-tight" id="top">Waltham Forest Dementia Hub</h1>
      
      <p className="text-gray-700 max-w-4xl mb-12">
        The Dementia Hub is our focal point for dementia support in the borough. It runs groups and one‑to‑one help, links you to health and community services, and offers spaces for carers to shape services.
      </p>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="offer">What the Hub offers</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-4xl mb-12">
        <li>Cognitive Stimulation groups (early‑stage dementia).</li>
        <li>Intensive Dementia Outreach sessions (group or home) for eligible needs.</li>
        <li>Dementia Friends information sessions – over 2,000 Dementia Friends since 2021; 176 people trained last year.</li>
        <li>Carers First discussion groups and a Residents' Panel.</li>
        <li>On‑site services: Age UK footcare; pampering/hairdressing (with Adult Learning).</li>
        <li>Community activities: weekly dementia‑friendly walks.</li>
        <li>Specialist clinics and research/education partnerships.</li>
      </ul>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="contact">Where to find us</h2>
      <div className="text-gray-700 max-w-4xl mb-12">
        <p className="mb-2"><strong>25 Sidmouth Road, London E10 5QZ</strong></p>
        <p className="mb-2">Tel: 020 8988 9906</p>
        <p>Email: <a href="mailto:dementia.hub@walthamforest.gov.uk" className="text-[#bf3688] hover:underline">dementia.hub@walthamforest.gov.uk</a></p>
      </div>

      <h2 className="text-[#bf3688] mb-8 font-bold" id="join">How to join</h2>
      <p className="text-gray-700 max-w-4xl mb-12">
        Contact the Hub about groups and drop‑ins. If you need more support, we can help you request an Adult Social Care assessment.
      </p>

      <nav className="related">
        <h2 className="text-[#bf3688] mb-8 font-bold">Related pages</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPages.map((page, index) => (
            <li key={index}>
              <a
                href={page.href}
                className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors"
              >
                <span className="pr-4">{page.title}</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </div>
  );
}