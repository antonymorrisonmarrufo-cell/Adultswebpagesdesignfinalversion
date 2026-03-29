import { Link } from "react-router-dom";

const sections = [
  { title: "How adult social care works", desc: "Learn about adult social care, who can get help, and how to ask for support.", link: "/adult-social-care/how-adult-social-care-works" },
  { title: "How to get support", desc: "Find out how to access support, request an assessment, and get a care plan.", link: "/adult-social-care/how-to-get-support" },
  { title: "Live independently", desc: "Equipment, home adaptations, telecare, and other help to stay in your home.", link: "/adult-social-care/live-independently" },
  { title: "Being a carer", desc: "Support, assessments, and services for unpaid carers in Waltham Forest.", link: "/adult-social-care/being-a-carer" },
  { title: "Dementia support", desc: "Memory services, the Dementia Hub, activities, and support for carers.", link: "/adult-social-care/dementia-support" },
  { title: "Learning disability support", desc: "Ask for support, housing options, preparing for adulthood, and easy read resources.", link: "/adult-social-care/learning-disability" },
  { title: "Mental health and wellbeing", desc: "Urgent support, talking therapies, local services, and self-help resources.", link: "/adult-social-care/mental-health" },
  { title: "Housing and care homes", desc: "Supported living, extra care housing, sheltered housing, and care homes.", link: "/adult-social-care/care-homes" },
  { title: "Paying for your care", desc: "How costs are worked out, financial assessments, direct payments, and benefits.", link: "/adult-social-care/paying-for-care" },
  { title: "Safeguarding adults", desc: "Report abuse or neglect, types of abuse, and what happens after a report.", link: "/adult-social-care/safeguarding" },
  { title: "Travel and transport", desc: "Blue Badge, Freedom Pass, Taxicard, and other transport support.", link: "/adult-social-care/transport" },
  { title: "Understand your rights", desc: "Your rights under the Care Act, advocacy, mental capacity, and challenging decisions.", link: "/adult-social-care/understand-your-rights" },
  { title: "Complaints, compliments and feedback", desc: "Make a complaint, send a compliment, or help shape our services.", link: "/adult-social-care/complaints-compliments" },
  { title: "Our policies", desc: "Charging policies, safeguarding reports, privacy notices, and consultations.", link: "/adult-social-care/our-policies" },
  { title: "Information for professionals", desc: "Referrals, safeguarding guidance, practice resources, and key contacts.", link: "/adult-social-care/information-for-professionals" },
];

export default function AdultSocialCarePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm mb-6">
          <Link to="/" className="text-wf-blue hover:text-wf-green">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Adult Social Care</span>
        </nav>

        <h1 className="text-5xl font-bold text-wf-green mb-6">Adult Social Care</h1>
        <p className="text-lg text-gray-700 mb-8">
          Find information and support for adults who need help with daily living, their carers, and families in Waltham Forest.
        </p>

        <div className="bg-wf-pink-light border-l-4 border-wf-pink p-4 rounded mb-8">
          <p className="font-semibold text-wf-dark">Need help now?</p>
          <p className="text-gray-700">Call our Adult Social Care team on <strong>020 8496 3130</strong> (Monday to Friday, 9am to 5pm). For emergencies outside these hours, call <strong>020 8496 3000</strong>.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.link}
              to={section.link}
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-wf-green hover:shadow-md transition-all no-underline"
            >
              <h2 className="text-lg font-semibold text-wf-pink mb-2">{section.title}</h2>
              <p className="text-sm text-gray-600">{section.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-wf-pink mb-3">Report a safeguarding concern</h2>
          <p className="text-gray-700 mb-4">If you think an adult is being abused or neglected, or is at risk of abuse, report it immediately.</p>
          <Link
            to="/report-abuse"
            className="inline-block bg-wf-pink text-white font-semibold px-6 py-3 rounded hover:bg-wf-pink/90 transition no-underline"
          >
            Report a concern
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
      </div>
    </div>
  );
}
