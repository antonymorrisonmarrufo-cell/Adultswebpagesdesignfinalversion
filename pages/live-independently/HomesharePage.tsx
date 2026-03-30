import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';
import { ExternalLink } from 'lucide-react';
import homeshareHeroImage from 'figma:asset/0bd88841be4c96ad8b00797177a2d11e2f24d462.png';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HomesharePage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/live-independently-at-home" className="hover:underline">Live independently at home</a>
          <span className="mx-1">&gt;</span>
          <span>Homeshare</span>
        </nav>

        <h1 className="text-5xl text-[#00635C] mb-3 font-bold leading-tight">
          Homeshare
        </h1>

        <p className="text-gray-700 max-w-4xl mb-6 text-base">
          Homeshare matches someone living alone who wants companionship and practical help at home with a person willing to live with them and offer support.
        </p>

        <div className="mb-10">
          <a
            href="https://twogenerations.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 font-semibold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
          >
            Visit Two Generations
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="mb-12 max-w-2xl">
          <img
            src={homeshareHeroImage}
            alt="A young woman pouring tea for an elderly man at home, sharing companionship"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="max-w-3xl space-y-0">

          <div className="bg-gray-200 border border-gray-300 p-6 mb-10">
            <h2 className="font-bold text-gray-900 mb-4">Contents</h2>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('how-it-works')} className="text-[#D61F69] underline hover:no-underline text-left">How Homeshare works</button></li>
              <li><button onClick={() => scrollTo('can-help')} className="text-[#D61F69] underline hover:no-underline text-left">What a homesharer can help with</button></li>
              <li><button onClick={() => scrollTo('cannot-do')} className="text-[#D61F69] underline hover:no-underline text-left">What a homesharer cannot do</button></li>
              <li><button onClick={() => scrollTo('who')} className="text-[#D61F69] underline hover:no-underline text-left">Who Homeshare can help</button></li>
              <li><button onClick={() => scrollTo('costs')} className="text-[#D61F69] underline hover:no-underline text-left">Costs</button></li>
              <li><button onClick={() => scrollTo('provider')} className="text-[#D61F69] underline hover:no-underline text-left">Who provides the service</button></li>
              <li><button onClick={() => scrollTo('enquire')} className="text-[#D61F69] underline hover:no-underline text-left">How to enquire</button></li>
            </ul>
          </div>

          <div id="how-it-works" className="pb-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">How Homeshare works</h2>
            <p className="text-gray-700 mb-4">
              A Homeshare matches:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a householder, who is looking for companionship and practical support to remain in their own home
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                a homesharer, who lives in the home and provides practical help, company and an overnight presence
              </li>
            </ul>
            <p className="text-gray-700">
              Each match is tailored to the needs of the people involved.
            </p>
          </div>

          <hr className="border-gray-200" />

          <div id="can-help" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">What a homesharer can help with</h2>
            <p className="text-gray-700 mb-4">
              A homesharer can offer practical help such as:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                basic household chores
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                cooking
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                gardening
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                food shopping
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                basic IT help
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                companionship
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                being an overnight presence in the home
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          <div id="cannot-do" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">What a homesharer cannot do</h2>
            <p className="text-gray-700 mb-4">
              A homesharer is not a carer.
            </p>
            <p className="text-gray-700 mb-4">
              They cannot provide:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                personal care
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                medication support
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                specialist care tasks
              </li>
            </ul>
            <p className="text-gray-700">
              It is still possible to have a care package and a Homeshare arrangement at the same time.
            </p>
          </div>

          <hr className="border-gray-200" />

          <div id="who" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">Who Homeshare can help</h2>
            <p className="text-gray-700 mb-4">
              Homeshare may help:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                older residents
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                people living with physical disabilities
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                people living with mental health problems
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                people who are feeling isolated and want companionship and practical support
              </li>
            </ul>
          </div>

          <hr className="border-gray-200" />

          <div id="costs" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">Costs</h2>
            <p className="text-gray-700 mb-4">
              There is a monthly fee for both the householder and the homesharer, paid to Two Generations. This helps cover the costs of setting up and maintaining the arrangement.
            </p>
            <p className="text-gray-700">
              The amount will be discussed before anything is agreed. Bursaries are available in some cases so that cost does not become a barrier.
            </p>
          </div>

          <hr className="border-gray-200" />

          <div id="provider" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">Who provides the service</h2>
            <p className="text-gray-700">
              Waltham Forest Council works in collaboration with Two Generations to provide Homeshare in the borough.
            </p>
          </div>

          <hr className="border-gray-200" />

          <div id="enquire" className="py-10">
            <h2 className="text-[#D61F69] font-bold text-xl mb-4">How to enquire</h2>
            <p className="text-gray-700 mb-6">
              Visit the Two Generations website to send an enquiry.
            </p>
            <p className="text-gray-700 mb-6">
              You can also call: <a href="tel:03333447738" className="text-[#D61F69] underline hover:no-underline font-semibold">0333 3447 738</a>
            </p>
            <a
              href="https://twogenerations.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 font-semibold hover:bg-[#B51A5A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2"
            >
              Visit Two Generations
              <ExternalLink size={18} />
            </a>
          </div>

        </div>

        <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>Last updated: 27 March 2026</p>
          <p>Next review: 27 March 2027</p>
        </div>

      </section>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}