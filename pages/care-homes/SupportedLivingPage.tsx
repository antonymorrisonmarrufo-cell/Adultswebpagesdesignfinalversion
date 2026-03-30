import { ArrowRight, Phone } from 'lucide-react';

export default function SupportedLivingPage() {
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
          <span>Supported living</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Supported living
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Supported living helps you live as independently as possible in your own home, flat or shared house, with care and support around your needs.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Request a care assessment
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
            IMAGE PLACEHOLDER – SUPPORTED LIVING
          </p>
        </div>

        {/* Contents navigation */}
        <nav className="mb-10 bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#what-it-is" className="text-[#D61F69] hover:underline">What supported living is</a></li>
            <li><a href="#who-it-suits" className="text-[#D61F69] hover:underline">Who it may suit</a></li>
            <li><a href="#support-available" className="text-[#D61F69] hover:underline">What support you can get</a></li>
            <li><a href="#your-home" className="text-[#D61F69] hover:underline">What your home may be like</a></li>
            <li><a href="#how-to-get" className="text-[#D61F69] hover:underline">How to get supported living</a></li>
            <li><a href="#paying" className="text-[#D61F69] hover:underline">Paying for supported living</a></li>
            <li><a href="#related" className="text-[#D61F69] hover:underline">Related help</a></li>
          </ul>
        </nav>

        {/* What supported living is */}
        <section id="what-it-is" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What supported living is</h2>
          <p className="text-gray-700 mb-4">
            Supported living means you have your own tenancy or licence to occupy your home, while care and support are arranged separately around your needs.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">You may live:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">in your own flat</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">in a shared house</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">in specialist accommodation designed for people who need support</span>
            </li>
          </ul>
          <p className="text-gray-700">
            The aim is to help you stay safe, have control over day-to-day life, and do as much as possible for yourself.
          </p>
        </section>

        {/* Who it may suit */}
        <section id="who-it-suits" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Who it may suit</h2>
          <p className="text-gray-700 mb-4">Supported living may suit you if:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">you want to live more independently</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">you need regular help to manage daily life safely</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">you need support with personal care, routines, budgeting, or getting out and about</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">you do not need the level of 24-hour care usually provided in a care home</span>
            </li>
          </ul>
        </section>

        {/* What support you can get */}
        <section id="support-available" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What support you can get</h2>
          <p className="text-gray-700 mb-4">Support can be tailored to your needs and may include help with:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">getting out of bed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">washing and dressing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">cooking and eating meals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">budgeting and bills</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">finding and keeping work or volunteering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">claiming benefits</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">accessing services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">seeing friends and being part of the community</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">emotional support</span>
            </li>
          </ul>
        </section>

        {/* What your home may be like */}
        <section id="your-home" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What your home may be like</h2>
          <p className="text-gray-700 mb-4">Your accommodation will depend on your needs. It may be:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">your own flat</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">a room in a shared house</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">specialist wheelchair-accessible or adapted accommodation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">supported housing linked to disability, mental health or other support needs</span>
            </li>
          </ul>
        </section>

        {/* How to get supported living */}
        <section id="how-to-get" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">How to get supported living</h2>
          <p className="text-gray-700 mb-4">
            The first step is to ask Adult Social Care for a needs assessment.
          </p>
          <p className="text-gray-700 mb-4">After the assessment:</p>
          <ol className="space-y-3 list-decimal list-inside text-gray-700 mb-6">
            <li>we decide whether you have eligible care and support needs</li>
            <li>we agree a support plan with you</li>
            <li>we discuss what type of accommodation and support would suit you</li>
            <li>we arrange the next housing or care steps</li>
          </ol>
          <a
            href="#/adult-social-care/care-homes-and-supported-living/request-housing-care-support"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Request a care assessment
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Paying for supported living */}
        <section id="paying" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Paying for supported living</h2>
          <p className="text-gray-700 mb-4">
            A needs assessment is free. If you are assessed as needing support, we may carry out a financial assessment to work out what you can afford to pay.
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
          </div>
        </section>

        {/* Related help */}
        <section id="related" className="mb-10 scroll-mt-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related help</h2>
          <div className="space-y-3">
            <a href="#/adult-social-care/care-homes-and-supported-living/shared-lives" className="block text-[#D61F69] hover:underline font-semibold">
              Shared Lives
            </a>
            <a href="#/adult-social-care/care-homes-and-supported-living/extra-care-housing" className="block text-[#D61F69] hover:underline font-semibold">
              Extra care housing
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