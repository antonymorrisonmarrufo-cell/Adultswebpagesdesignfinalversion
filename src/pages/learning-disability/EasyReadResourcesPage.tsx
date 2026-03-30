import { FileText, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

export default function EasyReadResourcesPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <a href="#/adult-social-care" className="hover:underline">Home</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/specialist-services" className="hover:underline">Dementia, disabilities and specialist support</a>
            <span className="mx-1">&gt;</span>
            <a href="#/adult-social-care/learning-disability-support" className="hover:underline">Learning disability support</a>
            <span className="mx-1">&gt;</span>
            <span>Easy-read information and resources</span>
          </nav>

          <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
            {/* H1 */}
            <h1 className="text-[44px] text-[#231F20] mb-3 font-bold leading-tight">
              Easy-read information and resources
            </h1>

            {/* Standfirst */}
            <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
              Find easy-read health information, transition guides, safeguarding resources and other useful documents in one place.
            </p>

            {/* Primary CTA */}
            <div className="mb-10">
              <a
                href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                View all easy-read flyers
              </a>
            </div>

            {/* Hero image */}
            <div className="mb-12 max-w-2xl">
              <img
                src="/Images/easy-read.jpg"
                alt="An adult with a learning disability and support worker looking at easy-read information together in a library setting"
                className="w-full h-auto rounded border border-gray-200"
              />
            </div>

            <div className="max-w-3xl space-y-12">
              {/* Health and GP information */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Health and GP information</h2>
                
                <div className="space-y-6">
                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.walthamforest.gov.uk/sites/default/files/2022-03/EASY%20READ%20Annual%20health%20checks.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      <FileText size={20} className="flex-shrink-0 mt-0.5" />
                      Annual health checks (PDF)
                    </a>
                    <p className="text-gray-700">
                      Easy-read information about annual health checks and why they matter.
                    </p>
                  </div>

                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.walthamforest.gov.uk/sites/default/files/2022-03/EASY%20READ%20GP%27s%20LD%20Register.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      <FileText size={20} className="flex-shrink-0 mt-0.5" />
                      Checking you are on your GP's learning disability register (PDF)
                    </a>
                    <p className="text-gray-700">
                      Easy-read guide to the GP learning disability register and why being on it can help.
                    </p>
                  </div>
                </div>
              </section>

              {/* Transition and preparing for adulthood */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Transition and preparing for adulthood</h2>
                
                <div className="space-y-6">
                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.walthamforest.gov.uk/sites/default/files/2022-05/Waltham%20Forest%20Transition%20Guide%202022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      <FileText size={20} className="flex-shrink-0 mt-0.5" />
                      Waltham Forest Transition Guide 2022 (PDF)
                    </a>
                    <p className="text-gray-700">
                      Guide for young people, families and professionals about moving into adult life and adult services.
                    </p>
                  </div>

                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      Preparing for adulthood resource page
                      <ExternalLink size={16} className="flex-shrink-0 mt-1" />
                    </a>
                    <p className="text-gray-700">
                      Main page with the current easy-read flyer list and wider preparing-for-adulthood information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Safety and safeguarding */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">Safety and safeguarding</h2>
                
                <div className="space-y-6">
                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.walthamforest.gov.uk/sites/default/files/2023-01/Leaflet%20SAFEGUARDING%20AA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      <FileText size={20} className="flex-shrink-0 mt-0.5" />
                      Safeguarding in Waltham Forest (PDF)
                    </a>
                    <p className="text-gray-700">
                      Easy-read safeguarding leaflet.
                    </p>
                  </div>

                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.walthamforest.gov.uk/sites/default/files/2023-01/Leaflet%20Financial%20Abuse%20AA.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      <FileText size={20} className="flex-shrink-0 mt-0.5" />
                      Safeguarding adults: financial abuse (PDF)
                    </a>
                    <p className="text-gray-700">
                      Easy-read information about financial abuse and what the warning signs can look like.
                    </p>
                  </div>
                </div>
              </section>

              {/* More specialist resources */}
              <section>
                <h2 className="text-[#bf3688] font-bold text-2xl mb-6">More specialist resources</h2>
                
                <div className="space-y-6">
                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.walthamforest.gov.uk/sites/default/files/2022-03/EASY%20READ%20ctr-at-risk-hospital-adms.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      <FileText size={20} className="flex-shrink-0 mt-0.5" />
                      Information about joining the at risk of admission register (PDF)
                    </a>
                    <p className="text-gray-700">
                      Easy-read information about the Dynamic Support Register / at risk of admission register.
                    </p>
                  </div>

                  <div className="border-2 border-[#003078] bg-[#d7f8ff] pl-6 py-2">
                    <a
                      href="https://www.nelft.nhs.uk/community-learning-disability-team-waltham-forest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[#bf3688] font-bold hover:underline text-lg mb-2"
                    >
                      Community Learning Disability Team (NELFT)
                      <ExternalLink size={16} className="flex-shrink-0 mt-1" />
                    </a>
                    <p className="text-gray-700">
                      Main NHS page for the Waltham Forest CLDT.
                    </p>
                  </div>
                </div>
              </section>

              {/* Need more resources? */}
              <section>
                <h2 className="text-gray-900 font-bold text-2xl mb-4">Need more resources?</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For the full current list of easy-read flyers and related documents, use the Preparing for adulthood resource page.
                </p>
                <a
                  href="https://www.walthamforest.gov.uk/schools-education-and-learning/local-offer-special-educational-needs-and-disability-send/preparing-adulthood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
                >
                  View all easy-read flyers
                </a>
              </section>
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