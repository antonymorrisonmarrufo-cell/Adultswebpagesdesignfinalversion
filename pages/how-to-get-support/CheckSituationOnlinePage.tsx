import { ArrowRight, Phone } from 'lucide-react';

export default function CheckSituationOnlinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/how-to-get-support" className="hover:underline">How to get support</a>
          <span className="mx-1">&gt;</span>
          <span>Check your situation online</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Check your situation online
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Use our self-assessment tool to answer some questions about your situation. It will tell you whether you might be eligible for support and point you towards services that could help.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Start the self-assessment tool
            <ArrowRight size={18} />
          </a>
        </div>

        {/* What the tool does */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What the tool does</h2>
          <p className="text-gray-700 mb-4">
            The self-assessment tool asks you a series of questions about your daily life — things like how you manage at home, whether you can wash, dress, and eat independently, and how you are coping day to day.
          </p>
          <p className="text-gray-700 mb-4">
            Based on your answers, it will tell you:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>How likely you are to be eligible for council-funded care and support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Whether you might need to pay towards some or all of your care</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>Information, advice, and local services that could help you, even if you do not need a formal assessment</span>
            </li>
          </ul>
        </section>

        {/* Who can use it */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Who can use it</h2>
          <p className="text-gray-700">
            You can use it for yourself, or you can complete it on behalf of someone else — for example, a parent, partner, or friend you are worried about.
          </p>
        </section>

        {/* How long it takes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">How long it takes</h2>
          <p className="text-gray-700">
            The tool takes around 10 to 15 minutes to complete. You do not need to create an account to use it, although creating one allows you to save your progress and come back later.
          </p>
        </section>

        {/* What happens with your answers */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What happens with your answers</h2>
          <p className="text-gray-700 mb-4">
            The tool gives you an immediate result based on what you have told us. If the result suggests you may need a formal assessment, you can contact us to arrange one.
          </p>
          <p className="text-gray-700">
            Your answers are confidential. The self-assessment does not commit you to anything — it is a way to check your situation and find out what help might be available.
          </p>
        </section>

        {/* If you need help using the tool */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">If you need help using the tool</h2>
          <p className="text-gray-700 mb-4">
            If you find it difficult to use the online tool, you can contact us by phone instead. We can talk through your situation and help you work out whether an assessment would be the right next step.
          </p>
          <div className="flex items-center gap-2 text-gray-900 mb-1">
            <Phone size={18} className="text-[#D61F69]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm ml-6">Monday to Friday, 9am to 5pm</p>
        </section>

        {/* Callout box */}
        <div className="bg-gray-100 border-l-4 border-[#D61F69] p-6 mb-12">
          <p className="text-gray-900">
            The self-assessment is not a formal care needs assessment. It is a quick way to check your situation and get pointed in the right direction. If you need a full assessment, we will arrange one separately.
          </p>
        </div>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-to-get-support/contact-us" className="text-[#D61F69] hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support/request-an-assessment" className="text-[#D61F69] hover:underline">
                Request an assessment
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#D61F69] hover:underline">
                How adult social care works
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