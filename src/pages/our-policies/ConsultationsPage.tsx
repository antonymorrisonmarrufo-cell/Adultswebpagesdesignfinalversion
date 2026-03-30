import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/adult-social-care/our-policies" },
  { title: "Help shape our services", to: "/adult-social-care/complaints-compliments/help-shape-our-services" },
  { title: "Complaints and compliments", to: "/adult-social-care/complaints-compliments" },
];

export default function ConsultationsPage() {
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
      <span className="font-medium text-wf-dark">Consultations</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Consultations
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
      We regularly consult with residents, carers and stakeholders about changes
      to adult social care services. Your views help us make better decisions
      about how we deliver care and support in Waltham Forest.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Current consultations</h2>
      <div className="mt-4 rounded-lg bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-[#231F20]">Adult Social Care Charging Policy Consultation</h3>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The council is consulting on a proposal to change the way it calculates how
      much people pay towards their care and support at home and in the community.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The consultation relates to the Minimum Income Guarantee (MIG) top-up — an
      additional amount above the statutory minimum that residents are currently
      allowed to keep before being asked to contribute towards care costs. The
      council is proposing to reduce this top-up over two years, from 25% to 10%
      and then to 0%, bringing Waltham Forest in line with many other councils.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      This change could affect approximately 2,500 residents who receive community
      care and support. Of those, around 1,400 currently pay nothing towards their
      care. If the top-up is reduced, around 350 of those residents may begin
      contributing a small amount.
      </p>
      <div className="mt-5">
      <a href="https://talk.walthamforest.gov.uk/charging-policy-consultation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded bg-[#bf3688] px-6 py-3 text-base font-bold text-white hover:bg-[#a02d73] transition-colors">
        Have your say on the charging policy consultation
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </a>
      </div>
      </div>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Previous consultations</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      When consultations close, the council publishes the outcome and explains
      what decisions were made. Check the council's main consultations page for
      a full list of current and previous consultations across all council
      services.
      </p>
      <div className="mt-4">
      <a href="https://www.walthamforest.gov.uk/consultations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-wf-blue underline hover:text-wf-green font-semibold">
        View all council consultations
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </a>
      </div>
      <p className="mt-6 text-wf-dark leading-relaxed">
      Recent past consultations include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Adult Social Care charging policy review (2025):</strong>{" "}
      Consultation on proposed changes to our charging policy and fairer
      contributions framework
      </li>
      <li>
      <strong>Day opportunities service redesign (2025):</strong>{" "}
      Consultation on how day services for adults with learning disabilities
      and older people should be delivered
      </li>
      <li>
      <strong>Carers strategy (2024):</strong>{" "}
      Consultation on the council's strategy for supporting unpaid carers
      </li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to participate</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      When a consultation is open, you can take part by:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Completing the online survey</li>
      <li>Attending a public consultation event or focus group</li>
      <li>Submitting a written response by email or post</li>
      <li>Requesting an accessible version of consultation documents (such as Easy Read or large print)</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We aim to make all consultations accessible and will provide reasonable
      adjustments on request. If you need help participating, please contact us.
      </p>
      </section>

      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For questions about consultations or to request accessible formats, contact
      our team.
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