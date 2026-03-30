import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function IndependentLivingPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <a href="#" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/specialist-services" className="hover:underline">Dementia, disabilities and specialist support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support" className="hover:underline">Learning disability support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support/housing-and-support-options" className="hover:underline">Housing and support options</a>
            <span className="mx-1">&gt;</span>
            <span>Independent living with floating support</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#231F20] mb-6 font-bold leading-tight">
              Independent living with floating support
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-12 text-base">
              Independent living with floating support means you have your own home and live independently, but a support worker visits you regularly to help with specific tasks.
            </p>

            <div className="max-w-3xl space-y-12">
              {/* What this option is */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">What this option is</h2>
                <p className="text-gray-700 mb-4">
                  Independent living with floating support (also called visiting support or outreach support) means you have your own tenancy and live on your own.
                </p>
                <p className="text-gray-700 mb-4">
                  A support worker visits you at agreed times to help with specific things. They are called "floating" because they visit different people in their own homes, rather than being based in one place.
                </p>
                <p className="text-gray-700">
                  This option gives you the most independence and control. You manage your own home and daily life, but you have professional support when you need it.
                </p>
              </section>

              {/* Who it may suit */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Who it may suit</h2>
                <p className="text-gray-700 mb-4">Independent living with floating support may be right for you if:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you can manage most daily tasks on your own
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you need help with some specific things but not constant support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you want your own home and the freedom to make your own choices
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you are ready to take on the responsibilities of having your own tenancy
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you have a good support network (family, friends) alongside professional support
                  </li>
                </ul>
                <p className="text-gray-700">
                  This option works best for people who are quite independent but need some help to stay safe and manage certain aspects of life.
                </p>
              </section>

              {/* What support may be included */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">What support may be included</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Managing your home</h3>
                    <p className="text-gray-700 text-sm">
                      Help with tasks like managing utilities, dealing with repairs, keeping your home clean and safe.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Money management</h3>
                    <p className="text-gray-700 text-sm">
                      Support with budgeting, paying bills, claiming benefits, managing bank accounts and avoiding debt.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Appointments and admin</h3>
                    <p className="text-gray-700 text-sm">
                      Help arranging and attending appointments, dealing with paperwork and understanding official letters.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Health and medication</h3>
                    <p className="text-gray-700 text-sm">
                      Support to manage health conditions, remember medication, attend medical appointments.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Staying safe</h3>
                    <p className="text-gray-700 text-sm">
                      Help with safety at home, online safety, avoiding scams, and knowing what to do in an emergency.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Community links</h3>
                    <p className="text-gray-700 text-sm">
                      Support to access activities, build social connections, use local services and stay connected.
                    </p>
                  </div>
                </div>
              </section>

              {/* How decisions are made */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">How decisions are made</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    If independent living with floating support might work for you, we'll:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      assess what you can do independently and where you need help
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      work out how many hours of support you need each week
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      agree what tasks the support worker will help with
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      arrange your housing if you don't already have your own home
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      set up a support plan that gives you the right level of help
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    The support is flexible and can increase or decrease depending on your needs. You have a say in when visits happen and what help you get.
                  </p>
                  <p className="text-gray-700">
                    Your support is reviewed regularly. If you need more help, we can arrange that. If you become more independent, we can reduce the support.
                  </p>
                </div>
              </section>

              {/* Things to consider */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Things to consider</h2>
                <div className="bg-[#F0F9FF] border-2 border-[#003078] bg-[#d7f8ff] p-6">
                  <p className="text-gray-900 mb-3">
                    Living on your own means you are responsible for your home, your bills, and managing between support visits.
                  </p>
                  <p className="text-gray-900 mb-3">
                    You need to be able to stay safe when you're on your own, or have ways to get help if you need it (like a community alarm or trusted neighbours).
                  </p>
                  <p className="text-gray-900">
                    Some people start with more support and reduce it over time as they gain confidence. Others find they need more support and move to a different option.
                  </p>
                </div>
              </section>

              {/* How to ask for help */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">How to ask for help</h2>
                <div className="bg-gray-50 border border-gray-300 p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Contact the Community Learning Disability Team</h3>
                  <p className="text-gray-700 mb-4">
                    Request an assessment to talk about independent living. We'll discuss whether this option is right for you and what support you would need.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> <a href="tel:02089288300" className="text-[#bf3688] hover:underline">020 8928 8300</a>
                  </p>
                  <a
                    href="#/adult-social-care/learning-disability-support/request-support"
                    className="inline-flex items-center gap-2 text-[#bf3688] font-bold hover:underline mt-4"
                  >
                    Request learning disability support
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="bg-gray-50 border border-gray-300 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Housing applications</h3>
                  <p className="text-gray-700 mb-4">
                    If you need help finding accommodation, the council's Housing Options Team can help you apply for social housing.
                  </p>
                  <a
                    href="https://www.walthamforest.gov.uk/housing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bf3688] font-bold hover:underline"
                  >
                    Housing options and housing register
                  </a>
                </div>
              </section>

              {/* Related pages */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Related pages</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="#/adult-social-care/learning-disability-support/housing-and-support-options"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <span className="pr-4 font-semibold">All housing and support options</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>

                  <a
                    href="#/adult-social-care/learning-disability-support/ask-for-support"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <span className="pr-4 font-semibold">Ask for learning disability support</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </section>
            </div>

            {/* Metadata */}
            <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
              <p>Last updated: 27 March 2026</p>
              <p>Next review: 27 March 2027</p>
            </div>
          </div>
        </section>
      </div>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}
