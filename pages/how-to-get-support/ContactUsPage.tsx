import { ArrowRight, Phone } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/how-to-get-support" className="hover:underline">How to get support</a>
          <span className="mx-1">&gt;</span>
          <span>Contact us</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Contact us
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-12">
          If you think you or someone you know might need adult social care, get in touch. We can talk through your situation and help you work out the best next step.
        </p>

        {/* Phone */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Phone</h2>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={24} className="text-[#D61F69]" />
            <span className="text-2xl font-bold">020 8496 3130</span>
          </div>
          <p className="text-gray-700 mb-4 ml-9">Monday to Friday, 9am to 5pm</p>
          <p className="text-gray-700">
            When you call, we will ask you some basic questions about your situation so we can understand what kind of help you need. If you are calling about someone else, please have their name, date of birth, and address ready if possible.
          </p>
        </section>

        {/* Out of hours */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Out of hours</h2>
          <p className="text-gray-700 mb-4">
            If you need urgent social care help outside office hours, call 020 8496 3130 and choose the emergency option.
          </p>
          <p className="text-gray-700">
            If someone is in immediate danger, call 999.
          </p>
        </section>

        {/* Online */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Online</h2>
          <p className="text-gray-700 mb-4">
            You can use our self-assessment tool at any time, including evenings and weekends. It will check your situation and point you towards services that could help.
          </p>
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Use our self-assessment tool
            <ArrowRight size={18} />
          </a>
        </section>

        {/* What happens when you contact us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What happens when you contact us</h2>
          <p className="text-gray-700 mb-4">
            When you get in touch, we will:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Listen to your situation and understand what kind of help you are looking for</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Give you information and advice about the support available</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Help you decide whether a care needs assessment is the right next step</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>If an assessment is needed, explain what happens and arrange a time that suits you</span>
            </li>
          </ul>
          <p className="text-gray-700">
            In some cases, we may be able to help straight away by putting you in touch with community services, voluntary organisations, equipment providers, or other support without needing a formal assessment.
          </p>
        </section>

        {/* Who can contact us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Who can contact us</h2>
          <p className="text-gray-700 mb-4">
            Anyone can contact us:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>You can call for yourself</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>A family member, friend, or carer can call on your behalf</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>A GP, nurse, hospital, or other health professional can refer you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Any other organisation, such as a housing provider, can contact us about you</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You do not need a referral or a letter from a doctor. If you think you might need help, that is enough to get in touch.
          </p>
        </section>

        {/* If you are a professional */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">If you are a professional</h2>
          <p className="text-gray-700">
            If you are a GP, nurse, social worker, or other professional and you want to refer someone for adult social care support, please phone 020 8496 3130.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-to-get-support/request-an-assessment" className="text-[#D61F69] hover:underline">
                Request an assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support/check-your-situation-online" className="text-[#D61F69] hover:underline">
                Check your situation online
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#D61F69] hover:underline">
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