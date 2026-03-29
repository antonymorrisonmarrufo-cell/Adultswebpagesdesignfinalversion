import { Link } from "react-router-dom";

export default function BeingCarerPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
          <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Being a carer</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E]">Being a carer</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          A carer is anyone who looks after a family member, partner, or friend who needs help because
          of their illness, frailty, disability, a mental health problem, or an addiction. Find out what
          support is available to you in Waltham Forest.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Are you a carer? */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Are you a carer?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Many people do not think of themselves as carers. You may simply see yourself as a parent, partner,
          son, daughter, or friend. But if you regularly help someone who could not manage without your support,
          you are a carer and you may be entitled to an assessment and support in your own right.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You do not need to live with the person you care for, and it does not matter how many hours a week
          you provide care. What matters is that caring is affecting your life.
          </p>
          </section>

          {/* Prevention callout banner */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <p className="text-base leading-relaxed text-wf-dark">
          You do not need an assessment to get support as a carer. Visit the{" "}
          <Link to="/carers/hub" className="font-semibold text-[#004E3E] underline hover:text-[#004E3E]/80">
          Carers Hub
          </Link>{" "}
          for free drop-in advice, peer support groups, and activities. See the{" "}
          <Link to="/carers/hubs/universal-offer" className="font-semibold text-[#004E3E] underline hover:text-[#004E3E]/80">
          Universal Offer
          </Link>{" "}
          for support available to all carers without an assessment.
          </p>
          </section>

          {/* Hub links grid */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Information and support for carers</h2>
          <div className="grid gap-4 md:grid-cols-2">
          <Link
          to="/carers/carers-hub"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Carers Hub</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Visit the Waltham Forest Carers Hub for drop-in advice, activities, and peer support.
          </p>
          </Link>

          <Link
          to="/carers/support"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Support for carers</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Financial help, respite breaks, health and wellbeing support, local groups, training, and more.
          </p>
          </Link>

          <Link
          to="/carers/hubs/universal-offer"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Universal Offer Hub</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Support available to all carers — no assessment needed.
          </p>
          </Link>

          <Link
          to="/carers/assessment-rights"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Carers assessment and rights</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Your rights under the Care Act 2014, how to request a carers assessment, and what happens during one.
          </p>
          </Link>

          <Link
          to="/carers/young-carers"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Young carers</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Support for children and young people under 18 who help look after someone in their family.
          </p>
          </Link>

          <Link
          to="/carers/parent-carers"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Parent carers</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Support for parents and guardians of disabled children or children with additional needs.
          </p>
          </Link>

          <Link
          to="/carers/work-education"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Work and education</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Balancing caring with work or study, flexible working rights, and education support.
          </p>
          </Link>

          <Link
          to="/carers/support-after-caring"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Support after caring ends</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Bereavement support, returning to work, and continued help when your caring role changes.
          </p>
          </Link>

          <Link
          to="/carers/strategy-council-duties"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Carers strategy and council duties</h3>
          <p className="mt-2 text-sm text-wf-gray">
          Our local carers strategy and the council's legal duties to support carers.
          </p>
          </Link>

          <Link
          to="/carers/ia-flow"
          className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
          >
          <h3 className="text-lg font-bold text-[#004E3E]">Information and advice flow</h3>
          <p className="mt-2 text-sm text-wf-gray">
          A step-by-step guide to finding and accessing the right carer support for your situation.
          </p>
          </Link>
          </div>
          </section>

          {/* Contact */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Contact us</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you need help or want to talk to someone about your caring role, contact our Adult Social Care team.
          </p>
          <p className="mt-2 text-wf-dark">
          <strong>Phone:</strong> <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>
          </p>
          <p className="mt-1 text-wf-dark">
          Lines are open Monday to Friday, 9am to 5pm.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/how-to-get-support" className="text-wf-blue underline hover:text-wf-green">
          How to get support from Adult Social Care
          </Link>
          </li>
          <li>
          <a href="https://www.carersuk.org" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Carers UK
          </a>
          </li>
          <li>
          <a href="https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          NHS - support and benefits for carers
          </a>
          </li>
          </ul>
          </section>

          {/* Last updated */}
          <p className="text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
