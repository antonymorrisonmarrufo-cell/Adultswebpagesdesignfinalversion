import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/our-policies" },
  { title: "Understand your rights", to: "/understand-your-rights" },
  { title: "Complaints and compliments", to: "/complaints-compliments" },
];

export default function PrivacyAndDataPage() {
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
      <Link to="/adult-social-care/our-policies" className="text-wf-blue underline hover:text-wf-green">Our policies</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Privacy and data</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Privacy and data
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
      We take the protection of your personal information seriously. This page
      explains how we collect, use and store your data when you use adult social
      care services, and what rights you have.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Privacy notice</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our Adult Social Care privacy notice explains:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>What personal information we collect about you</li>
      <li>Why we collect it and the legal basis for processing</li>
      <li>Who we may share your information with</li>
      <li>How long we keep your information</li>
      <li>Your rights regarding your personal data</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We collect personal information to assess your needs, arrange care and
      support, and monitor the quality of services. We only share your information
      when we need to for the purposes of your care, or when we are required to
      by law.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Data protection</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We process your personal data in accordance with the UK General Data
      Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      Our responsibilities include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Keeping your data accurate and up to date</li>
      <li>Storing it securely and only for as long as necessary</li>
      <li>Only using it for the purposes for which it was collected</li>
      <li>Ensuring staff are trained in data protection</li>
      <li>Reporting any data breaches promptly</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Subject access requests</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You have the right to request a copy of the personal information we hold
      about you. This is known as a subject access request (SAR). To make a
      request:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Submit a request in writing to the council's Data Protection Officer</li>
      <li>Provide proof of your identity</li>
      <li>Give details of the information you are looking for</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We will respond to your request within one calendar month. There is no
      charge for making a subject access request in most cases.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Your rights</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Under data protection law, you have the right to:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Access the personal data we hold about you</li>
      <li>Ask for incorrect information to be corrected</li>
      <li>Request that your data be deleted in certain circumstances</li>
      <li>Object to the processing of your data</li>
      <li>Request that processing be restricted</li>
      <li>Complain to the Information Commissioner's Office (ICO) if you are not satisfied with how we handle your data</li>
      </ul>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For questions about how we use your data, contact the Data Protection
      Officer or our Adult Social Care team.
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