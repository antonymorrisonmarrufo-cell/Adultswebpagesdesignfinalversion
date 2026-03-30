import { ArrowRight } from 'lucide-react';

const relatedLinks = [
  { title: 'Alzheimer\'s Society', href: '#' },
  { title: 'Dementia UK', href: '#' },
  { title: 'NHS Dementia Guide', href: '#' },
  { title: 'Age UK Dementia Support', href: '#' },
  { title: 'Dementia Friends', href: '#' }
];

const relatedPages = [
  {
    title: 'NHS Memory Service',
    description: 'Specialist assessment via your GP',
    href: '#/adult-social-care/specialist-services/dementia/memory-service'
  },
  {
    title: 'Waltham Forest Dementia Hub',
    description: 'Local support and activities',
    href: '#/adult-social-care/specialist-services/dementia/hub'
  }
];

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
          <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
          <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
          <a href="#/adult-social-care/specialist-services/dementia-support" className="hover:underline"> Dementia support</a> &gt; 
          <span> Get help with dementia</span>
        </nav>

        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">Get help with dementia</h1>
        
        <p className="text-gray-700 mb-12">
          If you're worried about your memory or someone else's, getting help early can make a big difference.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
            {/* What is dementia section */}
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">What is dementia?</h2>
            
            <p className="text-gray-700 mb-4">
              Dementia is not a single illness but a group of symptoms affecting memory, thinking, and social abilities. It's caused by damage to brain cells that affects their ability to communicate with each other.
            </p>
            
            <p className="text-gray-700 mb-4">
              The most common types include Alzheimer's disease, vascular dementia, dementia with Lewy bodies, and frontotemporal dementia. While there's no cure, the right support can help people live well with dementia for many years.
            </p>

            <p className="text-gray-700 mb-8">
              Early diagnosis means you can access treatments and plan ahead. Services like memory clinics, social care support, and local dementia groups can help people with dementia live independently and confidently.
            </p>

            <a
              href="https://www.walthamforest.gov.uk/adult-social-care" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#bf3688] text-white px-6 py-3 hover:bg-[#B01758] transition-colors mb-12 font-bold shadow-sm"
            >
              Read our Dementia Strategy
            </a>

            {/* How to get help section */}
            <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">How to get help</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">
                    <a href="https://www.nhs.uk/nhs-services/gps/" target="_blank" rel="noopener noreferrer" className="text-[#0066CC] hover:underline">Book a GP appointment</a> to discuss a referral to the NHS Memory Service
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">
                    If you have a diagnosis for dementia and need practical support at home or in the community contact Adult Social Care for a <a href="#/adult-social-care/how-to-get-support/request-an-assessment" className="text-[#0066CC] hover:underline">care needs assessment</a>
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">
                    Find local groups to build skills and reduce isolation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 mb-8 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1759215524566-8aea4761a926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1lbnRpYSUyMGNhcmUlMjBzdXBwb3J0JTIwc3RyYXRlZ3klMjBkb2N1bWVudCUyMGNvbG9yZnVsJTIwaW5mb2dyYXBoaWN8ZW58MXx8fHwxNzc0NjA4ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="All-Age Dementia Strategy" 
                className="w-full h-auto border border-gray-200"
              />
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h2 className="text-[#bf3688] mb-4 font-bold text-xl">Related links:</h2>
              <ul className="space-y-3">
                {relatedLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-[#0066CC] font-semibold hover:underline">
                      &gt; {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Pages section */}
        <h2 className="text-[#bf3688] mb-6 font-bold text-2xl">Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {relatedPages.map((page, index) => (
            <a
              key={index}
              href={page.href}
              className="bg-[#BF3688] text-white p-6 rounded flex items-start justify-between hover:bg-[#A02E73] transition-colors group shadow-sm"
            >
              <div>
                <h3 className="font-bold mb-2 text-xl">{page.title}</h3>
                <p className="text-sm opacity-90">{page.description}</p>
              </div>
              <div className="ml-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#BF3688] flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>

        {/* Green feedback banner */}
        <div className="bg-[#8DC640] p-4 mb-8 flex items-center justify-between shadow-sm">
          <p className="text-gray-900 font-semibold">
            We are improving our website and value your feedback to better meet your needs
          </p>
          <button className="text-gray-900 hover:underline text-sm font-bold flex items-center gap-2">
            ✕ Hide
          </button>
        </div>
      </div>
    </div>
  );
}