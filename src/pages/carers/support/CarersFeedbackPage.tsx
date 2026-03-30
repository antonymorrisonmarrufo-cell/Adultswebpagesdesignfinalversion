export default function CarersFeedbackPage() {
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
            <span className="text-gray-700">Carers' feedback and testimonials</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Carers' feedback and testimonials</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Hear from carers, see how feedback shapes services, and tell us what would make support better.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#/adult-social-care/complaints-compliments"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Give feedback
          </a>
          <a
            href="#/adult-social-care/complaints-compliments"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Join the user research group
          </a>
        </div>

        <div className="prose max-w-none">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">What carers have said</h2>
            
            <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-4">
              <p className="text-gray-900 italic mb-2">
                "The carer's assessment really helped me think about what I needed. I didn't realize how much I was struggling until someone asked."
              </p>
              <p className="text-gray-700 text-sm">– Carer, Waltham Forest</p>
            </div>

            <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-4">
              <p className="text-gray-900 italic mb-2">
                "Carers First helped me apply for Carer's Allowance and connected me with a local support group. It made such a difference."
              </p>
              <p className="text-gray-700 text-sm">– Carer, Waltham Forest</p>
            </div>

            <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-4">
              <p className="text-gray-900 italic mb-2">
                "I didn't think of myself as a carer at first. Finding out about the support available was really helpful."
              </p>
              <p className="text-gray-700 text-sm">– Carer, Waltham Forest</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">How feedback shapes services</h2>
            <p className="text-gray-700 mb-4">
              We use feedback from carers to improve services and make sure support meets real needs.
            </p>
            <p className="text-gray-700 mb-4">
              Recent changes made because of carer feedback include:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">clearer information about what a carer's assessment is</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">better signposting to financial support and benefits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">more peer support groups in different parts of the borough</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Tell us what would help</h2>
            <p className="text-gray-700 mb-4">
              Your feedback helps us understand what is working well and what we need to improve.
            </p>
            <p className="text-gray-700 mb-4">
              You can give feedback by:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">completing our online feedback form</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">speaking to your social worker or carer support worker</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">joining the user research group for carers</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Join the user research group</h2>
            <p className="text-gray-700 mb-4">
              The user research group gives carers the chance to be involved in improving services.
            </p>
            <p className="text-gray-700 mb-4">
              Members receive invites to activities, surveys and discussions that help shape the future of carer support in Waltham Forest.
            </p>
            <p className="text-gray-700 mb-4">
              It is informal, flexible and you can take part as much or as little as you like.
            </p>
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
