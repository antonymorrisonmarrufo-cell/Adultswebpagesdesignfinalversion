import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

export default function HousingAndSupportOptionsPage() {
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
            <span>Housing and support options</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#231F20] mb-6 font-bold leading-tight">
              Housing and support options
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-12 text-base">
              Find out about housing options and support for adults with a learning disability in Waltham Forest, including living with family, supported living, residential care, and more.
            </p>

            <div className="max-w-3xl space-y-12">
              {/* Types of housing and support */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Types of housing and support</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 - Living with family */}
                  <a
                    href="#/adult-social-care/learning-disability-support/housing/living-with-family"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Living with family
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Continue to live with parents or relatives who provide support, with help from the Community Learning Disability Team.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>

                  {/* Card 2 - Supported living */}
                  <a
                    href="#/adult-social-care/learning-disability-support/housing/supported-living"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Supported living
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Have your own tenancy with regular support from care workers, tailored to your needs.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>

                  {/* Card 3 - Residential care homes */}
                  <a
                    href="#/adult-social-care/learning-disability-support/housing/residential-care"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Residential care homes
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Live in a care home with 24-hour staff support for people with more complex needs.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>

                  {/* Card 4 - Shared Lives */}
                  <a
                    href="#/adult-social-care/learning-disability-support/housing/shared-lives"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Shared Lives
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Share the home and family life of an approved carer, offering a family-based approach to support.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>

                  {/* Card 5 - Independent living with floating support */}
                  <a
                    href="#/adult-social-care/learning-disability-support/housing/independent-living"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Independent living with floating support
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Live independently in your own home with a support worker who visits regularly to help with specific tasks.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                </div>
              </section>

              {/* How to get housing support */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">How to get housing support</h2>
                
                <div className="space-y-4">
                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-3">
                    <h3 className="font-bold text-gray-900 mb-2">Step 1: Request an assessment</h3>
                    <p className="text-gray-700">
                      Contact the Community Learning Disability Team to request a care needs assessment. We'll talk to you about your current situation and what you want for the future.
                    </p>
                  </div>

                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-3">
                    <h3 className="font-bold text-gray-900 mb-2">Step 2: Discuss your housing goals</h3>
                    <p className="text-gray-700">
                      During your assessment, we'll explore your housing goals, what type of accommodation would suit you, and how much support you need.
                    </p>
                  </div>

                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-3">
                    <h3 className="font-bold text-gray-900 mb-2">Step 3: Create a support plan</h3>
                    <p className="text-gray-700">
                      If you're eligible for adult social care, we'll work with you to create a support plan that includes your housing and support needs.
                    </p>
                  </div>

                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-3">
                    <h3 className="font-bold text-gray-900 mb-2">Step 4: Access housing services</h3>
                    <p className="text-gray-700">
                      We can help you apply for social housing, work with local housing providers, and arrange the right level of support for your new home.
                    </p>
                  </div>
                </div>
              </section>

              {/* For young people preparing for adulthood */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">For young people preparing for adulthood</h2>
                
                <div className="bg-[#F0F9FF] border-2 border-[#003078] bg-[#d7f8ff] p-6">
                  <p className="text-gray-900 mb-4">
                    If you are a young person aged 14-25 with a learning disability and SEND support, planning for where you will live is an important part of preparing for adulthood.
                  </p>
                  <p className="text-gray-900 mb-4">
                    Your transitions planning should include thinking about housing options, independent living skills, and how to stay connected to your community.
                  </p>
                  <a
                    href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood/where-you-will-live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#bf3688] font-bold hover:underline"
                  >
                    Preparing for adulthood: where you will live
                    <ArrowRight size={16} />
                  </a>
                </div>
              </section>

              {/* Who can help */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Who can help</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3">Community Learning Disability Team</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      We assess your support needs and help arrange the right housing and support package.
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Phone:</strong> <a href="tel:02089288300" className="text-[#bf3688] hover:underline">020 8928 8300</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3">Housing Options Team</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      The council's Housing Options Team can help with applying for social housing, housing register, and finding suitable accommodation.
                    </p>
                    <a
                      href="https://www.walthamforest.gov.uk/housing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#bf3688] font-bold hover:underline text-sm"
                    >
                      Visit the housing section
                    </a>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3">Advocacy services</h3>
                    <p className="text-gray-700 text-sm">
                      Independent advocates can support you to understand your housing options and make sure your voice is heard in planning meetings.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3">Your family and carers</h3>
                    <p className="text-gray-700 text-sm">
                      Family members and carers can be involved in planning if you want them to be. Carers can also get their own assessment to plan for the future.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related pages */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Related pages</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="#/adult-social-care/learning-disability-support/ask-for-support"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <span className="pr-4 font-semibold">Ask for learning disability support</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>

                  <a
                    href="#/adult-social-care/learning-disability-support/preparing-for-adulthood"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <span className="pr-4 font-semibold">Preparing for adulthood</span>
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