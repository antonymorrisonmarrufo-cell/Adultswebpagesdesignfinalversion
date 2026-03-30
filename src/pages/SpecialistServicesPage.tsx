import { Link } from "react-router-dom";

const services = [
  { title: "Dementia support", desc: "Understand symptoms, who can help, and how to get an assessment and ongoing support.", link: "/adult-social-care/specialist-services/dementia-support" },
  { title: "Learning disabilities support", desc: "Get help from adult social care and NHS partners if you have a learning disability.", link: "/adult-social-care/learning-disability-support" },
  { title: "Autism support", desc: "Information, diagnosis, support services, and local groups for autistic adults.", link: "/adult-social-care/specialist-services/autism-support" },
  { title: "Visual and hearing support", desc: "Sensory services, equipment, registration, and specialist support.", link: "/adult-social-care/specialist-services/visual-and-hearing-impairments" },
  { title: "Physical disabilities", desc: "Support services, equipment, adaptations, and personal assistance.", link: "/adult-social-care/specialist-services/physical-disabilities" },
  { title: "Long-term conditions", desc: "Managing long-term health conditions with support and self-management.", link: "/adult-social-care/specialist-services/long-term-conditions" },
  { title: "Work and disability", desc: "Employment support, Access to Work, supported employment, and volunteering.", link: "/adult-social-care/work-and-disability" },
  { title: "Power of attorney", desc: "Setting up lasting power of attorney, types, costs, and how to register.", link: "/adult-social-care/specialist-services/power-attorney-deputyship-and-appointeeship" },
];

export default function SpecialistServicesPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav className="text-sm mb-6">
          <Link to="/" className="text-wf-blue hover:text-wf-green">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/adult-social-care" className="text-wf-blue hover:text-wf-green">Adult Social Care</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Specialist services and conditions</span>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20] mb-6">Specialist services and conditions</h1>
          <p className="text-lg text-gray-700 mb-8">
          Find information and support for specific conditions and specialist services available in Waltham Forest.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
          <Link
          key={service.link}
          to={service.link}
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">{service.title}</h3>
          <p className="text-sm text-[#231F20] flex-1">{service.desc}</p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>
          ))}
          </div>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
