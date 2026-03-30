import { Phone } from 'lucide-react';

export default function RequestAssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/how-to-get-support" className="hover:underline">How to get support</a>
          <span className="mx-1">&gt;</span>
          <span>Request an assessment</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Request an assessment
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          A care needs assessment helps us understand your situation and decide what support, if any, would help. It is always free.
        </p>

        {/* What a care needs assessment is */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What a care needs assessment is</h2>
          <p className="text-gray-700 mb-4">
            A care needs assessment is a conversation between you and a professional from the council. It looks at what you can and cannot do, what matters to you, and what kind of support might help you stay as independent as possible.
          </p>
          <p className="text-gray-700">
            It is not a test. There are no right or wrong answers. It is about understanding your situation.
          </p>
        </section>

        {/* How to request one */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to request one</h2>
          <p className="text-gray-700 mb-4">
            To request a care needs assessment, contact the Adult Social Care team:
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={20} className="text-[#bf3688]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm mb-4 ml-8">Monday to Friday, 9am to 5pm</p>
          <p className="text-gray-700">
            You can also use the online self-assessment tool first to check whether an assessment is likely to be the right next step.
          </p>
        </section>

        {/* Who can request one */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who can request one</h2>
          <p className="text-gray-700 mb-4">
            Anyone can request a care needs assessment:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>You can request one for yourself</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A family member, friend, or carer can request one on your behalf</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A GP, hospital, or other professional can refer you</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You do not need a referral from a doctor. If you think you might need help, you have the right to request an assessment.
          </p>
        </section>

        {/* What happens before the assessment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens before the assessment</h2>
          <p className="text-gray-700 mb-4">
            When we receive your request, we will:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Confirm we have received it</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Ask you some initial questions to understand your situation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Arrange a date and time for the assessment that suits you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Tell you what information it would be helpful to have ready</span>
            </li>
          </ul>
        </section>

        {/* What to have ready */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What to have ready</h2>
          <p className="text-gray-700 mb-4">
            It can help to think about the following before your assessment:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>What daily tasks you find difficult (for example, washing, cooking, getting around)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>How your condition or situation affects your daily life</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>What support you are already receiving from family, friends, or other services</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>What you would like help with</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Any medical conditions, medications, or treatments</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You do not need to prepare anything formal. The assessment is a conversation, and the professional will guide you through it.
          </p>
        </section>

        {/* Can I bring someone with me? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Can I bring someone with me?</h2>
          <p className="text-gray-700">
            Yes. You can bring anyone you choose to the assessment — a family member, friend, carer, or anyone you trust. If you do not have anyone to support you and you find it difficult to be involved in the process, we can arrange an independent advocate.
          </p>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-12">
          <p className="text-gray-900">
            An assessment does not commit you to anything. You can have an assessment and then decide whether you want to take up any support offered. It is simply a way to understand your situation and your options.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-to-get-support/what-happens-during-your-assessment" className="text-[#bf3688] hover:underline">
                What happens during your assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works/who-can-get-help" className="text-[#bf3688] hover:underline">
                Who can get help
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#bf3688] hover:underline">
                Paying for your care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support/contact-us" className="text-[#bf3688] hover:underline">
                Contact us
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