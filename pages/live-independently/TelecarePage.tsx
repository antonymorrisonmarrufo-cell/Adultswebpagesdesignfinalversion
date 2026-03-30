import { ArrowRight, Phone } from 'lucide-react';
import telecareHeroImg from "figma:asset/0125b906f7ef24d9dd34f7df887371027e56bd9b.png";
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';
import HelpOnlineFormsBlock from '../../components/live-independently/HelpOnlineFormsBlock';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function TelecarePage() {
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
          <span>Telecare and community alarm</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#00635C] mb-3 font-bold leading-tight">
          Telecare and assistive technology
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          Find alarms, sensors and remote monitoring that can help you stay safe at home and get help quickly in an emergency.
        </p>

        {/* Primary CTAs */}
        <div className="mb-10 flex flex-wrap gap-4">
          <a
            href="#/adult-social-care/live-independently-at-home/request-telecare-or-community-alarm"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 font-semibold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
          >
            Request telecare or community alarm
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:02084963130"
            className="inline-flex items-center gap-3 bg-white border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
          >
            <Phone size={18} />
            Call 020 8496 3130
          </a>
        </div>

        {/* Hero image */}
        <div className="mb-12 max-w-2xl">
          <img
            src={telecareHeroImg}
            alt="Elderly woman sitting in a chair holding a community alarm pendant, with a support worker in a high-visibility jacket looking on from a doorway"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="max-w-3xl space-y-0">

          {/* Contents */}
          <div className="bg-gray-200 border border-gray-300 p-6 mb-10">
            <h2 className="font-bold text-gray-900 mb-4">Contents</h2>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('what-is-it')} className="text-[#D61F69] underline hover:no-underline text-left">What telecare and community alarm can do</button></li>
              <li><button onClick={() => scrollTo('alarm-only')} className="text-[#D61F69] underline hover:no-underline text-left">Community alarm only</button></li>
              <li><button onClick={() => scrollTo('with-sensors')} className="text-[#D61F69] underline hover:no-underline text-left">Community alarm with telecare sensors</button></li>
              <li><button onClick={() => scrollTo('who-can-get')} className="text-[#D61F69] underline hover:no-underline text-left">Who can get it</button></li>
              <li><button onClick={() => scrollTo('costs')} className="text-[#D61F69] underline hover:no-underline text-left">What it costs</button></li>
              <li><button onClick={() => scrollTo('info-needed')} className="text-[#D61F69] underline hover:no-underline text-left">What information we need</button></li>
              <li><button onClick={() => scrollTo('digital-switchover')} className="text-[#D61F69] underline hover:no-underline text-left">Digital phone switchover</button></li>
              <li><button onClick={() => scrollTo('related')} className="text-[#D61F69] underline hover:no-underline text-left">Related help</button></li>
            </ul>
          </div>

          {/* What telecare and community alarm can do */}
          <div id="what-is-it" className="pb-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">What telecare and community alarm can do</h2>
            <p className="text-gray-700 mb-4">
              Telecare and community alarm services can help people live more safely and independently at home.
            </p>
            <p className="text-gray-700 mb-4">
              They can provide:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a way to call for help quickly in an emergency
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                reassurance if you live alone
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                extra peace of mind for family and carers
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                sensors that detect risks and raise an alert if something is wrong
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Community alarm only */}
          <div id="alarm-only" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">Community alarm only</h2>
            <p className="text-gray-700 mb-4">
              A community alarm is a telephone unit linked to a pendant or wristband.
            </p>
            <p className="text-gray-700 mb-4">
              When you press the red button, it connects 24 hours a day, 365 days a year to a control centre.
            </p>
            <p className="text-gray-700 mb-4">
              The control centre can:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                speak to you
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                contact relatives, friends or neighbours
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                contact the emergency services if needed
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              To qualify for a community alarm, you may need to meet one or more of these criteria:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                live alone
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                be housebound
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                be home alone regularly while relatives or carers are out
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                feel vulnerable at home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                be a carer of a disabled child or adult who may need emergency help
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                need a way to contact a doctor or someone else in an emergency
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Community alarm with telecare sensors */}
          <div id="with-sensors" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">Community alarm with telecare sensors</h2>
            <p className="text-gray-700 mb-4">
              Telecare adds sensors around the home to help detect problems and raise an alert if needed.
            </p>
            <p className="text-gray-700 mb-4">
              For example, sensors may detect:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                if someone leaves the house at an unsafe time
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                if someone does not return to bed after getting up in the night
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                smoke, gas or heat
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                movement that may alert a carer in the same home
              </li>
            </ul>
            <p className="text-gray-700">
              If an alarm is raised, the operator will check the person is safe and may contact a relative, mobile warden or emergency services.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Who can get it */}
          <div id="who-can-get" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">Who can get it</h2>
            <p className="text-gray-700 mb-4">
              Community alarm and telecare may be suitable if you:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                live alone
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                feel vulnerable at home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                need extra reassurance because of a health condition, disability or memory problem
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                need support to remain safe at home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                are worried about someone who may need help in an emergency
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* What it costs */}
          <div id="costs" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">What it costs</h2>
            <p className="text-gray-700 mb-4">
              Current live charges are:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                community alarm only: £3.47 per week
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                community alarm with telecare equipment: £5.78 per week
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              This usually includes monitoring and response.
            </p>
            <p className="text-gray-700">
              You can pay monthly by standing order or be invoiced quarterly.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* What information we need */}
          <div id="info-needed" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">What information we need</h2>
            <p className="text-gray-700 mb-4">
              To set up the service, we may need:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                personal details
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                emergency contact details
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                details of at least two local keyholders who can help with access if needed
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                information about your home setup
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                details about any risks or support needs
              </li>
            </ul>
            <p className="text-gray-700">
              If you do not have a keyholder, a keysafe may be considered.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Digital phone switchover */}
          <div id="digital-switchover" className="py-10">
            <div className="bg-[#FADADD] border-l-4 border-[#D61F69] px-5 py-4 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Digital phone switchover</h3>
              <p className="text-gray-900 text-sm">
                The UK landline network is being upgraded. Old analogue phone lines are being phased out and many customers are being moved to digital services.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              If you already have a community alarm, the service may need to check your equipment before your phone line changes.
            </p>
            <p className="text-gray-700">
              The current live page says the wider switchover is expected to complete by January 2027.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Related help */}
          <div id="related" className="pt-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">Related help</h2>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#/adult-social-care/live-independently-at-home/help-at-home-and-personal-care" className="text-[#D61F69] underline hover:no-underline">
                  Help at home and personal care
                </a>
              </li>
              <li>
                <a href="#/adult-social-care/live-independently-at-home/falls-prevention-and-reablement" className="text-[#D61F69] underline hover:no-underline">
                  Falls prevention and reablement
                </a>
              </li>
              <li>
                <a href="#/adult-social-care/live-independently-at-home/keeping-safe-at-home" className="text-[#D61F69] underline hover:no-underline">
                  Keeping safe at home
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