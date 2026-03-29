import { Link } from "react-router-dom";

export default function EasyReadResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">
      Home
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/adult-social-care"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Adult Social Care
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/learning-disability-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Learning disability support
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Easy read resources</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Easy read resources
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      Easy read documents use simple words and pictures to make information easier
      to understand. We provide a range of documents in easy read format to help you
      learn about our services and your rights.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="space-y-10">
      {/* What is easy read */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What is easy read?</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Easy read is a way of presenting information that makes it accessible to
      people with learning disabilities and others who find written information
      difficult to understand.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Easy read documents use:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Short, simple sentences</li>
      <li>Everyday words instead of jargon</li>
      <li>Pictures or symbols alongside the text</li>
      <li>Large, clear text with plenty of spacing</li>
      <li>One idea per sentence</li>
      </ul>
      </section>

      {/* Available documents */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Available documents</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      The following documents are available in easy read format. You can view them
      online or download them as PDF files.
      </p>
      <div className="mt-4 space-y-4">
      <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-wf-dark">About our learning disability services</h3>
      <p className="mt-1 text-sm text-wf-gray">
      An overview of the support available for people with learning disabilities
      in Waltham Forest.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-wf-dark">Your assessment and support plan</h3>
      <p className="mt-1 text-sm text-wf-gray">
      What to expect during a needs assessment and how your support plan works.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-wf-dark">Your rights and choices</h3>
      <p className="mt-1 text-sm text-wf-gray">
      Information about your rights under the Care Act 2014, including the right
      to choose how your support is provided.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-wf-dark">Housing options</h3>
      <p className="mt-1 text-sm text-wf-gray">
      The different types of housing and support available, explained in easy
      read format.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-wf-dark">Keeping safe from abuse</h3>
      <p className="mt-1 text-sm text-wf-gray">
      How to recognise abuse and what to do if you or someone you know is being
      harmed.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-wf-dark">Making a complaint</h3>
      <p className="mt-1 text-sm text-wf-gray">
      How to tell us if you are unhappy with the support you receive.
      </p>
      </div>
      </div>
      </section>

      {/* Requesting accessible formats */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">
      Requesting accessible formats
      </h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      If you need information in a different format, such as large print, audio or
      another language, please contact us. We will do our best to provide the
      information in a way that works for you.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Call us on{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>{" "}
      or ask your social worker or support worker for help.
      </p>
      </section>
      </div>
      </div>

      {/* Related links */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
      <ul className="mt-4 space-y-2">
      <li>
      <Link
      to="/learning-disability-support/ask-for-support"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Ask for support
      </Link>
      </li>
      <li>
      <Link
      to="/learning-disability-support"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Learning disability support
      </Link>
      </li>
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
