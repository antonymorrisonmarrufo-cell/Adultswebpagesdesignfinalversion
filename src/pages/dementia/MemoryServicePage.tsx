import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Getting help and support", to: "/dementia/get-help" },
  { title: "Hornbeam Dementia Hub", to: "/dementia/hub" },
  { title: "Dementia adviser service", to: "/dementia/adviser" },
  { title: "Planning for the future", to: "/dementia/planning" },
];

export default function MemoryServicePage() {
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
      <Link to="/dementia" className="text-wf-blue underline hover:text-wf-green">Dementia support</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Memory assessment service</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Memory assessment service
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* What to expect */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What to expect</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The memory assessment service is a specialist NHS service that provides
      assessment, diagnosis and post-diagnostic support for people experiencing
      memory problems. The service is designed to be as comfortable and
      supportive as possible.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      During the assessment process you will meet with healthcare professionals
      who specialise in memory and cognitive function. You are welcome to bring
      a family member, friend or carer with you to any appointment.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The assessment typically involves:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>A detailed conversation about your symptoms and medical history</li>
      <li>Memory and thinking tests (these are straightforward pen-and-paper exercises)</li>
      <li>Physical health checks, including blood tests</li>
      <li>A brain scan (CT or MRI) if required</li>
      <li>Discussion of the results and next steps</li>
      </ul>
      </section>

      {/* Referral process */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Referral process</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      To access the memory assessment service, you will usually need a referral
      from your GP. Here is what the process looks like:
      </p>
      <ol className="mt-3 list-decimal pl-6 space-y-3 text-wf-dark leading-relaxed">
      <li>
      <strong>Visit your GP</strong> - Tell your doctor about the memory
      problems you or your family member have been experiencing. They will
      carry out an initial assessment.
      </li>
      <li>
      <strong>GP referral</strong> - If your GP considers a specialist
      assessment is appropriate, they will refer you to the local memory
      assessment service.
      </li>
      <li>
      <strong>Appointment letter</strong> - You will receive a letter with your
      appointment date, usually within 6 to 8 weeks of the referral.
      </li>
      <li>
      <strong>Attend your assessment</strong> - Attend the appointment at the
      clinic. The assessment may take place over one or more visits.
      </li>
      </ol>
      <p className="mt-3 text-wf-dark leading-relaxed">
      In some cases, other health and care professionals (such as hospital
      consultants or social workers) can also make referrals to the service.
      </p>
      </section>

      {/* Assessment process */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">The assessment process</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The assessment process is thorough but designed to put you at ease. Here
      is a guide to what typically happens:
      </p>
      <div className="mt-4 space-y-4">
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">Initial appointment</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      A clinician will ask about your symptoms, daily life, medical history
      and any medications you take. They may also ask your companion for
      their perspective.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">Cognitive testing</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      You will complete a series of short tests that assess memory,
      attention, language and other thinking skills. These are not exams and
      there are no right or wrong answers.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">Investigations</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      Blood tests and brain scans may be arranged to help rule out other
      causes and build a complete picture of your health.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">Diagnosis and support</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      Once the assessment is complete, the team will discuss the findings
      with you and explain the diagnosis. They will also provide information
      about treatment options, local support services and next steps.
      </p>
      </div>
      </div>
      </section>

      {/* After diagnosis */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">After your diagnosis</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Receiving a dementia diagnosis can be overwhelming. The memory assessment
      service will connect you with ongoing support, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>A named dementia adviser for personalised guidance</li>
      <li>Information about medication and treatment options</li>
      <li>Referral to the Hornbeam Dementia Hub for activities and social support</li>
      <li>Guidance on planning for the future, including lasting power of attorney</li>
      <li>Support for your family and carers</li>
      </ul>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you have questions about the memory assessment service, speak to your
      GP or contact our Adult Social Care team.
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