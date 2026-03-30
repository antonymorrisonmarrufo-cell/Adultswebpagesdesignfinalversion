import { Phone, ExternalLink } from 'lucide-react';

export default function YourRightsAsCarerPage() {
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
          <span>Your rights as a carer</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Your rights as a carer
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you provide unpaid care for a family member, friend, or neighbour, the law gives you specific rights. You are entitled to support in your own right — not just as an extension of the person you care for.
        </p>

        {/* What the Care Act says about carers */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What the Care Act says about carers</h2>
          <p className="text-gray-700">
            Since April 2015, the Care Act 2014 has given unpaid carers the same rights to assessment and support as the people they care for. This means the council must treat your needs as equally important.
          </p>
        </section>

        {/* Your right to a carer's assessment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Your right to a carer's assessment</h2>
          <p className="text-gray-700 mb-4">
            If you provide regular and substantial care for another person, you have the right to ask for a carer's assessment. This is a conversation about how caring affects your life, what you find difficult, and what support would help.
          </p>
          <p className="text-gray-700 mb-6">
            You are entitled to an assessment regardless of the level of care you provide, the financial resources of either you or the person you care for, or whether the person you look after has been assessed by the council.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6">
            <p className="text-gray-700 mb-3">
              To request a carer's assessment, contact the Adult Social Care team on <strong>020 8496 3130</strong>, or ask Carers First (who provide carer support services on behalf of the council).
            </p>
          </div>
        </section>

        {/* What the assessment looks at */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What the assessment looks at</h2>
          <p className="text-gray-700 mb-4">
            A carer's assessment considers whether your caring role is affecting your ability to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>Carry out day-to-day tasks at home</li>
            <li>Look after your own physical and mental health</li>
            <li>Maintain relationships with family and friends</li>
            <li>Participate in work, education, or training</li>
            <li>Have time for leisure and social activities</li>
            <li>Achieve the things that matter to you</li>
          </ul>
          <p className="text-gray-700">
            If your caring role is having a significant impact on your wellbeing in any of these areas, you may be eligible for support.
          </p>
        </section>

        {/* Support you may be entitled to */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Support you may be entitled to</h2>
          <p className="text-gray-700 mb-4">
            If your assessment shows you have eligible needs, the council must provide support. This might include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>Replacement care (sometimes called respite) so you can take a break</li>
            <li>Help with tasks around the home</li>
            <li>A personal budget or direct payment to arrange your own support</li>
            <li>Referral to community services, peer support groups, or counselling</li>
            <li>Information about benefits you may be entitled to, including Carer's Allowance</li>
          </ul>
          <p className="text-gray-700">
            Support for carers is provided free of charge. The council does not charge for services provided directly to you as a carer in your own right.
          </p>
        </section>

        {/* Other protections for carers */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Other protections for carers</h2>
          <p className="text-gray-700 mb-4">
            In addition to the Care Act, other laws protect your rights as a carer:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Equality Act 2010</strong> — protects you from discrimination related to your caring role</li>
            <li><strong>Employment Rights Act 1996</strong> — gives you the right to take time off for emergencies involving a dependant</li>
            <li><strong>Flexible working regulations</strong> — give you the right to request flexible working arrangements if you are an employee</li>
          </ul>
        </section>

        {/* Carers First */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Carers First</h2>
          <p className="text-gray-700 mb-4">
            Carers First provides support services for unpaid carers on behalf of the council. They offer practical and emotional support, advice, information, peer support groups, and training.
          </p>
          <a 
            href="https://www.carersfirst.org.uk/waltham-forest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            Visit carersfirst.org.uk/waltham-forest
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Further information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Further information</h2>
          <ul className="space-y-3">
            <li>
              <a 
                href="https://www.carersuk.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D61F69] hover:underline"
              >
                Carers UK — information about carers' rights, benefits, and support
                <ExternalLink size={16} />
              </a>
            </li>
            <li>
              <a 
                href="https://www.gov.uk/carers-allowance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D61F69] hover:underline"
              >
                GOV.UK — Carer's Allowance information and applications
                <ExternalLink size={16} />
              </a>
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-to-get-support" className="text-[#D61F69] hover:underline">
                How to get support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/being-carer" className="text-[#D61F69] hover:underline">
                Being a carer
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/your-rights-under-care-act" className="text-[#D61F69] hover:underline">
                Your rights under the Care Act
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/independent-advocacy" className="text-[#D61F69] hover:underline">
                Independent advocacy
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
