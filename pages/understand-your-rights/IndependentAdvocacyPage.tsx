import { Phone, AlertCircle, ExternalLink } from 'lucide-react';

export default function IndependentAdvocacyPage() {
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
          <span>Independent advocacy</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Independent advocacy
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          An advocate is someone who helps you express your views, understand your rights, and make sure your voice is heard when decisions are being made about your care.
        </p>

        {/* What an advocate does */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What an advocate does</h2>
          <p className="text-gray-700 mb-4">
            An independent advocate is not a council employee. They work for a separate organisation and are there to represent your interests. An advocate can:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>Help you understand what is happening and what your options are</li>
            <li>Support you to express your views in meetings, assessments, or reviews</li>
            <li>Make sure the council listens to what you want</li>
            <li>Help you challenge a decision if you think it is wrong</li>
            <li>Support you through the complaints process</li>
          </ul>
          <p className="text-gray-700">
            An advocate does not make decisions for you. They help you make your own decisions, or make sure your wishes are represented if you are unable to do this yourself.
          </p>
        </section>

        {/* When the council must arrange an advocate */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">When the council must arrange an advocate</h2>
          <p className="text-gray-700 mb-4">
            Under the Care Act 2014, the council has a legal duty to arrange an independent advocate for you if two conditions are met:
          </p>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2 mb-4">
            <li>You have difficulty being involved in decisions about your care — for example, because of a learning disability, dementia, a mental health condition, or a communication difficulty.</li>
            <li>There is no one appropriate available to support you — for example, you do not have a family member or friend who is able and willing to help.</li>
          </ol>
          <p className="text-gray-700">
            This applies to care needs assessments, care and support planning, care reviews, and safeguarding enquiries. The council must consider whether you need an advocate at each of these stages.
          </p>
        </section>

        {/* Types of advocacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Types of advocacy</h2>
          <p className="text-gray-700 mb-4">
            There are different types of independent advocacy, depending on your situation:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Care Act advocacy</strong> — for people who need support to be involved in their care and support under the Care Act 2014</li>
            <li><strong>Independent Mental Health Advocacy (IMHA)</strong> — for people who are detained under the Mental Health Act, or who are subject to a Community Treatment Order or guardianship</li>
            <li><strong>Independent Mental Capacity Advocacy (IMCA)</strong> — for people who lack mental capacity and have no one else to represent them when serious decisions are being made about their care or treatment</li>
            <li><strong>General advocacy</strong> — broader support to help you navigate services, raise concerns, or understand your rights</li>
          </ul>
        </section>

        {/* How to get an advocate */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">How to get an advocate</h2>
          <p className="text-gray-700 mb-4">
            You can ask the council to arrange an advocate for you. Your social worker, care coordinator, or anyone involved in your care can also make a referral.
          </p>
          <p className="text-gray-700 mb-6">
            You can also contact the advocacy service directly:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">POhWER</h3>
            <p className="text-gray-700 mb-4">
              POhWER provides independent advocacy services in Waltham Forest for adults.
            </p>
            <div className="flex items-center gap-3 text-gray-900 mb-2">
              <Phone size={20} className="text-[#D61F69]" />
              <span className="font-bold">Phone: 0300 456 2370</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink size={16} className="text-[#D61F69]" />
              <a 
                href="https://www.pohwer.net/waltham-forest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D61F69] hover:underline"
              >
                pohwer.net/waltham-forest
              </a>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-[#FFF4E6] border-l-4 border-[#D61F69] p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-[#D61F69] mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-gray-700">
                  You do not need to wait for the council to offer you an advocate. If you think you need one, ask. If you find it difficult to be involved in decisions about your care and you do not have someone to help you, the council must arrange an advocate — this is a legal duty, not a discretionary service.
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
              <a href="#/adult-social-care/understand-your-rights/your-rights-under-care-act" className="text-[#D61F69] hover:underline">
                Your rights under the Care Act
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/understand-your-rights/mental-capacity-decision-making" className="text-[#D61F69] hover:underline">
                Mental capacity and decision-making
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
