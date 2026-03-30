import { ArrowRight, Mail } from 'lucide-react';

export default function HelpShapeServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/complaints-compliments" className="hover:underline">Complaints, compliments and help shape our future services</a>
          <span className="mx-1">&gt;</span>
          <span>Help shape our services</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Help shape our services
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          We want people with experience of adult social care to help us improve how we do things. Whether you receive services yourself or you are a carer, your views can make a real difference.
        </p>

        {/* How you can get involved */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How you can get involved</h2>
          <p className="text-gray-700 mb-4">
            Working with the council's Voice and Influence Team, you can take part in meetings, events, and projects that shape how adult social care services are designed and delivered in Waltham Forest.
          </p>
          <p className="text-gray-700">
            This is not just about filling in surveys. It means working alongside council staff, NHS partners, Healthwatch Waltham Forest, and community organisations to identify problems and create practical solutions.
          </p>
        </section>

        {/* Who we work with */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who we work with</h2>
          <p className="text-gray-700 mb-4">
            We bring together:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Residents who use adult social care services</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Unpaid carers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Council staff</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>NHS partners including Whipps Cross Hospital</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Healthwatch Waltham Forest</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Community and voluntary organisations</span>
            </li>
          </ul>
        </section>

        {/* What is involved */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What is involved</h2>
          <p className="text-gray-700 mb-4">
            Depending on your interests and availability, you might:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Attend regular resident meetings where we discuss current issues and planned changes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Join a specific project or working group looking at a particular service area</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Review and test new processes, forms, or information before they go live</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Share your experience at events, panels, or consultations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Help us understand what is and is not working from a resident's perspective</span>
            </li>
          </ul>
        </section>

        {/* Reward and recognition */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Reward and recognition</h2>
          <p className="text-gray-700">
            We value your time and expertise. Where relevant, we cover expenses and operate a voucher-based system for involvement in projects.
          </p>
        </section>

        {/* How to get involved */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to get involved</h2>
          <p className="text-gray-700 mb-4">
            If you are interested, contact the Voice and Influence Team:
          </p>
          <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-4 mb-4">
            <p className="font-bold text-gray-900 mb-1 flex items-center gap-2">
              <Mail size={18} className="text-[#bf3688]" />
              Email:
            </p>
            <p className="text-gray-700">
              <a href="mailto:voiceandinfluence@walthamforest.gov.uk" className="text-[#bf3688] hover:underline">
                voiceandinfluence@walthamforest.gov.uk
              </a>
            </p>
          </div>
          <p className="text-gray-700">
            The team will talk to you about what is available and find the right opportunity based on your interests and how much time you can offer. There is no minimum commitment.
          </p>
        </section>

        {/* Healthwatch Waltham Forest */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Healthwatch Waltham Forest</h2>
          <p className="text-gray-700 mb-4">
            Healthwatch Waltham Forest is the independent champion for people who use health and social care services in the borough. They gather views from residents and use them to influence how services are run.
          </p>
          <p className="text-gray-700 mb-6">
            If you want to share your experience of adult social care with an independent organisation rather than directly with the council, Healthwatch is a good place to start.
          </p>
          <a
            href="https://www.healthwatchwalthamforest.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Visit Healthwatch Waltham Forest
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-12">
          <p className="text-gray-900">
            You do not need to be currently receiving services to get involved. If you have any experience of adult social care — as someone who has used services, as a carer, or as a family member — your perspective is valuable.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/complaints-compliments/make-a-complaint" className="text-[#bf3688] hover:underline">
                Make a complaint about adult social care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/complaints-compliments/send-us-a-compliment" className="text-[#bf3688] hover:underline">
                Send us a compliment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#bf3688] hover:underline">
                How adult social care works
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6">
          <p>Last updated: 28 March 2026</p>
          <p>Next review: 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
