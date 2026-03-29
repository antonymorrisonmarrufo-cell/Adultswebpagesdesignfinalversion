import { Link } from "react-router-dom";

const services = [
  { title: "Autism support", desc: "Information, diagnosis, support services, and local groups for autistic adults.", link: "/adult-social-care/autism-support" },
  { title: "Visual and hearing support", desc: "Sensory services, equipment, registration, and specialist support.", link: "/adult-social-care/visual-hearing" },
  { title: "Physical disabilities", desc: "Support services, equipment, adaptations, and personal assistance.", link: "/adult-social-care/physical-disabilities" },
  { title: "Long-term conditions", desc: "Managing long-term health conditions with support and self-management.", link: "/adult-social-care/long-term-conditions" },
  { title: "Work and disability", desc: "Employment support, Access to Work, supported employment, and volunteering.", link: "/adult-social-care/work-disability" },
  { title: "Power of attorney", desc: "Setting up lasting power of attorney, types, costs, and how to register.", link: "/adult-social-care/power-of-attorney" },
];

export default function SpecialistServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm mb-6">
          <Link to="/" className="text-wf-blue hover:text-wf-green">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/adult-social-care" className="text-wf-blue hover:text-wf-green">Adult Social Care</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Specialist services and conditions</span>
        </nav>

        <h1 className="text-5xl font-bold text-wf-green mb-6">Specialist services and conditions</h1>
        <p className="text-lg text-gray-700 mb-8">
          Find information and support for specific conditions and specialist services available in Waltham Forest.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.link}
              to={service.link}
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-wf-green hover:shadow-md transition-all no-underline"
            >
              <h2 className="text-lg font-semibold text-wf-pink mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
      </div>
    </div>
  );
}
