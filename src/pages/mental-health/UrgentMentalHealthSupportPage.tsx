import { AlertTriangle } from 'lucide-react';

export default function UrgentMentalHealthSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/mental-health-wellbeing" className="hover:underline">Mental health and wellbeing</a>
          <span className="mx-1">&gt;</span>
          <span>Urgent mental health support</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Urgent mental health support
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you or someone you know is in a mental health crisis, help is available now. You do not need to wait for a referral or an appointment.
        </p>

        {/* In an emergency */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">In an emergency</h2>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-4">
            <p className="text-gray-900 font-bold flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-600" />
              If you or someone else is in immediate danger, call 999.
            </p>
          </div>
          <p className="text-gray-700">
            If you are at A&E, tell the staff that you are experiencing a mental health crisis. They will make sure you see someone who can help.
          </p>
        </section>

        {/* Mental Health Direct */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Mental Health Direct</h2>
          <p className="text-gray-700 mb-4">
            If you are in a crisis and do not know what to do, call <strong>Mental Health Direct on 0800 995 1000</strong>. This is a free, 24/7 helpline provided by NELFT (North East London NHS Foundation Trust) for people living in Waltham Forest. You can call at any time of day or night.
          </p>
          <p className="text-gray-700">
            The team can talk you through what you are experiencing, help you decide what to do next, and connect you to the right service.
          </p>
        </section>

        {/* Samaritans */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Samaritans</h2>
          <p className="text-gray-700 mb-4">
            If you need to talk to someone, call the Samaritans on <strong>116 123</strong>. The call is free and the service is available 24 hours a day, 7 days a week. You do not have to be suicidal to call — you can talk about anything that is troubling you.
          </p>
          <p className="text-gray-700">
            You can also email <a href="mailto:jo@samaritans.org" className="text-[#bf3688] hover:underline">jo@samaritans.org</a> if you prefer to write.
          </p>
        </section>

        {/* Shout */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Shout</h2>
          <p className="text-gray-700">
            If you prefer to text, text <strong>SHOUT to 85258</strong>. Shout is a free, confidential, 24/7 text messaging support service for anyone who is struggling to cope. You will be connected to a trained volunteer.
          </p>
        </section>

        {/* NHS 111 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">NHS 111</h2>
          <p className="text-gray-700">
            If you need urgent medical advice but it is not an emergency, call <strong>111</strong>. You can also go to <a href="https://111.nhs.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] hover:underline">111.nhs.uk</a>. NHS 111 can help you access mental health crisis services in your area.
          </p>
        </section>

        {/* If you are worried about someone else */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">If you are worried about someone else</h2>
          <p className="text-gray-700">
            If you are concerned that someone you know is having a mental health crisis, you can call Mental Health Direct on 0800 995 1000 for advice on how to help them. If they are in immediate danger, call 999.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/talking-therapies-and-professional-support" className="text-[#bf3688] hover:underline">
                Talking therapies and professional support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/adult-social-care-and-mental-health" className="text-[#bf3688] hover:underline">
                Adult social care and mental health
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#bf3688] hover:underline">
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
