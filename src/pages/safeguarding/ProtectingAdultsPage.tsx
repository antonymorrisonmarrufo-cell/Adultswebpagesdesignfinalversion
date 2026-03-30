import { ArrowRight, Phone, FileText } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const relatedInfo = [
  { title: 'Worried about a child', href: '#/children-and-families/report-concern-about-child', external: false },
  { title: 'Support for carers', href: '#/adult-social-care/support-for-carers', external: false },
  { title: 'Request a care assessment', href: 'https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b', external: true },
  { title: 'How adult social care works', href: '#/adult-social-care/how-adult-social-care-works', external: false },
];

export default function ProtectingAdultsPage() {
  return (
    <>
      <section className="bg-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <a href="#" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <span>Protecting adults at risk of abuse</span>
          </nav>

          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
            Protecting adults at risk of abuse
          </h1>

          {/* Intro */}
          <p className="text-gray-700 max-w-4xl mb-8 text-base">
            Use this page if you are worried that an adult is being abused, neglected or is not safe. You can report a concern even if you do not know all the details.
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

          {/* Choose what you need */}
          <h2 className="text-[#bf3688] mb-8 font-bold text-xl">Choose what you need to do</h2>

          {/* 2x2 card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

            {/* Card 1 — Report */}
            <a
              href="https://action-spider-46698300.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-6 pb-20 relative border-2 border-[#bf3688] bg-[#fcedf3] hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
            >
              <div>
                <h3 className="mb-3 font-bold text-lg text-[#bf3688]">Report abuse or neglect</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Use this if you are worried about an adult being harmed, neglected or unsafe.</p>
              </div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#bf3688]">Report a concern</span>
                <div className="w-10 h-10 rounded-full bg-[#bf3688] group-hover:bg-[#a02d73] flex items-center justify-center flex-shrink-0 transition-colors">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
              </div>
            </a>

            {/* Card 2 — Professionals (dual CTA) */}
            <div className="flex flex-col justify-between p-6 border-2 border-gray-200 bg-white">
              <div>
                <h3 className="mb-3 font-bold text-lg text-gray-900">Professionals and providers</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Use this if you work for a care provider, NHS service, council service, police, housing provider, voluntary organisation or another professional service.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://action-spider-46698300.figma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#bf3688] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
                >
                  Make a professional referral
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#/adult-social-care/professionals-and-providers"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#bf3688] text-[#bf3688] px-5 py-2.5 text-sm font-semibold hover:bg-[#bf3688] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
                >
                  Read professional guidance
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Card 3 — Signs */}
            <a
              href="#/adult-social-care/abuse-and-neglect"
              className="group flex flex-col justify-between p-6 pb-20 relative border-2 border-gray-200 bg-white hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
            >
              <div>
                <h3 className="mb-3 font-bold text-lg text-gray-900">Learn the signs of abuse and neglect</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Read what abuse and neglect can look like, the different types of abuse, and when to report a concern.</p>
              </div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Read about abuse and neglect</span>
                <div className="w-10 h-10 rounded-full bg-[#bf3688] group-hover:bg-[#a02d73] flex items-center justify-center flex-shrink-0 transition-colors">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
              </div>
            </a>

            {/* Card 4 — What happens after */}
            <a
              href="#/adult-social-care/what-happens-after-you-report"
              className="group flex flex-col justify-between p-6 pb-20 relative border-2 border-gray-200 bg-white hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
            >
              <div>
                <h3 className="mb-3 font-bold text-lg text-gray-900">What happens after you report</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Find out what happens when we receive a concern, how decisions are made, and what may happen next.</p>
              </div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Read what happens next</span>
                <div className="w-10 h-10 rounded-full bg-[#bf3688] group-hover:bg-[#a02d73] flex items-center justify-center flex-shrink-0 transition-colors">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
              </div>
            </a>

          </div>

          {/* Related safeguarding information */}
          <h2 className="text-[#bf3688] mb-6 font-bold text-xl">Related safeguarding information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {relatedInfo.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="bg-white border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] group"
              >
                <span className="text-gray-900 text-sm font-semibold pr-4">{link.title}</span>
                <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a02d73] transition-colors">
                  <ArrowRight className="text-white w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* Easy Read and accessible safeguarding information */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-[#bf3688] mb-4 font-bold text-xl">Easy Read and accessible safeguarding information</h2>
            <p className="text-gray-700 mb-6 text-sm">
              Accessible versions of safeguarding information are available in Easy Read.
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