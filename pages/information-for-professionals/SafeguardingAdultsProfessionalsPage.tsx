import { Phone, Mail, FileText, ExternalLink, Video } from 'lucide-react';

export default function SafeguardingAdultsProfessionalsPage() {
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
          <span>Safeguarding adults</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Safeguarding adults
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          How to raise a safeguarding concern about an adult at risk in Waltham Forest, and the multi-agency procedures that guide professional practice.
        </p>

        {/* When to raise a concern */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">When to raise a concern</h2>
          <p className="text-gray-700 mb-4">
            You should raise a safeguarding concern if you believe an adult with care and support needs is experiencing, or is at risk of, abuse or neglect, and is unable to protect themselves because of those needs. This applies whether or not the person is receiving council-funded services.
          </p>
          <p className="text-gray-700 font-bold">
            If a crime is being or has been committed, or someone is in immediate danger, call the police on 999.
          </p>
        </section>

        {/* How to raise a concern */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">How to raise a concern</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 space-y-4">
            <div>
              <p className="font-bold text-gray-900 mb-2">Online:</p>
              <a 
                href="https://action-spider-46698300.figma.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D61F69] hover:underline inline-flex items-center gap-2"
              >
                Complete the adult safeguarding referral form
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={18} className="text-[#D61F69]" />
              <span><strong>Phone:</strong> 020 8496 3130</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={18} className="text-[#D61F69]" />
              <span><strong>Email:</strong> <a href="mailto:MASHrequests@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">MASHrequests@walthamforest.gov.uk</a></span>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            The Multi-Agency Safeguarding Hub (MASH) screens all safeguarding referrals. Your referral will be reviewed by a team that includes professionals from the council, health services, and the police.
          </p>
        </section>

        {/* London Multi-Agency Adult Safeguarding Policy and Procedures */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">London Multi-Agency Adult Safeguarding Policy and Procedures</h2>
          <p className="text-gray-700 mb-4">
            All professionals in Waltham Forest should follow the London multi-agency adult safeguarding policy and procedures. These set out how to identify, respond to, and investigate safeguarding concerns.
          </p>
          <a 
            href="https://londonadass.org.uk/safeguarding/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            London Multi-Agency Adult Safeguarding Policy and Procedures
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Adults threshold guidance */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Adults threshold guidance</h2>
          <p className="text-gray-700 mb-6">
            The Adults Threshold Guidance sets out the role and responsibilities of all agencies working together to ensure vulnerable adults are safeguarded in Waltham Forest. It helps practitioners determine the appropriate level of response to a concern.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#D61F69] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Adults Threshold Guidance</p>
                  <p className="text-sm text-gray-600">PDF document</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <Video size={20} className="text-[#D61F69] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Threshold guidance for adults</p>
                  <p className="text-sm text-gray-600">Bitesize video</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managing allegations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Managing allegations</h2>
          <p className="text-gray-700 mb-4">
            If you need to manage an allegation against an adult who works with adults with care and support needs, refer to the procedures for managing allegations.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Procedures for managing allegations</p>
                <p className="text-sm text-gray-600">Word document</p>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-agency escalation and professional challenge */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Multi-agency escalation and professional challenge</h2>
          <p className="text-gray-700 mb-4">
            If you believe your professional concerns have not been acted on appropriately, or if you disagree with a decision made by another agency, the Multi-agency escalation and professional challenge guidance sets out how to resolve professional disagreements through a structured four-step process.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Multi-agency escalation and professional challenge guidance</p>
                <p className="text-sm text-gray-600">PDF document</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safeguarding Adults Board */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Safeguarding Adults Board</h2>
          <p className="text-gray-700 mb-4">
            The Safeguarding Adults Board (SAB) brings together the council, NHS, police, and other partners to coordinate safeguarding work across the borough. The latest annual report and further information are available on the{' '}
            <a href="#/adult-social-care/our-policies/safeguarding-policies-reports" className="text-[#D61F69] underline hover:no-underline">
              Safeguarding Adults Board page
            </a>.
          </p>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={18} className="text-[#D61F69]" />
            <span><strong>Contact:</strong> <a href="mailto:strategicpartnerships@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">strategicpartnerships@walthamforest.gov.uk</a></span>
          </div>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/information-for-professionals/practice-guidance-resources" className="text-[#D61F69] hover:underline">
                Practice guidance and resources
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#D61F69] hover:underline">
                Keeping adults safe
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/information-for-professionals/key-teams-contact-details" className="text-[#D61F69] hover:underline">
                Key teams and contact details
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
