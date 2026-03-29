import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "Request an assessment", to: "/how-to-get-support/request-assessment" },
  { title: "Check your situation online", to: "/how-to-get-support/check-situation-online" },
];

export default function ContactUsPage() {
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
      <Link to="/how-to-get-support" className="text-wf-blue underline hover:text-wf-green">How to get support</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Contact us</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Contact us
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
      If you need to speak to someone about adult social care, there are several
      ways to get in touch. Our team can help you understand what support is
      available, answer your questions and guide you through the process.
      </p>
      </section>

      {/* Green callout - before you call */}
      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-[#231F20]">Before you call</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      Before you call, you might find what you need through our online
      self-assessment tool or community support. Many people get the help they
      need without contacting us directly.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      <Link
      to="/how-to-get-support/check-situation-online"
      className="text-wf-blue underline hover:text-wf-green font-semibold"
      >
      Check your situation online
      </Link>
      </p>
      </section>

      {/* Community and voluntary support */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Community and voluntary support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Many people find the right support through community services and local
      organisations without needing a formal assessment. Explore what is available:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <Link
      to="/live-independently/social-prescribing"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Social prescribing and local groups
      </Link>{" "}
      — activities, groups, and voluntary sector support
      </li>
      <li>
      <Link
      to="/carers/hubs/universal-offer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Universal offer for carers
      </Link>{" "}
      — support available to all carers without an assessment
      </li>
      <li>
      <Link
      to="/live-independently"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Living independently
      </Link>{" "}
      — equipment, home adaptations, and practical help
      </li>
      </ul>
      </section>

      {/* Other ways to get help - moved above phone */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Other ways to get help</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can also use our online tools to get started:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <Link
      to="/how-to-get-support/check-situation-online"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Check your situation online
      </Link>{" "}
      using our self-assessment tool
      </li>
      <li>
      <Link
      to="/how-to-get-support/request-assessment"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Request an assessment
      </Link>{" "}
      using our online form
      </li>
      </ul>
      </section>

      {/* Phone */}
      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Phone</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      Call our Adult Social Care team to discuss your needs or make a referral.
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

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Email</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can email the Adult Social Care team at:{" "}
      <a
      href="mailto:socialcaredirect@walthamforest.gov.uk"
      className="text-wf-blue underline hover:text-wf-green"
      >
      socialcaredirect@walthamforest.gov.uk
      </a>
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We aim to respond to emails within two working days. Please include your
      name, contact details and a brief description of the support you need.
      Do not include sensitive personal information in your email unless it is
      essential.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Office hours</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our Adult Social Care team is available during the following hours:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li><strong>Monday to Friday:</strong> 9am to 5pm</li>
      <li><strong>Saturday, Sunday and bank holidays:</strong> Closed</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you visit in person, our offices are located at Waltham Forest Town
      Hall, Forest Road, Walthamstow, London E17 4JF.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Emergency out of hours</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you have an urgent social care need outside of office hours, such as
      a safeguarding concern or an immediate risk to someone's safety, contact
      the Emergency Duty Team.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      <strong>Emergency Duty Team:</strong>{" "}
      <a href="tel:02084963000" className="text-wf-blue underline">
      020 8496 3000
      </a>
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      This service is available evenings, weekends and bank holidays. If someone
      is in immediate danger, call 999.
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