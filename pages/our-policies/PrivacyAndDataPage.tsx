import { ExternalLink, Mail } from 'lucide-react';

export default function PrivacyAndDataPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/our-policies" className="hover:underline">Our policies</a>
          <span className="mx-1">&gt;</span>
          <span>Privacy and data</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Privacy and data
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          How the council collects, uses, and shares your personal information when providing adult social care services.
        </p>

        {/* Adult Social Care Privacy Notice */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Adult Social Care Privacy Notice</h2>
          <p className="text-gray-700 mb-4">
            When providing care and support services, the council must collect and use your personal information. The Adult Social Care Privacy Notice explains what information we collect, why we need it, who we may share it with, and your rights.
          </p>
          <p className="text-gray-700 mb-6">
            The privacy notice covers information collected about people who receive or apply for adult social care services, including those with physical disabilities, learning disabilities, mental health conditions, and their carers.
          </p>
          <a 
            href="https://www.walthamforest.gov.uk/council-and-elections/data-protection-and-freedom-information"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            Read the Adult Social Care Privacy Notice
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Client Level Data — NHS England */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Client Level Data — NHS England</h2>
          <p className="text-gray-700 mb-4">
            Since 2023, the council is required by the Secretary of State for Health to submit detailed client-level adult social care data to NHS England. This is a national requirement that applies to all councils in England.
          </p>
          <p className="text-gray-700 mb-6">
            The data includes information about you such as your date of birth, postcode, and details about your care and support. The purpose is to help the NHS and local authorities understand population needs and plan services more effectively.
          </p>
          <a 
            href="https://www.walthamforest.gov.uk/council-and-elections/data-protection-and-freedom-information"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            Read the Client Level Data Privacy Notice
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Your rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Your rights</h2>
          <p className="text-gray-700 mb-4">
            Under data protection law, you have the right to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Ask what personal information the council holds about you</li>
            <li>Ask for incorrect information to be corrected</li>
            <li>Ask for your information to be deleted in certain circumstances</li>
            <li>Object to how your information is being used</li>
            <li>Ask for your information to be provided in a portable format</li>
          </ul>
          <div className="bg-gray-50 border border-gray-200 p-6">
            <p className="text-gray-700 mb-2">
              If you have questions about how your data is used in adult social care, contact:
            </p>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-[#D61F69]" />
              <a href="mailto:mashrequests@walthamforest.gov.uk" className="text-[#D61F69] hover:underline font-semibold">
                mashrequests@walthamforest.gov.uk
              </a>
            </div>
          </div>
        </section>

        {/* More information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">More information</h2>
          <p className="text-gray-700 mb-4">
            For more information about data protection at Waltham Forest, see the council's main privacy policy page.
          </p>
          <a 
            href="https://www.walthamforest.gov.uk/council-and-elections/data-protection-and-freedom-information"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            Council data protection and privacy information
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.walthamforest.gov.uk/council-and-elections/data-protection-and-freedom-information"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D61F69] hover:underline inline-flex items-center gap-1"
              >
                Corporate privacy notice
                <ExternalLink size={14} />
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support" className="text-[#D61F69] hover:underline">
                How to get support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/complaints-compliments/make-a-complaint" className="text-[#D61F69] hover:underline">
                Making a complaint about adult social care
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
