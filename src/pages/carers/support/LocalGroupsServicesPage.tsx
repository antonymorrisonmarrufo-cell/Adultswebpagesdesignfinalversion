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

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Find local support
          </a>
          <a
            href="https://www.carersfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact Carers First
          </a>
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
            <a href="#" className="text-[#bf3688] underline hover:no-underline font-bold">Search the community directory</a>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-[#bf3688] mb-3">Mental health and wellbeing hubs</h3>
            <p className="text-gray-700 mb-4">
              Local mental health support and wellbeing services available in the borough.
            </p>
            <a href="#" className="text-[#bf3688] underline hover:no-underline font-bold">Find mental health support</a>
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
