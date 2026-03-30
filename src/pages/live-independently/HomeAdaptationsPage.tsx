import { ArrowRight, Phone, FileText, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';
import HelpOnlineFormsBlock from '../../components/live-independently/HelpOnlineFormsBlock';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HomeAdaptationsPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <span>Home adaptations and occupational therapy</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
          Home adaptations
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          If everyday tasks like washing, dressing, using the toilet, getting in and out of bed or using stairs are becoming difficult, we can assess your needs and recommend practical ways to help you stay independent.
        </p>

        {/* Primary CTAs */}
        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="#/adult-social-care/live-independently-at-home/request-home-independence-assessment"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
          >
            Request a home independence assessment
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:02084963130"
            className="inline-flex items-center gap-3 bg-white border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
          >
            <Phone size={18} />
            Call 020 8496 3130
          </a>
        </div>

        {/* Supporting PDF */}
        <div className="mb-10">
          <a
            href="https://www.walthamforest.gov.uk/media/10190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm"
          >
            <FileText size={16} />
            Quick guide to Occupational Therapy and Home Adaptations (PDF)
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Hero image */}
        <div className="mb-12 max-w-2xl">
          <img
            src="/Images/placeholder.svg"
            alt="A care worker supporting an older person at home with daily tasks"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="max-w-3xl space-y-0">

          {/* Contents */}
          <div className="bg-gray-200 border border-gray-300 p-6 mb-10">
            <h2 className="font-bold text-gray-900 mb-4">Contents</h2>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('what-is-ot')} className="text-[#bf3688] underline hover:no-underline text-left">What is occupational therapy?</button></li>
              <li><button onClick={() => scrollTo('who-can-get-help')} className="text-[#bf3688] underline hover:no-underline text-left">Who can get help?</button></li>
              <li><button onClick={() => scrollTo('what-we-help')} className="text-[#bf3688] underline hover:no-underline text-left">What can we help with?</button></li>
              <li><button onClick={() => scrollTo('home-adaptations')} className="text-[#bf3688] underline hover:no-underline text-left">Home adaptations</button></li>
              <li><button onClick={() => scrollTo('cannot-help')} className="text-[#bf3688] underline hover:no-underline text-left">What we cannot help with</button></li>
              <li><button onClick={() => scrollTo('how-to-ask')} className="text-[#bf3688] underline hover:no-underline text-left">How to ask for an assessment</button></li>
              <li><button onClick={() => scrollTo('what-happens')} className="text-[#bf3688] underline hover:no-underline text-left">What happens next</button></li>
              <li><button onClick={() => scrollTo('costs')} className="text-[#bf3688] underline hover:no-underline text-left">Do I need to pay?</button></li>
              <li><button onClick={() => scrollTo('related')} className="text-[#bf3688] underline hover:no-underline text-left">Related help</button></li>
            </ul>
          </div>

          {/* What is occupational therapy? */}
          <div id="what-is-ot" className="pb-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What is occupational therapy?</h2>
            <p className="text-gray-700 mb-4">
              Occupational therapy helps people manage everyday tasks more safely and independently when age, illness, disability or a long-term health condition makes those tasks harder.
            </p>
            <p className="text-gray-700">
              An occupational therapist looks at how you manage daily activities in your home and recommends practical solutions. This might include advice, equipment, minor adaptations or, where appropriate, major changes to your home.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Who can get help? */}
          <div id="who-can-get-help" className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Who can get help?</h2>
            <p className="text-gray-700 mb-4">
              You can ask for help if all of the following apply:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                you are aged 18 or over
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                you live permanently in Waltham Forest
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                you have a permanent and substantial disability or long-term health condition
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                you find it difficult to carry out essential daily activities safely on your own
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              A family member, friend or carer can contact us on your behalf if you consent.
            </p>
            <p className="text-gray-700">
              If you are under 18, use the children's occupational therapy route instead of this adult service.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* What can we help with? */}
          <div id="what-we-help" className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What can we help with?</h2>
            <p className="text-gray-700 mb-4">
              We can help with difficulties such as:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                getting in and out of bed
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                getting on and off the toilet
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                washing, bathing and dressing
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                using stairs safely
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                getting in and out of your home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                moving around your home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                preparing simple meals
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                using equipment or simple adaptations to stay independent
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              We may recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                advice on safer ways to do everyday tasks
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                equipment and minor adaptations
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                major adaptations to your home where appropriate
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                signposting to related community support
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Home adaptations */}
          <div id="home-adaptations" className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Home adaptations</h2>
            <p className="text-gray-700 mb-4">
              For many people, adapting their current home is the best way to stay independent.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Minor adaptations might include:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                grab rails
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                stair rails
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                portable ramps
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                lever taps
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                raised toilet seats
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                bath boards
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                small threshold changes
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Major adaptations might include:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                widening doorways for wheelchair access
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                permanent ramps
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                replacing a bath with a level-access shower
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                adding a downstairs toilet, bathroom or bedroom
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                changing the layout of a kitchen
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              If your home cannot be adapted safely or reasonably, moving to a more suitable property may sometimes be a better option.
            </p>
            <div className="space-y-2">
              <a
                href="https://www.gov.uk/disabled-facilities-grants"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf3688] underline hover:no-underline inline-flex items-center gap-1 text-sm"
              >
                Disabled Facilities Grant
                <ExternalLink size={14} />
              </a>
              <br />
              <a
                href="https://www.walthamforest.gov.uk/media/10190"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf3688] underline hover:no-underline inline-flex items-center gap-1 text-sm"
              >
                Quick guide to Occupational Therapy and Home Adaptations (PDF)
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* What we cannot help with */}
          <div id="cannot-help" className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What we cannot help with</h2>
            <p className="text-gray-700 mb-4">
              We do not provide or repair:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                wheelchairs, mobility scooters or walking sticks
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                medical treatment for falls or injuries
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                specialist pressure care equipment such as mattresses or cushions
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                privately purchased equipment repairs
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                major adaptations in residential or nursing homes
              </li>
            </ul>
            <p className="text-gray-700">
              If something falls outside our service, we should still signpost you to the right place rather than leaving you without guidance.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* How to ask for an assessment */}
          <div id="how-to-ask" className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">How to ask for an assessment</h2>
            <p className="text-gray-700 mb-4">
              Residents can ask for help in two ways:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                complete the new online home independence assessment form
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                call 020 8496 3130 if you need help or cannot use the online form
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              Family members, carers and friends can also contact us if the person agrees.
            </p>
            <p className="text-gray-700 mb-6">
              Professionals should use the professional referral route and not email a downloadable form.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#/adult-social-care/live-independently-at-home/request-home-independence-assessment"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
              >
                Request a home independence assessment
                <ArrowRight size={18} />
              </a>
              <a
                href="#/adult-social-care/live-independently-at-home/professional-referral-home-independence"
                className="inline-flex items-center gap-3 bg-white border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
              >
                Professional referral
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* What happens next */}
          <div id="what-happens" className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What happens next</h2>
            <p className="text-gray-700 mb-4">
              After you make a request:
            </p>
            <ol className="space-y-3 mb-4 list-decimal list-inside">
              <li className="text-gray-700">We will acknowledge your request.</li>
              <li className="text-gray-700">A member of our team will review the information and decide whether an occupational therapy assessment is needed.</li>
              <li className="text-gray-700">If needed, we will arrange a home or virtual assessment.</li>
              <li className="text-gray-700">We will agree recommendations with you. This may include advice, equipment, minor adaptations, or where appropriate a referral for major adaptations.</li>
              <li className="text-gray-700">If your needs are urgent, for example you cannot be discharged from hospital safely without support, we will prioritise your case.</li>
            </ol>
            <p className="text-gray-700">
              If your circumstances change while you are waiting, call 020 8496 3130.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Do I need to pay? */}
          <div id="costs" className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Do I need to pay?</h2>
            <p className="text-gray-700 mb-4">
              Advice and assessment are free.
            </p>
            <p className="text-gray-700 mb-4">
              Equipment and minor adaptations recommended by the service are usually provided free of charge if you qualify.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>For major adaptations:</strong>
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                council tenants usually have works funded through the council
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                housing association tenants should speak to their landlord, who will make their own funding arrangements
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                owner occupiers and private tenants may be eligible for a means-tested Disabled Facilities Grant
              </li>
            </ul>
            <p className="text-gray-700">
              If you choose to buy equipment yourself or carry out work privately, you are responsible for the cost.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Related help */}
          <div id="related" className="pt-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Related help</h2>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#/adult-social-care/live-independently-at-home/equipment-and-assistive-technology" className="text-[#bf3688] underline hover:no-underline">
                  Equipment and assistive technology
                </a>
              </li>
              <li>
                <a href="#/adult-social-care/live-independently-at-home/falls-prevention-and-reablement" className="text-[#bf3688] underline hover:no-underline">
                  Falls prevention and reablement
                </a>
              </li>
              <li>
                <a href="#/adult-social-care/live-independently-at-home/help-at-home-and-personal-care" className="text-[#bf3688] underline hover:no-underline">
                  Help at home and personal care
                </a>
              </li>
              <li>
                <a href="https://www.gov.uk/disabled-facilities-grants" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline inline-flex items-center gap-1">
                  Disabled Facilities Grant
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          <HelpOnlineFormsBlock />

        </div>

        {/* Metadata */}
        <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}