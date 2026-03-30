import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Complaints and compliments", to: "/complaints-compliments" },
  { title: "Help shape our services", to: "/complaints-compliments/help-shape-services" },
  { title: "How to get support", to: "/how-to-get-support" },
];

export default function SendComplimentPage() {
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
      <Link to="/adult-social-care/complaints-compliments" className="text-wf-blue underline hover:text-wf-green">Complaints and compliments</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Send a compliment</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Send a compliment
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
      If you have had a positive experience with Adult Social Care, we would
      love to hear about it. Compliments help us recognise good practice and
      motivate our staff to continue providing excellent support.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What you can share</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can send a compliment about any aspect of our service, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>A member of staff who went above and beyond</li>
      <li>A service that made a real difference to your life or the life of someone you care about</li>
      <li>The quality of care you received</li>
      <li>A team that worked well together to support you</li>
      <li>A care provider commissioned by the council that delivered excellent care</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to send a compliment</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can share positive feedback in the following ways:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Online:</strong> Complete the feedback form on the Waltham Forest
      Council website
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
      <li>
      <strong>In writing:</strong> Write to Adult Social Care, Waltham Forest
      Council, Town Hall, Forest Road, Walthamstow, London E17 4JF
      </li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What happens to your compliment</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      When we receive a compliment, we will:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Pass your feedback on to the relevant team or individual</li>
      <li>Record it so we can track positive feedback across our services</li>
      <li>Use it to identify and share good practice</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Your compliments genuinely make a difference to the people who work in
      adult social care.
      </p>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      Thank you for taking the time to share your feedback.
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