import { ArrowRight, Phone } from 'lucide-react';

export default function IndependentHelpAdvocacyPage() {
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
          <span>Independent help and advocacy</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Independent help and advocacy
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you need help making a complaint, or you want independent support to raise a concern about adult social care, there are organisations that can help.
        </p>

        {/* Independent advocacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Independent advocacy</h2>
          <p className="text-gray-700 mb-4">
            If you find it difficult to speak up for yourself, or if you do not have a family member or friend who can help, you may be entitled to an independent advocate. An advocate is someone who helps you express your views and make sure your voice is heard.
          </p>
          <p className="text-gray-700 mb-4">
            Under the Care Act 2014, the council must arrange an independent advocate for you if you have difficulty being involved in decisions about your care and you do not have anyone appropriate to support you.
          </p>
          <p className="text-gray-700 mb-2">
            To ask about getting an advocate, contact the Adult Social Care team on 020 8496 3130.
          </p>
        </section>

        {/* Healthwatch Waltham Forest */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Healthwatch Waltham Forest</h2>
          <p className="text-gray-700 mb-6">
            Healthwatch Waltham Forest is independent of the council. They can listen to your experience, help you understand your options, and signpost you to the right place to raise a concern.
          </p>
          <a
            href="https://www.healthwatchwalthamforest.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Visit Healthwatch Waltham Forest
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Citizens Advice Waltham Forest */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Citizens Advice Waltham Forest</h2>
          <p className="text-gray-700 mb-6">
            Citizens Advice can provide free, confidential advice on your rights, including how to make a complaint about social care services. They can also help you write a complaint or prepare for a meeting.
          </p>
          <a
            href="https://www.citizensadvice.org.uk/local/waltham-forest/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Visit Citizens Advice Waltham Forest
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Local Government and Social Care Ombudsman */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Local Government and Social Care Ombudsman</h2>
          <p className="text-gray-700 mb-4">
            If you have been through the council's complaints process and are not satisfied with the outcome, the Local Government and Social Care Ombudsman (LGSCO) can investigate your complaint independently.
          </p>
          <p className="text-gray-700 mb-4">
            The Ombudsman can look at complaints about the way a council has carried out its adult social care duties, including failures to act, delays, poor decision-making, and unfair treatment.
          </p>
          <p className="text-gray-700 mb-6">
            You can contact the Ombudsman at any time for advice, but they will usually ask whether you have completed the council's own process first.
          </p>
          <a
            href="https://www.lgo.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Contact the LGSCO
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Care Quality Commission (CQC) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Care Quality Commission (CQC)</h2>
          <p className="text-gray-700 mb-4">
            If your concern is specifically about the quality or safety of a care provider (for example, a care home, domiciliary care agency, or nursing home), you can raise it with the Care Quality Commission. The CQC regulates and inspects care providers in England.
          </p>
          <p className="text-gray-700 mb-6">
            The CQC does not investigate individual complaints, but they use the information people share with them to inform their inspections and regulatory decisions.
          </p>
          <a
            href="https://www.cqc.org.uk/give-feedback-on-care"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Share your experience with CQC
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/complaints-compliments/make-a-complaint" className="text-[#D61F69] hover:underline">
                Make a complaint about adult social care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#D61F69] hover:underline">
                Keeping adults safe
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support" className="text-[#D61F69] hover:underline">
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