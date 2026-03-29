import { Link } from "react-router-dom";

export default function AskForSupportPage() {
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
      <span className="font-medium text-wf-dark">Ask for support</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Ask for support
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      If you have a learning disability and need support, or you are worried about
      someone who does, there are several ways to ask for help. You do not need a
      referral from a professional to contact us.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="space-y-10">
      {/* Self-referral */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Self-referral</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      You can refer yourself or someone you care for to our learning disability
      services. You do not need a GP or professional to make a referral on your
      behalf.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      To make a self-referral you can:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>
      Call our Adult Social Care team on{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </li>
      <li>
      Complete our{" "}
      <Link
      to="/learning-disability-support/request-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      online request form
      </Link>
      </li>
      <li>Visit your local council office and ask to speak to someone about learning disability support</li>
      </ul>
      </section>

      {/* What happens next */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What happens next</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Once we receive your request for support, a member of our team will contact
      you within five working days. They will:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Talk to you about your situation and what support you need</li>
      <li>Explain what services are available</li>
      <li>Let you know if you are eligible for a formal assessment</li>
      <li>Give you information about other organisations that may be able to help</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      If your needs are urgent, we will try to respond more quickly. If you are in
      immediate danger, please call 999.
      </p>
      </section>

      {/* Assessment process */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">The assessment process</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      If it looks like you may need ongoing support, we will carry out a needs
      assessment. This is a conversation about your life, your strengths and the
      areas where you need help.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      During the assessment, a social worker or support worker will:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Ask you about your daily life and what you find difficult</li>
      <li>Talk about what is important to you and what your goals are</li>
      <li>Look at what support you already have from family, friends or other services</li>
      <li>Discuss the different types of support that could help you</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      You can have a family member, friend or advocate with you during the
      assessment. We will arrange an interpreter if you need one.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      After the assessment, we will work with you to create a support plan that
      sets out how your needs will be met. This may include council-funded
      services, a personal budget, or a combination of different types of support.
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
      to="/learning-disability-support/request-support"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Request support online
      </Link>
      </li>
      <li>
      <Link
      to="/learning-disability-support/support-for-carers"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Support for carers
      </Link>
      </li>
      <li>
      <Link
      to="/learning-disability-support/easy-read-resources"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Easy read resources
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
