import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../../components/FeedbackBanner';
import FeedbackSection from '../../../components/FeedbackSection';

export default function ResidentialCarePage() {
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
            <span>Residential care homes</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#00635C] mb-6 font-bold leading-tight">
              Residential care homes
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-12 text-base">
              Residential care homes provide accommodation and 24-hour support for people with more complex needs. Staff are always available to provide care, support and assistance.
            </p>

            <div className="max-w-3xl space-y-12">
              {/* What this option is */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">What this option is</h2>
                <p className="text-gray-700 mb-4">
                  A residential care home is a place where you live with other people who also have support needs. Staff are available 24 hours a day to provide care and support.
                </p>
                <p className="text-gray-700 mb-4">
                  You have your own bedroom (and sometimes your own bathroom). You share communal areas like lounges, dining rooms and gardens with other residents.
                </p>
                <p className="text-gray-700">
                  Care homes can be run by private companies, charities or the council. Some are specialist homes for people with learning disabilities; others support people with a range of needs.
                </p>
              </section>

              {/* Who it may suit */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">Who it may suit</h2>
                <p className="text-gray-700 mb-4">Residential care may be right for you if:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you need 24-hour care and support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you have complex health or care needs
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you need support during the night
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    you would benefit from a more structured environment
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    other housing options with support are not suitable for your needs
                  </li>
                </ul>
                <p className="text-gray-700">
                  Residential care is usually for people with higher support needs. We always look at whether you could be supported in a less restrictive way first.
                </p>
              </section>

              {/* What support may be included */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">What support may be included</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">24-hour care and support</h3>
                    <p className="text-gray-700 text-sm">
                      Staff are always available to provide care, assistance and support whenever you need it, day or night.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Personal care</h3>
                    <p className="text-gray-700 text-sm">
                      Help with washing, dressing, eating, mobility, continence care and medication.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Meals and nutrition</h3>
                    <p className="text-gray-700 text-sm">
                      All meals provided, with support for special diets, textures or feeding needs.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Health care coordination</h3>
                    <p className="text-gray-700 text-sm">
                      Staff help you access healthcare, attend appointments and manage health conditions.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Activities and engagement</h3>
                    <p className="text-gray-700 text-sm">
                      Activities in the home and support to access the community, see family and pursue interests.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-[#D61F69] font-bold text-lg mb-2">Specialist support</h3>
                    <p className="text-gray-700 text-sm">
                      Some homes have specialist staff trained in managing complex needs, behaviours of concern or specific conditions.
                    </p>
                  </div>
                </div>
              </section>

              {/* How decisions are made */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">How decisions are made</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    Residential care is usually considered when other options cannot meet your needs safely. The decision involves:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      a full assessment of your care and support needs
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      discussion about what matters to you and what you want
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      consideration of less restrictive options first
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      finding the right care home that meets your needs
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                      visiting potential homes before making a decision
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    You and your family will be involved in choosing a care home. We try to find a home close to your family and community where possible.
                  </p>
                  <p className="text-gray-700">
                    Once you move into a care home, we continue to review your care regularly to make sure it's meeting your needs and that you're happy.
                  </p>
                </div>
              </section>

              {/* Paying for care */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">Paying for care</h2>
                <div className="bg-[#FFF0F7] border-l-4 border-[#D61F69] p-6">
                  <p className="text-gray-900 mb-3">
                    The cost of residential care is means-tested. You may need to contribute towards the cost depending on your income and savings.
                  </p>
                  <p className="text-gray-900 mb-3">
                    If you own a property, it may be included in the financial assessment unless certain exemptions apply.
                  </p>
                  <p className="text-gray-900">
                    We'll explain the costs clearly and do a financial assessment to work out your contribution.
                  </p>
                </div>
              </section>

              {/* How to ask for help */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-6">How to ask for help</h2>
                <div className="bg-gray-50 border border-gray-300 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Contact the Community Learning Disability Team</h3>
                  <p className="text-gray-700 mb-4">
                    Request an assessment to discuss your care needs and whether residential care is the right option for you.
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
