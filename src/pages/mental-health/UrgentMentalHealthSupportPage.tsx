import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Mental health and wellbeing", to: "/mental-health" },
  { title: "Talking therapies and professional support", to: "/mental-health/talking-therapies-professional-support" },
  { title: "Local mental health support services", to: "/mental-health/local-support-services" },
];

export default function UrgentMentalHealthSupportPage() {
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
      <span className="font-medium text-wf-dark">Urgent mental health support</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Urgent mental health support
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* Emergency callout */}
      <section className="rounded-lg border-l-4 border-[#d4351c] bg-[#fcedf3] p-6">
      <h2 className="text-xl font-bold text-red-700">If you are in immediate danger</h2>
      <p className="mt-2 text-wf-dark leading-relaxed">
      Call <strong>999</strong> or go to your nearest Accident and Emergency (A&amp;E)
      department if you or someone else is in immediate danger or has harmed
      themselves.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Crisis team</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The NELFT Crisis Resolution and Home Treatment Team provides urgent mental
      health support for adults in Waltham Forest. The team can help if you are
      experiencing a mental health crisis and need immediate support to stay safe.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      <strong>Crisis line:</strong>{" "}
      <a href="tel:08001510023" className="text-wf-blue underline">
      0800 151 0023
      </a>{" "}
      (available 24 hours a day, 7 days a week)
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The crisis team can provide assessment, short-term support and, where
      appropriate, home treatment as an alternative to hospital admission.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Samaritans</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Samaritans are available 24 hours a day, 365 days a year for anyone
      who is struggling to cope. You do not have to be suicidal to call.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      <strong>Telephone:</strong>{" "}
      <a href="tel:116123" className="text-wf-blue underline">116 123</a>{" "}
      (free to call from any phone)
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      <strong>Email:</strong>{" "}
      <a href="mailto:jo@samaritans.org" className="text-wf-blue underline hover:text-wf-green">
      jo@samaritans.org
      </a>
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">A&amp;E</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you are in a mental health crisis and feel you cannot keep yourself safe,
      you can go to your nearest A&amp;E department. Mental health professionals
      are available at A&amp;E to provide assessment and support. Your nearest
      A&amp;E departments include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Whipps Cross University Hospital, Leytonstone, E11 1NR</li>
      <li>Homerton University Hospital, Hackney, E9 6SR</li>
      <li>North Middlesex University Hospital, Edmonton, N18 1QX</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Crisis cafes and safe spaces</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Crisis cafes offer a calm, supportive environment where you can talk to
      trained staff and volunteers when you are feeling distressed. They are an
      alternative to A&amp;E for people who are in emotional distress but not in
      immediate physical danger.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Contact the crisis line on{" "}
      <a href="tel:08001510023" className="text-wf-blue underline">0800 151 0023</a>{" "}
      for details of crisis cafes currently operating in the area, including
      opening hours and locations.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Other helplines</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>SHOUT crisis text line:</strong> Text SHOUT to 85258 (free, 24/7)
      </li>
      <li>
      <strong>CALM (Campaign Against Living Miserably):</strong>{" "}
      <a href="tel:08005858858" className="text-wf-blue underline">0800 58 58 58</a>{" "}
      (5pm to midnight, daily)
      </li>
      <li>
      <strong>Papyrus (for under 35s):</strong>{" "}
      <a href="tel:08000684141" className="text-wf-blue underline">0800 068 4141</a>{" "}
      (9am to midnight, daily)
      </li>
      <li>
      <strong>Childline (for under 19s):</strong>{" "}
      <a href="tel:08001111" className="text-wf-blue underline">0800 1111</a>{" "}
      (free, 24/7)
      </li>
      </ul>
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