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
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          How to make a referral
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you are a GP, nurse, hospital discharge coordinator, social worker, or other professional and you need to refer someone for adult social care support in Waltham Forest, this page explains how.
        </p>

        {/* Online referral form */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to make a referral</h2>
          <p className="text-gray-700 mb-4 font-semibold">
            All professional referrals must be made using the online referral form.
          </p>
          <p className="text-gray-700 mb-6">
            The online form is the only accepted method for professional referrals. Email referrals will be returned with a request to complete the online form. Phone agents will direct you to the online form.
          </p>

          <div className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003078] text-white text-sm font-bold mb-3">i</div>
            <h3 className="text-lg font-bold text-[#003078] mb-3">Professional referral form</h3>
            <p className="text-sm text-gray-700 mb-4">
              Use this form for all adult social care referrals including requests for help, support, protection or safeguarding.
            </p>
            <a
              href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-[#bf3688] px-6 py-3 text-sm font-bold text-white no-underline hover:bg-[#a02d73] transition-colors"
            >
              Start the online referral form
            </a>
          </div>

          <div className="rounded-lg border-2 border-[#d4351c] bg-[#fcedf3] p-4">
            <h3 className="text-base font-bold text-[#d4351c] mb-2">Emergency only</h3>
            <p className="text-sm text-gray-700">
              Phone is only for genuine emergencies where someone is at immediate risk and you cannot complete the online form. Call <strong>020 8496 3130</strong> (Mon–Fri 9am–5pm) or <strong>020 8496 3000</strong> (out of hours).
            </p>
          </div>
        </section>

        {/* What to include in your referral */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What to include in your referral</h2>
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
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens after you refer</h2>
          <p className="text-gray-700 mb-4">Once your referral is received:</p>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2 mb-4">
            <li>The Adults Hub will check whether the person is already known to Adult Social Care.</li>
            <li>The referral will be logged and allocated to the appropriate team based on the nature of the need (for example, Adults Care Management, Home First, Occupational Therapy, or Mental Health).</li>
            <li>For safeguarding concerns, the referral will be screened by the Multi-Agency Safeguarding Hub (MASH).</li>
          </ol>
          <p className="text-gray-700">
            You will receive confirmation that your referral has been received via the online form. You can track the progress of your referral through the system.
          </p>
        </section>

        {/* Safeguarding referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Safeguarding referrals</h2>
          <p className="text-gray-700 mb-4">
            If your referral involves a safeguarding concern about an adult at risk, use the dedicated safeguarding process. See our{' '}
            <a href="#/adult-social-care/information-for-professionals/safeguarding-adults" className="text-[#bf3688] underline hover:no-underline">
              safeguarding adults page
            </a>{' '}
            for the online referral form and procedures.
          </p>
        </section>

        {/* Mental health referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Mental health referrals</h2>
          <p className="text-gray-700">
            If the person's needs are primarily mental health related, the referral route is through NELFT, not the council's Adults Hub. Contact the NELFT Mental Health Single Point of Access on <strong>0300 300 1570 (option 4)</strong> for adults aged 18–64, or the NELFT Older Adult Mental Health Team on <strong>0300 555 1270</strong> for adults aged 65+ or those with complex cognitive conditions.
          </p>
        </section>

        {/* Hospital discharge referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Hospital discharge referrals</h2>
          <p className="text-gray-700">
            If you are referring from Whipps Cross Hospital or the Ainslie Rehabilitation Unit, please send referrals directly to the Hospital Social Work Team, not to the general Adults Hub inbox. Contact your hospital social work liaison for the correct pathway.
          </p>
        </section>

        {/* Occupational therapy referrals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Occupational therapy referrals</h2>
          <p className="text-gray-700">
            For OT referrals, use the same{' '}
            <a href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline">
              online care referral form
            </a>.
          </p>
        </section>

        {/* Callout box */}
        <section className="mb-12">
          <div className="border-2 border-[#003078] bg-[#d7f8ff] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-[#003078] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-gray-700">
                  The new online referral form replaces the previous Word document and email process. It provides confirmation of receipt and allows you to track the progress of your referral. All professionals should now use the online form for all referrals.
                </p>
              </div>
            </div>
          </div>
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
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#bf3688] hover:underline">
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
