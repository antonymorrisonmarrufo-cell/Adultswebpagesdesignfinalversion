import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const resources = [
  {
    title: 'VAWG training brochure',
    desc: 'Training opportunities for professionals on violence against women and girls (VAWG), including domestic abuse, sexual violence and other forms of harm.',
    href: 'https://www.walthamforest.gov.uk/sites/default/files/2024-09/VAWG%20Training%20Brochure%202024-25.pdf',
    isPdf: true,
    label: 'Download VAWG training brochure (PDF)',
  },
  {
    title: 'Professional curiosity resource pack',
    desc: 'A resource to help practitioners develop professional curiosity — looking beyond the obvious and probing further when working with adults at risk.',
    href: 'https://www.walthamforest.gov.uk/sites/default/files/2022-02/2022%2001%2024%20professional%20curiosity%20resource%20pack%201.2.pdf',
    isPdf: true,
    label: 'Download professional curiosity resource pack (PDF)',
  },
  {
    title: "Adults' Threshold Guidance",
    desc: 'Guidance to help practitioners identify the right level of service or intervention when working with adults who have care and support needs.',
    href: 'https://www.walthamforest.gov.uk/media/4019',
    isPdf: true,
    label: "Download Adults' Threshold Guidance (PDF)",
  },
  {
    title: 'Multi-agency escalation and professional challenge guidance',
    desc: 'Step-by-step guidance for practitioners on how to escalate concerns and raise professional challenges when they disagree with a decision about an adult.',
    href: 'https://www.walthamforest.gov.uk/sites/default/files/2026-02/Escalation%20and%20professional%20challenge%20guidance%20-%202026.pdf',
    isPdf: true,
    label: 'Download escalation and professional challenge guidance (PDF)',
  },
  {
    title: 'London Safeguarding Children Procedures',
    desc: 'London-wide procedures for safeguarding children, including learning frameworks and resources for multi-agency practice.',
    href: 'https://www.londonsafeguardingchildrenprocedures.co.uk/learn_improve_fw.html',
    isPdf: false,
    label: 'Visit London Safeguarding Children Procedures',
  },
];

export default function ResourcesImprovePracticePage() {
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
          <a href="#/adult-social-care/safeguarding-adults-board" className="hover:underline">Safeguarding Adults Board</a>
          <span className="mx-1">&gt;</span>
          <span>Resources to improve practice</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
          Resources to improve practice
        </h1>

        <p className="text-gray-700 max-w-4xl mb-12 text-base">
          Training materials, guidance documents and safeguarding procedures to help practitioners working with adults at risk in Waltham Forest develop their skills and knowledge.
        </p>

        {/* Resources list */}
        <div className="max-w-4xl space-y-0">
          {resources.map((resource, i) => (
            <div key={i}>
              <div className="py-10">
                <h2 className="text-[#bf3688] font-bold text-xl mb-3">{resource.title}</h2>
                <p className="text-gray-700 mb-6">{resource.desc}</p>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#bf3688] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
                >
                  {resource.isPdf ? <FileText size={15} className="flex-shrink-0" /> : <ExternalLink size={15} className="flex-shrink-0" />}
                  {resource.label}
                  <ArrowRight size={15} />
                </a>
              </div>
              {i < resources.length - 1 && <hr className="border-gray-200" />}
            </div>
          ))}
        </div>

        {/* Also useful */}
        <div className="max-w-4xl mt-10 pt-10 border-t border-gray-200">
          <h2 className="text-[#bf3688] font-bold text-xl mb-6">Also useful</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="#/adult-social-care/professional-guidance"
              className="group flex items-center justify-between gap-4 border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
            >
              <span className="text-gray-900 text-sm font-semibold group-hover:text-[#bf3688] transition-colors">
                Professional guidance
              </span>
              <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a02d73] transition-colors">
                <ArrowRight className="text-white w-4 h-4" />
              </div>
            </a>
            <a
              href="#/adult-social-care/safeguarding-adults-board"
              className="group flex items-center justify-between gap-4 border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69]"
            >
              <span className="text-gray-900 text-sm font-semibold group-hover:text-[#bf3688] transition-colors">
                Safeguarding Adults Board
              </span>
              <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a02d73] transition-colors">
                <ArrowRight className="text-white w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Metadata */}
        <div className="max-w-4xl mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}