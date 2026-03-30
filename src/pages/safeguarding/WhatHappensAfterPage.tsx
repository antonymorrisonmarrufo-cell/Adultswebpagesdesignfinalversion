import { ArrowRight, FileText } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const sections = [
  {
    title: 'What we do when we receive a concern',
    copy: 'We review the information provided and decide what action may be needed to protect the adult from harm.',
  },
  {
    title: 'How the adult is involved',
    copy: 'We will always try to involve the adult at risk in decisions about their safety.',
  },
  {
    title: 'Working with other organisations',
    copy: 'We work with the police, the NHS and other organisations where needed to protect adults at risk of harm.',
  },
  {
    title: 'If risk becomes urgent',
    copy: 'If someone is in immediate danger, call 999.',
  },
];

export default function WhatHappensAfterPage() {
  return (
    <>
      <section className="bg-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <a href="#/adult-social-care" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/protecting-adults-at-risk" className="hover:underline">Protecting adults at risk of abuse</a>
            <span className="mx-1">&gt;</span>
            <span>What happens after you report</span>
          </nav>

          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
            What happens after you report
          </h1>

          {/* Intro */}
          <p className="text-gray-700 max-w-4xl mb-12 text-base font-semibold">
            When we receive a report, we decide whether to carry out a safeguarding enquiry. This helps us understand what happened and what needs to happen next to keep the person safe.
          </p>

          {/* Sections */}
          <div className="max-w-4xl space-y-0 mb-14">
            {sections.map((section, i) => (
              <div key={i} className={`py-8 bg-white px-8 border-x border-t border-gray-200 ${i === sections.length - 1 ? 'border-b shadow-sm' : ''}`}>
                <h2 className="text-[#bf3688] font-bold text-xl mb-3">{section.title}</h2>
                <p className="text-gray-700">{section.copy}</p>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div className="max-w-4xl border-2 border-[#bf3688] bg-white p-8 mb-10 shadow-sm">
            <h2 className="text-[#bf3688] font-bold text-xl mb-3">Need to report a concern?</h2>
            <p className="text-gray-700 mb-6">If you are ready to tell us about a concern, use the reporting route.</p>
            <a
              href="#/adult-social-care/report-abuse-or-neglect"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
            >
              Report a concern
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Easy Read and accessible safeguarding information */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-[#bf3688] mb-4 font-bold text-xl">Easy Read and accessible safeguarding information</h2>
            <p className="text-gray-700 mb-6 text-sm">
              Use these Easy Read leaflets if you want simpler safeguarding information.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://www.walthamforest.gov.uk/sites/default/files/2023-01/Leaflet%20SAFEGUARDING%20AA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#bf3688] hover:underline group"
              >
                <FileText size={20} className="flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-sm">Safeguarding in Waltham Forest (Easy Read PDF)</span>
              </a>

              <a
                href="https://www.walthamforest.gov.uk/sites/default/files/2023-01/Leaflet%20Financial%20Abuse%20AA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#bf3688] hover:underline group"
              >
                <FileText size={20} className="flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-sm">Safeguarding adults: financial abuse (Easy Read PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}