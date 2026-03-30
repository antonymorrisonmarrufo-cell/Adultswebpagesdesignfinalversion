import CarersHero from '../../../components/carers/CarersHero';
import { ArrowRight } from 'lucide-react';

const audiences = [
  {
    title: 'Former carers',
    description: 'Your caring role has ended but you may still need support to rebuild your life, find work, or deal with grief.',
    links: [
      { label: 'After caring support', href: '#/adult-social-care/being-carer/support-after-caring' },
      { label: 'Bereavement counselling', href: 'https://www.cruse.org.uk' },
      { label: 'Back to work programmes', href: '#/adult-social-care/being-carer/work-and-education' },
    ]
  },
  {
    title: 'Working carers',
    description: 'Practical help to stay in employment while caring, including rights, flexible working, and work/life balance.',
    links: [
      { label: 'Know your rights at work', href: 'https://www.gov.uk/flexible-working' },
      { label: 'Flexible working', href: 'https://www.gov.uk/flexible-working' },
      { label: 'Carer-friendly employers', href: 'https://www.carersuk.org/help-and-advice/work-and-career' },
    ]
  },
  {
    title: 'Older carers (65+)',
    description: 'Support for older people who care, including health checks, falls prevention, and planning for the future.',
    links: [
      { label: 'Health checks for carers', href: '#/adult-social-care/being-carer/support-for-carers/health-and-wellbeing' },
      { label: 'Future planning', href: '#/adult-social-care/being-carer/support-for-carers/carer-emergency-plan' },
      { label: 'Emergency backup', href: '#/adult-social-care/being-carer/support-for-carers/carer-emergency-plan' },
    ]
  }
];

export default function UniversalOfferHub() {
  return (
    <>
      <CarersHero 
        title="Universal Offer"
        description="Advice and support for all carers, including those in work, older carers, and people whose caring role has ended. Quick access to information without needing a full assessment."
        chips={['UO']}
      />

      <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <section className="mb-12">
            <h2 className="text-[#EF3688] mb-6 font-bold text-3xl">Quick advice for all carers</h2>
            <p className="text-gray-700 mb-8 max-w-4xl text-lg">
              You don't always need a full assessment to get help. Use these quick links to find information, 
              download guides, and connect with services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Carer's handbook", href: "https://www.carersuk.org/help-and-advice/introduction-to-caring/" },
                { label: "Benefits checker", href: "https://www.gov.uk/benefits-calculators" },
                { label: "Local groups", href: "#/adult-social-care/being-carer/support-for-carers/local-groups-and-services" },
                { label: "Emergency plan template", href: "#/adult-social-care/being-carer/support-for-carers/carer-emergency-plan" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-[#bf3688] hover:shadow-md transition-all text-center shadow-sm"
                >
                  <span className="text-gray-900 font-semibold">{item.label}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[#EF3688] mb-8 font-bold text-2xl">Support for specific groups</h2>
            <div className="space-y-6">
              {audiences.map((audience, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#EF3688] transition-colors shadow-sm">
                  <h3 className="text-gray-900 mb-3 font-bold text-xl">{audience.title}</h3>
                  <p className="text-gray-700 mb-4">{audience.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {audience.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center gap-2 text-[#bf3688] font-semibold hover:underline text-sm"
                      >
                        {link.label} <ArrowRight className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border-2 border-[#EF3688] p-8 rounded-lg shadow-sm">
            <h2 className="text-[#EF3688] mb-4 font-bold text-2xl">Find work after caring</h2>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Many carers take time out of work. When you're ready to return, we can connect you with job search support, 
              skills training, CV workshops, and carer-friendly employers in Waltham Forest.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.walthamforest.gov.uk/adult-learning" target="_blank" rel="noopener noreferrer" className="bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors font-bold">
                Book a careers appointment
              </a>
              <a href="https://www.carersuk.org/help-and-advice/introduction-to-caring/" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#bf3688] text-[#bf3688] px-6 py-3 rounded-lg hover:bg-[#FFF0F7] transition-colors font-bold">
                Download: Skills for carers
              </a>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-[#EF3688] mb-6 font-bold text-2xl">Still need help?</h2>
            <p className="text-gray-700 mb-6 max-w-4xl">
              If you need more than quick advice, you can request a full carer&apos;s assessment or contact us for one-to-one support.
            </p>
            <a href="#/carers/assessment" className="inline-flex items-center gap-2 text-[#EF3688] font-bold hover:underline">
              Request a carer&apos;s assessment <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </div>
      </section>
    </>
  );
}