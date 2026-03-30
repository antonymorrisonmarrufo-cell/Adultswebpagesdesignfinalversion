import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function SupportedLivingPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <a href="#/adult-social-care" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/specialist-services" className="hover:underline">Dementia, disabilities and specialist support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support" className="hover:underline">Learning disability support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support/housing-and-support-options" className="hover:underline">Housing and support options</a>
            <span className="mx-1">&gt;</span>
            <span>Supported living</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#231F20] mb-6 font-bold leading-tight">
              Supported living
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-12 text-base">
              Supported living is when you have your own home and tenancy, but get regular support from care workers. Support is tailored to your needs and helps you live as independently as possible.
            </p>

            <div className="max-w-3xl space-y-12">
              {/* What this option is */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">What this option is</h2>
                <p className="text-gray-700 mb-4">
                  Supported living means you have your own tenancy agreement with a landlord (often a housing association). You are the tenant and you have the same rights and responsibilities as any other tenant.
                </p>
                <p className="text-gray-700 mb-4">
                  You live in your own home – either on your own or sharing with other people – and you get support from care staff. The support is arranged separately from your housing.
                </p>
                <p className="text-gray-700">
                  The amount of support you get is based on your needs. Some people need support every day; others need just a few hours a week. Support can include help with personal care, cooking, managing money, staying safe, accessing the community, and building skills.
                </p>
              </section>

              {/* Who it may suit */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Who it may suit</h2>
                <p className="text-gray-700 mb-4">Supported living may be right for you if:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you want your own home and more independence
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you need regular support but not 24-hour care
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you want control over who supports you and when
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you want to be part of your local community
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    you are ready to take on the responsibilities of being a tenant
                  </li>
                </ul>
                <p className="text-gray-700">
                  Supported living can work for people with a wide range of needs. The key is that you want your own home and the right level of support to make that work.
                </p>
              </section>

              {/* What support may be included */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">What support may be included</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Personal care</h3>
                    <p className="text-gray-700 text-sm">
                      Help with washing, dressing, eating, taking medication, and other personal care needs.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Daily living tasks</h3>
                    <p className="text-gray-700 text-sm">
                      Support with cooking, cleaning, shopping, laundry, and managing your home.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Managing money</h3>
                    <p className="text-gray-700 text-sm">
                      Help with budgeting, paying bills, claiming benefits, and managing your finances.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Community access</h3>
                    <p className="text-gray-700 text-sm">
                      Support to access activities, use public transport, go to appointments, and be part of your community.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Health and wellbeing</h3>
                    <p className="text-gray-700 text-sm">
                      Help attending health appointments, managing health conditions, and staying well.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Building skills</h3>
                    <p className="text-gray-700 text-sm">
                      Support to develop independence skills, try new things, and work towards your goals.
                    </p>
                  </div>
                </div>
              </section>

              {/* How decisions are made */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">How decisions are made</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    If supported living might be right for you, we'll work with you to:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      assess your needs and work out how much support you need
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      agree a personal budget to pay for your support
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      help you find suitable accommodation
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      arrange the support provider (or help you choose your own)
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                      create a support plan that reflects what you want to achieve
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    You will need to apply for housing separately through the council's housing register or a housing association. We can help you with this process.
                  </p>
                  <p className="text-gray-700">
                    Your support is reviewed regularly to make sure it's meeting your needs. You have control over your support and can ask for changes if needed.
                  </p>
                </div>
              </section>

              {/* How to ask for help */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">How to ask for help</h2>
                <div className="bg-gray-50 border border-gray-300 p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Contact the Community Learning Disability Team</h3>
                  <p className="text-gray-700 mb-4">
                    Request an assessment to talk about supported living. We'll discuss whether this is the right option for you and what support you would need.
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
                    You will also need to register for social housing. The council's Housing Options Team can help with this.
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
