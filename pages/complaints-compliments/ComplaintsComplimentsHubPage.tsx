import { ArrowRight, Phone } from 'lucide-react';

export default function ComplaintsComplimentsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Complaints, compliments and help shape our future services</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Complaints, compliments and help shape our future services
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          Tell us about your experience of adult social care, whether that is a complaint, a compliment, or an offer to help us improve.
        </p>

        {/* Your feedback matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">Your feedback matters</h2>
          
          <p className="text-gray-700 mb-4">
            We want adult social care in Waltham Forest to work well for everyone who uses it. Your feedback helps us understand what is working, what is not, and what we need to change.
          </p>

          <p className="text-gray-700">
            Whether you want to raise a concern, tell us about something that went well, or get involved in improving our services, this is the place to start.
          </p>
        </section>

        {/* In this section - Card links */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-8">In this section</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <a
              href="#/adult-social-care/complaints-compliments/make-a-complaint"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Make a complaint about adult social care</h3>
              <p className="text-gray-700 text-sm pr-12">If something has gone wrong with your adult social care, find out how to raise a complaint and what happens next.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#/adult-social-care/complaints-compliments/send-us-a-compliment"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Send us a compliment</h3>
              <p className="text-gray-700 text-sm pr-12">If someone has done a good job or you have had a positive experience, let us know so we can share it with our team.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#/adult-social-care/complaints-compliments/help-shape-our-services"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Help shape our services</h3>
              <p className="text-gray-700 text-sm pr-12">Join residents, carers, and partners in improving adult social care in Waltham Forest. Find out how to get involved.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="#/adult-social-care/complaints-compliments/independent-help-and-advocacy"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Independent help and advocacy</h3>
              <p className="text-gray-700 text-sm pr-12">Where to get independent support if you need help making a complaint or want an independent view.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">Quick actions</h2>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://portal.walthamforest.gov.uk/AchieveForms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
            >
              Make a complaint online
              <ArrowRight size={18} />
            </a>

            <a
              href="https://portal.walthamforest.gov.uk/AchieveForms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
            >
              Send us a compliment
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:voiceandinfluence@walthamforest.gov.uk"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
            >
              Get involved in shaping our services
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Need help? */}
        <section className="mb-12 bg-gray-100 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Need help?</h2>
          <p className="text-gray-700 mb-4">
            If you are not sure how to raise a concern or whether your issue is a complaint, contact the Adult Social Care team. We can help you work out the best way forward.
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-2">
            <Phone size={20} className="text-[#D61F69]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 text-sm ml-8">Monday to Friday, 9am to 5pm</p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/how-adult-social-care-works" className="text-[#D61F69] hover:underline">
                How adult social care works
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/how-to-get-support" className="text-[#D61F69] hover:underline">
                How to get support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#D61F69] hover:underline">
                Keeping adults safe
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