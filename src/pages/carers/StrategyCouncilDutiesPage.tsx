export default function StrategyCouncilDutiesPage() {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'information' | 'duties' | 'core-offer' | 'contacts'>('overview');

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#bf3688] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#bf3688] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">All-Age Carers strategy and council duties</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">All-Age Carers strategy and council duties</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Information about Waltham Forest's approach to supporting carers, our legal duties and strategic framework.
        </p>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-[#bf3688] text-[#bf3688]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('information')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'information'
                  ? 'border-[#bf3688] text-[#bf3688]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Information and support
            </button>
            <button
              onClick={() => setActiveTab('duties')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'duties'
                  ? 'border-[#bf3688] text-[#bf3688]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Our duties
            </button>
            <button
              onClick={() => setActiveTab('core-offer')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'core-offer'
                  ? 'border-[#bf3688] text-[#bf3688]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Core offer
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'contacts'
                  ? 'border-[#bf3688] text-[#bf3688]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Useful contacts
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              Waltham Forest Council is committed to supporting unpaid carers of all ages through an all-age carers approach.
            </p>
            <p className="text-gray-700 mb-4">
              This means we work across council services, with health partners and the voluntary sector to make sure carers can access the right support at the right time.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach is based on:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">early identification of carers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">person-centered assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">preventative and wellbeing-focused support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">partnership working with carers and carers organizations</span>
              </li>
            </ul>
            <div className="bg-gray-50 border border-gray-200 p-6 mt-6">
              <p className="text-gray-900 mb-2">
                <strong>For resident-facing information and support</strong>
              </p>
              <p className="text-gray-700">
                <a href="#/adult-social-care/being-carer" className="text-[#bf3688] underline hover:no-underline font-bold">Visit the Being a carer section</a>
              </p>
            </div>
          </div>
        )}

        {activeTab === 'information' && (
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Information and support for carers</h2>
            <p className="text-gray-700 mb-4">
              Carers can access information, advice and support through:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Carers First Waltham Forest</strong> – the main local carer support organization providing advice, peer support, training and wellbeing services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Carer's assessments</strong> – assessments of carers' own support needs under the Care Act 2014</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Young carers service</strong> – specialist support for children and young people under 18 with caring responsibilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700"><strong>Parent carer support</strong> – dedicated support for parents and carers of disabled children</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Full resident-facing information is available on the Being a carer section of this website.
            </p>
          </div>
        )}

        {activeTab === 'duties' && (
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Our duties towards carers</h2>
            <p className="text-gray-700 mb-4">
              Waltham Forest Council has legal duties to support carers under:
            </p>
            
            <h3 className="text-2xl font-bold text-[#bf3688] mb-3 mt-6">Care Act 2014</h3>
            <p className="text-gray-700 mb-4">
              The Care Act places a duty on local authorities to:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">provide a carer's assessment to any carer who appears to have support needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">meet eligible needs identified through the assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">provide information and advice to carers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">involve carers in assessments and care planning for the people they care for</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-[#bf3688] mb-3 mt-6">Children and Families Act 2014</h3>
            <p className="text-gray-700 mb-4">
              This Act includes duties to:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">assess young carers and parent carers who appear to have support needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">ensure young carers are not undertaking inappropriate caring tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">support parent carers through the SEND framework</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'core-offer' && (
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Our core offer to carers</h2>
            <p className="text-gray-700 mb-4">
              Waltham Forest's core offer to carers includes:
            </p>
            
            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Information and advice</h3>
              <p className="text-gray-700">
                Clear, accessible information about support available, how to access it, and rights and entitlements.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Carer identification</h3>
              <p className="text-gray-700">
                Proactive identification of carers through health services, schools, and community settings.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Assessment and support planning</h3>
              <p className="text-gray-700">
                Person-centered assessments that focus on carers' own wellbeing, not just the person they care for.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Practical and emotional support</h3>
              <p className="text-gray-700">
                Access to respite, peer support, counseling, training and emergency planning.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Financial support and guidance</h3>
              <p className="text-gray-700">
                Help accessing Carer's Allowance, benefits advice, and information about direct payments where eligible.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Involvement and co-production</h3>
              <p className="text-gray-700">
                Opportunities for carers to shape services through forums, user research and feedback mechanisms.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Useful contacts for carers</h2>
            
            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Carers First Waltham Forest</h3>
              <p className="text-gray-700 mb-2">Main local support organization for unpaid carers</p>
              <p className="text-gray-700">
                <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline">Visit Carers First</a>
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Adult Social Care</h3>
              <p className="text-gray-700 mb-2">For carer's assessments and adult social care support</p>
              <p className="text-gray-700">Tel: 020 8496 3130</p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Young Carers Service</h3>
              <p className="text-gray-700 mb-2">Support for children and young people under 18 with caring responsibilities</p>
              <p className="text-gray-700">
                <a href="#/adult-social-care/being-carer/young-carers" className="text-[#bf3688] underline hover:no-underline">Find out more about young carers support</a>
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Parent Carer Forum</h3>
              <p className="text-gray-700 mb-2">Parent-led group for parents and carers of disabled children</p>
              <p className="text-gray-700">
                <a href="#/adult-social-care/being-carer/parent-carers" className="text-[#bf3688] underline hover:no-underline">Find out more about parent carer support</a>
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Carers UK</h3>
              <p className="text-gray-700 mb-2">National charity providing information and support</p>
              <p className="text-gray-700">
                <a href="https://www.carersuk.org" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline">Visit Carers UK</a>
              </p>
            </div>
          </div>
        )}

        <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
          <p><strong>Last updated:</strong> 28 March 2026</p>
          <p><strong>Next review:</strong> 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
