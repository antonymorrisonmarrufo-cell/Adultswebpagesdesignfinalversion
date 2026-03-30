import { Phone, Mail, MapPin, ExternalLink, AlertCircle } from 'lucide-react';

export default function KeyTeamsContactDetailsPage() {
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
          <span>Key teams and contact details</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Key teams and contact details
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Contact information for the adult social care teams you are most likely to need, including referrals, safeguarding, brokerage, financial assessment, and specialist services.
        </p>

        {/* Referrals and enquiries */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Referrals and enquiries</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 space-y-6">
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Adults Hub (general referrals and enquiries)</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 020 8496 3130</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Mail size={18} className="text-[#D61F69]" />
                <span><strong>Email:</strong> <a href="mailto:WFDLiaison@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">WFDLiaison@walthamforest.gov.uk</a></span>
              </div>
              <p className="text-gray-700 text-sm ml-7">Monday to Friday, 9am to 5pm</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Out of hours emergencies</h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 020 8496 3130 (choose the emergency option)</span>
              </div>
            </div>

          </div>
        </section>

        {/* Safeguarding */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Safeguarding</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 space-y-6">
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Multi-Agency Safeguarding Hub (MASH)</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 020 8496 3130</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-[#D61F69]" />
                <span><strong>Email:</strong> <a href="mailto:MASHrequests@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">MASHrequests@walthamforest.gov.uk</a></span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Safeguarding Adults Board</h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-[#D61F69]" />
                <span><strong>Email:</strong> <a href="mailto:strategicpartnerships@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">strategicpartnerships@walthamforest.gov.uk</a></span>
              </div>
            </div>

          </div>
        </section>

        {/* Mental health */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Mental health</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 space-y-6">
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">NELFT Mental Health Single Point of Access</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 0300 300 1570 (option 4)</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">For adults aged 18+ needing community mental health services</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">NELFT Older Adult Mental Health Team</h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 0300 555 1270</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">NELFT Community Recovery Team</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 0300 555 1268 or 0300 555 1233</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">Referrals accepted via the Access and Assessment Team</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">NELFT Mental Health Direct (crisis)</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 0800 995 1000</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">Free, 24/7</p>
            </div>

          </div>
        </section>

        {/* Financial assessment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Financial assessment</h2>
          <div className="bg-gray-50 border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-3">Financial Assessment Unit</h3>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={18} className="text-[#D61F69]" />
              <span><strong>Email:</strong> <a href="mailto:residentialfau@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">residentialfau@walthamforest.gov.uk</a></span>
            </div>
          </div>
        </section>

        {/* Specialist services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Specialist services</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 space-y-6">
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Occupational Therapy</h3>
              <p className="text-gray-700 mb-2">Referrals via the Adults Hub:</p>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span>020 8496 3130</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-[#D61F69]" />
                <span><a href="mailto:WFDLiaison@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">WFDLiaison@walthamforest.gov.uk</a></span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Community Learning Disability Team</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 020 8928 8300</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin size={18} className="text-[#D61F69] mt-1 flex-shrink-0" />
                <span><strong>Address:</strong> 30 Coleridge Road, Walthamstow, E17 6QU</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Shared Lives</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Phone size={18} className="text-[#D61F69]" />
                <span><strong>Phone:</strong> 020 8928 8300</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Mail size={18} className="text-[#D61F69]" />
                <span><strong>Email:</strong> <a href="mailto:shared.lives@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">shared.lives@walthamforest.gov.uk</a></span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin size={18} className="text-[#D61F69] mt-1 flex-shrink-0" />
                <span><strong>Address:</strong> 30 Coleridge Road, Walthamstow, E17 6QU</span>
              </div>
            </div>

          </div>
        </section>

        {/* Carers support */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Carers support</h2>
          <div className="bg-gray-50 border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-3">Carers First (commissioned carers support provider)</h3>
            <a 
              href="https://www.carersfirst.org.uk/waltham-forest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D61F69] hover:underline"
            >
              carersfirst.org.uk/waltham-forest
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Callout box */}
        <section className="mb-12">
          <div className="bg-[#FFF4E6] border-l-4 border-[#D61F69] p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-[#D61F69] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-gray-700">
                  If you are unsure which team to contact, phone the Adults Hub on <strong>020 8496 3130</strong>. They can direct you to the right team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/information-for-professionals/how-to-make-referral" className="text-[#D61F69] hover:underline">
                How to make a referral
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/information-for-professionals/safeguarding-adults" className="text-[#D61F69] hover:underline">
                Safeguarding adults
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/information-for-professionals/commissioning-provider-information" className="text-[#D61F69] hover:underline">
                Commissioning and provider information
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
