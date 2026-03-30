import { ArrowRight, FileText } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const sections = [
  {
    title: 'What to do if you are worried about a vulnerable adult',
    body: 'Read the council\'s guidance on how to identify a vulnerable adult and what steps to take if you have a concern. Covers who can report, what information to gather, and how to refer.',
    ctas: [
      {
        label: 'Read guidance',
        href: 'https://www.walthamforest.gov.uk/adult-social-care/protecting-vulnerable-adults/what-do-if-you-are-worried-about-vulnerable-adult',
        isPdf: false,
      },
    ],
  },
  {
    title: 'Procedures for managing allegations related to adults working with adults with care and support needs',
    body: 'The ALADO procedure sets out the steps organisations must follow when allegations are made against a person in a position of trust working with adults who have care and support needs.',
    ctas: [
      {
        label: 'Read the ALADO procedure (PDF)',
        href: 'https://www.proceduresonline.com/trixcms/media/2135/alado-procedure-final.pdf',
        isPdf: true,
      },
    ],
  },
  {
    title: 'London multi-agency adult safeguarding policy and procedures',
    body: 'The London-wide policy and procedures agreed by statutory partners. Sets out how agencies should work together to safeguard adults at risk of abuse or neglect across the capital.',
    ctas: [
      {
        label: 'Read the London procedures (PDF)',
        href: 'https://www.walthamforest.gov.uk/sites/default/files/2025-01/London-Multi-Agency-Adult-Safeguarding-Policy-Procedures-April-2019.pdf',
        isPdf: true,
      },
    ],
  },
  {
    title: 'Multi-agency escalation and professional challenge guidance',
    body: 'Guidance for practitioners on how to raise and escalate concerns when they disagree with a professional decision, including step-by-step escalation routes and how to seek a resolution.',
    ctas: [
      {
        label: 'Read the guidance page',
        href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/multi-agency-escalation-and-professional-challenge-guidance',
        isPdf: false,
      },
      {
        label: 'Download guidance (PDF)',
        href: 'https://www.walthamforest.gov.uk/sites/default/files/2026-02/Escalation%20and%20professional%20challenge%20guidance%20-%202026.pdf',
        isPdf: true,
      },
    ],
  },
  {
    title: 'Statutory reviews and One Panel',
    body: 'Information about Safeguarding Adults Reviews (SARs), Domestic Homicide Reviews (DHRs) and the One Panel approach used in Waltham Forest to oversee statutory learning reviews.',
    ctas: [
      {
        label: 'Read about statutory reviews and One Panel',
        href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/statutory-reviews-and-one-panel',
        isPdf: false,
      },
    ],
  },
  {
    title: 'Resources to improve practice',
    body: 'A collection of training materials, threshold guidance, professional curiosity resources and safeguarding procedures to help practitioners develop their skills and understanding.',
    ctas: [
      {
        label: 'Browse resources to improve practice',
        href: '#/adult-social-care/resources-to-improve-practice',
        isPdf: false,
      },
    ],
  },
  {
    title: 'Annual reports',
    body: 'Read the Strategic Partnership Boards\' annual reports, setting out what has been achieved, key themes from reviews, and priorities for the year ahead.',
    ctas: [
      {
        label: 'Read annual reports',
        href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/strategic-partnership-boards-annual-reports',
        isPdf: false,
      },
    ],
  },
  {
    title: 'Strategic Partnerships contacts',
    body: 'Find contact details for the Strategic Partnerships team, including how to get in touch about the Safeguarding Adults Board, safeguarding reviews and partnership working.',
    ctas: [
      {
        label: 'View contacts',
        href: 'https://www.walthamforest.gov.uk/families-young-people-and-children/child-protection/strategic-partnership-boards/strategic-partnership-boards-contacts',
        isPdf: false,
      },
    ],
  },
];

export default function ProfessionalGuidancePage() {
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
          <span>Professional guidance</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
          Professional guidance
        </h1>

        <p className="text-gray-700 max-w-4xl mb-12 text-base">
          Guidance, policies, procedures and resources for professionals working with adults at risk of abuse or neglect in Waltham Forest.
        </p>

        {/* Sections */}
        <div className="max-w-4xl space-y-0">
          {sections.map((section, i) => (
            <div key={i}>
              <div className="py-10">
                <h2 className="text-[#bf3688] font-bold text-xl mb-3">{section.title}</h2>
                <p className="text-gray-700 mb-6">{section.body}</p>
                <div className="flex flex-wrap gap-3">
                  {section.ctas.map((cta, j) => (
                    <a
                      key={j}
                      href={cta.href}
                      target={cta.href.startsWith('http') ? '_blank' : undefined}
                      rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] ${
                        j === 0
                          ? 'bg-[#bf3688] text-white hover:bg-[#a02d73]'
                          : 'border border-[#bf3688] text-[#bf3688] hover:bg-[#bf3688] hover:text-white'
                      }`}
                    >
                      {cta.isPdf && <FileText size={15} className="flex-shrink-0" />}
                      {cta.label}
                      <ArrowRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
              {i < sections.length - 1 && <hr className="border-gray-200" />}
            </div>
          ))}
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