export default function WhoCanGetHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/how-adult-social-care-works" className="hover:underline">How adult social care works</a>
          <span className="mx-1">&gt;</span>
          <span>Who can get help</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Who can get help
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Not everyone who contacts us will receive council-funded care. This page explains what we look at when deciding if you are eligible for support.
        </p>

        {/* Who adult social care is for */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who adult social care is for</h2>
          <p className="text-gray-700">
            Adult social care is for people aged 18 and over who live in Waltham Forest and have care and support needs arising from a physical or mental impairment or illness. This includes people with physical disabilities, learning disabilities, mental health conditions, sensory impairments, long-term illnesses, and age-related conditions such as dementia or frailty.
          </p>
        </section>

        {/* How eligibility works */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How eligibility works</h2>
          <p className="text-gray-700 mb-4">
            To decide if you are eligible for council-funded support, we carry out a care needs assessment. The assessment looks at three things:
          </p>
          <ol className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="font-bold text-[#bf3688]">1.</span>
              <span>Do your care and support needs arise from a physical or mental impairment or illness?</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#bf3688]">2.</span>
              <span>Because of those needs, are you unable to achieve two or more of the things listed below?</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#bf3688]">3.</span>
              <span>As a result, is there a significant impact on your wellbeing?</span>
            </li>
          </ol>
          <p className="text-gray-700">
            If the answer to all three is yes, you are likely to be eligible for support from the council.
          </p>
        </section>

        {/* What we look at */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What we look at</h2>
          <p className="text-gray-700 mb-4">
            The eligibility criteria look at whether you can do the following things:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Prepare and eat food and drink</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Wash yourself and look after your personal hygiene</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Use the toilet</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Dress yourself appropriately</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Keep your home safe and clean</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Stay safe from harm, abuse, or neglect</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Maintain relationships with family and friends</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Access work, education, training, or volunteering</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Use local services and facilities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Carry out any caring responsibilities you have</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You do not need to have difficulty with all of these. If you are unable to achieve two or more, and this has a significant impact on your wellbeing, you may be eligible.
          </p>
        </section>

        {/* What happens if you are eligible */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens if you are eligible</h2>
          <p className="text-gray-700 mb-4">
            If your assessment shows that you have eligible needs, we will work with you to create a care and support plan. This sets out what help you will receive and how it will be provided.
          </p>
          <p className="text-gray-700">
            We will also carry out a financial assessment to work out whether you need to contribute towards the cost of your care.
          </p>
        </section>

        {/* What happens if you are not eligible */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens if you are not eligible</h2>
          <p className="text-gray-700 mb-4">
            If your assessment shows that you do not have eligible needs, we will tell you why. We will also give you information and advice about other support that may help you, including local community services, voluntary organisations, and equipment that you can arrange yourself.
          </p>
          <p className="text-gray-700">
            You can ask for another assessment at any time if your situation changes.
          </p>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-12">
          <p className="text-gray-900">
            You do not need a GP referral to ask for an assessment. Anyone can contact us — you, a family member, a friend, or a professional who works with you.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works/how-to-ask-for-help" className="text-[#bf3688] hover:underline">
                How to ask for help
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works/what-happens-during-an-assessment" className="text-[#bf3688] hover:underline">
                What happens during an assessment
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
