import { ArrowRight, Phone, Monitor } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

export default function RequestSupportPage() {
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
            <span>Request support</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#00635C] mb-3 font-bold leading-tight">
              Request learning disability support
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
              Use this form if you think you or someone else may need support from the Community Learning Disability Team.
            </p>

            {/* Primary CTAs */}
            <div className="mb-12 flex flex-wrap gap-4">
              <button
                onClick={() => alert('Support request form would be integrated here')}
                className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 font-bold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
              >
                Start form
                <ArrowRight size={18} />
              </button>
              <a
                href="tel:02089288300"
                className="inline-flex items-center gap-3 bg-white border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
              >
                <Phone size={18} />
                Call 020 8928 8300
              </a>
            </div>

            <div className="max-w-3xl space-y-10">
              {/* Before you start */}
              <section className="bg-gray-50 border border-gray-300 p-6">
                <h2 className="text-gray-900 font-bold text-xl mb-4">Before you start</h2>
                <p className="text-gray-700 mb-4 font-semibold">You will need:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    the person's name, address and date of birth
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    contact details
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    a short summary of what support is needed
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    details of any urgent concerns
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    details of who is helping already, if anyone
                  </li>
                </ul>
              </section>

              {/* What this form is for */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">What this form is for</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  Use this form if you need help with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    daily living and independence
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    specialist health or support needs linked to a learning disability
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    care planning or reassessment
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    support to stay safe and healthy
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    support to access the right service
                  </li>
                </ul>
              </section>

              {/* What happens next */}
              <section>
                <h2 className="text-[#D61F69] font-bold text-2xl mb-4">What happens next</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We will review the information you give us.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If the Community Learning Disability Team is the right service, we will contact you about next steps.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If another service is more appropriate, we will signpost or redirect where possible.
                </p>
              </section>

              {/* Help completing online forms */}
              <section className="bg-gray-100 border border-gray-300 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Monitor className="text-[#D61F69] flex-shrink-0 mt-0.5" size={20} />
                  <h2 className="text-gray-900 font-bold text-xl">Help completing online forms</h2>
                </div>
                <p className="text-gray-700 mb-4 font-semibold">
                  If you cannot complete the form online yourself, you can:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    ask someone you trust to help you
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    call 020 8928 8300
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0" />
                    use a self-service PC at a Waltham Forest Library, where staff can help you log in and create a MyAccount
                  </li>
                </ul>
                <div className="space-y-2">
                  <a
                    href="https://www.walthamforest.gov.uk/libraries/local-libraries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#D61F69] font-bold underline hover:no-underline text-sm"
                  >
                    Waltham Forest libraries
                  </a>
                  <a
                    href="https://www.walthamforest.gov.uk/council-and-elections/information-about-website/how-create-your-my-account"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#D61F69] font-bold underline hover:no-underline text-sm"
                  >
                    MyAccount help
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
