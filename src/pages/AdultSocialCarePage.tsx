import { Link } from "react-router-dom";

const quickActions = [
  { label: "Check your situation online", link: "/how-to-get-support/check-situation-online", primary: true },
  { label: "Find local support", link: "/live-independently/social-prescribing", primary: false },
  { label: "Report a concern", link: "/report-abuse", primary: false },
];

const sections = [
  { title: "Live independently", desc: "Equipment, home adaptations, telecare, and other help to stay in your home.", link: "/live-independently" },
  { title: "Being a carer", desc: "Support, assessments, and services for unpaid carers in Waltham Forest.", link: "/carers" },
  { title: "How to get support", desc: "Find out how to access support, request an assessment, and get a care plan.", link: "/how-to-get-support" },
  { title: "How adult social care works", desc: "Learn about adult social care, who can get help, and how to ask for support.", link: "/how-adult-social-care-works" },
  { title: "Dementia support", desc: "Memory services, the Dementia Hub, activities, and support for carers.", link: "/dementia" },
  { title: "Learning disability support", desc: "Ask for support, housing options, preparing for adulthood, and easy read resources.", link: "/learning-disability" },
  { title: "Mental health and wellbeing", desc: "Urgent support, talking therapies, local services, and self-help resources.", link: "/mental-health" },
  { title: "Housing and care homes", desc: "Supported living, extra care housing, sheltered housing, and care homes.", link: "/care-homes" },
  { title: "Paying for your care", desc: "How costs are worked out, financial assessments, direct payments, and benefits.", link: "/paying-for-care" },
  { title: "Safeguarding adults", desc: "Report abuse or neglect, types of abuse, and what happens after a report.", link: "/safeguarding" },
  { title: "Travel and transport", desc: "Blue Badge, Freedom Pass, Taxicard, and other transport support.", link: "/transport" },
  { title: "Understand your rights", desc: "Your rights under the Care Act, advocacy, mental capacity, and challenging decisions.", link: "/understand-your-rights" },
  { title: "Complaints, compliments and feedback", desc: "Make a complaint, send a compliment, or help shape our services.", link: "/complaints-compliments" },
  { title: "Our policies", desc: "Charging policies, safeguarding reports, privacy notices, and consultations.", link: "/our-policies" },
  { title: "Information for professionals", desc: "Referrals, safeguarding guidance, practice resources, and key contacts.", link: "/information-for-professionals" },
];

export default function AdultSocialCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#00635C] text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Adult Social Care</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Find information and support for adults who need help with daily living, their carers, and families in Waltham Forest.
          </p>
          <p className="text-white/80 mb-6 text-sm">
            Many people find the right support through community services and local groups — without needing a formal assessment.
          </p>
          <div className="flex flex-wrap gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.link}
                to={action.link}
                className={`inline-block font-semibold px-5 py-3 rounded-lg transition no-underline text-sm md:text-base ${
                  action.primary
                    ? "bg-[#D61F69] text-white hover:bg-[#b81a5a]"
                    : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
                }`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-[#00635C] mb-6">Browse by topic</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.link}
                to={section.link}
                className="block bg-white rounded-lg p-5 shadow-sm hover:shadow-md border-l-4 border-[#D61F69] transition-all no-underline group"
              >
                <h3 className="text-base font-semibold text-[#0b0c0c] mb-2 group-hover:text-[#00635C] transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-[#505a5f]">{section.desc}</p>
              </Link>
            ))}
          </div>

          {/* Safeguarding Banner */}
          <div className="mt-8 bg-[#D61F69] rounded-lg p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold mb-1">Worried about an adult?</h2>
                <p className="text-white/90">If you think someone is being abused or neglected, report it now.</p>
              </div>
              <Link
                to="/report-abuse"
                className="inline-block bg-white text-[#D61F69] font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition no-underline text-center"
              >
                Report a concern
              </Link>
            </div>
          </div>

          <p className="text-sm text-[#505a5f] mt-8">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
