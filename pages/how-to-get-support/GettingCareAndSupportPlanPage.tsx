export default function GettingCareAndSupportPlanPage() {
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
          <span>Getting your care and support plan</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Getting your care and support plan
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If your assessment shows that you have eligible needs, we will work with you to create a care and support plan. This sets out what help you will receive, how it will be provided, and how it will be paid for.
        </p>

        {/* What a care and support plan is */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What a care and support plan is</h2>
          <p className="text-gray-700">
            A care and support plan is a written document created with you that describes:
          </p>
          <ul className="space-y-2 text-gray-700 mt-4">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Your eligible care and support needs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>What outcomes you want to achieve — for example, being able to get washed and dressed safely, getting out of the house, or maintaining relationships</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>The support that will be provided to meet those needs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>How your support will be arranged — whether by the council, by you through a direct payment, or a combination</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Your personal budget — the amount of money allocated to meet your eligible needs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Any contribution you need to make towards the cost</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>What to do if something goes wrong or your support does not turn up</span>
            </li>
          </ul>
        </section>

        {/* Who creates the plan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Who creates the plan</h2>
          <p className="text-gray-700 mb-4">
            You are involved in creating your plan. You can write it yourself, work on it with a family member or friend, or do it with support from a social care professional. If you need help and do not have anyone to support you, we can arrange an independent advocate.
          </p>
          <p className="text-gray-700">
            The plan must be agreed by both you and the council before your support begins.
          </p>
        </section>

        {/* What you can include */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What you can include</h2>
          <p className="text-gray-700 mb-4">
            Your plan is about you and your life. It can include:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>What is important to you — your routines, priorities, likes and dislikes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>The people who matter to you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Your hopes and goals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>The kind of support that would make the biggest difference to your daily life</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>How you want your support to be arranged</span>
            </li>
          </ul>
          <p className="text-gray-700">
            Include things that will genuinely improve your life. Your plan should not contain anything you do not agree with.
          </p>
        </section>

        {/* Your personal budget */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Your personal budget</h2>
          <p className="text-gray-700 mb-4">
            Everyone whose eligible needs are met by the council receives a personal budget. This is the amount of money needed to meet the cost of your eligible care and support needs. There are different ways your personal budget can be managed:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">As a direct payment</strong>
                <span className="text-gray-700"> — the money is paid to you so you can arrange your own support</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">As a council-managed account</strong>
                <span className="text-gray-700"> — the council arranges support on your behalf</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">As a mix of both</strong>
                <span className="text-gray-700"> — you manage some of your support and the council manages the rest</span>
              </div>
            </li>
          </ul>
          <p className="text-gray-700">
            For more information, see our page on direct payments and personal budgets.
          </p>
        </section>

        {/* How your plan is reviewed */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">How your plan is reviewed</h2>
          <p className="text-gray-700 mb-4">
            Your care and support plan is reviewed regularly to make sure it is still working for you.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>You will usually have an initial review shortly after your support starts, to check everything is working</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>After that, your plan will be reviewed at least once a year</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>You can ask for a review at any time if your needs change or your support is not working</span>
            </li>
          </ul>
          <p className="text-gray-700">
            During a review, we check whether your needs have changed, whether your support is meeting those needs, and whether your personal budget is still right.
          </p>
        </section>

        {/* If you are unhappy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">If you are unhappy</h2>
          <p className="text-gray-700">
            If you disagree with your plan, or if you think your needs are not being met, talk to your social care professional first. If you are still unhappy, you can use the council's complaints process to have your case reviewed independently.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/paying-for-care/direct-payments-and-personal-budgets" className="text-[#D61F69] hover:underline">
                Direct payments and personal budgets
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#D61F69] hover:underline">
                Paying for your care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support/what-happens-during-your-assessment" className="text-[#D61F69] hover:underline">
                What happens during your assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support/request-an-assessment" className="text-[#D61F69] hover:underline">
                Request an assessment
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
