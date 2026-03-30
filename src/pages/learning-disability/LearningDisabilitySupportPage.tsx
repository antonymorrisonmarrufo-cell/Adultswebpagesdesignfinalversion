import { ArrowRight, Phone } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

export default function LearningDisabilitySupportPage() {
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
            <span>Learning disability support</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-5xl text-[#231F20] mb-2 font-bold leading-tight">
              Support for adults with learning disabilities
            </h1>

            {/* Service label */}
            <p className="text-gray-600 text-lg mb-4">
              Support from the Community Learning Disability Team (CLDT)
            </p>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-6 text-base">
              Support for adults with a learning disability in Waltham Forest, including assessments, health support, advice for carers, and help with preparing for adulthood.
            </p>

            {/* Primary CTAs */}
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#/adult-social-care/learning-disability-support/request-support"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                Ask for learning disability support
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:02089288300"
                className="inline-flex items-center gap-3 bg-white border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                <Phone size={18} />
                Call 020 8928 8300
              </a>
            </div>

            {/* Professional referral - now in pink bordered box */}
            <div className="mb-10">
              <a
                href="#/adult-social-care/learning-disability-support/professional-referral"
                className="border-2 border-[#bf3688] bg-white p-6 pr-20 hover:shadow-md transition-shadow relative block"
              >
                <h2 className="text-xl font-bold text-[#bf3688] mb-3 pr-4">Professional referral</h2>
                <p className="text-gray-700 pr-4">
                  If you are a health or care professional, refer an adult for learning disability support.
                </p>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="text-white" size={20} />
                </div>
              </a>
            </div>

            {/* Hero image */}
            <div className="mb-12 max-w-2xl">
              <img
                src="/Images/learning-disability.jpg"
                alt="An adult with a learning disability in a bright community setting, sitting at a table with a support worker, engaged in conversation about support options"
                className="w-full h-auto rounded border border-gray-200"
              />
            </div>

            <div className="max-w-3xl space-y-12">
              {/* How we can help */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">How we can help</h2>
                
                {/* 4 primary cards - now with consistent styling */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <a
                    href="#/adult-social-care/learning-disability-support/ask-for-support"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Ask for learning disability support
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Find out who can get help, how assessments work, and how to ask for support from the Community Learning Disability Team.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>

                  {/* Card 2 */}
                  <a
                    href="#/adult-social-care/learning-disability-support/support-for-carers-and-families"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Support for carers and families
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Find support for unpaid carers, information about carers' assessments, and help for families supporting an adult with a learning disability.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>

                  {/* Card 3 */}
                  <a
                    href="#/adult-social-care/learning-disability-support/preparing-for-adulthood"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Preparing for adulthood
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Find out what should happen before 18, how adult services are planned, and where to get help with education, work, health and housing.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>

                  {/* Card 4 */}
                  <a
                    href="#/adult-social-care/learning-disability-support/easy-read-information-and-resources"
                    className="bg-white border border-gray-200 p-6 pb-20 shadow-sm hover:shadow-md transition-shadow block relative"
                  >
                    <h3 className="text-[#bf3688] font-bold text-lg mb-3 pr-12">
                      Easy-read information and resources
                    </h3>
                    <p className="text-gray-700 text-sm pr-12">
                      Find easy-read health information, transition guides, safeguarding resources, and other useful documents in one place.
                    </p>
                    <div className="absolute right-6 bottom-6">
                      <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white hover:bg-[#a02d73] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                </div>
              </section>

              {/* Is this the right service? */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Is this the right service?</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left side - Yes */}
                  <div className="bg-gray-50 border border-gray-300 p-6">
                    <h3 className="font-bold text-gray-900 mb-4">This service may be right for you if:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        you are 18 or over
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        you live in Waltham Forest
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        you have a learning disability that started before adulthood
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        your learning disability affects everyday life
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        you need support with daily living, health or staying independent
                      </li>
                    </ul>
                  </div>

                  {/* Right side - Maybe not */}
                  <div className="bg-gray-50 border border-gray-300 p-6">
                    <h3 className="font-bold text-gray-900 mb-4">This service may not be the right route if:</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        you only need autism support and do not have a learning disability
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        you have dyslexia, dyspraxia or ADHD without a learning disability
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                        your needs can be met through mainstream services with reasonable adjustments
                      </li>
                    </ul>
                    <a
                      href="https://www.figma.com/make/HfSZHxAa97T4Ckss7gE5la/Disabilities-and-specialist-support?p=f&t=kozggdoOyMAbi6qu-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                    >
                      <div className="pr-4">
                        <h3 className="font-bold text-lg mb-2">Autism support</h3>
                        <p className="text-sm opacity-95">
                          If you are autistic but do not have a learning disability, use the autism route instead.
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              {/* What support is available? - now with consistent card styling */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">What support is available?</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Assessment and care planning</h3>
                    <p className="text-gray-700 text-sm">
                      We can assess your needs, talk with you about what matters to you, and agree a plan for the support you need.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Health support and therapies</h3>
                    <p className="text-gray-700 text-sm">
                      The team includes social care workers and specialist health professionals such as nurses, psychologists, occupational therapists, physiotherapists, speech and language therapists and psychiatrists.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Staying healthy</h3>
                    <p className="text-gray-700 text-sm">
                      We can help you understand annual health checks, the GP learning disability register and how to get the right support from mainstream health services.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Day opportunities and community life</h3>
                    <p className="text-gray-700 text-sm">
                      We can help you access activities, support during the day, and community opportunities that build independence and confidence.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Support for carers</h3>
                    <p className="text-gray-700 text-sm">
                      Carers can ask for their own assessment and get support with their caring role.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#bf3688] font-bold text-lg mb-2">Preparing for adulthood</h3>
                    <p className="text-gray-700 text-sm">
                      We work with transitions and SEND services so young people and families can prepare for adult life in good time.
                    </p>
                  </div>
                </div>
              </section>

              {/* Urgent help */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Urgent help</h2>
                <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6">
                  <p className="text-gray-900 mb-3">
                    If you need urgent social care help outside normal working hours, call <a href="tel:02084963130" className="text-[#bf3688] font-bold underline hover:no-underline">020 8496 3130</a>.
                  </p>
                  <p className="text-gray-900 mb-3">
                    If you are in a mental health crisis, call <strong>111</strong> and press option 2.
                  </p>
                  <p className="text-gray-900">
                    If there is immediate danger, call <strong>999</strong>.
                  </p>
                </div>
              </section>

              {/* Related support - now with pink background cards */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Related support</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="https://www.figma.com/make/HfSZHxAa97T4Ckss7gE5la/Disabilities-and-specialist-support?p=f&t=kozggdoOyMAbi6qu-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <div className="pr-4">
                      <h3 className="font-bold text-lg mb-2">Autism support</h3>
                      <p className="text-sm opacity-95">
                        If you are autistic but do not have a learning disability, use the autism route instead.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>

                  <a
                    href="https://www.walthamforest.gov.uk/adult-social-care/things-do-during-day/day-centres-and-day-opportunities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <div className="pr-4">
                      <h3 className="font-bold text-lg mb-2">Day centres and day opportunities</h3>
                      <p className="text-sm opacity-95">
                        Find support to join activities, connect with your community and stay safe during the day.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>

                  <a
                    href="https://www.walthamforest.gov.uk/benefits-and-money-advice/cost-living-support/employment-and-learning-opportunities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <div className="pr-4">
                      <h3 className="font-bold text-lg mb-2">Work and learning</h3>
                      <p className="text-sm opacity-95">
                        Find local employment and learning support, including support for residents with learning disabilities.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>

                  <a
                    href="#/adult-social-care/learning-disability-support/housing-and-support-options"
                    className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors group relative pr-20"
                  >
                    <div className="pr-4">
                      <h3 className="font-bold text-lg mb-2">Housing and support options</h3>
                      <p className="text-sm opacity-95">
                        Find out about housing options, supported living and planning where you will live.
                      </p>
                    </div>
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