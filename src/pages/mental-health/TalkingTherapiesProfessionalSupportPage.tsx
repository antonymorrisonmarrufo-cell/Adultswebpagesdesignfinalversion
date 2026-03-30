import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Mental health and wellbeing", to: "/mental-health" },
  { title: "Looking after your mental wellbeing", to: "/mental-health/looking-after-mental-wellbeing" },
  { title: "Adult Social Care mental health support", to: "/mental-health/adult-social-care-mental-health" },
];

export default function TalkingTherapiesProfessionalSupportPage() {
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
      <span className="font-medium text-wf-dark">Talking therapies and professional support</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Talking therapies and professional support
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
      Talking therapies can help you work through feelings of anxiety, depression,
      stress and other mental health difficulties. They are provided by trained
      professionals and are available free on the NHS.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">NHS Talking Therapies (IAPT)</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      NHS Talking Therapies, previously known as IAPT (Improving Access to
      Psychological Therapies), provides evidence-based treatments for common
      mental health conditions such as depression, anxiety, phobias and
      post-traumatic stress disorder (PTSD).
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The service in Waltham Forest is provided by NELFT (North East London NHS
      Foundation Trust). Treatments available include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Cognitive Behavioural Therapy (CBT)</li>
      <li>Counselling for depression</li>
      <li>Guided self-help</li>
      <li>Interpersonal therapy</li>
      <li>Eye Movement Desensitisation and Reprocessing (EMDR)</li>
      <li>Group therapy sessions</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to access talking therapies</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can refer yourself directly to NHS Talking Therapies without seeing
      your GP. To self-refer:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Complete an online self-referral form on the NELFT website</li>
      <li>Call the talking therapies service directly</li>
      <li>Ask your GP to refer you if you prefer</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You must be aged 18 or over and registered with a GP in Waltham Forest
      to access the local service.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Waiting times</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      After your referral is received, you will usually be contacted within two
      weeks for an initial assessment. Waiting times for ongoing treatment vary
      depending on the type of therapy and current demand. The national target
      is for treatment to begin within 6 weeks of referral, and no longer than
      18 weeks.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      While you are waiting, you may be offered guided self-help materials or
      access to online therapy programmes.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Counselling</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you are looking for counselling outside of the NHS, there are local
      organisations that offer affordable or free counselling services. These
      include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Waltham Forest Community Counselling Service</li>
      <li>Relate (for relationship and family counselling)</li>
      <li>Cruse Bereavement Support (for grief and loss)</li>
      </ul>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For help finding the right mental health support, contact our Adult Social
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