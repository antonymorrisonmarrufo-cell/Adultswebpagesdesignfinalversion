import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../components/FeedbackBanner';
import FeedbackSection from '../components/FeedbackSection';

const audienceCards = [
  {
    title: 'Members of the public',
    description: 'Get in contact if you are a member of the public who is worried about an adult being harmed or abused.',
    href: '#'
  },
  {
    title: 'Professional and provider referrals and guidance',
    description: 'Guidance for care professionals, providers and partners on how to make adult safeguarding referrals.',
    href: '#'
  }
];

const relatedInfo = [
  { title: 'Request a care assessment', href: '#/adult-social-care' },
  { title: 'Support for carers', href: '#/carers' },
  { title: 'How adult social care works', href: '#/adult-social-care' }
];

export default function ReportAbusePage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Report abuse or neglect</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-5xl text-[#00635C] mb-4 font-bold leading-tight">
          Protecting adults at risk of abuse
        </h1>

        {/* Intro */}
        <p className="text-gray-700 max-w-4xl mb-8 text-base">
          How to recognise and report the abuse and neglect of an adult. Please get in contact, even if you're not 100% sure, or don't have all the details.
        </p>

        {/* Emergency Alert Banner */}
        <div className="bg-[#FADADD] border border-[#D61F69] px-6 py-4 mb-10 max-w-4xl">
          <p className="text-gray-900 text-center">
            If someone is in immediate danger, call the police on <strong>999</strong>
          </p>
        </div>

        {/* Two Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {audienceCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="bg-white border border-gray-200 p-6 pb-20 hover:shadow-md transition-shadow flex flex-col justify-between relative min-h-[180px]"
            >
              <div>
                <h3 className="text-[#D61F69] mb-3 font-bold text-base pr-12">{card.title}</h3>
                <p className="text-gray-600 text-sm pr-12">{card.description}</p>
              </div>
              <div className="absolute right-6 bottom-6">
                <div className="w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center text-white hover:bg-[#B51A5A] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* What is abuse section */}
        <h2 className="text-[#D61F69] mb-4 font-bold text-xl">What is abuse and neglect?</h2>
        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          Abuse is when someone does something to an adult that harms or hurts them. Neglect is when someone fails to care for an adult properly. Abuse can happen anywhere — at home, in a care home, in hospital, or in the community.
        </p>
        <p className="text-gray-700 max-w-4xl mb-4 text-base">Types of abuse include:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-4xl mb-12 text-base">
          <li>Physical abuse — hitting, pushing, restraining</li>
          <li>Emotional or psychological abuse — threats, bullying, isolation</li>
          <li>Financial or material abuse — theft, fraud, misuse of money</li>
          <li>Sexual abuse — any sexual act without consent</li>
          <li>Neglect — failing to provide food, warmth, medication or care</li>
          <li>Discriminatory abuse — based on race, religion, gender, disability or other characteristics</li>
          <li>Organisational abuse — poor care practices in institutions</li>
          <li>Domestic abuse — abuse between partners or family members</li>
          <li>Modern slavery — trafficking, forced labour or servitude</li>
          <li>Self-neglect — inability to look after oneself</li>
        </ul>

        {/* What happens next */}
        <h2 className="text-[#D61F69] mb-4 font-bold text-xl">What happens after you report?</h2>
        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          When we receive a report, we will decide whether to carry out a safeguarding enquiry. This helps us understand what happened and what needs to happen next to keep the person safe.
        </p>
        <p className="text-gray-700 max-w-4xl mb-12 text-base">
          We will always try to involve the adult at risk in any decisions about their safety. We work with the police, the NHS, and other organisations to protect adults at risk of harm.
        </p>

        {/* Related information */}
        <h2 className="text-[#D61F69] mb-8 font-bold text-xl">Related information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="bg-[#D61F69] text-white p-6 flex items-center justify-between hover:bg-[#B51A5A] transition-colors relative pr-20"
            >
              <span className="pr-4 font-semibold">{info.title}</span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D61F69] flex-shrink-0 absolute right-6">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}