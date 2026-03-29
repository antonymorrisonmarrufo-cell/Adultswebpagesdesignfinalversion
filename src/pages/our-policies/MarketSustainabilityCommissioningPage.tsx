import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Our policies", to: "/our-policies" },
  { title: "Commissioning and provider information", to: "/information-for-professionals/commissioning-provider-information" },
  { title: "Information for professionals", to: "/information-for-professionals" },
];

export default function MarketSustainabilityCommissioningPage() {
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
      <Link to="/our-policies" className="text-wf-blue underline hover:text-wf-green">Our policies</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Market sustainability and commissioning</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Market sustainability and commissioning
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
      The council has a duty under the Care Act 2014 to shape and maintain a
      diverse, sustainable market of care and support services for adults in
      Waltham Forest.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Market position statement</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Our market position statement provides an overview of the adult social
      care market in Waltham Forest, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Current and projected demand for care and support</li>
      <li>The types of services currently available</li>
      <li>Gaps in provision where new services are needed</li>
      <li>Our priorities and commissioning intentions</li>
      <li>Population data and demographic trends</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The market position statement is designed to help existing and potential
      care providers understand the local market and identify opportunities.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Information for providers</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you are a care provider or are interested in providing services in
      Waltham Forest, the following information may be useful:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Current contract and framework opportunities</li>
      <li>Quality standards and expectations for commissioned services</li>
      <li>How we monitor and review provider performance</li>
      <li>How to register as a potential supplier</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      For detailed provider guidance, visit our{" "}
      <Link
      to="/information-for-professionals/commissioning-provider-information"
      className="text-wf-blue underline hover:text-wf-green"
      >
      commissioning and provider information
      </Link>{" "}
      page.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Fair cost of care</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      We are committed to paying a fair price for care services that reflects
      the true cost of delivering quality care. We work with providers through
      regular fee reviews and engagement to ensure rates are sustainable and
      support workforce recruitment and retention.
      </p>
      </section>

      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For questions about commissioning or the care market in Waltham Forest,
      contact our team.
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