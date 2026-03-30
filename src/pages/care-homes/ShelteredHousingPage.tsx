import { ArrowRight, Phone, FileText } from 'lucide-react';

export default function ShelteredHousingPage() {
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
          <span>Sheltered housing</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Sheltered housing
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Sheltered housing helps older people live independently with some support, emergency help nearby, and opportunities to stay connected.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="https://www.walthamforest.gov.uk/housing/find-home/social-housing/apply-join-housing-waiting-list-housing-register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Apply for the housing register
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:02084963130"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
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
            <li><a href="#what-it-is" className="text-[#bf3688] hover:underline">What sheltered housing is</a></li>
            <li><a href="#who-it-suits" className="text-[#bf3688] hover:underline">Who it may suit</a></li>
            <li><a href="#support-available" className="text-[#bf3688] hover:underline">What support is available</a></li>
            <li><a href="#types" className="text-[#bf3688] hover:underline">Types of sheltered housing</a></li>
            <li><a href="#how-to-apply" className="text-[#bf3688] hover:underline">How to apply</a></li>
            <li><a href="#related" className="text-[#bf3688] hover:underline">Related help</a></li>
          </ul>
        </nav>

        {/* What sheltered housing is */}
        <section id="what-it-is" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What sheltered housing is</h2>
          <p className="text-gray-700">
            Sheltered housing is for older people who want to live independently but with some support and emergency help nearby. You have your own accommodation and access to support services, including a 24-hour Careline service.
          </p>
        </section>

        {/* Who it may suit */}
        <section id="who-it-suits" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who it may suit</h2>
          <p className="text-gray-700 mb-4">Sheltered housing is generally intended for people:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">aged 50 or over</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">who need some support to live independently</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">who may be disabled, living with long-term health problems, socially isolated, or living in unsuitable housing</span>
            </li>
          </ul>
        </section>

        {/* What support is available */}
        <section id="support-available" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What support is available</h2>
          <p className="text-gray-700 mb-4">Sheltered housing usually includes:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">independent living with support nearby</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">a secure setting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">social activities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">an emergency alarm / Careline service</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">visits from an independent living officer</span>
            </li>
          </ul>
          <p className="text-gray-700 mb-4">The officer may:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">assess repairs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">help in emergencies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">arrange visits from health professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">help you access other support services</span>
            </li>
          </ul>
        </section>

        {/* Types of sheltered housing */}
        <section id="types" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Types of sheltered housing</h2>
          <p className="text-gray-700 mb-4">Sheltered housing may include:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">self-contained flats</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">studio flats with shared bathrooms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">studio flats with one main room and a separate kitchen and toilet</span>
            </li>
          </ul>
        </section>

        {/* How to apply */}
        <section id="how-to-apply" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to apply</h2>
          <p className="text-gray-700 mb-4">To apply:</p>
          <ol className="space-y-3 list-decimal list-inside text-gray-700 mb-6">
            <li>join the housing register</li>
            <li>complete the sheltered housing application steps</li>
            <li>we assess your priority</li>
            <li>if you are given priority, we explain how to bid for properties</li>
          </ol>
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="https://www.walthamforest.gov.uk/housing/find-home/social-housing/apply-join-housing-waiting-list-housing-register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
            >
              Apply to join the housing register
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Supporting download */}
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Supporting information</h3>
            <a
              href="https://www.walthamforest.gov.uk/sites/default/files/2023-10/Sheltered%20Housing%20Application%20Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#bf3688] hover:underline"
            >
              <FileText size={20} />
              <span>Sheltered Housing Application Form (PDF)</span>
            </a>
          </div>
        </section>

        {/* Related help */}
        <section id="related" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related help</h2>
          <div className="space-y-3">
            <a href="#/adult-social-care/care-homes-and-supported-living/extra-care-housing" className="block text-[#bf3688] hover:underline font-semibold">
              Extra care housing
            </a>
            <a href="#/adult-social-care/care-homes-and-supported-living/supported-living" className="block text-[#bf3688] hover:underline font-semibold">
              Supported living
            </a>
            <a href="https://www.walthamforest.gov.uk/housing/find-home/social-housing/apply-join-housing-waiting-list-housing-register" target="_blank" rel="noopener noreferrer" className="block text-[#bf3688] hover:underline font-semibold">
              Apply to join the housing register
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
