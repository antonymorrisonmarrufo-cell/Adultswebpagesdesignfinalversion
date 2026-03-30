import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How to get support", to: "/adult-social-care/how-to-get-support" },
  { title: "What happens during your assessment", to: "/adult-social-care/how-to-get-support/what-happens-during-your-assessment" },
  { title: "Getting a care and support plan", to: "/adult-social-care/how-to-get-support/getting-your-care-and-support-plan" },
];

export default function RequestAssessmentPage() {
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
      <Link to="/adult-social-care/how-to-get-support" className="text-wf-blue underline hover:text-wf-green">How to get support</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Request an assessment</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Request an assessment
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
      If you think you or someone you know may need care and support, you have
      the right to ask for a needs assessment from the council. This is free
      and does not commit you to anything.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Who can request an assessment</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Anyone can request an assessment. You can ask for one:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>For yourself, if you are an adult aged 18 or over living in Waltham Forest</li>
      <li>On behalf of someone else, such as a family member, friend or neighbour</li>
      <li>As a professional, such as a GP, nurse or social worker</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you are requesting on behalf of someone else, we will usually need
      their consent before we can carry out the assessment.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to request an assessment</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can request a care needs assessment in the following ways:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Online:</strong> Complete our online referral form (the quickest way)
      </li>
      <li>
      <strong>By phone:</strong> Call{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>{" "}
      (Monday to Friday, 9am to 5pm)
      </li>
      <li>
      <strong>By email:</strong>{" "}
      <a
      href="mailto:socialcaredirect@walthamforest.gov.uk"
      className="text-wf-blue underline hover:text-wf-green"
      >
      socialcaredirect@walthamforest.gov.uk
      </a>
      </li>
      </ul>
      <div className="mt-4">
      <a
      href="#"
      className="inline-block rounded bg-[#bf3688] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#a02d73] transition"
      >
      Complete the online referral form
      </a>
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What to expect</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Once we receive your request, we will:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Acknowledge your request within two working days</li>
      <li>Contact you to arrange a convenient time for the assessment</li>
      <li>Carry out the assessment within 28 days of your request</li>
      <li>Discuss the outcome with you and explain what happens next</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The assessment can take place in your home, at a council office, over the
      phone or by video call, depending on your preference and circumstances.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Information you may need</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      To help us process your request, it is useful to have the following
      information ready:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Full name, date of birth and address of the person needing support</li>
      <li>A description of the care needs and any current difficulties</li>
      <li>Details of any existing support, such as home care or day services</li>
      <li>GP details and any relevant health conditions</li>
      <li>Contact details for the person making the request</li>
      </ul>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you have questions about requesting an assessment, our team is here
      to help.
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