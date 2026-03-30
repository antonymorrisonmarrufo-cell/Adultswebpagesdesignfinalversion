import { Phone, Mail, FileText, AlertCircle } from 'lucide-react';

export default function HowToMakeReferralPage() {
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
          <span>How to make a referral</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          How to make a referral
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you are a GP, nurse, hospital discharge coordinator, social worker, or other professional and you need to refer someone for adult social care support in Waltham Forest, this page explains how.
        </p>

        {/* Current referral process */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Current referral process</h2>
          <p className="text-gray-700 mb-6">
            To refer someone for adult social care support, please complete the referral form and send it to the Adults Hub.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <FileText size={20} className="text-[#D61F69] mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Request for Help, Support, Protection or Safeguarding referral form</p>
                <p className="text-sm text-gray-600">Word document</p>
                <p className="text-sm text-gray-600 italic mt-2">Download available from the Adults Hub team</p>
              </div>
            </div>
            
            <div className="border-t border-gray-300 pt-4 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-[#D61F69]" />
                <div>
                  <strong>Email the completed form to:</strong><br />
                  <a href="mailto:WFDLiaison@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">
                    WFDLiaison@walthamforest.gov.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-[#D61F69]" />
                <div>
                  <strong>Phone (for urgent referrals or queries):</strong><br />
                  020 8496 3130<br />
                  <span className="text-sm">Monday to Friday, 9am to 5pm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to include in your referral */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What to include in your referral</h2>
          <p className="text-gray-700 mb-4">
            To help the Adults Hub process your referral quickly, please include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>The person's full name, date of birth, and address</li>
            <li>Your name, role, organisation, and contact details</li>
            <li>The reason for referral and what has prompted it now</li>
            <li>A description of the person's current needs and situation</li>
            <li>Any known risks or safeguarding concerns</li>
            <li>Whether the person is aware of and consents to the referral</li>
            <li>Whether the person has mental capacity to make decisions about their care</li>
            <li>Details of any other professionals or services currently involved</li>
            <li>Any relevant medical or social history</li>
          </ul>
          <p className="text-gray-700 italic">
            Incomplete referrals may be returned, which delays the process.
          </p>
        </section>

        {/* What happens after you refer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What happens after you refer</h2>
          <p className="text-gray-700 mb-4">Once your referral is received:</p>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2 mb-4">
            <li>The Adults Hub will check whether the person is already known to Adult Social Care.</li>
            <li>The referral will be logged and allocated to the appropriate team based on the nature of the need (for example, Adults Care Management, Home First, Occupational Therapy, or Mental Health).</li>
            <li>For safeguarding concerns, the referral will be screened by the Multi-Agency Safeguarding Hub (MASH).</li>
          </ol>
          <p className="text-gray-700">
            You will not currently receive automatic confirmation that your referral has been received. If you need to check, phone the Adults Hub on 020 8496 3130.
          </p>
        </section>

        {/* Safeguarding referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Safeguarding referrals</h2>
          <p className="text-gray-700 mb-4">
            If your referral involves a safeguarding concern about an adult at risk, use the dedicated safeguarding process. See our{' '}
            <a href="#/adult-social-care/information-for-professionals/safeguarding-adults" className="text-[#D61F69] underline hover:no-underline">
              safeguarding adults page
            </a>{' '}
            for the online referral form and procedures.
          </p>
        </section>

        {/* Mental health referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Mental health referrals</h2>
          <p className="text-gray-700">
            If the person's needs are primarily mental health related, the referral route is through NELFT, not the council's Adults Hub. Contact the NELFT Mental Health Single Point of Access on <strong>0300 300 1570 (option 4)</strong> for adults aged 18–64, or the NELFT Older Adult Mental Health Team on <strong>0300 555 1270</strong> for adults aged 65+ or those with complex cognitive conditions.
          </p>
        </section>

        {/* Hospital discharge referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Hospital discharge referrals</h2>
          <p className="text-gray-700">
            If you are referring from Whipps Cross Hospital or the Ainslie Rehabilitation Unit, please send referrals directly to the Hospital Social Work Team, not to the general Adults Hub inbox. Contact your hospital social work liaison for the correct pathway.
          </p>
        </section>

        {/* Occupational therapy referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Occupational therapy referrals</h2>
          <p className="text-gray-700">
            For OT referrals, download and complete the Adult Social Care referral form (the same form used for other referrals) and email it to{' '}
            <a href="mailto:WFDLiaison@walthamforest.gov.uk" className="text-[#D61F69] underline hover:no-underline">
              WFDLiaison@walthamforest.gov.uk
            </a>. Alternatively, phone 020 8496 3130.
          </p>
        </section>

        {/* Callout box */}
        <section className="mb-12">
          <div className="bg-[#FFF4E6] border-l-4 border-[#D61F69] p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-[#D61F69] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-gray-700">
                  We know the current referral process relies on Word documents and email. We are working to replace this with a structured online referral form that provides confirmation of receipt and the ability to track the progress of your referral. This is part of the Adults Digital Front Door programme.
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
              <a href="#/adult-social-care/information-for-professionals/safeguarding-adults" className="text-[#D61F69] hover:underline">
                Safeguarding adults
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/information-for-professionals/key-teams-contact-details" className="text-[#D61F69] hover:underline">
                Key teams and contact details
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#D61F69] hover:underline">
                How adult social care works
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
