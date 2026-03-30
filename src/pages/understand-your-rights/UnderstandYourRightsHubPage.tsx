import { ArrowRight, Phone } from 'lucide-react';

export default function UnderstandYourRightsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Understand your rights</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Understand your rights
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          The Care Act 2014 gives you clear rights when it comes to adult social care. This section explains what you are entitled to, how to get independent support, and what to do if things go wrong.
        </p>

        {/* Your key rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Your key rights</h2>
          <p className="text-gray-700 mb-4">Under the law, you have the right to:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Ask for a care needs assessment</strong> at any time. The council must assess anyone who appears to need care and support. The assessment is always free.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Be involved in decisions about your care.</strong> The council must work with you to plan your care and support. Your views, wishes, and goals must be taken into account.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Receive information and advice</strong> about the care and support available to you, even if you are not eligible for council-funded services.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Have choice and control</strong> over how your care is arranged. If you receive a personal budget, you can choose to manage it yourself through a direct payment.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Have a carer's assessment</strong> if you are an unpaid carer. You have the same right to an assessment and support as the person you care for.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Access an independent advocate</strong> if you have difficulty being involved in decisions about your care and you do not have anyone appropriate to support you.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Be protected from abuse and neglect.</strong> The council has a duty to safeguard adults who have care and support needs and are at risk of harm.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Complain</strong> if something goes wrong. You have a legal right to raise a complaint about any aspect of your adult social care, and it will not affect the care you receive.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#bf3688] font-bold mt-1">•</span>
              <div>
                <strong>Challenge a decision.</strong> If you disagree with a decision about your care or your financial assessment, you can ask for it to be reviewed.
              </div>
            </li>
          </ul>
        </section>

        {/* In this section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">In this section</h2>

          {/* Topic cards container - white background for deeper level pages */}
          <div className="space-y-4">
            
            {/* Your rights under the Care Act */}
            <a 
              href="#/adult-social-care/understand-your-rights/your-rights-under-care-act"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Your rights under the Care Act
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                A plain English summary of what the Care Act 2014 means for you, including your right to an assessment, to be involved in your care, and to receive information and advice.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Independent advocacy */}
            <a 
              href="#/adult-social-care/understand-your-rights/independent-advocacy"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Independent advocacy
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                What an advocate is, when the council must arrange one for you, and how to get independent support.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Mental capacity and decision-making */}
            <a 
              href="#/adult-social-care/understand-your-rights/mental-capacity-decision-making"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Mental capacity and decision-making
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                Your right to make your own decisions, what happens if you lack capacity, and how the law protects you.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Your rights as a carer */}
            <a 
              href="#/adult-social-care/understand-your-rights/your-rights-as-carer"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Your rights as a carer
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                What the law says about support for unpaid carers, including your right to an assessment and to services in your own right.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Challenging decisions and raising concerns */}
            <a 
              href="#/adult-social-care/understand-your-rights/challenging-decisions-raising-concerns"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">
                Challenging decisions and raising concerns
              </h3>
              <p className="text-gray-700 text-sm pr-12">
                What to do if you disagree with a decision about your care, your financial assessment, or the way you have been treated.
              </p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

          </div>
        </section>

        {/* Need help understanding your rights? */}
        <section className="mb-12 bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Need help understanding your rights?</h2>
          <p className="text-gray-700 mb-4">
            If you are not sure what you are entitled to, or you need help understanding a decision the council has made, contact the Adult Social Care team.
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={20} className="text-[#bf3688]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm mb-4 ml-8">Monday to Friday, 9am to 5pm</p>
          <p className="text-gray-700">
            You can also contact Healthwatch Waltham Forest or Citizens Advice for independent advice.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#bf3688] hover:underline">
                How adult social care works
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support" className="text-[#bf3688] hover:underline">
                How to get support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#bf3688] hover:underline">
                Keeping adults safe
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/complaints-compliments" className="text-[#bf3688] hover:underline">
                Complaints, compliments and help shape our future services
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
