import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import FeedbackBanner from '../../components/FeedbackBanner';
import FeedbackSection from '../../components/FeedbackSection';
import HelpOnlineForms from '../../components/transport/HelpOnlineForms';

const eligibilityPoints = [
  'cares for or assists people who need a Blue Badge',
  'transports people who need a Blue Badge',
];

const additionalPoints = [
  'the organisation must be responsible for the care and transportation of disabled people',
  'it must be transporting several disabled people who would individually qualify for a Blue Badge',
  'if you have fewer than five people, individual Blue Badges may be more appropriate',
  'the vehicle must be registered at the organisation\'s address and licensed under the Disabled Passenger Vehicle taxation class',
];

export default function BlueBadgeOrgsPage() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/travel-and-transport" className="hover:underline">Travel and transport</a>
          <span className="mx-1">&gt;</span>
          <span>Blue Badge for organisations</span>
        </nav>

        <div className="bg-white border border-gray-300 p-8 md:p-12 shadow-sm max-w-4xl">
          {/* H1 */}
          <h1 className="text-5xl text-[#231F20] mb-3 font-bold leading-tight">
            Blue Badge for organisations
          </h1>

          {/* Standfirst */}
          <p className="text-gray-700 max-w-4xl mb-6 text-lg font-semibold">
            Apply for or renew an organisation Blue Badge if you regularly transport people who would qualify for a Blue Badge.
          </p>

          {/* Primary CTA */}
          <div className="mb-10">
            <a
              href="https://www.gov.uk/apply-blue-badge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
            >
              Apply for or renew a Blue Badge
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="max-w-3xl space-y-0">

            {/* Which organisations can apply */}
            <div className="pb-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Which organisations can apply?</h2>
              <p className="text-gray-700 mb-4 font-semibold">
                An organisation may be eligible for a badge, or multiple badges, if it both:
              </p>
              <ul className="space-y-2 mb-6">
                {eligibilityPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bf3688] mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The council will decide whether the organisation has a clear need for an organisational badge rather than using the individual badges of the people it transports.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                An organisational badge must only be displayed when someone who would be eligible for a Blue Badge in their own right is being transported.
              </p>
              <div className="bg-[#fcedf3] border-2 border-[#003078] bg-[#d7f8ff] px-5 py-4 mb-6 shadow-sm">
                <p className="text-gray-900 text-sm">
                  <strong>It is a criminal offence to use a Blue Badge without the disabled person being present.</strong>
                </p>
              </div>

              <h3 className="font-bold text-gray-900 mb-3">Additional eligibility requirements:</h3>
              <ul className="space-y-2">
                {additionalPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-200" />

            {/* Contact box */}
            <div className="py-10">
              <h2 className="text-[#bf3688] font-bold text-2xl mb-4">Contact details</h2>
              <div className="bg-white border border-gray-300 p-6 space-y-4 shadow-sm">
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <MapPin className="text-[#bf3688] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Mobility Team — Postal address only</p>
                    <p>Waltham Forest Council</p>
                    <p>Town Hall</p>
                    <p>Forest Road</p>
                    <p>Walthamstow</p>
                    <p>E17 4JF</p>
                    <p className="mt-2 text-gray-500 italic font-medium">We are unable to see personal callers.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone className="text-[#bf3688] flex-shrink-0" size={18} />
                  <span className="font-semibold text-gray-900">
                    Telephone:{' '}
                    <a href="tel:02084963130" className="text-[#bf3688] underline hover:no-underline font-bold">
                      020 8496 3130
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail className="text-[#bf3688] flex-shrink-0" size={18} />
                  <a href="mailto:walthamforest.mobilityservices@necsws.com" className="text-[#bf3688] underline hover:no-underline font-bold">
                    walthamforest.mobilityservices@necsws.com
                  </a>
                </div>
              </div>
            </div>

            {/* Help with online forms */}
            <HelpOnlineForms />

            {/* Related link */}
            <div className="pt-10">
              <a
                href="https://www.walthamforest.gov.uk/parking-roads-and-travel/blue-badges-and-disabled-bays/apply-disabled-parking-bay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 font-bold hover:bg-[#a02d73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf3688] focus-visible:ring-offset-2 shadow-sm"
              >
                Apply for a disabled parking bay
                <ArrowRight size={18} />
              </a>
            </div>

          </div>

          {/* Metadata */}
          <div className="max-w-3xl mt-14 pt-6 border-t border-gray-200 text-sm text-gray-500 space-y-1">
            <p>Last updated: 27 March 2026</p>
            <p>Next review: 27 March 2027</p>
          </div>
        </div>

      </section>
    </div>

      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}