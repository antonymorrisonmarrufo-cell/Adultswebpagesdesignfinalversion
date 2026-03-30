import { ArrowRight } from 'lucide-react';
import careHomesHeroImage from 'figma:asset/e0799694a7e189ade8968f188cb87867d1b2fccf.png';

export default function CareHomesHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Care homes and supported living</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Care homes and supported living
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          If you need more than home care, find out about supported living, Shared Lives, extra care and sheltered housing, and residential homes.
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
            Call for help and advice: 020 8496 3130
          </a>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mb-12 border-2 border-gray-200 bg-gray-50 h-96 flex items-center justify-center">
          <img src={careHomesHeroImage} alt="Care Homes and Supported Living Hub" className="w-full h-full object-cover" />
        </div>

        {/* How the main options compare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">How the main options compare</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Supported living */}
            <div className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative">
              <h3 className="text-lg font-bold text-[#D61F69] mb-3 pr-12">Supported living</h3>
              <p className="text-gray-700 text-sm mb-4 pr-12">
                Live in your own flat or a shared house with care and support arranged around your needs.
              </p>
              <a
                href="#/adult-social-care/care-homes-and-supported-living/supported-living"
                className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center hover:bg-[#B51A5A] transition-colors"
              >
                <ArrowRight className="text-white" size={20} />
              </a>
            </div>

            {/* Shared Lives */}
            <div className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative">
              <h3 className="text-lg font-bold text-[#D61F69] mb-3 pr-12">Shared Lives</h3>
              <p className="text-gray-700 text-sm mb-4 pr-12">
                Live with a trained carer in a family home and share everyday family and community life.
              </p>
              <a
                href="#/adult-social-care/care-homes-and-supported-living/shared-lives"
                className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center hover:bg-[#B51A5A] transition-colors"
              >
                <ArrowRight className="text-white" size={20} />
              </a>
            </div>

            {/* Extra care housing */}
            <div className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative">
              <h3 className="text-lg font-bold text-[#D61F69] mb-3 pr-12">Extra care housing</h3>
              <p className="text-gray-700 text-sm mb-4 pr-12">
                Have your own flat with care available on site if you need more support and want to stay independent.
              </p>
              <a
                href="#/adult-social-care/care-homes-and-supported-living/extra-care-housing"
                className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center hover:bg-[#B51A5A] transition-colors"
              >
                <ArrowRight className="text-white" size={20} />
              </a>
            </div>

            {/* Sheltered housing */}
            <div className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative">
              <h3 className="text-lg font-bold text-[#D61F69] mb-3 pr-12">Sheltered housing</h3>
              <p className="text-gray-700 text-sm mb-4 pr-12">
                Live independently in housing for older people with some support, emergency alarm access and social opportunities.
              </p>
              <a
                href="#/adult-social-care/care-homes-and-supported-living/sheltered-housing"
                className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center hover:bg-[#B51A5A] transition-colors"
              >
                <ArrowRight className="text-white" size={20} />
              </a>
            </div>

            {/* Care homes and nursing homes */}
            <div className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative">
              <h3 className="text-lg font-bold text-[#D61F69] mb-3 pr-12">Care homes and nursing homes</h3>
              <p className="text-gray-700 text-sm mb-4 pr-12">
                Find out about 24-hour residential care, including when a nursing home may be more suitable.
              </p>
              <a
                href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes"
                className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center hover:bg-[#B51A5A] transition-colors"
              >
                <ArrowRight className="text-white" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Not sure which option is right? */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-6">Not sure which option is right?</h2>
          <p className="text-gray-700 mb-6">These options suit different levels of support.</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 border-l-4 border-[#D61F69]">
              <h3 className="font-bold text-gray-900 mb-2">Supported living</h3>
              <p className="text-sm text-gray-700">Best when you want your own home or shared home with regular support.</p>
            </div>
            
            <div className="bg-white p-4 border-l-4 border-[#D61F69]">
              <h3 className="font-bold text-gray-900 mb-2">Shared Lives</h3>
              <p className="text-sm text-gray-700">Best when a family-based home and day-to-day support would suit you.</p>
            </div>
            
            <div className="bg-white p-4 border-l-4 border-[#D61F69]">
              <h3 className="font-bold text-gray-900 mb-2">Extra care housing</h3>
              <p className="text-sm text-gray-700">Best when you want your own flat, are older, and need more regular care available on site.</p>
            </div>
            
            <div className="bg-white p-4 border-l-4 border-[#D61F69]">
              <h3 className="font-bold text-gray-900 mb-2">Sheltered housing</h3>
              <p className="text-sm text-gray-700">Best when you are older, can live mostly independently, but want some support and emergency help nearby.</p>
            </div>
            
            <div className="bg-white p-4 border-l-4 border-[#D61F69]">
              <h3 className="font-bold text-gray-900 mb-2">Care homes and nursing homes</h3>
              <p className="text-sm text-gray-700">Best when you need 24-hour personal care or nursing support.</p>
            </div>
          </div>
        </section>

        {/* How to get housing and care support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">How to get housing and care support</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Ask us for a care needs assessment</h3>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900">We assess what support you need and whether you have eligible needs</h3>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900">We agree a support plan and discuss the housing or care options that fit your situation</h3>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900">We work out what costs apply and whether you need a financial assessment or housing register application</h3>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D61F69] text-white flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900">We help arrange the right support, placement or next step, and review it if your needs change</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Paying for care and accommodation */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Paying for care and accommodation</h2>
          <p className="text-gray-700 mb-4">
            Some services are chargeable and some people pay all or part of the cost. A needs assessment is free.
          </p>
          <p className="text-gray-700 mb-6">
            If you are assessed as needing support, we may also carry out a financial assessment to work out what you can afford to pay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Paying for care and support</h3>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support/paying-your-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Financial Assessment </h3>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* Related support */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-6">Related support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/new-care-and-support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">New to care and support</h3>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/who-qualifies-social-care-support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Who qualifies for social care support</h3>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            <a
              href="https://www.walthamforest.gov.uk/adult-social-care/get-social-care-help/care-and-support-plans"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Care and support plans</h3>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
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