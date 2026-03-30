import { ArrowRight } from 'lucide-react';

export default function LocalMentalHealthSupportServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/mental-health-wellbeing" className="hover:underline">Mental health and wellbeing</a>
          <span className="mx-1">&gt;</span>
          <span>Local mental health support services</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Local mental health support services
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          There are many organisations in Waltham Forest that offer mental health support, peer groups, and specialist services. You do not need a referral to access most of them.
        </p>

        {/* Community support and peer groups */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Community support and peer groups</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">CREST WF</strong> — social, befriending, educational and healthy living support for older people with a disability and people experiencing dementia (<a href="https://www.crestwf.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline">crestwf.org.uk</a>)
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Waltham Forest Hearing Voices Group</strong> — a peer support group for people who hear voices
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">WF Bipolar UK Support Group</strong> — peer support for people affected by bipolar disorder
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Coping Through Football</strong> — recovery-based football sessions for people with mental health conditions
              </div>
            </li>
          </ul>
        </section>

        {/* Support for specific communities */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Support for specific communities</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Black People's Mental Health Association (BPMHA)</strong> — support for black and minority ethnic communities
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">LGBTQIA+ support</strong> — local and national mental health services that understand the specific needs of LGBTQIA+ people. Services include MindOut (<a href="https://www.mindout.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline">mindout.org.uk</a>) and Switchboard (<a href="https://switchboard.lgbt" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline">switchboard.lgbt</a>)
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">SignHealth</strong> — mental health support for deaf people
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Empowering Deaf Society (EDS)</strong> — a deaf-led charity supporting deaf people across London
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Royal British Legion</strong> — support for armed forces veterans and their families
              </div>
            </li>
          </ul>
        </section>

        {/* Bereavement support */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Bereavement support</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Cruse Bereavement Support</strong> — free helpline on 0808 808 1677 (Monday to Friday, 9:30am to 5pm) and local support groups (<a href="https://www.cruse.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] hover:underline">cruse.org.uk</a>)
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Grief in Pieces</strong> — support for people who have lost someone to suicide
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">The Good Grief Trust</strong> — resources and practical support for people experiencing bereavement
              </div>
            </li>
          </ul>
        </section>

        {/* Substance use and mental health */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Substance use and mental health</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Change Grow Live (CGL)</strong> — drug and alcohol support for Waltham Forest residents, including help for people whose substance use is connected to mental health difficulties
              </div>
            </li>
          </ul>
        </section>

        {/* Wider support */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Wider support</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Body and Soul</strong> — support for people affected by childhood trauma and adversity
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Sister Circle</strong> — support for women in difficult circumstances
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Two Generations</strong> — a homeshare programme connecting older people looking for companionship with younger people looking for affordable housing
              </div>
            </li>
          </ul>
        </section>

        {/* Find more services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Find more services</h2>
          <p className="text-gray-700 mb-6">
            The council maintains an online Wellbeing Directory with a full list of support and community services in the borough, searchable by category and location.
          </p>
          <a
            href="https://www.walthamforest.gov.uk/health-and-wellbeing/support-and-community-services-your-area"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Search the Wellbeing Directory
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/looking-after-your-mental-wellbeing" className="text-[#D61F69] hover:underline">
                Looking after your mental wellbeing
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/talking-therapies-and-professional-support" className="text-[#D61F69] hover:underline">
                Talking therapies and professional support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/adult-social-care-and-mental-health" className="text-[#D61F69] hover:underline">
                Adult social care and mental health
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D61F69] hover:underline">
                Things to do during the day
              </a>
            </li>
          </ul>
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
