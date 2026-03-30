import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/adult-social-care/our-policies" },
  { title: "Safeguarding adults", to: "/adult-social-care/protecting-adults-at-risk" },
  { title: "Safeguarding for professionals", to: "/adult-social-care/information-for-professionals/safeguarding-adults" },
];

export default function SafeguardingPoliciesReportsPage() {
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
      <span className="font-medium text-wf-dark">Safeguarding policies and reports</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Safeguarding policies and reports
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
      Safeguarding adults is a core responsibility of the council. We work with
      partner organisations through the Safeguarding Adults Board (SAB) to
      protect adults at risk from abuse and neglect.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Safeguarding Adults Board</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Waltham Forest Safeguarding Adults Board (SAB) is a statutory
      partnership that brings together the council, NHS, police and other key
      organisations. The SAB is responsible for:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Developing and overseeing safeguarding strategy and policy</li>
      <li>Ensuring effective multi-agency working to protect adults at risk</li>
      <li>Commissioning Safeguarding Adults Reviews when serious incidents occur</li>
      <li>Publishing an annual report on safeguarding activity</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Annual reports</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The SAB publishes an annual report each year setting out what the Board has
      done, key statistics on safeguarding activity and priorities for the coming
      year. Annual reports cover:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>The number and types of safeguarding concerns raised</li>
      <li>Outcomes of Section 42 enquiries</li>
      <li>Key achievements and areas for improvement</li>
      <li>Safeguarding Adults Reviews completed and lessons learned</li>
      <li>Partner agency contributions to safeguarding</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Annual reports are available to download from the Waltham Forest Council
      website.
      </p>
      <div className="mt-4 space-y-3">
      <a href="#" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        SAB Annual Report 2024/25 [PDF — link to be added]
      </a>
      </div>
      <p className="mt-3 text-sm text-wf-gray">
      Previous annual reports are available on request from{" "}
      <a href="mailto:strategicpartnerships@walthamforest.gov.uk" className="text-wf-blue underline hover:text-wf-green">strategicpartnerships@walthamforest.gov.uk</a>.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Safeguarding partnership arrangements</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      This document provides an overview of how safeguarding is organised across
      Waltham Forest, covering both adults and children, in line with statutory
      requirements.
      </p>
      <div className="mt-4">
      <a href="#" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a02d73] transition-colors">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Safeguarding Partnership Arrangements [PDF — link to be added]
      </a>
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Multi-agency procedures</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Waltham Forest follows the London Multi-Agency Adult Safeguarding Policy
      and Procedures. These procedures set out how organisations should work
      together to safeguard adults, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>How to recognise and report abuse or neglect</li>
      <li>Thresholds for safeguarding enquiries</li>
      <li>How enquiries are carried out</li>
      <li>Making Safeguarding Personal principles</li>
      <li>Information sharing protocols</li>
      </ul>
      <div className="mt-4">
      <a href="https://londonadass.org.uk/safeguarding/review-of-the-london-multi-agency-adult-safeguarding-policy-and-procedures/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-wf-blue underline hover:text-wf-green font-semibold">
        London Multi-Agency Adult Safeguarding Policy and Procedures
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </a>
      <span className="ml-2 text-xs text-wf-gray">(external link)</span>
      </div>
      </section>

      <section className="rounded-lg border-2 border-[#d4351c] bg-[#fcedf3] p-6">
      <h2 className="text-xl font-bold text-[#d4351c]">Report a safeguarding concern</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you are worried that an adult is being abused or neglected, you can
      report your concern online or by phone.
      </p>
      <div className="mt-4">
      <a
      href="https://safeguardingapp.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded bg-[#bf3688] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#a02d73] transition"
      >
      Report a concern about a vulnerable adult
      </a>
      </div>
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