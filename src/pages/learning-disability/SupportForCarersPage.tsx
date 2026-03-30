import { Phone } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function SupportForCarersPage() {
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
            <span>Support for carers and families</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#231F20] mb-3 font-bold leading-tight">
              Support for carers and families
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
              If you care for an adult with a learning disability, you may be able to get support in your own right.
            </p>

            {/* Primary CTAs */}
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="https://www.walthamforest.gov.uk/adult-social-care/being-carer/adult-carers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                Find out about a carers assessment
              </a>
              <a
                href="tel:02089288300"
                className="inline-flex items-center gap-3 bg-white border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                <Phone size={18} />
                Call 020 8928 8300
              </a>
            </div>

            {/* Hero image */}
            <div className="mb-12 max-w-2xl">
              <img
                src="/Images/placeholder.svg"
                alt="A parent or unpaid carer and an adult with a learning disability spending time together at home"
                className="w-full h-auto rounded border border-gray-200"
              />
            </div>

            <div className="max-w-3xl space-y-0">
              {/* Contents */}
              <div className="bg-gray-100 border border-gray-300 p-6 mb-10 shadow-inner">
                <h2 className="font-bold text-gray-900 mb-4 text-xl">Contents</h2>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollTo('what-support')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">What support carers can get</button></li>
                  <li><button onClick={() => scrollTo('carers-assessments')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Carers assessments</button></li>
                  <li><button onClick={() => scrollTo('practical-emotional')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Practical and emotional support</button></li>
                  <li><button onClick={() => scrollTo('carers-first')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Carers First</button></li>
                  <li><button onClick={() => scrollTo('young-carers')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Young carers</button></li>
                  <li><button onClick={() => scrollTo('related')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Related help</button></li>
                </ul>
              </div>

              {/* What support carers can get */}
              <div id="what-support" className="pb-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">What support carers can get</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you regularly support an adult with a learning disability, you may be an unpaid carer and have the right to support yourself.
                </p>
                <p className="text-gray-700 mb-4 font-semibold">
                  This could include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    advice and information
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    emotional support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    help to take a break
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    practical support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    access to groups and training
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    a carers assessment
                  </li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* Carers assessments */}
              <div id="carers-assessments" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Carers assessments</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Under the Care Act, carers have rights to an assessment and support in their own right.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  You can ask for a carers assessment even if the person you care for does not already have services in place.
                </p>
                <a
                  href="https://www.walthamforest.gov.uk/adult-social-care/being-carer/adult-carers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf3688] font-bold underline hover:no-underline"
                >
                  Adult carers
                </a>
              </div>

              <hr className="border-gray-200" />

              {/* Practical and emotional support */}
              <div id="practical-emotional" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Practical and emotional support</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  Carers may be able to get support with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    managing the impact of caring
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    emotional wellbeing
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    training and information
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    peer support
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    practical help
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    finding time for themselves
                  </li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* Carers First */}
              <div id="carers-first" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Carers First</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Carers First provides practical and emotional support, advice, information and peer support for unpaid carers in Waltham Forest.
                </p>
                <a
                  href="https://www.walthamforest.gov.uk/adult-social-care/being-carer/adult-carers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf3688] font-bold underline hover:no-underline"
                >
                  Adult carers
                </a>
              </div>

              <hr className="border-gray-200" />

              {/* Young carers */}
              <div id="young-carers" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Young carers</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If a child or young person is helping to care for someone, there are separate young carers services and support available.
                </p>
                <a
                  href="https://www.walthamforest.gov.uk/adult-social-care/being-carer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf3688] font-bold underline hover:no-underline"
                >
                  Being a carer
                </a>
              </div>

              <hr className="border-gray-200" />

              {/* Related help */}
              <div id="related" className="pt-10">
                <h2 className="text-gray-900 font-bold text-2xl mb-4">Related help</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.walthamforest.gov.uk/adult-social-care/being-carer/adult-carers" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] font-bold underline hover:no-underline">
                      Adult carers
                    </a>
                  </li>
                  <li>
                    <a href="https://www.walthamforest.gov.uk/adult-social-care/being-carer" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] font-bold underline hover:no-underline">
                      Being a carer
                    </a>
                  </li>
                  <li>
                    <a href="#/adult-social-care/learning-disability-support/ask-for-support" className="text-[#bf3688] font-bold underline hover:no-underline">
                      Ask for learning disability support
                    </a>
                  </li>
                </ul>
              </div>
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