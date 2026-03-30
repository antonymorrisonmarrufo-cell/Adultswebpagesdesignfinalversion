import { FileText, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function PreparingForAdulthoodPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <a href="#" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/specialist-services" className="hover:underline">Dementia, disabilities and specialist support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support" className="hover:underline">Learning disability support</a>
            <span className="mx-1">&gt;</span>
            <span>Preparing for adulthood</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#231F20] mb-3 font-bold leading-tight">
              Preparing for adulthood
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
              Find out what should happen before 18, how adult services are planned, and where to get help with education, work, health and housing.
            </p>

            {/* Primary CTAs */}
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
              >
                View preparing for adulthood information
              </a>
              <a
                href="https://www.walthamforest.gov.uk/sites/default/files/2022-05/Waltham%20Forest%20Transition%20Guide%202022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 font-bold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 shadow-sm"
              >
                <FileText size={18} />
                Download Transition Guide (PDF)
              </a>
            </div>

            {/* Hero image */}
            <div className="mb-12 max-w-2xl">
              <img
                src="https://images.unsplash.com/photo-1758270705639-9727f350f026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFkdWx0JTIwbGVhcm5pbmclMjBkaXNhYmlsaXR5JTIwY29sbGVnZSUyMGxhcHRvcCUyMGNvbW11bml0eSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDY1Mjk5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="A young adult with a learning disability in a college or community-learning setting, looking at a laptop with a supportive adult nearby"
                className="w-full h-auto rounded border border-gray-200"
              />
            </div>

            <div className="max-w-3xl space-y-0">
              {/* Contents */}
              <div className="bg-gray-100 border border-gray-300 p-6 mb-10 shadow-inner">
                <h2 className="font-bold text-gray-900 mb-4 text-xl">Contents</h2>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollTo('when-planning')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">When planning should start</button></li>
                  <li><button onClick={() => scrollTo('before-18')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">What should happen before 18</button></li>
                  <li><button onClick={() => scrollTo('education-work')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Education, work and training</button></li>
                  <li><button onClick={() => scrollTo('health-transition')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Health transition</button></li>
                  <li><button onClick={() => scrollTo('housing')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Housing and independence</button></li>
                  <li><button onClick={() => scrollTo('useful-links')} className="text-[#bf3688] font-bold underline hover:no-underline text-left">Useful links and guides</button></li>
                </ul>
              </div>

              {/* When planning should start */}
              <div id="when-planning" className="pb-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">When planning should start</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Preparing for adulthood should not start at the last minute.
                </p>
                <p className="text-gray-700 mb-4 font-semibold">
                  Planning usually becomes much more focused from Year 9 onwards, so young people and families can start thinking about:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    education and training
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    work
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    health
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    housing
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    independence
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    community life
                  </li>
                </ul>
              </div>

              <hr className="border-gray-200" />

              {/* What should happen before 18 */}
              <div id="before-18" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">What should happen before 18</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If a young person may need adult social care, their assessment should be completed before they turn 18.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This helps make sure support is planned in time and reduces the risk of gaps between children's and adult services.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/social-care-and-short-breaks/social-care-assessment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#bf3688] font-bold underline hover:no-underline"
                  >
                    Social care assessment
                  </a>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Education, work and training */}
              <div id="education-work" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Education, work and training</h2>
                <p className="text-gray-700 mb-4 font-semibold">
                  Preparing for adulthood includes planning for:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    further education
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    work and training
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    supported employment
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    meaningful daytime activity
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    community participation
                  </li>
                </ul>
                <div className="space-y-3">
                  <a
                    href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#bf3688] font-bold underline hover:no-underline"
                  >
                    Preparing for adulthood
                  </a>
                  <a
                    href="https://www.walthamforest.gov.uk/benefits-and-money-advice/cost-living-support/employment-and-learning-opportunities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#bf3688] font-bold underline hover:no-underline"
                  >
                    Employment and learning opportunities
                  </a>
                  <a
                    href="https://www.walthamforest.gov.uk/adult-social-care/things-do-during-day/day-centres-and-day-opportunities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#bf3688] font-bold underline hover:no-underline"
                  >
                    Day centres and day opportunities
                  </a>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Health transition */}
              <div id="health-transition" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Health transition</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As young people become adults, some children's health services stop and adult services take over. This may include therapy services, mental health services, or specialist health support.
                </p>
                <a
                  href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood/transition-adult-health-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf3688] font-bold underline hover:no-underline"
                >
                  Transition to adult health services
                </a>
              </div>

              <hr className="border-gray-200" />

              {/* Housing and independence */}
              <div id="housing" className="py-10">
                <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Housing and independence</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Planning for adulthood also includes thinking about where the young person will live and what level of support they may need.
                </p>
                <a
                  href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood/where-you-will-live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bf3688] font-bold underline hover:no-underline"
                >
                  Where you will live
                </a>
              </div>

              <hr className="border-gray-200" />

              {/* Useful links and guides */}
              <div id="useful-links" className="pt-10">
                <h2 className="text-gray-900 font-bold text-2xl mb-4">Useful links and guides</h2>
                <div className="space-y-4">
                  <a
                    href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#bf3688] font-bold underline hover:no-underline"
                  >
                    Preparing for adulthood
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://www.walthamforest.gov.uk/sites/default/files/2022-05/Waltham%20Forest%20Transition%20Guide%202022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#bf3688] font-bold underline hover:no-underline"
                  >
                    <FileText size={16} />
                    Waltham Forest Transition Guide 2022 (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
              <p>Last updated: 27 March 2026</p>
              <p>Next review: 27 March 2027</p>
            </div>
          </div>
        </section>
      </div>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}
