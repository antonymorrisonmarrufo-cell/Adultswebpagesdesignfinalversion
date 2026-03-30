import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const primaryCards = [
  {
    title: 'Home adaptations and occupational therapy',
    summary: 'If daily tasks like washing, using stairs, getting in and out of bed, or using the bathroom are becoming difficult, we can assess your needs and recommend practical changes or equipment.',
    cta: 'Get help with daily living at home',
    href: '#/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy'
  },
  {
    title: 'Equipment and assistive technology',
    summary: 'Find simple aids, safety equipment and advice about buying, repairing, maintaining or returning equipment.',
    cta: 'Find equipment and assistive technology',
    href: '#/adult-social-care/live-independently-at-home/equipment-and-assistive-technology'
  },
  {
    title: 'Help at home and personal care',
    summary: 'Get advice about washing, dressing, preparing meals, keeping your home safe and getting help with everyday tasks.',
    cta: 'Get help with everyday tasks at home',
    href: '#/adult-social-care/live-independently-at-home/help-at-home-and-personal-care'
  },
  {
    title: 'Falls prevention and reablement',
    summary: 'Find support to reduce your risk of falling and rebuild confidence and independence after illness or a hospital stay.',
    cta: 'Get help after a fall or illness',
    href: '#/adult-social-care/live-independently-at-home/falls-prevention-and-reablement'
  },
  {
    title: 'Telecare and community alarm',
    summary: 'Find alarms, sensors and remote monitoring that can help you stay safe and get help in an emergency.',
    cta: 'Find telecare and community alarm support',
    href: '#/adult-social-care/live-independently-at-home/telecare-and-community-alarm'
  },
  {
    title: 'Keeping safe at home',
    summary: 'Get practical advice about callers at the door, scams, fraud and fire safety at home.',
    cta: 'Get advice on staying safe at home',
    href: '#/adult-social-care/live-independently-at-home/keeping-safe-at-home'
  }
];

const secondaryCards = [
  {
    title: 'Homeshare',
    summary: 'A Homeshare matches someone living alone who wants companionship and practical help at home with a person willing to live with them and offer support.',
    cta: 'Find out about Homeshare',
    href: '#/adult-social-care/live-independently-at-home/homeshare'
  },
  {
    title: 'Social prescribing',
    summary: 'Get connected to local community activities and support to improve your health, wellbeing and independence.',
    cta: 'Find out about social prescribing',
    href: '#/adult-social-care/live-independently-at-home/social-prescribing'
  }
];

export default function LiveIndependentlyPage() {
  return (
    <>
      <section className="bg-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <a href="#/adult-social-care" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <span>Live independently at home</span>
          </nav>

          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
            Live independently at home
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
            Find support, equipment and advice to help you stay safe, confident and independent at home.
          </p>

          {/* Intro copy */}
          <p className="text-gray-700 max-w-4xl mb-10">
            This section covers home adaptations, occupational therapy, equipment, telecare, falls prevention, help with everyday tasks, and practical advice to help you keep living well at home.
          </p>

          {/* Hero image */}
          <div className="mb-12 max-w-2xl">
            <img
              src="/Images/hero-independent.jpg"
              alt="Active Black senior woman exercising on a bike at home, staying independent and healthy"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Section heading */}
          <h2 className="text-3xl font-bold text-[#bf3688] mb-8">Ways we can help</h2>

          {/* Primary card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {primaryCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="bg-white border border-gray-200 shadow-sm p-6 pb-24 hover:shadow-md transition-shadow relative block"
              >
                <h3 className="text-lg font-bold text-[#bf3688] mb-3 pr-12">{card.title}</h3>
                <p className="text-gray-700 text-sm mb-4 pr-12">{card.summary}</p>
                <div className="absolute bottom-6 left-6 right-16">
                  <span className="text-[#bf3688] text-sm font-semibold">{card.cta}</span>
                </div>
                <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center">
                  <ArrowRight className="text-white" size={20} />
                </div>
              </a>
            ))}
          </div>

          {/* Secondary section */}
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Other ways to stay well at home</h2>

          <div className="flex flex-col gap-6 mb-12 max-w-4xl">
            {/* Homeshare card */}
            <a
              href="#/adult-social-care/live-independently-at-home/homeshare"
              className="bg-white border border-gray-300 shadow-sm hover:shadow-md transition-shadow flex overflow-hidden min-h-[180px] block"
            >
              <div className="flex-1 p-6 pr-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Homeshare</h3>
                  <p className="text-gray-700 text-sm mb-4">A Homeshare matches someone living alone who wants companionship and practical help at home with a person willing to live with them and offer support.</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#bf3688] text-sm font-semibold">Find out about Homeshare</span>
                  <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 ml-4">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="w-64 flex-shrink-0 hidden sm:block">
                <img
                  src="/Images/homeshare.jpg"
                  alt="A younger woman smiling with an elderly woman at home, sharing companionship over a cup of tea"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

            {/* Social Prescribing card */}
            <a
              href="#/adult-social-care/live-independently-at-home/social-prescribing"
              className="bg-white border border-gray-300 shadow-sm hover:shadow-md transition-shadow flex overflow-hidden min-h-[180px] block"
            >
              <div className="flex-1 p-6 pr-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Social prescribing</h3>
                  <p className="text-gray-700 text-sm mb-4">Get connected to local community activities and support to improve your health, wellbeing and independence.</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#bf3688] text-sm font-semibold">Find out about social prescribing</span>
                  <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 ml-4">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="w-64 flex-shrink-0 hidden sm:block">
                <img
                  src="/Images/community-activity.jpg"
                  alt="Diverse group of people taking part in a community activity"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>

          {/* Professional block */}
          <div className="bg-white border border-gray-300 p-8 mb-12 max-w-4xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#bf3688] mb-4">For professionals</h2>
            <p className="text-gray-700 mb-6">
              If you are a GP, hospital team member, social care worker or other professional and need to refer someone for support to live independently at home, use the professional referral route.
            </p>
            <a
              href="#/adult-social-care/live-independently-at-home/professional-referral-home-independence"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2"
            >
              Make a professional referral
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Related help */}
          <div className="border-t border-gray-300 pt-8 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related help</h2>
            <ul className="space-y-2">
              <li>
                <a href="#/adult-social-care/how-to-get-support" className="text-[#bf3688] underline hover:no-underline font-semibold">
                  How to get support
                </a>
              </li>
              <li>
                <a href="#/adult-social-care/paying-for-your-care" className="text-[#bf3688] underline hover:no-underline font-semibold">
                  Paying for your care
                </a>
              </li>
              <li>
                <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#bf3688] underline hover:no-underline font-semibold">
                  Report abuse or neglect of an adult
                </a>
              </li>
            </ul>
          </div>

          {/* Metadata */}
          <div className="max-w-3xl mt-14 pt-6 border-t border-gray-300 text-sm text-gray-500 space-y-1">
            <p>Last updated: 27 March 2026</p>
            <p>Next review: 27 March 2027</p>
          </div>
        </div>
      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}