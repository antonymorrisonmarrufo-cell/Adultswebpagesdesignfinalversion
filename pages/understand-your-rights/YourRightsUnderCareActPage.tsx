import { ExternalLink } from 'lucide-react';

export default function YourRightsUnderCareActPage() {
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
          <span>Your rights under the Care Act</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Your rights under the Care Act
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          The Care Act 2014 sets out what councils must do when it comes to adult social care. Here is what it means for you, in plain English.
        </p>

        {/* The right to an assessment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">The right to an assessment</h2>
          <p className="text-gray-700">
            Anyone who appears to need care and support can ask for a care needs assessment. The council cannot refuse. You do not need a GP referral, and the assessment is always free. It does not matter whether the council thinks you are likely to be eligible — if you ask, they must assess you.
          </p>
        </section>

        {/* The right to be involved */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">The right to be involved</h2>
          <p className="text-gray-700 mb-4">
            The council must involve you in decisions about your care. This means your assessment, your care plan, and any review of your care should be done with you, not to you. Your views, your wishes, and the outcomes that matter to you must be taken into account.
          </p>
          <p className="text-gray-700">
            If you find it difficult to be involved — for example, because of a learning disability, dementia, or a mental health condition — and you do not have a family member or friend who can help, the council must arrange an independent advocate for you.
          </p>
        </section>

        {/* The right to information and advice */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">The right to information and advice</h2>
          <p className="text-gray-700">
            The council must provide information and advice about the care and support available in the area. This applies to everyone — not just people who are eligible for council-funded care. If you are a self-funder, you still have the right to information, advice, and help finding suitable care.
          </p>
        </section>

        {/* The right to choice and control */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">The right to choice and control</h2>
          <p className="text-gray-700">
            If you are eligible for council-funded care, you will receive a personal budget. You can choose how this is managed — including receiving it as a direct payment so you can arrange your own support. The council must offer you this choice.
          </p>
        </section>

        {/* The right to continuity of care */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">The right to continuity of care</h2>
          <p className="text-gray-700">
            If you move from one council area to another, the Care Act says you must continue to receive your care and support on the day you arrive in the new area. The two councils must work together to make sure there is no gap in your care.
          </p>
        </section>

        {/* The right to safeguarding */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">The right to safeguarding</h2>
          <p className="text-gray-700">
            The council has a duty to protect adults who have care and support needs and are at risk of abuse or neglect. If you are being harmed, or you are worried about someone else, you have the right to raise a concern and have it investigated.
          </p>
        </section>

        {/* Services that must be free */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Services that must be free</h2>
          <p className="text-gray-700 mb-4">
            Under the Care Act, the following must always be provided free of charge:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Care needs assessments and care planning</li>
            <li>Intermediate care and reablement services (for up to six weeks)</li>
            <li>Community equipment and minor adaptations costing £1,000 or less</li>
            <li>After-care services under Section 117 of the Mental Health Act 1983</li>
            <li>Information, advice, and guidance</li>
          </ul>
        </section>

        {/* Where to find the Care Act */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Where to find the Care Act</h2>
          <p className="text-gray-700 mb-4">
            The full text of the Care Act 2014 is available on legislation.gov.uk. The government has also published detailed statutory guidance explaining how councils should apply the Act.
          </p>
          <div className="space-y-2">
            <a 
              href="https://www.legislation.gov.uk/ukpga/2014/23/contents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D61F69] hover:underline"
            >
              Care Act 2014 on legislation.gov.uk
              <ExternalLink size={16} />
            </a>
            <br />
            <a 
              href="https://www.gov.uk/government/publications/care-act-statutory-guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D61F69] hover:underline"
            >
              Care Act statutory guidance on GOV.UK
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#D61F69] hover:underline">
                How adult social care works
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/independent-advocacy" className="text-[#D61F69] hover:underline">
                Independent advocacy
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/challenging-decisions-raising-concerns" className="text-[#D61F69] hover:underline">
                Challenging decisions and raising concerns
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
