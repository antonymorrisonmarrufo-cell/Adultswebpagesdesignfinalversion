import { FileText, Video, ExternalLink } from 'lucide-react';

export default function PracticeGuidanceResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/information-for-professionals" className="hover:underline">Information for care professionals</a>
          <span className="mx-1">&gt;</span>
          <span>Practice guidance and resources</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Practice guidance and resources
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Professional guidance documents, training opportunities, and resources to support best practice in adult social care and safeguarding in Waltham Forest.
        </p>

        {/* Professional curiosity */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Professional curiosity</h2>
          <p className="text-gray-700 mb-6">
            Professional curiosity is a combination of looking, listening, asking direct questions, checking out, and reflecting on information received. It is fundamental to effective safeguarding and assessment practice.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Professional curiosity resource pack</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <Video size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Professional curiosity</p>
                  <p className="text-sm text-gray-600">Bitesize video</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Self-neglect guidance */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Self-neglect guidance</h2>
          <p className="text-gray-700 mb-6">
            Multi-agency guidance for anyone who supports an individual who self-neglects or is at risk of self-neglect. Includes indicators, advice on starting a difficult conversation, and guidance on fluctuating capacity.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Self-Neglect Multi-Agency Guidance 2024</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <Video size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Self-neglect</p>
                  <p className="text-sm text-gray-600">Bitesize video</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mental capacity guidance */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Mental capacity guidance</h2>
          <p className="text-gray-700 mb-6">
            Multi-agency guidance on assessing mental capacity, including a flowchart for professionals, advice on difficult conversations, guidance on fluctuating capacity when substance abuse is a factor, and detailed case studies.
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Multi-agency mental capacity guidance</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">7-minute briefing on mental capacity</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 font-bold mb-2">Video resources:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
            <li>Mental capacity — what professionals need to know</li>
            <li>Spotlight on mental capacity</li>
            <li>Mental Capacity Act overview</li>
            <li>Mental Capacity Act: using the key principles in care planning</li>
          </ul>

          <a href="#" className="text-[#bf3688] hover:underline font-semibold">
            Mental Capacity in Waltham Forest — further information
          </a>
        </section>

        {/* Making Safeguarding Personal */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Making Safeguarding Personal</h2>
          <p className="text-gray-700 mb-6">
            Making Safeguarding Personal is the approach that puts the adult at the centre of safeguarding — ensuring that responses are person-led and outcome-focused, not process-driven.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4">
            <div className="flex items-start gap-3">
              <Video size={20} className="text-[#bf3688] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Making Safeguarding Personal</p>
                <p className="text-sm text-gray-600">Bitesize video</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pressure care */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Pressure care</h2>
          <p className="text-gray-700 mb-6">
            Resources for professionals to support pressure ulcer prevention and identification.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Love great skin booklet</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Preventing pressure ulcers flyer</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Training</h2>
          <p className="text-gray-700 mb-6">
            Waltham Forest's four strategic partnership boards offer free multi-agency training for professionals on safeguarding, practice improvement, and emerging issues.
          </p>
          <div className="space-y-3">
            <a 
              href="https://www.eventbrite.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#bf3688] hover:underline font-semibold"
            >
              View and sign up to training and events on Eventbrite
              <ExternalLink size={16} />
            </a>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">VAWG Training Brochure 2024/25</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight bulletins and 7-minute briefings */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Spotlight bulletins and 7-minute briefings</h2>
          <p className="text-gray-700 mb-6">
            The Strategic Partnership Boards publish regular spotlight bulletins and 7-minute briefings on key topics. Those relevant to adult safeguarding and practice include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
            <li>SAR Lee — 7-minute briefing</li>
            <li>SAR Harry — 7-minute briefing</li>
            <li>SAR Ivan — 7-minute briefing</li>
            <li>SAR Jodie — 7-minute briefing</li>
            <li>Safeguarding adults — spotlight (November 2023)</li>
            <li>Self-neglect — spotlight (April 2022)</li>
            <li>Mental health — spotlight (October 2023)</li>
            <li>Mental capacity — spotlight (December 2021)</li>
            <li>Cuckooing — spotlight (November 2021)</li>
            <li>Modern slavery — spotlight (October 2021)</li>
            <li>Pressure care — spotlight (May 2022)</li>
            <li>Alcohol awareness — spotlight (December 2022)</li>
            <li>Making Every Contact Count (MECC) — spotlight (June 2022)</li>
          </ul>
          <a href="#" className="text-[#bf3688] hover:underline font-semibold">
            View all spotlight bulletins and 7-minute briefings
          </a>
        </section>

        {/* Bitesize video guides — adults */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Bitesize video guides — adults</h2>
          <p className="text-gray-700 mb-4">Short video guides relevant to adult social care practice:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
            <li>Adult threshold guidance</li>
            <li>Self-neglect</li>
            <li>Professional curiosity</li>
            <li>Making Safeguarding Personal</li>
            <li>Mental wellbeing</li>
            <li>Making referrals</li>
            <li>Think Family</li>
            <li>Language matters</li>
          </ul>
          <a href="#" className="text-[#bf3688] hover:underline font-semibold">
            View all bitesize videos
          </a>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/information-for-professionals/safeguarding-adults" className="text-[#bf3688] hover:underline">
                Safeguarding adults
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/information-for-professionals/key-teams-contact-details" className="text-[#bf3688] hover:underline">
                Key teams and contact details
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/our-policies" className="text-[#bf3688] hover:underline">
                Our policies
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6">
          <p>Last updated: 29 March 2026</p>
          <p>Next review: 29 March 2027</p>
        </div>

      </div>
    </div>
  );
}
