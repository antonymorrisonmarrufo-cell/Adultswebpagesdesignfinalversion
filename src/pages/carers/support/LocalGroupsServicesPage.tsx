import { ArrowRight } from 'lucide-react';

export default function LocalGroupsServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#bf3688] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#bf3688] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer" className="text-[#bf3688] hover:underline">Being a carer</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer/support-for-carers" className="text-[#bf3688] hover:underline">Support for carers</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Local groups and services</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Local groups and services</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Find local groups, community activities and specialist organisations that support carers in Waltham Forest.
        </p>

        {/* Dual Contact Boxes */}
        <div className="space-y-4 mb-12">
          <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003078] text-white text-sm font-bold mb-3">i</div>
            <h3 className="text-lg font-bold text-[#003078] mb-2">Carers First</h3>
            <p className="text-sm text-gray-700 mb-2">For unpaid carers aged 18+ who want practical advice, emotional support, groups, training and help with their caring role.</p>
            <p className="text-sm font-semibold text-gray-900">Call <a href="tel:03003031555" className="text-wf-blue underline">0300 303 1555</a></p>
          </section>
          <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003078] text-white text-sm font-bold mb-3">i</div>
            <h3 className="text-lg font-bold text-[#003078] mb-2">Adult Social Care</h3>
            <p className="text-sm text-gray-700 mb-2">Contact the council if you want a Carer's Assessment, or if the person you care for may need a care needs assessment or support arranged by the council.</p>
            <p className="text-sm font-semibold text-gray-900">Call <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a></p>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-white border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-[#bf3688] mb-3">Carers First Waltham Forest</h3>
            <p className="text-gray-700 mb-4">
              Carers First is the main local support organisation for unpaid carers in Waltham Forest. They offer advice, emotional support, peer groups, training and practical help.
            </p>
            <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Visit Carers First</a>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-[#bf3688] mb-3">Young Carers Service</h3>
            <p className="text-gray-700 mb-4">
              Support for children and young people under 18 who help care for someone at home.
            </p>
            <a href="#/adult-social-care/being-carer/young-carers" className="text-[#bf3688] underline hover:no-underline font-bold">Find out about young carers support</a>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-[#bf3688] mb-3">Parent Carer Forum</h3>
            <p className="text-gray-700 mb-4">
              A parent-led group for parents and carers of disabled children and young people in Waltham Forest.
            </p>
            <a href="#/adult-social-care/being-carer/parent-carers" className="text-[#bf3688] underline hover:no-underline font-bold">Find out about parent carer support</a>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-[#bf3688] mb-3">Community Directory</h3>
            <p className="text-gray-700 mb-4">
              Search for local groups, activities and services across Waltham Forest.
            </p>
            <a href="https://www.walthamforest.gov.uk/adult-social-care" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Search the community directory</a>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-[#bf3688] mb-3">Mental health and wellbeing hubs</h3>
            <p className="text-gray-700 mb-4">
              Local mental health support and wellbeing services available in the borough.
            </p>
            <a href="#/adult-social-care/mental-health-wellbeing" className="text-[#bf3688] underline hover:no-underline font-bold">Find mental health support</a>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-[#bf3688] mb-3">Age UK Waltham Forest</h3>
            <p className="text-gray-700 mb-4">
              Support for older people and their carers, including information, advice and local activities.
            </p>
            <a href="https://www.ageuk.org.uk/walthamforest" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Visit Age UK Waltham Forest</a>
          </div>

        </div>

        <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
          <p><strong>Last updated:</strong> 28 March 2026</p>
          <p><strong>Next review:</strong> 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
