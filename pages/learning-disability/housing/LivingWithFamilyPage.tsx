import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function LivingWithFamilyPage() {
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
            <span>Living with family</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#00635C] mb-6 font-bold leading-tight">
              Living with family
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-12 text-base">
              Many adults with a learning disability continue to live with their family. You can get support at home to help you stay safe, develop your independence, and support your family in their caring role.
            </p>

            <div className="max-w-3xl space-y-12">
              {/* What this option is */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">What this option is</h2>
                <p className="text-gray-700 mb-4">
                  Living with family means you continue to live in your family home with parents, siblings, or other relatives who provide support.
                </p>
                <p className="text-gray-700 mb-4">
                  This is the most common living arrangement for adults with a learning disability. You can still get professional support to help you and your family, even if you don't live in your own home.
                </p>
                <p className="text-gray-700">
                  Support can be provided in your family home to help you build independence skills, access community activities, manage your health, and plan for the future.
                </p>
              </section>

              {/* Who it may suit */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">Who it may suit</h2>
                <p className="text-gray-700 mb-4">Living with family may be right for you if:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you and your family are happy with this arrangement
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    your family home is suitable for your needs
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    your family can provide or arrange your day-to-day care with support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you want to stay close to family and familiar surroundings
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you may be planning for more independence in the future
                  </li>
                </ul>
                <p className="text-gray-700">
                  Living with family can work at any age, whether you're a young adult or older. Plans can change as your needs or family circumstances change.
                </p>
              </section>

              {/* What support may be included */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">What support may be included</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Support for you</h3>
                    <p className="text-gray-700 text-sm">
                      Help with daily living skills, accessing activities, managing your health, building independence, and preparing for the future.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Support for your family</h3>
                    <p className="text-gray-700 text-sm">
                      Your family can get a carer's assessment, advice, respite breaks, and help with caring responsibilities.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Day opportunities</h3>
                    <p className="text-gray-700 text-sm">
                      Access to day centres, community activities, education, volunteering or supported employment.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Health and therapy support</h3>
                    <p className="text-gray-700 text-sm">
                      Support from specialist health professionals including nurses, therapists, psychologists and psychiatrists.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Equipment and adaptations</h3>
                    <p className="text-gray-700 text-sm">
                      Help with equipment, home adaptations, or assistive technology if needed to support you at home.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Future planning</h3>
                    <p className="text-gray-700 text-sm">
                      Support to plan for the future, including thinking about moving to your own home when you're ready.
                    </p>
                  </div>
                </div>
              </section>

              {/* How decisions are made */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">How decisions are made</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    If you have a care assessment, we'll talk to you and your family about your current living arrangements and what support you need.
                  </p>
                  <p className="text-gray-700">
                    We'll look at:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      your daily routines and what you want to achieve
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      what support your family provides and whether they need help
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      whether your home is suitable or needs adaptations
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      what activities or support would help you during the day
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      your goals for the future, including housing plans
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Your support plan will be agreed with you and your family. We'll review it regularly to make sure it's working well.
                  </p>
                </div>
              </section>

              {/* How to ask for help */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">How to ask for help</h2>
                <div className="bg-gray-50 border border-gray-300 p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Contact the Community Learning Disability Team</h3>
                  <p className="text-gray-700 mb-4">
                    You can request an assessment by phone or online. We'll talk to you about your needs and what support might help.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> <a href="tel:02089288300" className="text-[#D61F69] hover:underline">020 8928 8300</a>
                  </p>
                  <a
                    href="#/adult-social-care/learning-disability-support/request-support"
                    className="inline-flex items-center gap-2 text-[#D61F69] font-bold hover:underline mt-4"
                  >
                    Request learning disability support
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="bg-gray-50 border border-gray-300 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Family members can ask for a carer's assessment</h3>
                  <p className="text-gray-700 mb-4">
                    If you are a family member providing care, you have the right to your own assessment to look at how caring affects your life and what support you need.
                  </p>
                  <a
                    href="#/adult-social-care/learning-disability-support/support-for-carers-and-families"
                    className="inline-flex items-center gap-2 text-[#D61F69] font-bold hover:underline"
                  >
                    Support for carers and families
                    <ArrowRight size={16} />
                  </a>
                </div>
              </section>

              {/* Related pages */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">Related pages</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="#/adult-social-care/learning-disability-support/housing-and-support-options"
                    className="bg-[#D61F69] text-white p-6 flex items-center justify-between hover:bg-[#B51A5A] transition-colors group relative pr-20"
                  >
                    <span className="pr-4 font-semibold">All housing and support options</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D61F69] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>

                  <a
                    href="#/adult-social-care/learning-disability-support/support-for-carers-and-families"
                    className="bg-[#D61F69] text-white p-6 flex items-center justify-between hover:bg-[#B51A5A] transition-colors group relative pr-20"
                  >
                    <span className="pr-4 font-semibold">Support for carers and families</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D61F69] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
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
