import { FileText } from 'lucide-react';

export default function MarketSustainabilityCommissioningPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/our-policies" className="hover:underline">Our policies</a>
          <span className="mx-1">&gt;</span>
          <span>Market sustainability and commissioning</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Market sustainability and commissioning
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Information for care providers, commissioners, and the public about how the council ensures a sustainable and fair adult social care market.
        </p>

        {/* Fair Cost of Care */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Fair Cost of Care</h2>
          <p className="text-gray-700 mb-4">
            In 2022, the government required local authorities to carry out a fair cost of care exercise to understand the actual cost of providing care in their area. The purpose is to ensure that the prices paid to care providers are sustainable and fair.
          </p>
          <p className="text-gray-700 mb-6">
            The council completed this exercise following guidance from the Department of Health and Social Care. The reports below set out the findings.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#D61F69] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Cost of Care Report — Residential and Nursing Care for ages 65+</p>
                  <p className="text-sm text-gray-700 mb-2">Annex B, PDF document</p>
                  <p className="text-sm text-gray-600 italic">
                    Document available on request from Adult Social Care Commissioning team
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#D61F69] mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Cost of Care Report — Domiciliary Care for ages 18+</p>
                  <p className="text-sm text-gray-700 mb-2">Annex B, PDF document</p>
                  <p className="text-sm text-gray-600 italic">
                    Document available on request from Adult Social Care Commissioning team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Sustainability Plan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Market Sustainability Plan</h2>
          <p className="text-gray-700 mb-4">
            Local authorities are also required to publish a Market Sustainability Plan setting out how they intend to move towards paying a fair cost of care. The plan covers the current sustainability of local care markets, the impact of future changes, and the council's approach to addressing sustainability issues.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 p-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Market Sustainability Plan</p>
                <p className="text-sm text-gray-700 mb-2">PDF document</p>
                <p className="text-sm text-gray-600 italic">
                  Document available on request from Adult Social Care Commissioning team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Position Statements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Market Position Statements</h2>
          <p className="text-gray-700 mb-6">
            The council publishes Market Position Statements (MPS) to give care providers and commissioners a clear picture of the local market. These cover demand, supply, quality, spending, and commissioning intentions across different service areas.
          </p>
          <a href="#" className="text-[#D61F69] hover:underline font-semibold">
            View Market Position Statements
          </a>
        </section>

        {/* What is a Market Position Statement? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What is a Market Position Statement?</h2>
          <p className="text-gray-700 mb-4">
            Under Section 5 of the Care Act 2014, the council has a duty to promote the efficient and effective operation of the adult social care market. This includes ensuring that people have a variety of providers to choose from and that providers offer a variety of high-quality services.
          </p>
          <p className="text-gray-700">
            Market Position Statements are one of the ways the council meets this duty. They provide transparency about what the council needs, what is currently available, and where there are gaps.
          </p>
        </section>

        {/* For providers */}
        <section className="mb-12 bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">For providers</h2>
          <p className="text-gray-700">
            If you are a care provider and want to know more about commissioning opportunities in Waltham Forest, or if you have questions about the market information published here, contact the Adult Social Care Commissioning team.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#D61F69] hover:underline">
                Paying for your care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#D61F69] hover:underline">
                How adult social care works
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/our-policies/charging-and-financial-policies" className="text-[#D61F69] hover:underline">
                Charging and financial policies
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6">
          <p>Last updated: 29 March 2026</p>
          <p>Next review: 29 March 2027</p>
        </div>

      </div>
    </div>
  );
}
