import { ArrowRight } from 'lucide-react';

export default function TalkingTherapiesProfessionalSupportPage() {
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
          <span>Talking therapies and professional support</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">
          Talking therapies and professional support
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          If you are struggling with low mood, anxiety, stress, or other mental health difficulties, free professional support is available. You do not always need a GP referral.
        </p>

        {/* Waltham Forest Talking Therapies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Waltham Forest Talking Therapies</h2>
          <p className="text-gray-700 mb-4">
            Waltham Forest Talking Therapies is a free NHS service for adults living in the borough. It offers a range of therapies including cognitive behavioural therapy (CBT), counselling, and guided self-help for common mental health conditions such as depression, anxiety, and stress.
          </p>
          <p className="text-gray-700 mb-6">
            You can refer yourself directly — you do not need a GP referral. Your GP can also refer you if you prefer.
          </p>
          <a
            href="https://talkingtherapies.nelft.nhs.uk/waltham-forest-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a02d73] transition-colors"
          >
            Refer yourself to Waltham Forest Talking Therapies
            <ArrowRight size={18} />
          </a>
        </section>

        {/* What to expect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">What to expect</h2>
          <p className="text-gray-700 mb-4">
            After you refer yourself or your GP refers you, the service will contact you to arrange an initial assessment. This is a conversation about what you are experiencing and what kind of support might help.
          </p>
          <p className="text-gray-700">
            You may be offered individual therapy, group therapy, or online support, depending on your needs. There may be a wait before your treatment starts, but the team will keep you informed.
          </p>
        </section>

        {/* Adult Early Help Service */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Adult Early Help Service</h2>
          <p className="text-gray-700 mb-4">
            If you are going through a difficult life event — such as a bereavement, relationship breakdown, job loss, or health diagnosis — and it is affecting your daily life, the council's Adult Early Help Service may be able to help.
          </p>
          <p className="text-gray-700">
            A link worker can support you to get back on track by helping you identify your goals and connecting you to local services. This is not a clinical mental health service, but it can make a real difference when you are going through a tough time.
          </p>
        </section>

        {/* Through your GP */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Through your GP</h2>
          <p className="text-gray-700 mb-4">
            Your GP can discuss your mental health with you and may offer:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A referral to talking therapies (or you can self-refer directly)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>Medication if appropriate</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#bf3688] mt-1">•</span>
              <span>A referral to specialist mental health services if your needs are more complex</span>
            </li>
          </ul>
          <p className="text-gray-700">
            If you are not registered with a GP, you can register using the NHS GP registration portal at <a href="https://www.nhs.uk" target="_blank" rel="noopener noreferrer" className="text-[#bf3688] hover:underline">nhs.uk</a>.
          </p>
        </section>

        {/* Private therapy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Private therapy</h2>
          <p className="text-gray-700">
            If you prefer, you can pay for private therapy. A one-hour session typically costs between £50 and £100. Make sure any therapist you choose is registered with an approved professional body, such as the BACP (British Association for Counselling and Psychotherapy), the UKCP (UK Council for Psychotherapy), or the BPS (British Psychological Society).
          </p>
        </section>

        {/* Other places that offer therapy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Other places that offer therapy</h2>
          <p className="text-gray-700">
            Some employers offer counselling through employee assistance programmes. Many colleges and universities provide free therapy to students. Local charities also offer low-cost or free therapy for specific issues, including Cruse for bereavement, Mind for mental health, and Relate for relationship difficulties.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/urgent-mental-health-support" className="text-[#bf3688] hover:underline">
                Urgent mental health support
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/looking-after-your-mental-wellbeing" className="text-[#bf3688] hover:underline">
                Looking after your mental wellbeing
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/mental-health-wellbeing/adult-social-care-and-mental-health" className="text-[#bf3688] hover:underline">
                Adult social care and mental health
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
