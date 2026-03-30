import { ArrowRight, Phone, AlertTriangle } from 'lucide-react';

export default function HowAdultSocialCareWorksHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>How adult social care works</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          How adult social care works
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          Find out what adult social care is, who it is for, how to get help, and what you may need to pay.
        </p>

        {/* The journey step by step */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-6">The journey step by step</h2>
          
          <p className="text-gray-700 mb-6">
            If you or someone you know needs help with everyday life because of illness, disability, or getting older, adult social care may be able to help. Here is how the process works:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">You contact us</h3>
                <p className="text-gray-700">You can phone us, use our online self-assessment tool, or ask someone to contact us on your behalf. A GP, hospital, or other professional can also refer you.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We assess your needs</h3>
                <p className="text-gray-700">A care needs assessment is a conversation about what you can and cannot do, what matters to you, and what support might help. It is always free.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We decide if you are eligible</h3>
                <p className="text-gray-700">We look at whether your needs arise from a physical or mental condition, whether they affect your ability to do everyday things, and whether this has a significant impact on your wellbeing.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We work out the cost</h3>
                <p className="text-gray-700">If you are eligible for support, we carry out a financial assessment to decide whether you need to contribute towards the cost of your care.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We agree a plan with you</h3>
                <p className="text-gray-700">Your care and support plan sets out what help you will receive, how it will be provided, and how it will be paid for.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#bf3688] text-white flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We review your plan regularly</h3>
                <p className="text-gray-700">We check that your support is still working for you and make changes if your needs have changed.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6">
            <p className="text-gray-900">
              <strong>A care needs assessment is always free.</strong> Anyone can ask for one. You do not need a referral from a GP or hospital.
            </p>
          </div>
        </section>

        {/* Key things to know */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-6">Key things to know</h2>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Adult social care is for people aged 18 and over who need help with everyday life because of illness, disability, frailty, or a mental health condition.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A care needs assessment is free. You do not need to pay anything to find out whether you are eligible for support.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Not everyone who has an assessment will receive council-funded care. But even if you are not eligible, we will give you information and advice about other help available to you.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Adult social care is means-tested. If you are eligible for support, we will assess your finances to see if you need to contribute towards the cost.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>You have choices. If you receive a personal budget, you can choose how your support is arranged, including managing it yourself through a direct payment.</span>
            </li>
          </ul>
        </section>

        {/* In this section - Card links */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-8">In this section</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a
              href="#/adult-social-care/how-adult-social-care-works/what-is-adult-social-care"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">What is adult social care</h3>
              <p className="text-gray-700 text-sm pr-12">What adult social care is, who provides it, and the kinds of help it can offer.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#/adult-social-care/how-adult-social-care-works/who-can-get-help"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">Who can get help</h3>
              <p className="text-gray-700 text-sm pr-12">The eligibility criteria for adult social care and what we look at when deciding if you qualify for support.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#/adult-social-care/how-adult-social-care-works/how-to-ask-for-help"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">How to ask for help</h3>
              <p className="text-gray-700 text-sm pr-12">How to contact us, request an assessment, or use our online self-assessment tool.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="#/adult-social-care/how-adult-social-care-works/what-happens-during-an-assessment"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">What happens during an assessment</h3>
              <p className="text-gray-700 text-sm pr-12">What to expect during a care needs assessment, what we will ask you about, and what happens afterwards.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 5 */}
            <a
              href="#/adult-social-care/how-adult-social-care-works/your-care-and-support-plan"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#bf3688] mb-2 pr-12">Your care and support plan</h3>
              <p className="text-gray-700 text-sm pr-12">How your plan is created, what it includes, and how it is reviewed.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-6">Quick actions</h2>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://portal.walthamforest.gov.uk/AchieveForms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
            >
              Use our self-assessment tool
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Adult Social Care
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Need help now */}
        <section className="mb-12 bg-gray-100 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Need help now?</h2>
          <p className="text-gray-700 mb-4 font-bold">
            If you or someone you know is in immediate danger, call 999.
          </p>
          <p className="text-gray-700 mb-4">
            If you are worried about a vulnerable adult, visit our keeping adults safe page or call our Adult Social Care team.
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={20} className="text-[#bf3688]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm ml-8 mb-3">Monday to Friday, 9am to 5pm</p>
          <p className="text-gray-700 text-sm ml-8">
            <strong>Out of hours emergencies:</strong> 020 8496 3130 (choose the emergency option)
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
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