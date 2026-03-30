export default function YoungCarersPage() {
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
            <span className="text-gray-700">Young carers</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Young carers</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Support for children and young people under 18 who help care for someone at home.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#/adult-social-care/being-carer/carers-assessment-and-rights"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            Get support for a young carer
          </a>
          <a
            href="tel:02085093030"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact the young carers service: 020 8509 3030
          </a>
        </div>

        {/* Safety and confidentiality messaging */}
        <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-6 mb-8">
          <h2 className="font-bold text-[#bf3688] text-xl mb-3">Your safety matters</h2>
          <p className="text-gray-900 mb-3">
            If you feel unsafe or too much is being asked of you, tell a trusted adult straight away. 
          </p>
          <p className="text-gray-900 mb-3">
            You can also call <strong>Childline</strong> on <a href="tel:08001111" className="text-[#bf3688] font-bold hover:underline">0800 1111</a> any time, day or night.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">We keep things confidential</h2>
          <p className="text-gray-700 mb-3">
            Everything you tell us stays private unless we're worried you might be in danger. If we need to speak to someone else, we'll talk to you about it first.
          </p>
          <p className="text-gray-700">
            <strong>You don't need permission from your parent or guardian to talk to us.</strong> Call, email, or fill in our online form — whatever feels easiest.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contents</h2>
          <ul className="space-y-2">
            <li><a href="#who-are" className="text-[#bf3688] underline hover:no-underline">Who young carers are</a></li>
            <li><a href="#signs" className="text-[#bf3688] underline hover:no-underline">Signs someone may be a young carer</a></li>
            <li><a href="#support" className="text-[#bf3688] underline hover:no-underline">How we can support</a></li>
            <li><a href="#assessment" className="text-[#bf3688] underline hover:no-underline">Young carers assessment</a></li>
            <li><a href="#what-helps" className="text-[#bf3688] underline hover:no-underline">What young carers tell us helps most</a></li>
            <li><a href="#activities" className="text-[#bf3688] underline hover:no-underline">Activities and breaks</a></li>
            <li><a href="#school" className="text-[#bf3688] underline hover:no-underline">School support</a></li>
            <li><a href="#referral" className="text-[#bf3688] underline hover:no-underline">How to make a referral</a></li>
          </ul>
        </div>

        <div className="prose max-w-none">
          
          <div id="who-are" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Who young carers are</h2>
            <p className="text-gray-700 mb-4">
              A young carer is a child or young person under 18 who helps look after a family member who is ill, disabled, has mental health needs, or misuses drugs or alcohol.
            </p>
            <p className="text-gray-700 mb-4">
              Young carers may help with:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">personal care like washing or dressing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">household tasks like cooking or cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">emotional support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">looking after younger siblings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">helping with medication or medical needs</span>
              </li>
            </ul>
          </div>

          <div id="signs" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Signs someone may be a young carer</h2>
            <p className="text-gray-700 mb-4">
              A young person may be a young carer if they:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">are often tired, worried or struggling at school</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">miss school or activities because of caring responsibilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">do not have much time for friends or hobbies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">feel isolated or different from peers</span>
              </li>
            </ul>
          </div>

          <div id="support" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">How we can support</h2>
            <p className="text-gray-700 mb-4">
              The Young Carers Service in Waltham Forest provides:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">one-to-one support and advice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">activities and social events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">respite breaks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">help with school work and learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">emotional and wellbeing support</span>
              </li>
            </ul>
          </div>

          <div id="assessment" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Young carers assessment</h2>
            <p className="text-gray-700 mb-4">
              A young carers assessment looks at the impact caring has on a young person's life and what support could help.
            </p>
            <p className="text-gray-700 mb-4">
              It considers their education, wellbeing, social life and what caring tasks are appropriate for their age.
            </p>
            <p className="text-gray-700">
              Any young carer can ask for an assessment, and schools or professionals can also request one.
            </p>
          </div>

          <div id="what-helps" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">What young carers tell us helps most</h2>
            <p className="text-gray-700 mb-4">
              Young carers often say that the following things help them the most:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Having a break from caring responsibilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Talking to someone who understands what they're going through</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Getting help with school work and learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Joining activities and social events with other young carers</span>
              </li>
            </ul>
          </div>

          <div id="activities" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">Activities and breaks</h2>
            <p className="text-gray-700 mb-4">
              Young carers are invited to regular activities, trips and events where they can meet other young carers, try new things and have fun.
            </p>
            <p className="text-gray-700">
              These activities give young people a chance to take a break from caring and just be themselves.
            </p>
          </div>

          <div id="school" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">School support</h2>
            <p className="text-gray-700 mb-4">
              Schools can play an important role in identifying and supporting young carers.
            </p>
            <p className="text-gray-700 mb-4">
              If a young person is struggling with school work or attendance because of caring, we can work with the school to put support in place.
            </p>
          </div>

          <div id="referral" className="mb-10">
            <h2 className="text-3xl font-bold text-[#bf3688] mb-4">How to make a referral</h2>
            <p className="text-gray-700 mb-4">
              If you are a young carer, or know a young carer who may need support, you can make a referral by:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">completing the online referral form</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">contacting the young carers service directly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">speaking to your school or a trusted adult</span>
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