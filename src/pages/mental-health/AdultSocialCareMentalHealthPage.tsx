import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Mental health and wellbeing", to: "/adult-social-care/mental-health-wellbeing" },
  { title: "How to get support", to: "/adult-social-care/how-to-get-support" },
  { title: "Local mental health support services", to: "/adult-social-care/mental-health-wellbeing/local-mental-health-support-services" },
];

export default function AdultSocialCareMentalHealthPage() {
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
      <Link to="/adult-social-care/mental-health-wellbeing" className="text-wf-blue underline hover:text-wf-green">Mental health and wellbeing</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Adult Social Care mental health support</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Adult Social Care mental health support
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
      If you have a severe or long-term mental health condition, Adult Social
      Care can provide specialist support to help you live as independently as
      possible in the community.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Section 117 aftercare</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you have been detained in hospital under Section 3, 37, 45A, 47 or 48
      of the Mental Health Act 1983, you are entitled to free aftercare services
      under Section 117. This is a legal duty on the council and the NHS to
      provide or arrange services to:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Meet needs arising from or related to your mental health condition</li>
      <li>Reduce the risk of your condition worsening</li>
      <li>Reduce the risk of you needing to return to hospital</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Section 117 aftercare is free. You cannot be charged for services provided
      under Section 117, and there is no means test. Aftercare continues until
      both the council and the NHS agree that you no longer need it.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Community mental health support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our community mental health teams work alongside NHS mental health services
      to provide social care support for people with conditions such as:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Schizophrenia and psychosis</li>
      <li>Bipolar disorder</li>
      <li>Severe depression</li>
      <li>Personality disorders</li>
      <li>Complex anxiety disorders</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Support may include help with daily living, social activities, employment
      support, managing benefits and accessing community resources.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Supported housing</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you need more support than can be provided in your own home, supported
      housing offers accommodation with staff on hand to help. Options include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Supported living:</strong> Your own tenancy with support workers
      available at set times or 24 hours a day
      </li>
      <li>
      <strong>Residential care:</strong> A care home with specialist mental
      health support
      </li>
      <li>
      <strong>Shared housing:</strong> Living with others in a supported
      environment with shared staff support
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A care needs assessment will help determine the level of support you need.
      Visit our{" "}
      <Link
      to="/adult-social-care/how-to-get-support/request-an-assessment"
      className="text-wf-blue underline hover:text-wf-green"
      >
      request an assessment
      </Link>{" "}
      page to get started.
      </p>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      To discuss mental health social care support, contact our team.
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