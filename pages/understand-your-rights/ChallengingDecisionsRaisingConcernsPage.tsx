import { Phone, ExternalLink, AlertCircle } from 'lucide-react';

export default function ChallengingDecisionsRaisingConcernsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/understand-your-rights" className="hover:underline">Understand your rights</a>
          <span className="mx-1">&gt;</span>
          <span>Challenging decisions and raising concerns</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Challenging decisions and raising concerns
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you disagree with a decision about your care, your financial assessment, or the way you have been treated, you have the right to challenge it. Here is how.
        </p>

        {/* Talk to your social worker or care coordinator first */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Talk to your social worker or care coordinator first</h2>
          <p className="text-gray-700">
            If you are unhappy with a decision, the quickest way to resolve it is usually to speak directly to the person involved — your social worker, care coordinator, or the team that made the decision. Many issues can be sorted out through a conversation without needing a formal process.
          </p>
        </section>

        {/* Challenging a care needs assessment decision */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Challenging a care needs assessment decision</h2>
          <p className="text-gray-700 mb-4">
            If you disagree with the outcome of your care needs assessment — for example, if you think you should have been found eligible for support, or if your assessed needs do not reflect your situation — you can:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Ask the council to explain the decision in writing, including the reasons</li>
            <li>Provide additional information that was not available during the assessment</li>
            <li>Ask for a reassessment if your circumstances have changed</li>
            <li>Make a formal complaint if you believe the assessment was carried out incorrectly</li>
          </ul>
        </section>

        {/* Challenging a financial assessment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Challenging a financial assessment</h2>
          <p className="text-gray-700 mb-4">
            If you think your financial assessment is wrong, you have the right to ask for it to be reviewed. The council's Fairer Contributions Policy sets out a clear appeals process:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 mb-4">
            <ol className="list-decimal ml-6 text-gray-700 space-y-3">
              <li>
                <strong>Stage 1 — Review</strong> by the Financial Assessment Unit. You can ask for the calculation to be checked and any errors corrected. The team must respond within 10 working days.
              </li>
              <li>
                <strong>Stage 2 — First Appeal</strong> to the Head of Service. You can submit additional evidence. The Head of Service must respond within 10 working days.
              </li>
              <li>
                <strong>Stage 3 — Second Appeal</strong> to the Corporate Director of Adult Social Care. The Corporate Director has the authority to temporarily waive contributions in exceptional circumstances. Response within 10 working days.
              </li>
            </ol>
          </div>
        </section>

        {/* Challenging a care and support plan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Challenging a care and support plan</h2>
          <p className="text-gray-700 mb-4">
            If you disagree with the content of your care and support plan — for example, the level of support offered, the way it is being provided, or the personal budget amount — you can:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Discuss it with your social worker and ask for the plan to be reconsidered</li>
            <li>Request a review of your plan at any time</li>
            <li>Ask for an independent advocate to help you put your views across</li>
            <li>Make a formal complaint</li>
          </ul>
        </section>

        {/* Making a formal complaint */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Making a formal complaint</h2>
          <p className="text-gray-700 mb-4">
            If you have tried to resolve the issue informally and are not satisfied, you can make a formal complaint about any aspect of your adult social care. The council must acknowledge your complaint within 3 working days and aim to respond within 20 working days.
          </p>
          <p className="text-gray-700 mb-6">
            Making a complaint will not affect the care you receive. You have a legal right to complain.
          </p>
          <p className="text-gray-700">
            See our <a href="#/adult-social-care/complaints-compliments/make-a-complaint" className="text-[#D61F69] underline hover:no-underline">complaints page</a> for how to submit a complaint.
          </p>
        </section>

        {/* The Local Government and Social Care Ombudsman */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">The Local Government and Social Care Ombudsman</h2>
          <p className="text-gray-700 mb-4">
            If you have been through the council's complaints process and are still not satisfied, you can take your complaint to the Local Government and Social Care Ombudsman (LGSCO). The Ombudsman is independent and can investigate complaints about adult social care, including failures to act, delays, poor decisions, and unfair treatment.
          </p>
          <a 
            href="https://www.lgo.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            Visit lgo.org.uk
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Judicial review */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Judicial review</h2>
          <p className="text-gray-700">
            In rare cases, if you believe the council has acted unlawfully — for example, by failing to carry out a legal duty or making a decision that is irrational — you may be able to seek a judicial review through the courts. You should get legal advice before taking this step. Citizens Advice or a solicitor specialising in community care law can help.
          </p>
        </section>

        {/* Getting independent help */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Getting independent help</h2>
          <p className="text-gray-700 mb-4">
            If you need support to challenge a decision or raise a concern:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>POhWER</strong> — independent advocacy
              <br />
              <a 
                href="https://www.pohwer.net/waltham-forest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D61F69] hover:underline"
              >
                pohwer.net/waltham-forest
              </a>, phone <strong>0300 456 2370</strong>
            </li>
            <li>
              <strong>Healthwatch Waltham Forest</strong> — independent voice for health and social care users
              <br />
              <a 
                href="https://www.healthwatchwalthamforest.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D61F69] hover:underline"
              >
                healthwatchwalthamforest.co.uk
              </a>
            </li>
            <li>
              <strong>Citizens Advice Waltham Forest</strong> — free, confidential advice on your rights
            </li>
            <li>
              <strong>Local Government and Social Care Ombudsman</strong> — independent complaints investigation
              <br />
              <a 
                href="https://www.lgo.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D61F69] hover:underline"
              >
                lgo.org.uk
              </a>
            </li>
          </ul>
        </section>

        {/* Callout box */}
        <section className="mb-12">
          <div className="bg-[#FFF4E6] border-l-4 border-[#D61F69] p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-[#D61F69] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-gray-700">
                  You should never feel afraid to challenge a decision about your care. The law gives you clear rights to be heard, to have decisions explained, and to have them reconsidered if they are wrong. Raising a concern or making a complaint will not affect the care you receive.
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
              <a href="#/adult-social-care/complaints-compliments" className="text-[#D61F69] hover:underline">
                Complaints, compliments and help shape our future services
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/independent-advocacy" className="text-[#D61F69] hover:underline">
                Independent advocacy
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/your-rights-under-care-act" className="text-[#D61F69] hover:underline">
                Your rights under the Care Act
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#D61F69] hover:underline">
                Paying for your care
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
