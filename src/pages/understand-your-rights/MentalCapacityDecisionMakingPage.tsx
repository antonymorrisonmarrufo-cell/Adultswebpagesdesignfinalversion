import { ExternalLink } from 'lucide-react';

export default function MentalCapacityDecisionMakingPage() {
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
          <span>Mental capacity and decision-making</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Mental capacity and decision-making
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          You have the right to make your own decisions. If there are concerns about whether you are able to make a specific decision, the law sets out clear rules to protect you.
        </p>

        {/* The right to make your own decisions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">The right to make your own decisions</h2>
          <p className="text-gray-700">
            The Mental Capacity Act 2005 starts from the principle that every adult has the right to make their own decisions. You must be assumed to have capacity unless it is established otherwise. Making a decision that others disagree with does not mean you lack capacity.
          </p>
        </section>

        {/* The five principles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">The five principles</h2>
          <p className="text-gray-700 mb-4">
            The Mental Capacity Act is built on five core principles:
          </p>
          <ol className="list-decimal ml-6 text-gray-700 space-y-3">
            <li>
              <strong>Assume capacity.</strong> Every adult is assumed to be able to make their own decisions unless it is proved otherwise.
            </li>
            <li>
              <strong>Support decision-making.</strong> Before deciding that someone lacks capacity, all practical steps must be taken to help them make the decision themselves.
            </li>
            <li>
              <strong>Unwise decisions are allowed.</strong> A person is not to be treated as lacking capacity just because they make a decision that others consider unwise.
            </li>
            <li>
              <strong>Best interests.</strong> If a decision must be made on behalf of someone who lacks capacity, it must be made in their best interests.
            </li>
            <li>
              <strong>Least restrictive option.</strong> Any action taken on behalf of someone who lacks capacity should be the least restrictive of their rights and freedom.
            </li>
          </ol>
        </section>

        {/* What mental capacity means */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What mental capacity means</h2>
          <p className="text-gray-700 mb-4">
            Mental capacity means the ability to make a specific decision at a specific time. A person lacks capacity if, because of an illness or disability affecting how their mind works, they are unable to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>Understand the information relevant to the decision</li>
            <li>Retain that information long enough to make the decision</li>
            <li>Use or weigh the information to make the decision</li>
            <li>Communicate their decision (by any means)</li>
          </ul>
          <p className="text-gray-700">
            Capacity is assessed on a decision-by-decision basis. Someone may have capacity to make some decisions but not others. Capacity can also change over time.
          </p>
        </section>

        {/* Best interests decisions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Best interests decisions</h2>
          <p className="text-gray-700 mb-4">
            If someone is assessed as lacking capacity to make a particular decision, that decision must be made in their best interests. This means considering:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>The person's past and present wishes, feelings, beliefs, and values</li>
            <li>The views of anyone involved in their care, including family members and carers</li>
            <li>Whether the person is likely to regain capacity and whether the decision can wait</li>
            <li>The least restrictive option available</li>
          </ul>
        </section>

        {/* Deprivation of Liberty Safeguards (DoLS) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Deprivation of Liberty Safeguards (DoLS)</h2>
          <p className="text-gray-700">
            If someone who lacks capacity is living in a care home or hospital and their care arrangements amount to a deprivation of their liberty, the care home or hospital must apply for authorisation under the Deprivation of Liberty Safeguards. This is a legal protection to make sure that any restrictions on a person's freedom are lawful, necessary, and in their best interests.
          </p>
        </section>

        {/* Lasting Power of Attorney */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Lasting Power of Attorney</h2>
          <p className="text-gray-700 mb-4">
            A Lasting Power of Attorney (LPA) allows you to appoint someone you trust to make decisions on your behalf if you lose the capacity to make them yourself. There are two types:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Property and financial affairs LPA</strong> — covers decisions about your money, property, and financial matters</li>
            <li><strong>Health and welfare LPA</strong> — covers decisions about your medical treatment and care, including where you live</li>
          </ul>
          <p className="text-gray-700 mb-4">
            You can only make an LPA while you have the mental capacity to do so. For more information, visit the Office of the Public Guardian on GOV.UK.
          </p>
          <a 
            href="https://www.gov.uk/power-of-attorney"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
          >
            Find out more about Lasting Power of Attorney on GOV.UK
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Court of Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Court of Protection</h2>
          <p className="text-gray-700 mb-4">
            If someone lacks capacity and does not have a Lasting Power of Attorney, the Court of Protection can appoint a deputy to make decisions on their behalf. The court can also make one-off decisions about someone's welfare, property, or finances.
          </p>
          <a 
            href="https://www.gov.uk/courts-tribunals/court-of-protection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#bf3688] hover:underline"
          >
            Find out more about the Court of Protection on GOV.UK
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/understand-your-rights/independent-advocacy" className="text-[#bf3688] hover:underline">
                Independent advocacy
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/your-rights-under-care-act" className="text-[#bf3688] hover:underline">
                Your rights under the Care Act
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#bf3688] hover:underline">
                Keeping adults safe
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
