import { Link } from "react-router-dom";

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

        <div className="bg-green-50 border-l-4 border-wf-green p-5 rounded mb-4">
          <p className="font-semibold text-wf-dark mb-2">You might not need a formal assessment</p>
          <p className="text-gray-700 mb-3">
            Many people find the right support through community services, local groups, equipment, and practical help. Use our online self-assessment tool or browse the options below.
          </p>
          <Link
            to="/how-to-get-support/check-situation-online"
            className="inline-block bg-wf-green text-white font-semibold px-5 py-2.5 rounded hover:bg-wf-green/90 transition no-underline"
          >
            Check your situation online
          </Link>
        </div>

        <div className="bg-gray-100 border border-gray-200 p-4 rounded mb-8 text-sm text-gray-700">
          <p>
            <strong>Need to speak to someone?</strong> Call our Adult Social Care team on{" "}
            <strong>020 8496 3130</strong> (Monday to Friday, 9am to 5pm). For emergencies outside these hours, call{" "}
            <strong>020 8496 3000</strong>.
          </p>
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
            to="/safeguarding/report-abuse"
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
