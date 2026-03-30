import { ArrowRight, Phone, FileText } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

export default function ReportAbusePage() {
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
          <span>Report abuse or neglect</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
          Report abuse or neglect
        </h1>

        {/* Intro */}
        <p className="text-gray-700 max-w-4xl mb-8 text-base">
          Use this page if you are worried that an adult is being harmed, neglected or unsafe. You can report a concern even if you do not know all the details.
        </p>

        {/* Emergency Alert */}
        <div className="bg-[#fcedf3] border-2 border-[#003078] bg-[#d7f8ff] px-6 py-5 mb-10 max-w-4xl">
          <div className="flex items-start gap-3">
            <Phone className="text-[#bf3688] flex-shrink-0 mt-0.5" size={20} />
            <div className="space-y-1 text-gray-900 text-sm">
              <p><strong>If someone is in immediate danger, call 999.</strong></p>
              <p>If you need urgent help outside normal office hours, contact the emergency duty team.</p>
              <p>
                If you are worried about a child,{' '}
                <a href="#/children-and-families/report-concern-about-child" className="text-[#bf3688] underline hover:no-underline">
                  use the child safeguarding route
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl space-y-12">

          {/* Section: If you are worried for yourself or someone you know */}
          <div>
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">If you are worried for yourself or someone you know</h2>
            <p className="text-gray-700 mb-4">
              If you have urgent concerns that you or someone you know is being abused or neglected, you can:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 flex-shrink-0" />
                <span>
                  call{' '}
                  <a href="tel:02084963130" className="text-[#bf3688] underline hover:no-underline font-semibold">
                    020 8496 3130
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 flex-shrink-0" />
                <span>complete the online safeguarding concern form</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">Your contact will be treated in the strictest confidence.</p>
            <p className="text-gray-700 mb-4">
              We can help if you or the person are unable to protect themselves and are experiencing, or are at risk of experiencing, abuse.
            </p>
            <p className="text-gray-700 mb-8">
              You or the person you are worried about does not need to already be in contact with social workers or health workers to receive this service.
            </p>

            {/* Online CTA */}
            <div className="bg-[#fcedf3] border-2 border-[#bf3688] p-8">
              <h3 className="text-[#bf3688] font-bold text-lg mb-3">Report online</h3>
              <p className="text-gray-700 mb-6">Tell us about the concern so we can decide what action may be needed.</p>
              <a
                href="https://action-spider-46698300.figma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
              >
                Report a concern about a vulnerable adult
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Section: If you think a crime is being committed */}
          <div>
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">If you think a crime is being or has been committed</h2>
            <p className="text-gray-700">
              If you think a crime is being or has been committed, or someone is in immediate danger, call{' '}
              <strong>999</strong>.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Section: Forms and documents */}
          <div>
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Forms and documents</h2>
            <p className="text-gray-700 mb-2">Professionals must complete the adult safeguarding concern form online.</p>
            <p className="text-gray-700 mb-2">Members of the public can call or complete the online form.</p>
            <p className="text-gray-700">
              For safeguarding documents, guidance and reports, visit the{' '}
              <a
                href="https://www.walthamforest.gov.uk/adult-social-care/protecting-vulnerable-adults/safeguarding-adults-board-sab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf3688] underline hover:no-underline"
              >
                Safeguarding Adults Board page
              </a>.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Section: Quick guide */}
          <div>
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Quick guide</h2>
            <a
              href="https://www.walthamforest.gov.uk/media/10188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gray-400 bg-gray-200 px-5 py-4 hover:bg-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] group"
            >
              <FileText className="text-[#bf3688] flex-shrink-0" size={20} />
              <span className="text-gray-900 font-semibold text-sm group-hover:text-[#bf3688] transition-colors">
                Quick guide to adult safeguarding (PDF)
              </span>
              <ArrowRight className="text-[#bf3688] ml-auto" size={16} />
            </a>
          </div>

        </div>

        {/* Metadata */}
        <div className="max-w-4xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}