export default function SupportAfterCaringPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#D61F69] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#D61F69] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer" className="text-[#D61F69] hover:underline">Being a carer</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Support after caring ends</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">Support after caring ends</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          When a caring role ends, you may need emotional and practical support. Help is available.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Find bereavement and practical support
          </a>
          <a
            href="https://www.carersfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#D61F69] text-[#D61F69] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact Carers First
          </a>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#bereavement" className="text-[#D61F69] underline hover:no-underline">Bereavement support</a></li>
            <li><a href="#practical" className="text-[#D61F69] underline hover:no-underline">Practical issues after a death</a></li>
            <li><a href="#returning" className="text-[#D61F69] underline hover:no-underline">Returning to work, study or volunteering</a></li>
            <li><a href="#ongoing" className="text-[#D61F69] underline hover:no-underline">Ongoing support for former carers</a></li>
          </ul>
        </div>

        <div className="prose max-w-none">
          
          <p className="text-lg text-gray-700 mb-8">
            The end of a caring role can be a difficult and emotional time, whether the person you cared for has died, moved into residential care, or no longer needs your help.
          </p>

          <div id="bereavement" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Bereavement support</h2>
            <p className="text-gray-700 mb-4">
              Losing someone you cared for can be overwhelming. As well as grief, you may feel lost, isolated or unsure what to do next.
            </p>
            <p className="text-gray-700 mb-4">
              Bereavement support is available including:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">counselling and emotional support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">peer support groups for bereaved carers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">one-to-one support from Carers First or local bereavement services</span>
              </li>
            </ul>
            <div className="bg-[#FFF0F7] border-l-4 border-[#D61F69] p-6 mb-4">
              <h3 className="text-[#D61F69] font-bold text-lg mb-3">If you need someone to talk to</h3>
              <ul className="space-y-2">
                <li className="text-gray-900">Call Samaritans on 116 123 (24/7)</li>
                <li className="text-gray-900">Contact Cruse Bereavement Support on 0808 808 1677</li>
                <li className="text-gray-900">Speak to your GP about how you are feeling</li>
              </ul>
            </div>
          </div>

          <div id="practical" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Practical issues after a death</h2>
            <p className="text-gray-700 mb-4">
              After someone dies, there are practical tasks that need to be done. This can feel overwhelming when you are grieving.
            </p>
            <p className="text-gray-700 mb-4">
              You may need help with:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">registering the death</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">arranging a funeral</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">dealing with benefits and finances</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">understanding your financial situation now caring has ended</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              <a href="https://www.gov.uk/when-someone-dies" target="_blank" rel="noopener noreferrer" className="text-[#D61F69] underline hover:no-underline font-bold">Find step-by-step guidance on what to do when someone dies on GOV.UK</a>
            </p>
            <p className="text-gray-700">
              Citizens Advice and Carers First can also help with practical advice and support.
            </p>
          </div>

          <div id="returning" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Returning to work, study or volunteering</h2>
            <p className="text-gray-700 mb-4">
              If you took time out of work, education or other activities to care, you may want help returning.
            </p>
            <p className="text-gray-700 mb-4">
              Support may include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">advice on returning to work and updating your CV</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">training and skills development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">confidence-building and rebuilding social connections</span>
              </li>
            </ul>
            <p className="text-gray-700">
              <a href="#/adult-social-care/being-carer/work-education-and-training" className="text-[#D61F69] underline hover:no-underline font-bold">Find out more about work, education and training support</a>
            </p>
          </div>

          <div id="ongoing" className="mb-10">
            <h2 className="text-3xl font-bold text-[#D61F69] mb-4">Ongoing support for former carers</h2>
            <p className="text-gray-700 mb-4">
              You do not stop being a carer overnight. It can take time to adjust to life after caring.
            </p>
            <p className="text-gray-700 mb-4">
              Carers First and local support services can continue to support you as you rebuild your life and work out what comes next.
            </p>
            <p className="text-gray-700 mb-4">
              This might include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">staying connected to peer support groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">help with practical issues like benefits or housing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D61F69] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">emotional support as you adjust</span>
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
