import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Equipment and assistive technology", to: "/adult-social-care/live-independently-at-home/equipment-and-assistive-technology" },
  { title: "Home adaptations", to: "/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy" },
  { title: "Work and disability", to: "/adult-social-care/work-and-disability" },
  { title: "Paying for care", to: "/adult-social-care/paying-for-care" },
  { title: "Blue Badge", to: "/adult-social-care/travel-and-transport/blue-badge" },
];

export default function PhysicalDisabilitiesPage() {
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
      <span className="font-medium text-wf-dark">Physical disabilities</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Physical disabilities
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* Support available */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Support available in Waltham Forest</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you have a physical disability, Waltham Forest Council can help
      you live as independently as possible. Our Adult Social Care team
      will work with you to understand your needs and agree a support plan
      that is right for you.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Support may include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Help with personal care, such as washing, dressing and eating</li>
      <li>Support to manage your home, including cleaning and meal preparation</li>
      <li>Help to get out and about and take part in community activities</li>
      <li>Support to access education, training and employment</li>
      <li>Short breaks and respite care</li>
      <li>Information, advice and advocacy</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      To access support, you will need a needs assessment. You can request
      one by contacting our Adult Social Care team. You do not need a
      referral from your GP.
      </p>
      </section>

      {/* Equipment and adaptations */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Equipment and adaptations</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The right equipment and home adaptations can make a significant
      difference to your independence and safety. Following an assessment,
      we can provide or arrange:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Daily living aids</strong> - items to help with cooking,
      eating, dressing and personal care
      </li>
      <li>
      <strong>Mobility aids</strong> - walking frames, sticks and other
      equipment to help you move around safely
      </li>
      <li>
      <strong>Home adaptations</strong> - grab rails, ramps, stairlifts,
      level-access showers and other modifications
      </li>
      <li>
      <strong>Hoisting and lifting equipment</strong> - ceiling hoists,
      mobile hoists and transfer aids
      </li>
      <li>
      <strong>Specialist seating and beds</strong> - pressure-relieving
      mattresses, profiling beds and riser-recliner chairs
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      For major adaptations, you may be eligible for a{" "}
      <strong>Disabled Facilities Grant</strong> of up to &pound;30,000.
      Visit our{" "}
      <Link
      to="/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy"
      className="text-wf-blue underline hover:text-wf-green"
      >
      home adaptations
      </Link>{" "}
      page for details.
      </p>
      </section>

      {/* Personal assistants */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Personal assistants</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A personal assistant (PA) is someone you employ directly to help you
      with your day-to-day needs. If you receive a direct payment from the
      council, you can use it to hire a PA to provide the support you
      choose, when you choose.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Personal assistants can help with:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Personal care such as washing and dressing</li>
      <li>Household tasks like cooking, cleaning and shopping</li>
      <li>Getting out and about in the community</li>
      <li>Attending appointments and social activities</li>
      <li>Support at work or in education</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We can help you with the recruitment process, payroll and employer
      responsibilities. Contact our Adult Social Care team for more
      information about direct payments and employing a PA.
      </p>
      </section>

      {/* Wheelchair services */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Wheelchair services</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The NHS wheelchair service provides wheelchairs and specialist
      seating for people with long-term mobility needs. Your GP,
      physiotherapist or occupational therapist can refer you to the local
      wheelchair service for an assessment.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The service can provide:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Manual wheelchairs</li>
      <li>Powered wheelchairs and scooters (where clinically assessed as needed)</li>
      <li>Specialist seating and postural support</li>
      <li>Wheelchair cushions and accessories</li>
      <li>Maintenance, repairs and spare parts</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you need a wheelchair for a short period, for example during
      recovery from surgery, the British Red Cross may be able to lend you
      one. Contact the Red Cross on 0300 456 1914.
      </p>
      </section>

      {/* Disability sports and leisure */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Disability sports and leisure</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Staying active is important for your physical and mental health.
      Waltham Forest has a range of inclusive sport and leisure
      opportunities for disabled people:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Inclusive gym sessions</strong> - accessible gym equipment
      and trained staff at local leisure centres
      </li>
      <li>
      <strong>Disability swimming</strong> - sessions with hoists and
      adapted changing facilities
      </li>
      <li>
      <strong>Wheelchair sports</strong> - basketball, tennis, rugby and
      other adapted sports
      </li>
      <li>
      <strong>Boccia and table cricket</strong> - seated sports suitable
      for people with limited mobility
      </li>
      <li>
      <strong>Inclusive cycling</strong> - adapted bikes and trikes
      available at local parks
      </li>
      <li>
      <strong>Walking groups</strong> - guided walks at different paces and
      distances, including wheelchair-friendly routes
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Many leisure centres offer concessionary rates for disabled people.
      Contact your local leisure centre for details.
      </p>
      </section>

      {/* Benefits and financial support */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Benefits and financial support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you have a physical disability, you may be entitled to financial
      help from the government. Key benefits include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Personal Independence Payment (PIP)</strong> - a benefit to
      help with the extra costs of a long-term health condition or
      disability, available whether or not you are in work
      </li>
      <li>
      <strong>Attendance Allowance</strong> - for people over State Pension
      age who need help with personal care or supervision
      </li>
      <li>
      <strong>Employment and Support Allowance (ESA)</strong> - financial
      support if you are unable to work due to illness or disability
      </li>
      <li>
      <strong>Universal Credit</strong> - may include extra amounts if you
      have a disability or health condition
      </li>
      <li>
      <strong>Council Tax Reduction</strong> - you may be entitled to a
      reduction if you are disabled or have a disability-related adaptation
      to your home
      </li>
      <li>
      <strong>Blue Badge</strong> - for parking closer to your destination
      </li>
      <li>
      <strong>Freedom Pass</strong> - free travel on public transport in
      London
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our welfare benefits team can help you check what you are entitled to
      and support you with applications. Contact our Adult Social Care team
      for a referral.
      </p>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      To find out more about support for physical disabilities in Waltham
      Forest, or to request an assessment, contact our Adult Social Care
      team.
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