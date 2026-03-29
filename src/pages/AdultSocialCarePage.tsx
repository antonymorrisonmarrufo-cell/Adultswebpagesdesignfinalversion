import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const heroCards = [
  {
    title: "Get a care assessment",
    image: "/Images/care-assessment.jpg",
    link: "/how-to-get-support/request-assessment",
    alt: "Carer supporting an elderly person",
  },
  {
    title: "Report abuse or neglect of an adult",
    image: "/Images/report-abuse.jpg",
    link: "/report-abuse",
    alt: "Concerned elderly person",
  },
  {
    title: "Apply for a blue badge",
    image: "/Images/blue-badge.jpg",
    link: "/transport/blue-badge",
    alt: "Blue badge holders only sign",
  },
];

const actionCards = [
  {
    title: "Support for carers",
    desc: "If you look after a family member, partner or friend, find out about carer's assessments, respite, financial help and local support.",
    link: "/carers",
  },
  {
    title: "Information for care professionals",
    desc: "Access referral tools, professional guidance, invoicing, details, and contact information for our brokerage and commissioning teams.",
    link: "/information-for-professionals",
  },
];

const topics = [
  { title: "How adult social care works", desc: "Find out what adult social care is, who it is for, how to get help, and what you may need to pay.", link: "/how-adult-social-care-works" },
  { title: "How to get support", desc: "Find out how to apply for adult social care support, from making first contact through to getting a care and support plan.", link: "/how-to-get-support" },
  { title: "Live independently at home", desc: "Get equipment and assistive technology, home adaptations, falls prevention, telecare and help at home.", link: "/live-independently" },
  { title: "Care homes and supported living", desc: "Find out about options if you need more support, including supported living, Shared Lives and care homes.", link: "/care-homes" },
  { title: "Paying for your care", desc: "Find out how care is paid for, what you may need to contribute, and how financial assessments work, personal budgets and direct payments work or pay your care invoice.", link: "/paying-for-care" },
  { title: "Report abuse or neglect", desc: "Report concerns about an adult at risk of abuse or neglect and find out what happens next.", link: "/safeguarding" },
  { title: "Mental health and wellbeing", desc: "Get mental health help, find local support for low mood or anxiety, and see how we work with the NHS.", link: "/mental-health" },
  { title: "Dementia, Disabilities and specialist support", desc: "Support for adults with physical disabilities, sight or hearing loss, learning disabilities, autism, dementia and other long-term health conditions.", link: "/dementia" },
  { title: "Travel and transport", desc: "Find help with travel, including Blue Badge, Freedom Pass and community transport.", link: "/transport" },
];

const bottomLinks = [
  { title: "Understand your rights", link: "/understand-your-rights" },
  { title: "Our policies", link: "/our-policies" },
  { title: "Complaints, compliments and help shape our future services", link: "/complaints-compliments" },
];

export default function AdultSocialCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - White background */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00635C] mb-4">Adult Social Care</h1>
          <p className="text-base text-[#505a5f] mb-8 max-w-3xl">
            Find information and advice about adult social care, request support, report a concern, and discover services
            available to you or someone you care for in Waltham Forest.
          </p>

          {/* Three Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {heroCards.map((card) => (
              <Link
                key={card.link}
                to={card.link}
                className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow no-underline group"
              >
                <div className="aspect-[4/3] bg-[#e0e0e0] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white">
                  <p className="text-sm font-semibold text-[#0b0c0c] group-hover:text-[#00635C] transition-colors">
                    {card.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Two Pink-Bordered Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {actionCards.map((card) => (
              <Link
                key={card.link}
                to={card.link}
                className="flex items-center justify-between border-2 border-[#D61F69] rounded-lg p-5 bg-white hover:bg-[#fce8f0] transition-colors no-underline group"
              >
                <div className="flex-1 pr-4">
                  <h2 className="text-lg font-bold text-[#D61F69] mb-2">{card.title}</h2>
                  <p className="text-sm text-[#505a5f]">{card.desc}</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center group-hover:bg-[#b81a5a] transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Section - Gray background */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-6">Topics in this section</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {topics.map((topic) => (
              <Link
                key={topic.link}
                to={topic.link}
                className="block bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group"
              >
                <h3 className="text-base font-bold text-[#D61F69] mb-2">{topic.title}</h3>
                <p className="text-sm text-[#505a5f] mb-4">{topic.desc}</p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-[#D61F69] flex items-center justify-center group-hover:bg-[#b81a5a] transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Pink Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {bottomLinks.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="block bg-[#D61F69] text-white font-semibold text-center px-5 py-4 rounded-lg hover:bg-[#b81a5a] transition-colors no-underline text-sm"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Banner */}
      <div className="bg-[#00635C] text-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <p className="text-sm">We are improving our website and value your feedback to better meet your needs</p>
          <button className="text-sm text-white/80 hover:text-white flex items-center gap-1">
            <span>Hide</span>
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-[#0b0c0c] mb-4">Feedback</h2>
          <p className="text-[#505a5f]">
            Send feedback directly to the content team using our website feedback form. You can also join our user
            research group to receive invites to activities and surveys to help shape future improvements to the site.
          </p>
        </div>
      </div>

      <p className="text-sm text-[#505a5f] max-w-5xl mx-auto px-4 py-4">Last updated: March 2026</p>
    </div>
  );
}
