import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Information for professionals", to: "/information-for-professionals" },
  { title: "Safeguarding policies and reports", to: "/our-policies/safeguarding-policies-reports" },
  { title: "How to make a referral", to: "/information-for-professionals/how-to-make-referral" },
];

export default function SafeguardingAdultsProfessionalsPage() {
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
      <Link to="/information-for-professionals" className="text-wf-blue underline hover:text-wf-green">Information for professionals</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Safeguarding adults for professionals</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Safeguarding adults for professionals
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
      All professionals working with adults have a responsibility to recognise
      and report abuse and neglect. This page provides guidance for professionals
      on how to raise safeguarding concerns and what happens when a concern is
      reported.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Reporting safeguarding concerns</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you believe an adult is at risk of abuse or neglect, you should raise a
      safeguarding concern with Waltham Forest Council without delay. You can:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Call:</strong>{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>{" "}
      (Monday to Friday, 9am to 5pm)
      </li>
      <li>
      <strong>Out of hours:</strong>{" "}
      <a href="tel:02084963000" className="text-wf-blue underline">
      020 8496 3000
      </a>{" "}
      (Emergency Duty Team)
      </li>
      <li>
      <strong>Online:</strong> Complete the safeguarding concern form on the
      council website
      </li>
      <li>
      <strong>Email:</strong>{" "}
      <a
      href="mailto:socialcaredirect@walthamforest.gov.uk"
      className="text-wf-blue underline hover:text-wf-green"
      >
      socialcaredirect@walthamforest.gov.uk
      </a>
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If someone is in immediate danger, call the police on 999.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Section 42 enquiries</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Under Section 42 of the Care Act 2014, the council has a duty to make
      enquiries (or cause enquiries to be made) if it has reasonable cause to
      suspect that an adult in its area:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Has needs for care and support (whether or not the council is meeting those needs)</li>
      <li>Is experiencing, or is at risk of, abuse or neglect</li>
      <li>As a result of their care and support needs, is unable to protect themselves</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The purpose of the enquiry is to decide what action is needed to protect
      the person and to establish the person's views, wishes and desired outcomes.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Safeguarding thresholds</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Not all concerns will meet the threshold for a Section 42 enquiry. When we
      receive a concern, we will consider:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Whether the person has care and support needs</li>
      <li>The type and severity of the alleged abuse or neglect</li>
      <li>Whether the person is unable to protect themselves because of their needs</li>
      <li>The person's own views and wishes</li>
      <li>Whether a different response would be more appropriate, such as a care review or complaints process</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Even if the threshold for a Section 42 enquiry is not met, we will ensure
      the concern is responded to appropriately.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Making Safeguarding Personal</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We follow the Making Safeguarding Personal approach, which means:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>The person is at the centre of the safeguarding process</li>
      <li>We ask the person what outcomes they want</li>
      <li>We work with the person to achieve those outcomes</li>
      <li>We measure success by whether the person's outcomes were met</li>
      </ul>
      </section>

      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Report a concern now</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      Do not delay reporting a safeguarding concern.
      </p>
      <p className="mt-3 text-sm font-semibold text-wf-dark">
      Telephone:{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </p>
      <p className="mt-1 text-sm text-wf-gray">
      Monday to Friday, 9am to 5pm. Out of hours: 020 8496 3000
      </p>
      </section>
      </div>
      </div>

      {/* Related pages */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="border-t border-gray-200 pt-8">
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