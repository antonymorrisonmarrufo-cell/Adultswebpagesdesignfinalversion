import { ArrowRight, FileText, Mail } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const branchLinks = [
  {
    title: 'What to do if you are worried about a vulnerable adult',
    href: 'https://www.walthamforest.gov.uk/adult-social-care/protecting-vulnerable-adults/what-do-if-you-are-worried-about-vulnerable-adult',
    external: true,
    isPdf: false,
  },
  {
    title: 'Procedures for managing allegations related to adults working with adults with care and support needs',
    href: 'https://www.proceduresonline.com/trixcms/media/2135/alado-procedure-final.pdf',
    external: true,
    isPdf: true,
  },
  {
    title: 'London multi-agency adult safeguarding policy and procedures',
    href: 'https://www.walthamforest.gov.uk/sites/default/files/2025-01/London-Multi-Agency-Adult-Safeguarding-Policy-Procedures-April-2019.pdf',
    external: true,
    isPdf: true,
  },
  {
    title: 'Escalation and professional challenge guidance',
    href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/multi-agency-escalation-and-professional-challenge-guidance',
    external: true,
    isPdf: false,
  },
  {
    title: 'Statutory reviews and One Panel',
    href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/statutory-reviews-and-one-panel',
    external: true,
    isPdf: false,
  },
  {
    title: 'Resources to improve practice',
    href: '#/adult-social-care/resources-to-improve-practice',
    external: false,
    isPdf: false,
  },
  {
    title: 'Annual reports',
    href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/strategic-partnership-boards-annual-reports',
    external: true,
    isPdf: false,
  },
  {
    title: 'Strategic Partnerships contacts',
    href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/strategic-partnership-boards-contacts',
    external: true,
    isPdf: false,
  },
];

const docs = [
  {
    label: 'Quick guide to Adult Safeguarding (PDF)',
    href: 'https://www.walthamforest.gov.uk/media/10188',
  },
  {
    label: 'Safeguarding Partnership Arrangements (PDF)',
    href: 'https://www.walthamforest.gov.uk/sites/default/files/2024-12/Waltham%20Forest%20Safeguarding%20Partnership%20arrangements_Dec%2024.pdf',
  },
];

const sabRequirements = [
  'include the local authority, the NHS, and the police, who should meet regularly to discuss and act upon local safeguarding issues',
  'develop shared plans for safeguarding, working with local people to decide how best to protect adults in vulnerable situations',
  'publish this safeguarding plan and report to the public annually on its progress, so that different organisations can make sure they are working together in the best way',
];

export default function SafeguardingBoardPage() {
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
          <span>Safeguarding Adults Board</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
          Safeguarding Adults Board (SAB)
        </h1>

        {/* Standfirst */}
        <p className="text-gray-700 max-w-4xl mb-4 text-base">
          The SAB brings organisations together to protect people who need help and support.
        </p>

        {/* Live page link */}
        <div className="mb-8">
          <a
            href="https://www.walthamforest.gov.uk/adult-social-care/protecting-vulnerable-adults/safeguarding-adults-board-sab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#bf3688] underline hover:no-underline text-sm font-semibold"
          >
            View the SAB page on the Waltham Forest website
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="max-w-4xl space-y-0">

          {/* Intro */}
          <div className="py-6">
            <p className="text-gray-700">
              Safeguarding is everyone&#39;s business, and it is important that organisations work together to protect people who need help and support.
            </p>
          </div>

          {/* Key documents */}
          <div className="py-6 space-y-3">
            {docs.map((doc, i) => (
              <a
                key={i}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-gray-300 bg-gray-200 px-5 py-4 hover:bg-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] group"
              >
                <FileText className="text-[#bf3688] flex-shrink-0" size={20} />
                <span className="text-gray-900 font-semibold text-sm group-hover:text-[#bf3688] transition-colors flex-1">
                  {doc.label}
                </span>
                <ArrowRight className="text-[#bf3688] flex-shrink-0" size={16} />
              </a>
            ))}
          </div>

          <hr className="border-gray-200" />

          {/* Why the SAB exists */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Why the SAB exists</h2>
            <p className="text-gray-700 mb-4">
              The Care Act 2014 requires local authorities to set up a Safeguarding Adults Board (SAB). The Act says that the SAB must:
            </p>
            <ul className="space-y-3">
              {sabRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Contact */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">Contact the SAB</h2>
            <p className="text-gray-700 mb-4">For more information about the Safeguarding Adults Board, contact:</p>
            <div className="flex items-center gap-3 text-gray-700 text-sm">
              <Mail className="text-[#bf3688] flex-shrink-0" size={18} />
              <a
                href="mailto:Strategicpartnerships@walthamforest.gov.uk"
                className="text-[#bf3688] underline hover:no-underline font-semibold"
              >
                Strategicpartnerships@walthamforest.gov.uk
              </a>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Branch links */}
          <div className="py-10">
            <h2 className="text-[#bf3688] font-bold text-xl mb-6">SAB resources and guidance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {branchLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688]"
                >
                  <div className="flex items-start gap-3 flex-1">
                    {link.isPdf && <FileText className="text-[#bf3688] flex-shrink-0 mt-0.5" size={16} />}
                    <span className="text-gray-900 text-sm font-semibold leading-snug group-hover:text-[#bf3688] transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a02d73] transition-colors">
                    <ArrowRight className="text-white w-4 h-4" />
                  </div>
                </a>
              ))}
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