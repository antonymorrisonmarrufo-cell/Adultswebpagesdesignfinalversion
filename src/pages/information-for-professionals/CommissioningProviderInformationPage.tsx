import { FileText } from 'lucide-react';

export default function CommissioningProviderInformationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/information-for-professionals" className="hover:underline">Information for care professionals</a>
          <span className="mx-1">&gt;</span>
          <span>Commissioning and provider information</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Commissioning and provider information
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Information for care providers about commissioning arrangements, market opportunities, and how we work with the provider market in Waltham Forest.
        </p>

        {/* Market Position Statements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Market Position Statements</h2>
          <p className="text-gray-700 mb-6">
            The council publishes Market Position Statements to give care providers a clear picture of the local adult social care market. These cover demand, supply, quality, spend, and commissioning intentions across different service areas, including domiciliary care, residential care, supported living, and learning disability services.
          </p>
          <a href="https://www.walthamforest.gov.uk/adult-social-care/commissioning/market-position-statements" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] hover:underline font-semibold">
            View Market Position Statements
          </a>
        </section>

        {/* Fair Cost of Care */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Fair Cost of Care</h2>
          <p className="text-gray-700 mb-6">
            In 2022, the government required all councils to carry out a fair cost of care exercise. This established a shared understanding with providers of the local cost of delivering care, to ensure that the prices paid are sustainable and fair.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <a href="https://www.walthamforest.gov.uk/sites/default/files/2023-02/Cost_of_care_report%2065_%20Care%20Homes_v1.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-[#bf3688] underline mb-1 block">Cost of Care Report — Residential and Nursing Care 65+ (PDF)</a>
                  <p className="text-sm text-gray-600">Annex B report</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#bf3688] mt-1" />
                <div>
                  <a href="https://www.walthamforest.gov.uk/sites/default/files/2023-02/Cost_of_care_report18_%20Domiciliary%20Care_v1.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-[#bf3688] underline mb-1 block">Cost of Care Report — Domiciliary Care 18+ (PDF)</a>
                  <p className="text-sm text-gray-600">Annex B report</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Sustainability Plan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Market Sustainability Plan</h2>
          <p className="text-gray-700 mb-6">
            The Market Sustainability Plan sets out how the council intends to move towards paying a fair cost of care. It covers the current sustainability of local care markets, the impact of future changes, and the council's approach to addressing any issues.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#bf3688] mt-1" />
              <div>
                <a href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support/fair-cost-care" target="_blank" rel="noopener noreferrer" className="font-bold text-[#bf3688] underline mb-1 block">Market Sustainability Plan</a>
                <p className="text-sm text-gray-600">Available on the Fair Cost of Care page</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current frameworks and contracts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Current frameworks and contracts</h2>
          <p className="text-gray-700 mb-4">
            The council commissions adult social care services through a combination of framework agreements and spot-purchased contracts. Key frameworks include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Domiciliary care</li>
            <li>Supported living (split into four needs-based lots)</li>
            <li>Residential and nursing care</li>
            <li>Learning disability services</li>
          </ul>
          <p className="text-gray-700">
            If you are a provider interested in working with Waltham Forest, or if you have questions about current or upcoming commissioning opportunities, email <a href="mailto:contract.management@walthamforest.gov.uk" className="text-[#bf3688] underline">contract.management@walthamforest.gov.uk</a>.
          </p>
        </section>

        {/* Provider support */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Provider support</h2>
          <p className="text-gray-700">
            The council has funded Care Provider's Voice, which offers a job broker scheme for care providers, opportunities to share training, and support for provider engagement within and outside the borough.
          </p>
        </section>

        {/* Contact the Commissioning team */}
        <section className="mb-12 rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003078] text-white text-sm font-bold mb-3">i</div>
          <h2 className="text-xl font-bold text-[#003078] mb-4">Contact the Commissioning team</h2>
          <p className="text-sm text-gray-700">
            If you require information about any of LBWF's Adult Social Care provisions, please email{" "}
            <a href="mailto:contract.management@walthamforest.gov.uk" className="text-wf-blue underline hover:text-wf-green font-semibold">
              contract.management@walthamforest.gov.uk
            </a>
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/our-policies" className="text-[#bf3688] hover:underline">
                Our policies
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/our-policies/market-sustainability-commissioning" className="text-[#bf3688] hover:underline">
                Market sustainability and commissioning
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/information-for-professionals/key-teams-contact-details" className="text-[#bf3688] hover:underline">
                Key teams and contact details
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
