import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function SendComplimentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/complaints-compliments" className="hover:underline">Complaints, compliments and help shape our future services</a>
          <span className="mx-1">&gt;</span>
          <span>Send us a compliment</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Send us a compliment
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If someone in adult social care has done a good job, or you have had a positive experience, we would like to hear about it.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
          >
            Send us a compliment
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Why compliments matter */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Why compliments matter</h2>
          <p className="text-gray-700">
            Compliments help us understand what is working well so we can do more of it. When you tell us about a positive experience, we share it with the person or team involved. It makes a real difference to the people who work in adult social care.
          </p>
        </section>

        {/* What you might want to tell us about */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">What you might want to tell us about</h2>
          <p className="text-gray-700 mb-4">
            You might want to let us know about:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>A social worker, care coordinator, or other professional who went the extra mile for you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>A care provider who delivered an excellent service</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>A process that worked well and made things easier for you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>A member of staff who was kind, helpful, or made you feel listened to</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <span>An experience that was better than you expected</span>
            </li>
          </ul>
        </section>

        {/* How to send a compliment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">How to send a compliment</h2>
          
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-[#D61F69] pl-4">
              <p className="font-bold text-gray-900 mb-1">Online:</p>
              <p className="text-gray-700">Use our compliment form — it takes a couple of minutes.</p>
            </div>

            <div className="border-l-4 border-[#D61F69] pl-4">
              <p className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Phone size={18} className="text-[#D61F69]" />
                Phone:
              </p>
              <p className="text-gray-700">Call 020 8496 3130 and ask to leave a compliment about adult social care.</p>
            </div>

            <div className="border-l-4 border-[#D61F69] pl-4">
              <p className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Mail size={18} className="text-[#D61F69]" />
                Email:
              </p>
              <p className="text-gray-700">
                <a href="mailto:information.officer@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">
                  information.officer@walthamforest.gov.uk
                </a>
              </p>
            </div>
          </div>

          <p className="text-gray-700">
            You do not need to know the full name of the person you are complimenting. If you can describe who they are and what they did, we will make sure the right person hears about it.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/complaints-compliments/make-a-complaint" className="text-[#D61F69] hover:underline">
                Make a complaint about adult social care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/complaints-compliments/help-shape-our-services" className="text-[#D61F69] hover:underline">
                Help shape our services
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