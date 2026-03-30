import { ArrowRight, Phone, FileText } from 'lucide-react';

export default function ExtraCareHousingPage() {
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
          <span>Extra care housing</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Extra care housing
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Extra care housing gives you your own flat with care and support available on site, so you can stay as independent as possible.
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
            IMAGE PLACEHOLDER – EXTRA CARE / SHELTERED HOUSING
          </p>
        </div>

        {/* Contents navigation */}
        <nav className="mb-10 bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#what-it-is" className="text-[#D61F69] hover:underline">What extra care housing is</a></li>
            <li><a href="#who-it-suits" className="text-[#D61F69] hover:underline">Who it may suit</a></li>
            <li><a href="#support-available" className="text-[#D61F69] hover:underline">What support is available on site</a></li>
            <li><a href="#help-needed" className="text-[#D61F69] hover:underline">What you may still need help with</a></li>
            <li><a href="#eligibility" className="text-[#D61F69] hover:underline">Eligibility</a></li>
            <li><a href="#how-to-apply" className="text-[#D61F69] hover:underline">How to apply</a></li>
            <li><a href="#related" className="text-[#D61F69] hover:underline">Related help</a></li>
          </ul>
        </nav>

        {/* What extra care housing is */}
        <section id="what-it-is" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What extra care housing is</h2>
          <p className="text-gray-700">
            Extra care housing is specialist housing for adults with higher care needs who still want independence and their own front door. You live in your own flat, with access to care and support on site.
          </p>
        </section>

        {/* Who it may suit */}
        <section id="who-it-suits" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Who it may suit</h2>
          <p className="text-gray-700 mb-4">Extra care housing may suit older adults and some adults with complex care needs, including people living with:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">dementia</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">physical disability or mobility problems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">learning disability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">brain injury</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">stroke</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Parkinson's</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">low to moderate mental health needs</span>
            </li>
          </ul>
        </section>

        {/* What support is available on site */}
        <section id="support-available" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What support is available on site</h2>
          <p className="text-gray-700 mb-4">Schemes may offer:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">24-hour on-site care and support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">social activities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">lifts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">accessible units</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">adapted bathrooms and walk-in showers in communal areas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">treatment rooms and visiting professionals in some schemes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">assistive technology such as telecare</span>
            </li>
          </ul>
        </section>

        {/* What you may still need help with */}
        <section id="help-needed" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What you may still need help with</h2>
          <p className="text-gray-700 mb-4">
            Even in extra care housing, some day-to-day tasks may still be your responsibility unless they are included in your agreed care package. This may include:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">cleaning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">laundry</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">shopping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">decorating and furnishing your flat</span>
            </li>
          </ul>
        </section>

        {/* Eligibility */}
        <section id="eligibility" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Eligibility</h2>
          <p className="text-gray-700 mb-4">Extra care housing is generally intended for people:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">aged 55 or over</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">on the housing register</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">with care needs that have been assessed by Adult Social Care</span>
            </li>
          </ul>
          <p className="text-gray-700">
            Current live criteria say applicants usually need a minimum level of care, for example around 10 hours of care a week.
          </p>
        </section>

        {/* How to apply */}
        <section id="how-to-apply" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">How to apply</h2>
          <p className="text-gray-700 mb-4">The right order is:</p>
          <ol className="space-y-3 list-decimal list-inside text-gray-700 mb-6">
            <li>ask Adult Social Care for a needs assessment</li>
            <li>if extra care may be suitable, we discuss this in your support plan</li>
            <li>if needed, apply to the housing register</li>
            <li>complete the extra care application steps</li>
          </ol>
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="#/adult-social-care/care-homes-and-supported-living/request-housing-care-support"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
            >
              Request a care assessment
              <ArrowRight size={18} />
            </a>
            <a
              href="https://www.walthamforest.gov.uk/housing/find-home/social-housing/apply-join-housing-waiting-list-housing-register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Apply to the housing register
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Supporting download */}
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Supporting information</h3>
            <a
              href="https://www.walthamforest.gov.uk/sites/default/files/2021-11/extra-care-housing_0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#D61F69] hover:underline"
            >
              <FileText size={20} />
              <span>Extra care housing brochure (PDF)</span>
            </a>
          </div>
        </section>

        {/* Related help */}
        <section id="related" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related help</h2>
          <div className="space-y-3">
            <a href="#/adult-social-care/care-homes-and-supported-living/sheltered-housing" className="block text-[#D61F69] hover:underline font-semibold">
              Sheltered housing
            </a>
            <a href="#/adult-social-care/care-homes-and-supported-living/supported-living" className="block text-[#D61F69] hover:underline font-semibold">
              Supported living
            </a>
            <a href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes" className="block text-[#D61F69] hover:underline font-semibold">
              Care homes and nursing homes
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