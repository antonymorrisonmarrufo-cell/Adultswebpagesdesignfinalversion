export default function TrainingWorkshopsPage() {
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
            <span className="text-gray-700">Training and workshops</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Training and workshops for carers</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Build your confidence, learn new skills and connect with other carers through training, workshops and local activities.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://www.carersfirst.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            See training and workshops
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

        <div className="prose max-w-none">
          
          <p className="text-lg text-gray-700 mb-8">
            Training and workshops can help you feel more confident in your caring role, learn practical skills, and meet other carers in similar situations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div className="bg-white border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Training and workshops</h3>
              <p className="text-gray-700 mb-4">
                Learn practical caring skills, manage stress, understand conditions like dementia, and get advice on benefits and finances.
              </p>
              <p className="text-gray-700">
                Contact Carers First to find out what training is available.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">What's on guide</h3>
              <p className="text-gray-700 mb-4">
                Regular activities, social events and information sessions for carers across Waltham Forest.
              </p>
              <p className="text-gray-700">
                Check the Carers First website for the latest events.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Peer support groups</h3>
              <p className="text-gray-700 mb-4">
                Connect with other carers, share experiences and get mutual support in a safe and friendly environment.
              </p>
              <p className="text-gray-700">
                Groups meet regularly in different parts of the borough.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Carers' forum</h3>
              <p className="text-gray-700 mb-4">
                Have your say on services, share your views and help shape support for carers in Waltham Forest.
              </p>
              <p className="text-gray-700">
                Get involved by contacting Carers First.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold text-[#bf3688] mb-3">Online learning resources</h3>
              <p className="text-gray-700 mb-4">
                Access free online courses and information at a time that suits you.
              </p>
              <p className="text-gray-700">
                Carers First can point you to trusted online learning platforms.
              </p>
            </div>

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
