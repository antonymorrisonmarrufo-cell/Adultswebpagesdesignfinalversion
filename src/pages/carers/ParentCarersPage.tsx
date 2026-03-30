export default function ParentCarersPage() {
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
            <span className="text-gray-700">Parent carers</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Parent carers</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Support for parents and carers of disabled children and young people.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Find parent carer support
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact SEND services
          </a>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#who-are" className="text-[#bf3688] underline hover:no-underline">Who parent carers are</a></li>
            <li><a href="#your-rights" className="text-[#bf3688] underline hover:no-underline">Your rights</a></li>
            <li><a href="#assessment-support" className="text-[#bf3688] underline hover:no-underline">Assessments and support</a></li>
            <li><a href="#local-groups" className="text-[#bf3688] underline hover:no-underline">Local groups and services</a></li>
            <li><a href="#send-help" className="text-[#bf3688] underline hover:no-underline">Related SEND help</a></li>
          </ul>
        </div>

        <div className="prose max-w-none">
          
          <div id="who-are" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Who parent carers are</h2>
            <p className="text-gray-700 mb-4">
              A parent carer is a parent or carer of a disabled child or young person under 18.
            </p>
            <p className="text-gray-700 mb-4">
              This includes children and young people with:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">physical disabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">learning disabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">autism</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">mental health needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">sensory impairments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">complex health needs</span>
              </li>
            </ul>
          </div>

          <div id="your-rights" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Your rights</h2>
            <p className="text-gray-700 mb-4">
              As a parent carer, you have the right to ask for an assessment of your own needs under the Care Act 2014.
            </p>
            <p className="text-gray-700 mb-4">
              This is separate from your child's needs assessment and looks at the impact caring has on your own wellbeing.
            </p>
            <p className="text-gray-700">
              You also have rights under the Children and Families Act 2014 if your child has special educational needs and disabilities (SEND).
            </p>
          </div>

          <div id="assessment-support" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Assessments and support</h2>
            <p className="text-gray-700 mb-4">
              A parent carer's assessment looks at:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">how caring affects your health and wellbeing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">whether you can work, study or maintain relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">what support would help you in your caring role</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Support may include respite breaks, practical help, peer support, or signposting to local services and benefits.
            </p>
          </div>

          <div id="local-groups" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Local groups and services</h2>
            
            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Parent Carer Forum</h3>
              <p className="text-gray-700 mb-4">
                A parent-led group that represents the views and experiences of parent carers in Waltham Forest.
              </p>
              <p className="text-gray-700">
                The forum provides peer support, information and a voice in shaping local SEND services.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 mb-4">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Carers First</h3>
              <p className="text-gray-700 mb-4">
                Carers First supports parent carers with information, advice, emotional support and access to breaks and activities.
              </p>
              <p className="text-gray-700">
                <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Visit Carers First</a>
              </p>
            </div>
          </div>

          <div id="send-help" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Related SEND help</h2>
            <p className="text-gray-700 mb-4">
              If your child has special educational needs or disabilities, you may also need:
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#bf3688] underline hover:no-underline">Education, Health and Care Plans (EHCPs)</a>
              </li>
              <li>
                <a href="#" className="text-[#bf3688] underline hover:no-underline">SEND support and services</a>
              </li>
              <li>
                <a href="#" className="text-[#bf3688] underline hover:no-underline">Short breaks for disabled children</a>
              </li>
              <li>
                <a href="#" className="text-[#bf3688] underline hover:no-underline">Transition to adult services</a>
              </li>
            </ul>
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
