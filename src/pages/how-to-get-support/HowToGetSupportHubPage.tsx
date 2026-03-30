import { ArrowRight, Phone } from 'lucide-react';

export default function HowToGetSupportHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>How to get support</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          How to get support
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          Find out how to apply for adult social care support, from making first contact through to getting a care and support plan.
        </p>

        {/* Where to start */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-6">Where to start</h2>
          
          <p className="text-gray-700 mb-8">
            If you think you or someone you know might need adult social care, you do not need to wait until things are difficult. Getting in touch early means we can connect you to help before the situation gets worse.
          </p>

          <p className="text-gray-700 mb-6 font-bold">
            There are two ways to start:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Check your situation online</h3>
              <p className="text-gray-700 mb-4">
                Use our self-assessment tool to answer some questions about your daily life. It takes a few minutes and will tell you whether you might be eligible for support. It will also point you towards information, advice, and local services that could help.
              </p>
              <a
                href="https://portal.walthamforest.gov.uk/AchieveForms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-6 py-2 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
              >
                Use our self-assessment tool
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact us directly</h3>
              <p className="text-gray-700 mb-4">
                If you prefer to speak to someone, or if you are not sure where to start, call our Adult Social Care team. We can talk through your situation and help you work out what to do next.
              </p>
              <div className="flex items-center gap-2 text-gray-900 mb-1">
                <Phone size={18} className="text-[#bf3688]" />
                <span className="font-bold">Phone: 020 8496 3130</span>
              </div>
              <p className="text-gray-700 text-sm ml-6">Monday to Friday, 9am to 5pm</p>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6">
            <p className="text-gray-900">
              You do not need a referral from a GP or hospital to ask for help. Anyone can contact us — you, a family member, a friend, or a professional.
            </p>
          </div>
        </section>

        {/* The steps from first contact to support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-6">The steps from first contact to support</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Make contact</h3>
                <p className="text-gray-700">Phone us or use the online self-assessment tool. We will listen to your situation and advise on the best next step.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Check your situation</h3>
                <p className="text-gray-700">The self-assessment tool checks whether you might be eligible for support and signposts you to services that could help straight away.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Request an assessment</h3>
                <p className="text-gray-700">If your situation suggests you may have eligible needs, we will arrange a care needs assessment. This is always free.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Have your assessment</h3>
                <p className="text-gray-700">A professional from the council will talk with you about your daily life, what you find difficult, and what matters to you. It is a conversation, not a test.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Get your plan</h3>
                <p className="text-gray-700">If you are eligible, we will work with you to create a care and support plan that sets out what help you will receive and how it will be provided.</p>
              </div>
            </div>
          </div>
        </section>

        {/* In this section - Card links */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-8">In this section</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a
              href="#/adult-social-care/how-to-get-support/check-your-situation-online"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">Check your situation online</h3>
              <p className="text-gray-700 text-sm pr-12">Use our self-assessment tool to find out whether you might be eligible for support and get signposted to services that could help.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#/adult-social-care/how-to-get-support/contact-us"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">Contact us</h3>
              <p className="text-gray-700 text-sm pr-12">How to get in touch with the Adult Social Care team by phone, and what happens when you call.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#/adult-social-care/how-to-get-support/request-an-assessment"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">Request an assessment</h3>
              <p className="text-gray-700 text-sm pr-12">How to ask for a care needs assessment, who can request one, and what to expect.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="#/adult-social-care/how-to-get-support/what-happens-during-your-assessment"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">What happens during your assessment</h3>
              <p className="text-gray-700 text-sm pr-12">What we will talk about, who will be there, and what happens afterwards.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 5 */}
            <a
              href="#/adult-social-care/how-to-get-support/getting-your-care-and-support-plan"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">Getting your care and support plan</h3>
              <p className="text-gray-700 text-sm pr-12">How your plan is created, what it includes, and how it is reviewed.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* Need help urgently */}
        <section className="mb-12 bg-gray-100 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Need help urgently?</h2>
          <p className="text-gray-700 mb-4 font-bold">
            If you or someone you know is in immediate danger, call 999.
          </p>
          <p className="text-gray-700 mb-4">
            If you are worried about a vulnerable adult, visit our keeping adults safe page or call the Adult Social Care team.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Out of hours emergencies:</strong> 020 8496 3130 (choose the emergency option)
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
              <a href="#/adult-social-care/paying-for-care" className="text-[#bf3688] hover:underline">
                Paying for your care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/being-carer" className="text-[#bf3688] hover:underline">
                Being a carer
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/live-independently-at-home" className="text-[#bf3688] hover:underline">
                Support at home
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
          <p>Last updated: 28 March 2026</p>
          <p>Next review: 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}