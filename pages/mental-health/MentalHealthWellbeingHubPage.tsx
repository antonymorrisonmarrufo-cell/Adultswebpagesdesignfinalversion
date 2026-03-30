import { ArrowRight, Phone, AlertTriangle } from 'lucide-react';

export default function MentalHealthWellbeingHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <span>Mental health and wellbeing</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Mental health and wellbeing
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          Get mental health help, find local support for low mood or anxiety, and see how the council works with the NHS to support adults with mental health conditions.
        </p>

        {/* If you need help now - URGENT CALLOUT */}
        <section className="mb-12">
          <div className="bg-red-50 border-l-4 border-red-600 p-8">
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
              <AlertTriangle size={28} className="text-red-600" />
              If you need help now
            </h2>
            <div className="space-y-3 text-gray-900">
              <p className="font-bold">
                If you are in immediate danger or someone else is, call 999.
              </p>
              <p>
                If you are having a mental health crisis and do not know what to do, call <strong>Mental Health Direct on 0800 995 1000</strong>. This is a free, 24/7 service provided by NELFT for Waltham Forest residents.
              </p>
              <p>
                If you need to talk to someone, call the <strong>Samaritans on 116 123</strong> — free, 24 hours a day, 7 days a week.
              </p>
              <p>
                If you prefer to text, text <strong>SHOUT to 85258</strong> for free, confidential support at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Where to start */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-6">Where to start</h2>
          
          <p className="text-gray-700 mb-6">
            Not all mental health difficulties need specialist services. Many people benefit from self-help resources, talking therapies, or support from local community organisations. The right starting point depends on your situation:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">I am struggling with low mood, stress, or anxiety</strong> — try our self-help resources or refer yourself for free talking therapy through Waltham Forest Talking Therapies.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">I need to speak to someone urgently</strong> — see our urgent support page for crisis helplines and services available day and night.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">I want to talk to a professional</strong> — find out how to access free NHS talking therapies, counselling, or other professional support.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">I have an ongoing mental health condition and need social care support</strong> — find out how the council works with NHS mental health services to support adults who need care.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D61F69] mt-1">•</span>
              <div>
                <strong className="text-gray-900">I want to find local support groups or community services</strong> — see our directory of local mental health support services in Waltham Forest.
              </div>
            </li>
          </ul>
        </section>

        {/* In this section - Card links */}
        <section className="mb-12 bg-gray-200 p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-[#D61F69] mb-8">In this section</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a
              href="#/adult-social-care/mental-health-wellbeing/urgent-mental-health-support"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Urgent mental health support</h3>
              <p className="text-gray-700 text-sm pr-12">Crisis helplines and services available if you or someone you know needs immediate help.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#/adult-social-care/mental-health-wellbeing/looking-after-your-mental-wellbeing"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Looking after your mental wellbeing</h3>
              <p className="text-gray-700 text-sm pr-12">Practical things you can do to support your mental health, and free online resources.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#/adult-social-care/mental-health-wellbeing/talking-therapies-and-professional-support"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Talking therapies and professional support</h3>
              <p className="text-gray-700 text-sm pr-12">How to access free NHS talking therapies, counselling, and other professional help in Waltham Forest.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="#/adult-social-care/mental-health-wellbeing/adult-social-care-and-mental-health"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Adult social care and mental health</h3>
              <p className="text-gray-700 text-sm pr-12">How the council works with NHS mental health services to support adults with ongoing mental health conditions.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Card 5 */}
            <a
              href="#/adult-social-care/mental-health-wellbeing/local-mental-health-support-services"
              className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block"
            >
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Local mental health support services</h3>
              <p className="text-gray-700 text-sm pr-12">Community organisations, support groups, and specialist services in Waltham Forest.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* Need help? */}
        <section className="mb-12 bg-gray-100 p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Need help?</h2>
          <p className="text-gray-700 mb-4">
            If you are not sure where to start, contact the Adult Social Care team. We can help you work out the best next step.
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
              <a href="#/adult-social-care/how-to-get-support" className="text-[#D61F69] hover:underline">
                How to get support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/being-carer" className="text-[#D61F69] hover:underline">
                Being a carer
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/live-independently-at-home" className="text-[#D61F69] hover:underline">
                Support at home
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D61F69] hover:underline">
                Alcohol, drugs, and smoking
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