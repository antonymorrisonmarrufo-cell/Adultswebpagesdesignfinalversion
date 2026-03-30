import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const heroCards = [
  {
    title: "Get a care assessment",
    image: "/Images/care-assessment.jpg",
    href: "https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b",
    alt: "Carer supporting an elderly person",
  },
  {
    title: "Report abuse or neglect of an adult",
    image: "/Images/report-abuse.jpg",
    href: "https://safeguardingapp.vercel.app/",
    alt: "Concerned elderly person",
  },
  {
    title: "Apply for a blue badge",
    image: "/Images/blue-badge.jpg",
    href: "https://www.gov.uk/apply-blue-badge",
    alt: "Blue badge holders only sign",
  },
];

const actionCards = [
  {
    title: "Support for carers",
    desc: "If you look after a family member, partner or friend, find out about carer's assessments, respite, financial help and local support.",
    link: "/adult-social-care/being-carer",
  },
  {
    title: "Information for care professionals",
    desc: "Access referral tools, professional guidance, invoicing, details, and contact information for our brokerage and commissioning teams.",
    link: "/adult-social-care/information-for-professionals",
  },
];

const topics = [
  { title: "How adult social care works", desc: "Find out what adult social care is, who it is for, how to get help, and what you may need to pay.", link: "/adult-social-care/how-adult-social-care-works" },
  { title: "How to get support", desc: "Find out how to apply for adult social care support, from making first contact through to getting a care and support plan.", link: "/adult-social-care/how-to-get-support" },
  { title: "Live independently at home", desc: "Get equipment and assistive technology, home adaptations, falls prevention, telecare and help at home.", link: "/adult-social-care/live-independently-at-home" },
  { title: "Care homes and supported living", desc: "Find out about options if you need more support, including supported living, Shared Lives and care homes.", link: "/adult-social-care/care-homes-and-supported-living" },
  { title: "Paying for your care", desc: "Find out how care is paid for, what you may need to contribute, and how financial assessments work, personal budgets and direct payments work or pay your care invoice.", link: "/adult-social-care/paying-for-care" },
  { title: "Report abuse or neglect", desc: "Report concerns about an adult at risk of abuse or neglect and find out what happens next.", link: "/adult-social-care/protecting-adults-at-risk" },
  { title: "Mental health and wellbeing", desc: "Get mental health help, find local support for low mood or anxiety, and see how we work with the NHS.", link: "/adult-social-care/mental-health-wellbeing" },
  { title: "Dementia, Disabilities and specialist support", desc: "Support for adults with physical disabilities, sight or hearing loss, learning disabilities, autism, dementia and other long-term health conditions.", link: "/adult-social-care/specialist-services" },
  { title: "Travel and transport", desc: "Find help with travel, including Blue Badge, Freedom Pass and community transport.", link: "/adult-social-care/travel-and-transport" },
];

const bottomLinks = [
  { title: "Understand your rights", link: "/adult-social-care/understand-your-rights" },
  { title: "Our policies", link: "/adult-social-care/our-policies" },
  { title: "Complaints, compliments and help shape our future services", link: "/adult-social-care/complaints-compliments" },
];

export default function AdultSocialCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - White background */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#231F20] mb-4">Adult Social Care</h1>
          <p className="text-base text-[#231F20] mb-8 max-w-3xl">
            Find information and advice about adult social care, request support, report a concern, and discover services
            available to you or someone you care for in Waltham Forest.
          </p>

          {/* Three Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {heroCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow no-underline group"
              >
                <div className="aspect-[4/3] bg-[#e0e0e0] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white text-center">
                  <p className="text-sm font-semibold text-[#231F20] group-hover:text-[#004E3E] transition-colors">
                    {card.title}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Two Pink-Bordered Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {actionCards.map((card) => (
              <Link
                key={card.link}
                to={card.link}
                className="flex items-center justify-between border-2 border-[#bf3688] rounded-lg p-5 bg-white hover:bg-[#f5e0ee] transition-colors no-underline group"
              >
                <div className="flex-1 pr-4">
                  <h2 className="text-lg font-bold text-[#bf3688] mb-2">{card.title}</h2>
                  <p className="text-sm text-[#231F20]">{card.desc}</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
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
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Topics in this section</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {topics.map((topic) => (
              <Link
                key={topic.link}
                to={topic.link}
                className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[200px]"
              >
                <h3 className="text-base font-bold text-[#bf3688] mb-2">{topic.title}</h3>
                <p className="text-sm text-[#231F20] flex-1">{topic.desc}</p>
                <div className="flex justify-end mt-4">
                  <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
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
                className="flex items-center justify-center bg-[#bf3688] text-white font-semibold text-center px-5 py-5 rounded-lg hover:bg-[#a02d73] transition-colors no-underline text-sm min-h-[72px]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-[#505a5f] max-w-5xl mx-auto px-4 py-4">Last updated: March 2026</p>
    </div>
  );
}
