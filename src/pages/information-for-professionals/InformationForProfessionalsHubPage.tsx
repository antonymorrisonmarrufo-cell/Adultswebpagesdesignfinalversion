import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function InformationForProfessionalsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Information for care professionals</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Information for care professionals
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Access referral tools, professional guidance, safeguarding procedures, invoicing details, and contact information for our brokerage and commissioning teams.
        </p>

        {/* Quick actions for professionals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Quick actions for professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="#/adult-social-care/information-for-professionals/how-to-make-referral"
              className="bg-[#bf3688] text-white py-4 px-6 text-center hover:bg-[#a02d73] transition-colors flex items-center justify-center gap-2"
            >
              Make a referral to Adult Social Care
              <ArrowRight size={18} />
            </a>
            <a 
              href="https://safeguardingapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#bf3688] text-white py-4 px-6 text-center hover:bg-[#a02d73] transition-colors flex items-center justify-center gap-2"
            >
              Report an adult safeguarding concern
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#bf3688] text-white py-4 px-6 text-center hover:bg-[#a02d73] transition-colors flex items-center justify-center gap-2"
            >
              Contact the Adults Hub
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Key contacts */}
        <section className="mb-8" id="contact">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Key contacts</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 space-y-6">
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Adult Social Care referrals and enquiries</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-1">
                <Phone size={18} className="text-[#bf3688]" />
                <span><strong>Phone:</strong> 020 8496 3130</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">Monday to Friday, 9am to 5pm</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Adult safeguarding concerns (MASH)</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-1">
                <Phone size={18} className="text-[#bf3688]" />
                <span><strong>Phone:</strong> 020 8496 3130</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-[#bf3688]" />
                <span><strong>Email:</strong> <a href="mailto:MASHrequests@walthamforest.gov.uk" className="text-[#bf3688] hover:underline">MASHrequests@walthamforest.gov.uk</a></span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Out of hours emergencies</h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-[#bf3688]" />
                <span><strong>Phone:</strong> 020 8496 3130 (choose the emergency option)</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">NELFT Mental Health Single Point of Access</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-1">
                <Phone size={18} className="text-[#bf3688]" />
                <span><strong>Phone:</strong> 0300 300 1570 (option 4)</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">For adults aged 18+ needing community mental health services</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">NELFT Older Adult Mental Health Team</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-1">
                <Phone size={18} className="text-[#bf3688]" />
                <span><strong>Phone:</strong> 0300 555 1270</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">For adults 65+ or adults with complex cognitive conditions</p>
            </div>

          </div>
        </section>

        {/* In this section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">In this section</h2>

          {/* Topic cards container - white background for deeper level pages */}
          <div className="space-y-4">
            
            {/* How to make a referral */}
            <a 
              href="#/adult-social-care/information-for-professionals/how-to-make-referral"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                How to make a referral
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                How to refer someone for adult social care support, including the referral form, what information to include, and what happens next.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Safeguarding adults */}
            <a 
              href="#/adult-social-care/information-for-professionals/safeguarding-adults"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Safeguarding adults
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                How to raise a safeguarding concern, the London multi-agency procedures, and threshold guidance for professionals.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Practice guidance and resources */}
            <a 
              href="#/adult-social-care/information-for-professionals/practice-guidance-resources"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Practice guidance and resources
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                Professional guidance documents, threshold guidance, self-neglect procedures, mental capacity guidance, and training opportunities.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Commissioning and provider information */}
            <a 
              href="#/adult-social-care/information-for-professionals/commissioning-provider-information"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Commissioning and provider information
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                Market position statements, fair cost of care, framework information, and contact details for the commissioning team.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Key teams and contact details */}
            <a 
              href="#/adult-social-care/information-for-professionals/key-teams-contact-details"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Key teams and contact details
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                Contact information for all adult social care teams, including brokerage, financial assessment, occupational therapy, and specialist services.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

          </div>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#bf3688] hover:underline">
                How adult social care works
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#bf3688] hover:underline">
                Keeping adults safe
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
