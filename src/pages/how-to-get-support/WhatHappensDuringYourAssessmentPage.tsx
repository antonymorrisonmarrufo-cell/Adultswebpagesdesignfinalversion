export default function WhatHappensDuringYourAssessmentPage() {
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
          <span>What happens during your assessment</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          What happens during your assessment
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Your assessment is a conversation about your daily life. We want to understand what you can do, what you find difficult, and what kind of support would help.
        </p>

        {/* How the assessment works */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How the assessment works</h2>
          <p className="text-gray-700">
            Your assessment can take place face to face at your home, over the phone, or by video call. A social care professional from the council will carry out the assessment. If your needs involve health services, an NHS professional may also be involved.
          </p>
        </section>

        {/* What we will talk about */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What we will talk about</h2>
          <p className="text-gray-700 mb-4">
            The assessment covers your daily life. We will ask about:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Any physical needs, such as difficulty washing, dressing, preparing meals, or getting around</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Your mental and emotional wellbeing, such as your memory, mood, or how you are coping</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Things that are important to you, such as spending time with family, attending activities, or getting to appointments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Any support you already receive from family, friends, or other services</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Your home environment and whether it is safe and suitable</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>What you would like to achieve and what a good day looks like for you</span>
            </li>
          </ul>
          <p className="text-gray-700">
            We will also talk about your strengths — what you can do, not just what you find difficult. We want to understand the full picture so we can recommend the right kind of support.
          </p>
        </section>

        {/* How long it takes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How long it takes</h2>
          <p className="text-gray-700">
            A straightforward assessment usually takes around an hour. If your needs are more complex, it may take longer or involve more than one conversation. If your situation is urgent, we will prioritise your assessment.
          </p>
        </section>

        {/* What happens afterwards */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens afterwards</h2>
          <p className="text-gray-700 mb-4">
            After your assessment, we will write to you with the outcome. The letter will explain:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Whether you have eligible care and support needs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>If you are eligible, what happens next — including creating a care and support plan and carrying out a financial assessment to work out whether you need to contribute towards the cost</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>If you are not eligible, why that decision was made and what other support is available to you locally</span>
            </li>
          </ul>
          <p className="text-gray-700">
            If you disagree with the outcome, you can ask us to reconsider. We will tell you how to do this in the letter.
          </p>
        </section>

        {/* If you are not eligible */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">If you are not eligible</h2>
          <p className="text-gray-700">
            If your assessment shows that you do not have eligible needs, we will still help. We will give you information and advice about community services, voluntary organisations, equipment, and other support that you can arrange yourself. You can ask for another assessment at any time if your situation changes.
          </p>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-12">
          <p className="text-gray-900">
            The assessment is always free. It does not commit you to receiving services or paying anything. It is simply a way to understand your situation and your options.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-to-get-support/getting-your-care-and-support-plan" className="text-[#bf3688] hover:underline">
                Getting your care and support plan
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support/request-an-assessment" className="text-[#bf3688] hover:underline">
                Request an assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#bf3688] hover:underline">
                Paying for your care
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
