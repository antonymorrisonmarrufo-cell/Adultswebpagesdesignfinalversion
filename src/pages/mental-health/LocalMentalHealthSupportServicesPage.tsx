import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Mental health and wellbeing", to: "/mental-health" },
  { title: "Talking therapies and professional support", to: "/mental-health/talking-therapies-professional-support" },
  { title: "Urgent mental health support", to: "/mental-health/urgent-support" },
];

export default function LocalMentalHealthSupportServicesPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link to="/mental-health" className="text-wf-blue underline hover:text-wf-green">Mental health and wellbeing</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Local mental health support services</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Local mental health support services
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      <section>
      <p className="text-wf-dark leading-relaxed">
      A range of community organisations in Waltham Forest provide mental health
      support, from peer groups and social activities to specialist services.
      Many of these are free and do not require a referral.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Mind in Waltham Forest</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Mind in Waltham Forest is a local charity that provides a range of mental
      health services, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Information and advice on mental health</li>
      <li>Peer support groups for people with lived experience</li>
      <li>Wellbeing workshops and courses</li>
      <li>Employment and volunteering support</li>
      <li>Advocacy services</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can contact Mind in Waltham Forest directly or drop in to their
      offices during opening hours.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">NELFT community services</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      NELFT (North East London NHS Foundation Trust) provides a range of community
      mental health services in Waltham Forest, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Community mental health teams for people with severe mental illness</li>
      <li>Early intervention in psychosis service</li>
      <li>Perinatal mental health team for new and expectant parents</li>
      <li>Older adults mental health team</li>
      <li>Rehabilitation and recovery services</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Most NELFT services require a referral from your GP or another health
      professional.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Peer support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Peer support brings together people with shared experiences to help each
      other. In Waltham Forest, peer support is available through:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Hearing Voices groups</li>
      <li>Depression and anxiety support groups</li>
      <li>Bipolar support groups</li>
      <li>Dual diagnosis groups (mental health and substance use)</li>
      <li>Carer support groups for those supporting someone with mental illness</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Recovery college</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Recovery College offers free educational courses designed to help people
      develop skills and knowledge to manage their mental health and work towards
      personal recovery goals. Courses are co-produced and co-delivered by people
      with lived experience of mental health conditions alongside professionals.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Topics include managing anxiety, building self-esteem, understanding
      medication, mindfulness and creative writing. Courses are open to anyone
      aged 18 or over, including carers and staff.
      </p>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For help finding local mental health services, contact our Adult Social
      Care team.
      </p>
      <p className="mt-3 text-sm font-semibold text-wf-dark">
      Telephone:{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </p>
      <p className="mt-1 text-sm text-wf-gray">
      Monday to Friday, 9am to 5pm (excluding bank holidays)
      </p>
      </section>
      </div>
      </div>

      {/* Related pages */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="pt-8">
      <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
      <ul className="mt-4 space-y-2">
      {relatedPages.map((page) => (
      <li key={page.to}>
      <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
      {page.title}
      </Link>
      </li>
      ))}
      </ul>
      </div>
      </div>

      {/* Last updated */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <p className="text-xs text-wf-gray">Last updated: March 2026</p>
      </div>
        </div>
      </div>
    </div>
  );
}