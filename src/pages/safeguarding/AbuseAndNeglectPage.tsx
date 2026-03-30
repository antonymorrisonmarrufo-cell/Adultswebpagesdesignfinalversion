import { ArrowRight, FileText } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';

const abuseTypes = [
  { type: 'Physical abuse', detail: 'Hitting, pushing, restraining or other physical harm.' },
  { type: 'Emotional or psychological abuse', detail: 'Threats, bullying, humiliation, controlling behaviour or isolation.' },
  { type: 'Financial or material abuse', detail: 'Theft, fraud, misuse of money or property.' },
  { type: 'Sexual abuse', detail: 'Any sexual act without consent, including where the person cannot consent.' },
  { type: 'Neglect', detail: 'Failing to provide food, warmth, medication or appropriate care.' },
  { type: 'Discriminatory abuse', detail: 'Abuse based on race, religion, gender, disability or other characteristics.' },
  { type: 'Organisational abuse', detail: 'Poor or neglectful care practices in institutions or services.' },
  { type: 'Domestic abuse', detail: 'Abuse between partners, family members or people sharing a home.' },
  { type: 'Modern slavery', detail: 'Trafficking, forced labour or servitude.' },
  { type: 'Self-neglect', detail: 'Inability or refusal to look after oneself, putting health or safety at risk.' },
];

const relatedLinks = [
  { title: 'What happens after you report', href: '#/adult-social-care/what-happens-after-you-report' },
  { title: 'Support for carers', href: '#/adult-social-care/support-for-carers' },
];

export default function AbuseAndNeglectPage() {
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
            <span>Learn the signs of abuse and neglect</span>
          </nav>

          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-4 font-bold leading-tight">
            Learn the signs of abuse and neglect
          </h1>

          {/* Intro */}
          <p className="text-gray-700 max-w-4xl mb-6 text-base">
            Abuse is when someone does something to an adult that harms or hurts them. Neglect is when someone fails to care for an adult properly. Abuse can happen anywhere — at home, in a care home, in hospital, or in the community.
          </p>

          {/* Intro panel */}
          <div className="max-w-4xl bg-white border border-[#bf3688] px-6 py-4 mb-12">
            <p className="text-gray-900 text-sm">
              You should report a concern if you think an adult is being harmed, neglected or is not safe.
            </p>
          </div>

          {/* Types of abuse */}
          <h2 className="text-[#bf3688] font-bold text-xl mb-6">Types of abuse and neglect</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 max-w-4xl">
            {abuseTypes.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 p-5">
                <p className="font-bold text-gray-900 text-sm mb-1">{item.type}</p>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* When to report */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-[#bf3688] font-bold text-xl mb-4">When to report a concern</h2>
            <p className="text-gray-700">
              Report a concern if you are worried that an adult is being harmed, neglected or is not safe, even if you are not completely sure.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="max-w-4xl mb-14">
            <a
              href="#/adult-social-care/report-abuse-or-neglect"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-4 font-semibold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688]"
            >
              Report a concern
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Related links */}
          <h2 className="text-[#bf3688] mb-6 font-bold text-xl">Related information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {relatedLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="bg-[#bf3688] text-white p-6 flex items-center justify-between hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688]"
              >
                <span className="pr-4 font-semibold">{link.title}</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#bf3688] flex-shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            ))}
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