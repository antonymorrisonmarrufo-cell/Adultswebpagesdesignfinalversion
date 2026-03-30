import { ArrowRight, Phone, ExternalLink } from 'lucide-react';

export default function CareHomesNursingHomesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/care-homes-and-supported-living" className="hover:underline">Care homes and supported living</a>
          <span className="mx-1">&gt;</span>
          <span>Care homes and nursing homes</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Care homes and nursing homes
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Find out when residential care may be the right option, the difference between residential and nursing homes, and how to choose and pay for a placement.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="#/adult-social-care/care-homes-and-supported-living/request-housing-care-support"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Get a care assessment
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:02084963130"
            className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <Phone size={18} />
            Call 020 8496 3130
          </a>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mb-12 border-2 border-gray-200 bg-gray-50 h-80 flex items-center justify-center">
          <p className="text-gray-400 text-center text-lg">
            IMAGE PLACEHOLDER – CARE HOMES AND NURSING HOMES
          </p>
        </div>

        {/* Contents navigation */}
        <nav className="mb-10 bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#difference" className="text-[#D61F69] hover:underline">What the difference is</a></li>
            <li><a href="#when-right" className="text-[#D61F69] hover:underline">When a care home may be the right option</a></li>
            <li><a href="#finding" className="text-[#D61F69] hover:underline">Finding a care home</a></li>
            <li><a href="#paying" className="text-[#D61F69] hover:underline">Paying for a care home</a></li>
            <li><a href="#council-homes" className="text-[#D61F69] hover:underline">Council-run care homes</a></li>
            <li><a href="#related" className="text-[#D61F69] hover:underline">Related help</a></li>
          </ul>
        </nav>

        {/* What the difference is */}
        <section id="difference" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-6">What the difference is</h2>
          <p className="text-gray-700 mb-6">There are two main types of care home.</p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 border-l-4 border-[#D61F69]">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Residential homes</h3>
              <p className="text-gray-700">Provide accommodation with 24-hour personal care support, such as help with dressing, bathing and meals.</p>
            </div>
            
            <div className="bg-gray-50 p-6 border-l-4 border-[#D61F69]">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Nursing homes</h3>
              <p className="text-gray-700">Provide the same support as residential homes, but with a registered nurse available at all times.</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-6">
            Both are inspected by the Care Quality Commission (CQC).
          </p>
        </section>

        {/* When a care home may be the right option */}
        <section id="when-right" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">When a care home may be the right option</h2>
          <p className="text-gray-700 mb-4">A care home may be the right option if:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">you need 24-hour support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">living in your own home is no longer safe or realistic</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">supported living, extra care or sheltered housing would not provide enough support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">you need nursing care on site</span>
            </li>
          </ul>
        </section>

        {/* Finding a care home */}
        <section id="finding" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Finding a care home</h2>
          <p className="text-gray-700 mb-6">You can:</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <div>
                <span className="text-gray-700">search the NHS website for care homes and nursing homes</span>
                <br />
                <a href="https://www.nhs.uk/service-search/find-a-care-home" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline inline-flex items-center gap-2 mt-1">
                  NHS care home search <ExternalLink size={16} />
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <div>
                <span className="text-gray-700">check inspection reports on the CQC website</span>
                <br />
                <a href="https://www.cqc.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline inline-flex items-center gap-2 mt-1">
                  Care Quality Commission <ExternalLink size={16} />
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <div>
                <span className="text-gray-700">get independent advice from Age UK or Healthwatch</span>
                <br />
                <div className="flex flex-wrap gap-4 mt-1">
                  <a href="https://www.ageuk.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline inline-flex items-center gap-2">
                    Age UK <ExternalLink size={16} />
                  </a>
                  <a href="https://www.healthwatch.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline inline-flex items-center gap-2">
                    Healthwatch <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">ask our staff for advice</span>
            </li>
          </ul>
        </section>

        {/* Paying for a care home */}
        <section id="paying" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Paying for a care home</h2>
          <p className="text-gray-700 mb-4">
            Depending on your finances, you may need to pay for some or all of your care home costs.
          </p>
          <p className="text-gray-700 mb-4">
            If you have assets over the relevant threshold, you will usually pay your own costs.
          </p>
          <p className="text-gray-700 mb-6">
            If you own your home, there may be options such as a deferred payment agreement.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D61F69] hover:underline font-semibold"
            >
              Paying for care and support
            </a>
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support/paying-your-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D61F69] hover:underline font-semibold"
            >
              Paying for your care and support
            </a>
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/who-qualifies-social-care-support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D61F69] hover:underline font-semibold"
            >
              Who qualifies for social care support
            </a>
          </div>
        </section>

        {/* Council-run care homes */}
        <section id="council-homes" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-6">Council-run care homes</h2>
          <p className="text-gray-700 mb-6">Waltham Forest currently runs:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes/george-mason-lodge"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">George Mason Lodge</h3>
              <p className="text-sm text-gray-700 pr-12">Leytonstone care home for older adults, including dementia care</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            <a
              href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes/mapleton-road"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Mapleton Road</h3>
              <p className="text-sm text-gray-700 pr-12">Chingford care home for older adults with dementia</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            <a
              href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes/alliston-house"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Alliston House</h3>
              <p className="text-sm text-gray-700 pr-12">Walthamstow care home for older adults with dementia</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* Related help */}
        <section id="related" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related help</h2>
          <div className="space-y-3">
            <a href="#/adult-social-care/care-homes-and-supported-living/supported-living" className="block text-[#D61F69] hover:underline font-semibold">
              Supported living
            </a>
            <a href="#/adult-social-care/care-homes-and-supported-living/shared-lives" className="block text-[#D61F69] hover:underline font-semibold">
              Shared Lives
            </a>
            <a href="#/adult-social-care/care-homes-and-supported-living/extra-care-housing" className="block text-[#D61F69] hover:underline font-semibold">
              Extra care housing
            </a>
          </div>
        </section>

        {/* Last updated */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6">
          <p>Last updated: 28 March 2026</p>
          <p>Next review: 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
