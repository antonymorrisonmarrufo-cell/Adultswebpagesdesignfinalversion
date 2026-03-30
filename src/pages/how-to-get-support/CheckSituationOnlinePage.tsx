import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How to get support", to: "/adult-social-care/how-to-get-support" },
  { title: "Contact us", to: "/adult-social-care/how-to-get-support/contact-us" },
  { title: "Request an assessment", to: "/adult-social-care/how-to-get-support/request-an-assessment" },
];

export default function CheckSituationOnlinePage() {
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
      <span className="font-medium text-wf-dark">Check your situation online</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Check your situation online
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
      <h2 className="text-2xl font-bold text-wf-pink">About the self-assessment tool</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our online self-assessment tool helps you understand your care and support
      needs. It takes about 10 to 15 minutes to complete and will give you an
      idea of what help may be available to you in Waltham Forest.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The tool is not a formal assessment. It is designed to help you think about
      your situation and identify areas where you might benefit from support. You
      can complete it for yourself or on behalf of someone else.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What you will be asked</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The self-assessment covers several areas of daily life, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Your ability to manage personal care such as washing, dressing and eating</li>
      <li>Getting around your home and the local area</li>
      <li>Preparing meals and managing nutrition</li>
      <li>Keeping your home safe and clean</li>
      <li>Managing your finances and paperwork</li>
      <li>Maintaining relationships and avoiding social isolation</li>
      <li>Any health conditions or disabilities that affect your daily life</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What happens next</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      After completing the self-assessment, you will receive a summary of your
      answers. Based on your responses, the tool will suggest next steps, which
      may include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Information about community services and local support that may help you</li>
      <li>Advice on how to request a formal care needs assessment</li>
      <li>Links to other useful resources and organisations</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If your answers suggest you may be eligible for support from Adult Social
      Care, you will be guided on how to{" "}
      <Link
      to="/adult-social-care/how-to-get-support/request-an-assessment"
      className="text-wf-blue underline hover:text-wf-green"
      >
      request an assessment
      </Link>.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Start the self-assessment</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You do not need to create an account to use the tool. Your answers are
      confidential and are not stored unless you choose to submit a referral.
      </p>
      <div className="mt-4">
      <a
      href="https://www.walthamforest.gov.uk/adult-social-care-self-assessment"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded bg-[#bf3688] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#a02d73] transition"
      >
      Start the self-assessment
      </a>
      </div>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Prefer to speak to someone?</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you would rather talk through your situation with a person, call our
      Adult Social Care team.
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