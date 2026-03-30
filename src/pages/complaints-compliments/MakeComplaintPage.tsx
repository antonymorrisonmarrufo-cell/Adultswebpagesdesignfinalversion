import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function MakeComplaintPage() {
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
          <span>Make a complaint about adult social care</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Make a complaint about adult social care
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If something has gone wrong with your adult social care, or you are unhappy with the service you have received, you have the right to make a complaint.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <a
            href="https://www.walthamforest.gov.uk/adult-social-care-self-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Make a complaint online
            <ArrowRight size={18} />
          </a>
        </div>

        {/* What you can complain about */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What you can complain about</h2>
          <p className="text-gray-700 mb-4">
            You can make a complaint about any aspect of adult social care provided or arranged by the council. This includes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A delay in providing a service or carrying out an assessment</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A mistake in how your care has been arranged</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A failure to deliver a service to the quality you were promised</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Staff not being helpful or not treating you with respect</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Not being listened to or not being involved in decisions about your care</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>The council not meeting its legal duties under the Care Act</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Problems with a care provider that the council has arranged for you</span>
            </li>
          </ul>
        </section>

        {/* Who can complain */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who can complain</h2>
          <p className="text-gray-700 mb-4">
            You can make a complaint yourself. Someone else can also complain on your behalf — for example, a family member, friend, carer, or advocate — as long as you have given written consent for them to represent you.
          </p>
          <p className="text-gray-700">
            If you lack the capacity to consent, an appropriate person can make the complaint on your behalf.
          </p>
        </section>

        {/* Time limit */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Time limit</h2>
          <p className="text-gray-700">
            Complaints should be made within 12 months of the date the problem happened, or within 12 months of when you first became aware of it. In some circumstances, we may still consider a complaint made after this period.
          </p>
        </section>

        {/* How to complain */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to complain</h2>
          
          <div className="space-y-4 mb-6">
            <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-4">
              <p className="font-bold text-gray-900 mb-1">Online:</p>
              <p className="text-gray-700">Use our complaint form — this is the quickest way to contact us.</p>
            </div>

            <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-4">
              <p className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Phone size={18} className="text-[#bf3688]" />
                Phone:
              </p>
              <p className="text-gray-700">Call our Resolution Centre on 020 8496 3130.</p>
            </div>

            <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-4">
              <p className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Mail size={18} className="text-[#bf3688]" />
                Email:
              </p>
              <p className="text-gray-700">
                <a href="mailto:information.officer@walthamforest.gov.uk" className="text-[#bf3688] hover:underline">
                  information.officer@walthamforest.gov.uk
                </a>
              </p>
            </div>

            <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-4">
              <p className="font-bold text-gray-900 mb-1">Letter:</p>
              <p className="text-gray-700">
                Complaints Team, Waltham Forest Town Hall, Forest Road, London E17 4JF
              </p>
            </div>
          </div>

          <p className="text-gray-700">
            If you need help submitting your complaint, you can visit one of our libraries for assistance with the online form, or ask a family member, friend, or advocate to help.
          </p>
        </section>

        {/* What happens after you complain */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens after you complain</h2>
          <p className="text-gray-700 mb-4">
            Once you have made your complaint:
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <p className="text-gray-700 pt-1">We will acknowledge it within 3 working days.</p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <p className="text-gray-700 pt-1">We will investigate your complaint. This usually involves speaking to the people involved and reviewing your records.</p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <p className="text-gray-700 pt-1">We aim to send you a written response within 20 working days, explaining what we found and what we are doing about it.</p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <p className="text-gray-700 pt-1">If we need to contact other parties, such as a GP, hospital, or care provider, the investigation may take longer. We will keep you informed.</p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-sm">
                5
              </div>
              <p className="text-gray-700 pt-1">In some cases, we may need to get a second opinion from an independent assessor. The complaints team will let you know if this is needed.</p>
            </div>
          </div>
        </section>

        {/* If you are not satisfied with the outcome */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">If you are not satisfied with the outcome</h2>
          <p className="text-gray-700 mb-4">
            If you are unhappy with our response, you have the right to take your complaint to the Local Government and Social Care Ombudsman (LGSCO). The Ombudsman is independent of the council and can investigate complaints about adult social care.
          </p>
          <p className="text-gray-700 mb-6">
            You can contact the Ombudsman at any time for advice, but they will usually ask whether you have been through the council's complaints process first.
          </p>
          <a
            href="https://www.lgo.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Contact the Local Government and Social Care Ombudsman
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-12">
          <p className="text-gray-900">
            Making a complaint will not affect the care you receive. You have a legal right to complain, and we take all complaints seriously. Our goal is to put things right and learn from what has happened.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/complaints-compliments/independent-help-and-advocacy" className="text-[#bf3688] hover:underline">
                Independent help and advocacy
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/complaints-compliments/send-us-a-compliment" className="text-[#bf3688] hover:underline">
                Send us a compliment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support" className="text-[#bf3688] hover:underline">
                How to get support
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