import { ArrowRight } from 'lucide-react';

const relatedLinks = [
  { title: 'National Autistic Society', href: '#' },
  { title: 'North East London NHS Adult Autism Service', href: '#' },
  { title: 'Autistic Inclusive meets UK', href: '#' },
  { title: 'Action for Neurodiversity', href: '#' },
  { title: 'Sycamore Trust', href: '#' }
];

const relatedPages = [
  {
    title: 'Learning disabilities support',
    description: 'Some people are autistic and have a learning disability',
    href: '#/adult-social-care/specialist-services/learning-disabilities'
  },
  {
    title: 'Work and disability',
    description: 'Reasonable adjustments, Access to Work',
    href: '#/adult-social-care/work-and-disability'
  }
];

export default function AutismSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#/adult-social-care" className="hover:underline">Home</a> &gt; 
          <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
          <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
          <span> Autism support</span>
        </nav>

        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">Support for adults with autism</h1>
        
        <p className="text-gray-700 mb-12">
          Find out how to get an adult autism assessment and where to get support
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
            {/* What is autism section */}
            <h2 className="text-[#bf3688] mb-6 font-bold">What is autism?</h2>
            
            <p className="text-gray-700 mb-4">
              Autism affects how people communicate, interact with others, and experience the world around them. Because it varies from person to person, it's often called Autism Spectrum Condition (ASC).
            </p>
            
            <p className="text-gray-700 mb-4">
              Many adults live with autism, whether diagnosed early in life or later on. It's a lifelong condition, and while there's no cure, the right support can make a big difference. Some people may find social situations challenging or feel overwhelmed by busy environments. Others may have strong interests or routines that help them feel secure.
            </p>

            <p className="text-gray-700 mb-8">
              Support is available to help with everyday life — from understanding and managing social interactions, to accessing work, education, and community activities. Services like speech and language therapy, occupational therapy, and tailored support plans can help adults with autism live more independently and confidently.
            </p>

            <a
              href="https://www.walthamforest.gov.uk/sites/default/files/2021-11/WF_AUTISM_STRATEGY_DOC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bf3688] text-white px-6 py-3 hover:bg-[#B01758] transition-colors mb-12 shadow-sm font-bold"
            >
              Read our Autism Strategy
            </a>

            {/* How to get help section */}
            <h2 className="text-[#bf3688] mb-6 font-bold">How to get help</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <p className="text-gray-700">
                    <a href="#" className="text-[#0066CC] font-semibold hover:underline">Book a GP appointment</a> to discuss a referral to the Adult Autism Service
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <p className="text-gray-700">
                    If you have a diagnosis for autism and need practical support at home or in the community contact Adult Social Care for a <a href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b" target="_blank" rel="noopener noreferrer" className="text-[#0066CC] font-semibold hover:underline">care needs assessment</a>
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 p-6 flex gap-4 shadow-sm">
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
              <a 
                href="https://www.walthamforest.gov.uk/sites/default/files/2021-11/WF_AUTISM_STRATEGY_DOC.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="https://images.unsplash.com/photo-1620302044865-d934e46372b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRpc20lMjBzdHJhdGVneSUyMGRvY3VtZW50JTIwY29sb3JmdWwlMjBpbmZvZ3JhcGhpY3xlbnwxfHx8fDE3NzQ2MDkxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Waltham Forest All-Age Autism Strategy" 
                  className="w-full h-auto hover:opacity-90 transition-opacity cursor-pointer border border-gray-200"
                />
              </a>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h2 className="text-[#bf3688] mb-4 font-bold">Related links:</h2>
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
              className="bg-[#BF3688] text-white p-6 rounded flex items-start justify-between hover:bg-[#A02E73] transition-colors group"
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