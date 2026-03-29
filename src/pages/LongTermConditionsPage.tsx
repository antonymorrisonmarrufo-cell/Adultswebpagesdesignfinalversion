import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "Live independently", to: "/live-independently" },
  { title: "Equipment and assistive technology", to: "/live-independently/equipment" },
  { title: "Support for carers", to: "/carers/support" },
  { title: "Physical disabilities support", to: "/physical-disabilities" },
];

export default function LongTermConditionsPage() {
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
      <li>
      <span className="font-medium text-wf-dark">Long-term conditions</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Long-term conditions
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* Intro */}
      <section>
      <p className="text-wf-dark leading-relaxed">
      A long-term condition (also called a chronic condition) is a health
      problem that cannot be cured but can be managed with medication,
      therapy and other support. Common long-term conditions include
      diabetes, heart disease, arthritis, COPD, multiple sclerosis and
      epilepsy. In Waltham Forest, we work with the NHS and voluntary
      organisations to help you manage your condition and live well.
      </p>
      </section>

      {/* Self-management support */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Self-management support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Self-management means taking an active role in looking after your own
      health. Research shows that people who are confident in managing
      their condition have better outcomes and a higher quality of life.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We can support you to self-manage by providing:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Information about your condition and how to manage it</li>
      <li>Help to set personal health goals and action plans</li>
      <li>Access to structured education programmes</li>
      <li>Signposting to peer support groups</li>
      <li>Support with healthy eating, physical activity and emotional wellbeing</li>
      <li>Advice on medication management</li>
      </ul>
      </section>

      {/* Expert Patient Programme */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Expert Patient Programme</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Expert Patient Programme (EPP) is a free course for anyone living
      with a long-term health condition. The course is led by people who
      themselves have a long-term condition and understand the challenges
      involved.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Over six weekly sessions, the programme covers:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Dealing with pain, tiredness and difficult emotions</li>
      <li>Relaxation techniques and managing stress</li>
      <li>Healthy eating and exercise</li>
      <li>Communicating effectively with healthcare professionals</li>
      <li>Goal setting and problem solving</li>
      <li>Building confidence in managing your condition</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      To join the next course in Waltham Forest, contact our Adult Social
      Care team or ask your GP for a referral.
      </p>
      </section>

      {/* Condition-specific support */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Condition-specific support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      In addition to general self-management support, specialist services
      and organisations are available for specific conditions:
      </p>

      <h3 className="mt-6 text-lg font-semibold text-wf-dark">Diabetes</h3>
      <p className="mt-2 text-wf-dark leading-relaxed">
      The local diabetes service provides structured education, blood sugar
      monitoring support and advice on diet and exercise. Diabetes UK
      offers further information at{" "}
      <a
      href="https://www.diabetes.org.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      diabetes.org.uk
      </a>{" "}
      or call their helpline on 0345 123 2399.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-wf-dark">COPD and respiratory conditions</h3>
      <p className="mt-2 text-wf-dark leading-relaxed">
      Pulmonary rehabilitation programmes are available through the NHS to
      help you manage breathlessness and improve your fitness. The British
      Lung Foundation helpline is available on 0300 003 0555 or visit{" "}
      <a
      href="https://www.blf.org.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      blf.org.uk
      </a>
      .
      </p>

      <h3 className="mt-6 text-lg font-semibold text-wf-dark">Multiple sclerosis (MS)</h3>
      <p className="mt-2 text-wf-dark leading-relaxed">
      The MS Society provides information, support groups and a helpline on
      0808 800 8000. Local MS groups in Waltham Forest offer peer support
      and social activities. Visit{" "}
      <a
      href="https://www.mssociety.org.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      mssociety.org.uk
      </a>{" "}
      for more information.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-wf-dark">Arthritis</h3>
      <p className="mt-2 text-wf-dark leading-relaxed">
      Versus Arthritis provides information and support for people with
      arthritis. Call their helpline on 0800 5200 520 or visit{" "}
      <a
      href="https://www.versusarthritis.org"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      versusarthritis.org
      </a>
      . Local physiotherapy and occupational therapy services can help with
      pain management and joint protection.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-wf-dark">Epilepsy</h3>
      <p className="mt-2 text-wf-dark leading-relaxed">
      Epilepsy Action offers information and support on 0808 800 5050 or at{" "}
      <a
      href="https://www.epilepsy.org.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      epilepsy.org.uk
      </a>
      . If you have epilepsy, your GP and specialist will work with you to
      find the right medication and management plan.
      </p>
      </section>

      {/* Rehabilitation services */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Rehabilitation services</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Rehabilitation services help you recover skills, strength and
      confidence after illness, injury or a change in your condition. In
      Waltham Forest, rehabilitation support includes:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Reablement</strong> - an intensive short-term programme
      (usually up to six weeks) to help you regain independence with
      everyday tasks after a hospital stay or illness
      </li>
      <li>
      <strong>Physiotherapy</strong> - to improve your mobility, strength
      and balance
      </li>
      <li>
      <strong>Occupational therapy</strong> - to help you carry out daily
      activities and recommend equipment or adaptations
      </li>
      <li>
      <strong>Speech and language therapy</strong> - to help with
      communication and swallowing difficulties
      </li>
      <li>
      <strong>Community rehabilitation team</strong> - a multi-disciplinary
      team that provides rehabilitation support in your own home
      </li>
      </ul>
      </section>

      {/* NHS and social care working together */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">NHS and social care working together</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Waltham Forest Council works closely with the NHS to provide
      joined-up care for people with long-term conditions. This means your
      health and social care needs are considered together, and you should
      not have to repeat your story to different professionals.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Integrated care in Waltham Forest includes:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Joint health and social care assessments</li>
      <li>Shared care plans between your GP, hospital and social care team</li>
      <li>Multi-disciplinary team meetings to coordinate your care</li>
      <li>NHS Continuing Healthcare for people with complex health needs</li>
      <li>Integrated neighbourhood teams working in your local area</li>
      </ul>
      </section>

      {/* Telehealth and remote monitoring */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Telehealth and remote monitoring</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Telehealth uses technology to monitor your health remotely, so your
      care team can spot changes in your condition early and respond
      quickly. This can reduce the need for hospital visits and help you
      stay well at home.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Telehealth services in Waltham Forest include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Blood pressure and blood sugar monitoring from home</li>
      <li>Pulse oximetry for respiratory conditions</li>
      <li>Video consultations with your GP or specialist</li>
      <li>Health apps and online self-management tools</li>
      <li>
      Telecare and community alarm systems for falls detection and
      emergency response
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Ask your GP or our Adult Social Care team if telehealth could help
      you manage your condition.
      </p>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      To find out more about support for long-term conditions in Waltham
      Forest, contact our Adult Social Care team.
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
      <Link
      to={page.to}
      className="text-wf-blue underline hover:text-wf-green"
      >
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