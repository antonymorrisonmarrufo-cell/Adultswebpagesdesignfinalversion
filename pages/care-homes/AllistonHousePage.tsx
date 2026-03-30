import { ArrowRight, Phone } from 'lucide-react';

export default function AllistonHousePage() {
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
          <a href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes" className="hover:underline">Care homes and nursing homes</a>
          <span className="mx-1">&gt;</span>
          <span>Alliston House</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Alliston House
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          A council-run Walthamstow care home for older adults living with dementia.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="tel:02085204984"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            <Phone size={18} />
            Call Alliston House: 020 8520 4984
          </a>
          <a
            href="#/adult-social-care/care-homes-and-supported-living/request-housing-care-support"
            className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Get a care assessment
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Secondary Image Placeholder */}
        <div className="mb-12 border-2 border-gray-200 bg-gray-50 h-64 flex items-center justify-center">
          <p className="text-gray-400 text-center text-lg">
            IMAGE PLACEHOLDER – ALLISTON HOUSE
          </p>
        </div>

        {/* About the home */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">About the home</h2>
          <p className="text-gray-700">
            Alliston House is a purpose-built three-storey home in Walthamstow that can accommodate 42 residents.
          </p>
        </section>

        {/* Who it supports */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Who it supports</h2>
          <p className="text-gray-700">
            The home is registered to support people over 65 with dementia.
          </p>
        </section>

        {/* Accommodation and facilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Accommodation and facilities</h2>
          <p className="text-gray-700 mb-4">
            There are five units in the home and all bedrooms are single rooms.
          </p>
          <p className="text-gray-700">
            Residents have access to shared toilets and bathing facilities, lounge areas and private space for visits if needed.
          </p>
        </section>

        {/* Garden and activities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Garden and activities</h2>
          <p className="text-gray-700 mb-4">
            The home has a garden and enclosed patio areas with seating, raised flower beds and barbecue space.
          </p>
          <p className="text-gray-700 mb-4">
            Residents can join a programme of activities and trips.
          </p>
          <p className="text-gray-700">
            Hairdressing is available every fortnight for a charge.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related links</h2>
          <div className="space-y-3">
            <a href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes" className="block text-[#D61F69] hover:underline font-semibold">
              Care homes and nursing homes
            </a>
            <a href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support" target="_blank" rel="noopener noreferrer" className="block text-[#D61F69] hover:underline font-semibold">
              Paying for care and support
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
