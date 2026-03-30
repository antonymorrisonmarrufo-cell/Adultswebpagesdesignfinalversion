import { ArrowRight, Phone, Mail } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const referralCriteria = [
  { label: 'Visible high risk', desc: 'The case involves a high DASH risk indicator score or evidence of serious, ongoing risk.' },
  { label: 'Professional judgment', desc: 'A professional believes a case is high risk even where the DASH score is not met.' },
  { label: 'Potential escalation', desc: 'The risk is likely to increase, particularly due to separation, pregnancy or other escalating factors.' },
  { label: 'Repeat cases', desc: 'There have been three or more domestic abuse incidents reported to police in the last 12 months.' },
];

const aims = [
  'share information to help protect victims/survivors, adults and their children',
  'determine whether the alleged perpetrator poses a major risk to any individual or to the general community',
  'construct a risk management plan that provides professional support for all at risk and reduces harm',
  'reduce repeat victimisation',
  'improve agency accountability',
  'improve support for staff involved in high-risk domestic abuse cases',
];

export default function MaracPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/protecting-adults-at-risk" className="hover:underline">Protecting adults at risk of abuse</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/professionals-and-providers" className="hover:underline">Professionals and providers</a>
          <span className="mx-1">&gt;</span>
          <span>MARAC and related guidance</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
          Multi-agency risk assessment conference (MARAC)
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          A monthly meeting where professionals share information on high risk cases of domestic violence and abuse.
        </p>

        {/* Live page link */}
        <div className="max-w-4xl mb-10">
          <a
            href="https://www.walthamforest.gov.uk/neighbourhoods/crime-and-community-safety/community-safety/multi-agency-risk-assessment-conference-marac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-semibold"
          >
            View the MARAC page on the Waltham Forest website
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="max-w-4xl space-y-0">

          {/* Section: What is MARAC */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What is MARAC?</h2>
            <p className="text-gray-700">
              MARAC is a monthly meeting where professionals share information on high risk cases of domestic violence and abuse. It brings together agencies including the police, health, children&#39;s social care, housing, substance misuse services, IDVA services and other specialist agencies to share information and co-ordinate action to increase the safety of high-risk victims of domestic abuse.
            </p>
            <p className="text-gray-700 mt-4">
              <a
                href="https://safelives.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf3688] underline hover:no-underline"
              >
                SafeLives
              </a>{' '}
              (previously known as CAADA) provides general information on MARACs and quality assures MARACs nationwide.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Section: What MARAC aims to do */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">What MARAC aims to do</h2>
            <p className="text-gray-700 mb-4">The MARAC aims to:</p>
            <ul className="space-y-3">
              {aims.map((aim, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  {aim}
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Section: MARAC referrals */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">MARAC referrals</h2>
            <p className="text-gray-700 mb-6">
              There are currently four criteria for referring a case to MARAC:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {referralCriteria.map((item, i) => (
                <div key={i} className="border border-gray-200 bg-white p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-8">
              MARAC meetings are held monthly and are attended by professionals only.
            </p>
            <a
              href="https://www.walthamforest.gov.uk/neighbourhoods/crime-and-community-safety/community-safety/multi-agency-risk-assessment-conference-marac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-7 py-3 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
            >
              Make a MARAC referral
              <ArrowRight size={18} />
            </a>
          </div>

          <hr className="border-gray-200" />

          {/* Section: Practitioner support */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Practitioner support</h2>
            <p className="text-gray-700 mb-6">
              If you are a practitioner and want more information, contact the Waltham Forest MARAC Team.
            </p>
            <div className="bg-gray-200 border border-gray-300 p-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <Phone className="text-[#bf3688] flex-shrink-0" size={18} />
                <span>
                  Telephone:{' '}
                  <a href="tel:07789480655" className="text-[#bf3688] underline hover:no-underline font-semibold">
                    07789 480 655
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <Mail className="text-[#bf3688] flex-shrink-0" size={18} />
                <span>
                  Secure email:{' '}
                  <a href="mailto:JCMailbox-.MARAC@met.pnn.police.uk" className="text-[#bf3688] underline hover:no-underline font-semibold">
                    JCMailbox-.MARAC@met.pnn.police.uk
                  </a>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Metadata */}
        <div className="max-w-4xl mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}