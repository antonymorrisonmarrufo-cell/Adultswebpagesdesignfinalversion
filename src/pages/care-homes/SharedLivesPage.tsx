import { ArrowRight, Phone, FileText } from 'lucide-react';

export default function SharedLivesPage() {
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
          <span>Shared Lives</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Shared Lives
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Shared Lives helps adults who need support to live with a trained carer in a family home and share in family and community life.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="#/adult-social-care/care-homes-and-supported-living/request-housing-care-support"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Get a care assessment
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
            IMAGE PLACEHOLDER – SHARED LIVES
          </p>
        </div>

        {/* Contents navigation */}
        <nav className="mb-10 bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#what-it-is" className="text-[#bf3688] hover:underline">What Shared Lives is</a></li>
            <li><a href="#who-it-suits" className="text-[#bf3688] hover:underline">Who it may suit</a></li>
            <li><a href="#daily-life" className="text-[#bf3688] hover:underline">What daily life can be like</a></li>
            <li><a href="#stays-respite" className="text-[#bf3688] hover:underline">Long stays, short breaks and respite</a></li>
            <li><a href="#paying" className="text-[#bf3688] hover:underline">Paying for Shared Lives</a></li>
            <li><a href="#how-to-get" className="text-[#bf3688] hover:underline">How to get Shared Lives</a></li>
            <li><a href="#related" className="text-[#bf3688] hover:underline">Related help</a></li>
          </ul>
        </nav>

        {/* What Shared Lives is */}
        <section id="what-it-is" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What Shared Lives is</h2>
          <p className="text-gray-700 mb-4">
            In Shared Lives, you live with a trained carer in their home and are supported as part of everyday family and community life.
          </p>
          <p className="text-gray-700 mb-4">You will usually have:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">your own bedroom</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">use of shared spaces such as the kitchen, bathroom and living room</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">support that is built around your needs and strengths</span>
            </li>
          </ul>
        </section>

        {/* Who it may suit */}
        <section id="who-it-suits" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Who it may suit</h2>
          <p className="text-gray-700 mb-4">Shared Lives may suit adults who want:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">a family-based home</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">day-to-day support in an ordinary home setting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">a more personal alternative to a care home</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">short breaks or respite as well as longer-term support</span>
            </li>
          </ul>
          <p className="text-gray-700">
            It can support people with a range of needs, including learning disability, older age, and physical or sensory disability.
          </p>
        </section>

        {/* What daily life can be like */}
        <section id="daily-life" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What daily life can be like</h2>
          <p className="text-gray-700 mb-4">Shared Lives is about ordinary home life. Support may include:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">personal care</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">help with routines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">practical day-to-day support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">meals and home life</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">getting involved in the community</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">building confidence and independence</span>
            </li>
          </ul>
        </section>

        {/* Long stays, short breaks and respite */}
        <section id="stays-respite" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Long stays, short breaks and respite</h2>
          <p className="text-gray-700 mb-4">Shared Lives can include:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">long-term living arrangements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">short stays</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">respite</span>
            </li>
          </ul>
        </section>

        {/* Paying for Shared Lives */}
        <section id="paying" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Paying for Shared Lives</h2>
          <p className="text-gray-700 mb-4">
            There is a charge for this service. We will explain likely costs as part of your needs assessment and financial assessment.
          </p>
        </section>

        {/* How to get Shared Lives */}
        <section id="how-to-get" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How to get Shared Lives</h2>
          <p className="text-gray-700 mb-6">
            The first step is a care needs assessment. If Shared Lives looks right for you, we can discuss availability and next steps as part of your support planning.
          </p>
          <a
            href="#/adult-social-care/care-homes-and-supported-living/request-housing-care-support"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors mb-6 inline-block"
          >
            Request a care assessment
            <ArrowRight size={18} />
          </a>

          {/* Supporting download */}
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Supporting information</h3>
            <a
              href="https://www.walthamforest.gov.uk/sites/default/files/2023-03/SL%20service%20user%20guide%202023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#bf3688] hover:underline"
            >
              <FileText size={20} />
              <span>Shared Lives user guide (PDF)</span>
            </a>
          </div>
        </section>

        {/* Related help */}
        <section id="related" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related help</h2>
          <div className="space-y-3">
            <a href="#/adult-social-care/care-homes-and-supported-living/supported-living" className="block text-[#bf3688] hover:underline font-semibold">
              Supported living
            </a>
            <a href="#/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes" className="block text-[#bf3688] hover:underline font-semibold">
              Care homes and nursing homes
            </a>
            <a href="https://www.walthamforest.gov.uk/adult-social-care/paying-care-and-support" target="_blank" rel="noopener noreferrer" className="block text-[#bf3688] hover:underline font-semibold">
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