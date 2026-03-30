import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function SharedLivesPage() {
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
            <span>Shared Lives</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#00635C] mb-6 font-bold leading-tight">
              Shared Lives
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-12 text-base">
              Shared Lives is when an approved carer shares their home and family life with you. It offers a more family-based approach to support and can be a long-term arrangement or short breaks.
            </p>

            <div className="max-w-3xl space-y-12">
              {/* What this option is */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">What this option is</h2>
                <p className="text-gray-700 mb-4">
                  Shared Lives (also called Adult Placement or Homeshare) is when you live with an approved Shared Lives carer in their family home. The carer provides care and support as part of everyday family life.
                </p>
                <p className="text-gray-700 mb-4">
                  All Shared Lives carers are carefully assessed, trained and supported by the Shared Lives scheme. They are paid to provide support and are regularly checked to make sure the arrangement is working well.
                </p>
                <p className="text-gray-700">
                  Shared Lives can be a long-term home, or it can be used for short breaks (respite) to give your usual carers a rest. Some people use Shared Lives as a step towards more independent living.
                </p>
              </section>

              {/* Who it may suit */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">Who it may suit</h2>
                <p className="text-gray-700 mb-4">Shared Lives may be right for you if:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you would like to live as part of a family
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you want a more personal, homely environment
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you need support but would feel isolated living alone
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you want to be part of a local community
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you are looking for an alternative to residential care
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you need short breaks but want to stay in a family home rather than a care home
                  </li>
                </ul>
                <p className="text-gray-700">
                  Shared Lives works for people with a wide range of needs. The key is finding the right match between you and a carer.
                </p>
              </section>

              {/* What support may be included */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">What support may be included</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Family life</h3>
                    <p className="text-gray-700 text-sm">
                      You are part of the household, joining in family meals, activities and everyday life.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Personal care and support</h3>
                    <p className="text-gray-700 text-sm">
                      Help with personal care, daily tasks, health needs and emotional support.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Your own space</h3>
                    <p className="text-gray-700 text-sm">
                      You have your own bedroom in the family home where you can have privacy.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Community involvement</h3>
                    <p className="text-gray-700 text-sm">
                      Support to be part of the local community, make friends and pursue your interests.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Building skills</h3>
                    <p className="text-gray-700 text-sm">
                      Opportunities to learn new skills, gain confidence and work towards your goals.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Flexibility</h3>
                    <p className="text-gray-700 text-sm">
                      The support adapts to your needs and preferences within the family setting.
                    </p>
                  </div>
                </div>
              </section>

              {/* How decisions are made */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">How decisions are made</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    If Shared Lives might be right for you, the process involves:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      an assessment of your needs and what you're looking for
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      finding a Shared Lives carer who may be a good match
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      meeting the carer and their family to see if you get on
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      trial visits or stays to make sure it feels right
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      agreeing a support plan that reflects your needs and goals
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    The Shared Lives scheme supports both you and the carer. They visit regularly to check everything is working well and to sort out any issues.
                  </p>
                  <p className="text-gray-700">
                    You can change carers if a placement isn't working out, or move to a different option if Shared Lives is no longer right for you.
                  </p>
                </div>
              </section>

              {/* How to ask for help */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">How to ask for help</h2>
                <div className="bg-gray-50 border border-gray-300 p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Contact the Community Learning Disability Team</h3>
                  <p className="text-gray-700 mb-4">
                    Request an assessment to talk about Shared Lives. We'll discuss whether this option is right for you and refer you to the Shared Lives scheme if appropriate.
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
                  <h3 className="font-bold text-gray-900 mb-4">About Shared Lives schemes</h3>
                  <p className="text-gray-700 mb-4">
                    Shared Lives schemes are regulated by the Care Quality Commission (CQC). All carers are carefully assessed, DBS checked, trained and supported.
                  </p>
                  <a
                    href="https://sharedlivesplus.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D61F69] font-bold hover:underline"
                  >
                    Learn more about Shared Lives
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
                    href="#/adult-social-care/learning-disability-support/ask-for-support"
                    className="bg-[#D61F69] text-white p-6 flex items-center justify-between hover:bg-[#B51A5A] transition-colors group relative pr-20"
                  >
                    <span className="pr-4 font-semibold">Ask for learning disability support</span>
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
