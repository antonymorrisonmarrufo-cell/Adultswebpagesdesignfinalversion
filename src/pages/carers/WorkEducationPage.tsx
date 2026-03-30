export default function WorkEducationPage() {
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
            <span className="text-gray-700">Work, education and training</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Work, education and training</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Find support if you want to balance caring with work or study, return to work, or build skills for the future.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Find work and training support
          </a>
          <a
            href="https://www.carersfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Get advice
          </a>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#balancing" className="text-[#bf3688] underline hover:no-underline">Balancing work and caring</a></li>
            <li><a href="#flexible-working" className="text-[#bf3688] underline hover:no-underline">Flexible working and your rights</a></li>
            <li><a href="#returning" className="text-[#bf3688] underline hover:no-underline">Returning to work</a></li>
            <li><a href="#training" className="text-[#bf3688] underline hover:no-underline">Training and skills development</a></li>
            <li><a href="#financial-help" className="text-[#bf3688] underline hover:no-underline">Financial help while returning to work</a></li>
            <li><a href="#schemes" className="text-[#bf3688] underline hover:no-underline">Schemes and services that can help</a></li>
          </ul>
        </div>

        <div className="prose max-w-none">
          
          <div id="balancing" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Balancing work and caring</h2>
            <p className="text-gray-700 mb-4">
              Many carers want to stay in work or education but find it difficult to balance with their caring role.
            </p>
            <p className="text-gray-700 mb-4">
              Support may include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">respite support to give you time to work or study</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">advice on flexible working and your employment rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">help with childcare or emergency care plans</span>
              </li>
            </ul>
          </div>

          <div id="flexible-working" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Flexible working and your rights</h2>
            <p className="text-gray-700 mb-4">
              If you are employed, you have the right to request flexible working arrangements.
            </p>
            <p className="text-gray-700 mb-4">
              This could include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">changing your working hours or patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">working from home part or full time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">reducing your hours</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              You may also have the right to time off for emergencies and unpaid carer's leave.
            </p>
            <p className="text-gray-700">
              <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline font-bold">Find out more about flexible working on GOV.UK</a>
            </p>
          </div>

          <div id="returning" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Returning to work</h2>
            <p className="text-gray-700 mb-4">
              If you have taken time out of work to care, returning can feel daunting.
            </p>
            <p className="text-gray-700 mb-4">
              Help is available including:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">advice on job searching and updating your CV</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">confidence-building and interview skills support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">information on local job clubs and employment services</span>
              </li>
            </ul>
          </div>

          <div id="training" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Training and skills development</h2>
            <p className="text-gray-700 mb-4">
              Free or low-cost training may be available to help you build new skills or update existing qualifications.
            </p>
            <p className="text-gray-700 mb-4">
              This could include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">online courses and distance learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">IT and digital skills training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">vocational courses and apprenticeships</span>
              </li>
            </ul>
          </div>

          <div id="financial-help" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Financial help while returning to work</h2>
            <p className="text-gray-700 mb-4">
              Some benefits and grants may be available to help with costs when returning to work or training.
            </p>
            <p className="text-gray-700 mb-4">
              This could include help with:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">course fees and materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">travel costs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">childcare or care costs during training</span>
              </li>
            </ul>
            <p className="text-gray-700">
              Contact Carers First or your local Jobcentre Plus for advice on what may be available.
            </p>
          </div>

          <div id="schemes" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Schemes and services that can help</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://www.carersfirst.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline">Carers First – work and training support</a>
              </li>
              <li>
                <a href="https://www.gov.uk/jobsearch" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline">Find a job – GOV.UK</a>
              </li>
              <li>
                <a href="https://nationalcareers.service.gov.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] underline hover:no-underline">National Careers Service</a>
              </li>
              <li>
                <a href="#" className="text-[#bf3688] underline hover:no-underline">Waltham Forest adult learning and skills</a>
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
