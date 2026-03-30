import { Phone } from 'lucide-react';

export default function AdultSocialCareMentalHealthPage() {
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
          <span>Adult social care and mental health</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Adult social care and mental health
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you have an ongoing mental health condition that affects your daily life, you may be eligible for support from adult social care. The council works alongside NHS mental health services to make sure you get the right help.
        </p>

        {/* How it works */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">How it works</h2>
          <p className="text-gray-700 mb-4">
            In Waltham Forest, adult social care for people with mental health conditions is provided through a partnership between the council and NELFT (North East London NHS Foundation Trust). NELFT provides the NHS mental health services, and the council provides the social care support. The two work together so you do not have to navigate separate systems.
          </p>
          <p className="text-gray-700">
            If you are already receiving support from an NHS mental health team, your care coordinator or key worker can help you access social care support. If you are not currently receiving NHS mental health services but think you might need social care, contact the Adult Social Care team.
          </p>
        </section>

        {/* What support is available */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What support is available</h2>
          <p className="text-gray-700 mb-4">
            If you are eligible for adult social care because of a mental health condition, you may be able to get help with:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Managing daily tasks such as cooking, cleaning, and looking after yourself</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Staying safe at home</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Maintaining relationships and staying connected to your community</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Getting into or staying in work, education, or volunteering</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Finding suitable housing or supported accommodation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Managing your finances and benefits</span>
            </li>
          </ul>
          <p className="text-gray-700">
            The kind of support you receive depends on your needs. It might include regular support at home, a personal budget to arrange your own care, or access to day services and community activities.
          </p>
        </section>

        {/* NHS mental health teams in Waltham Forest */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">NHS mental health teams in Waltham Forest</h2>
          <p className="text-gray-700 mb-4">
            NELFT runs several specialist mental health teams in Waltham Forest that work closely with the council's adult social care service:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Mental Health and Wellness Teams</strong> (Central, North, and South) — community teams supporting adults with a range of mental health conditions
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Older Adults Mental Health Team</strong> — specialist support for older people with mental health conditions including dementia
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Early Intervention in Psychosis (EIP)</strong> — early support for people experiencing psychosis for the first time
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <div>
                <strong className="text-gray-900">Community Recovery Team</strong> — support for people with more complex or longer-term mental health conditions
              </div>
            </li>
          </ul>
          <p className="text-gray-700">
            If you are referred to one of these teams, they will work with the council to assess your health and social care needs together.
          </p>
        </section>

        {/* Getting a mental health social care assessment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Getting a mental health social care assessment</h2>
          <p className="text-gray-700 mb-4">
            You can ask for a care needs assessment at any time by contacting the Adult Social Care team. If you are already working with an NHS mental health team, your care coordinator can also request one on your behalf.
          </p>
          <p className="text-gray-700 mb-4">
            The assessment looks at how your mental health condition affects your daily life and what support might help. It follows the same process as any adult social care assessment.
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={20} className="text-[#bf3688]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm ml-8">Monday to Friday, 9am to 5pm</p>
        </section>

        {/* The Care Programme Approach (CPA) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">The Care Programme Approach (CPA)</h2>
          <p className="text-gray-700">
            If you have more complex mental health needs, your care may be coordinated under the Care Programme Approach. This means you will have a care coordinator who brings together your health and social care support into one plan. Your care plan is reviewed regularly to make sure it is still meeting your needs.
          </p>
        </section>

        {/* Carers */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Carers</h2>
          <p className="text-gray-700">
            If you care for someone with a mental health condition, you have the right to a carer's assessment. This looks at how caring affects your own life and what support might help you. See our carers section for more information.
          </p>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-12">
          <p className="text-gray-900">
            Mental health is not separate from adult social care. If your mental health condition affects your ability to manage daily life, you may be eligible for exactly the same kind of support — personal budgets, care plans, community services — as someone with a physical disability or long-term illness.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-to-get-support" className="text-[#bf3688] hover:underline">
                How to get support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works/who-can-get-help" className="text-[#bf3688] hover:underline">
                Who can get help
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#bf3688] hover:underline">
                Paying for your care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/being-carer" className="text-[#bf3688] hover:underline">
                Being a carer
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