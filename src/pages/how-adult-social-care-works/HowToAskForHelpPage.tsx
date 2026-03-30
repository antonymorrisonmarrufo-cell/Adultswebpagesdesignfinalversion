import { ArrowRight, Phone } from 'lucide-react';

export default function HowToAskForHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/how-adult-social-care-works" className="hover:underline">How adult social care works</a>
          <span className="mx-1">&gt;</span>
          <span>How to ask for help</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          How to ask for help
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you think you or someone you know might need adult social care, you can contact us to ask for an assessment. You do not need a referral from a GP or hospital.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <a
            href="https://www.walthamforest.gov.uk/adult-social-care-self-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Use our self-assessment tool
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Who can ask */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who can ask</h2>
          <p className="text-gray-700 mb-4">
            Anyone can contact us to ask for a care needs assessment:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>You can ask for yourself</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A family member, friend, or carer can ask on your behalf</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A GP, nurse, hospital, or other health professional can refer you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Another organisation, such as a housing provider or voluntary group, can contact us about you</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You do not need to be in crisis to ask for help. If you are finding everyday tasks more difficult than they used to be, it is worth getting in touch.
          </p>
        </section>

        {/* How to contact us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to contact us</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Phone size={20} className="text-[#bf3688]" />
                Phone
              </h3>
              <p className="text-gray-700 ml-7">
                <strong>020 8496 3130</strong><br />
                Monday to Friday, 9am to 5pm
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Online</h3>
              <p className="text-gray-700">
                Use our self-assessment tool to answer some questions about your situation. The tool will tell you whether you might be eligible for support and direct you to information and services that could help.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">In an emergency</h3>
              <p className="text-gray-700">
                If you or someone you know is in immediate danger, call 999. If you need urgent social care help outside office hours, call 020 8496 3130 and choose the emergency option.
              </p>
            </div>
          </div>
        </section>

        {/* What happens when you contact us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What happens when you contact us</h2>
          <p className="text-gray-700 mb-4">
            When you get in touch, we will:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Listen to your situation and understand what kind of help you are looking for</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Give you information and advice about the support available</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Decide whether a care needs assessment is the right next step</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>If an assessment is needed, arrange a time that suits you</span>
            </li>
          </ul>
          <p className="text-gray-700">
            In some cases, we may be able to help straight away by putting you in touch with community services, equipment providers, or other support without the need for a formal assessment.
          </p>
        </section>

        {/* If you are a professional */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">If you are a professional</h2>
          <p className="text-gray-700">
            If you are a GP, nurse, social worker, or other professional and you want to refer someone for adult social care support, please contact us by phone on 020 8496 3130.
          </p>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-12">
          <p className="text-gray-900">
            <strong>The sooner you contact us, the sooner we can help.</strong> Many people wait until they are in crisis before asking for support. Getting in touch early means we can connect you to help that may prevent things from getting worse.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works/what-happens-during-an-assessment" className="text-[#bf3688] hover:underline">
                What happens during an assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works/who-can-get-help" className="text-[#bf3688] hover:underline">
                Who can get help
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/being-carer" className="text-[#bf3688] hover:underline">
                Being a carer
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/live-independently-at-home" className="text-[#bf3688] hover:underline">
                Support at home
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