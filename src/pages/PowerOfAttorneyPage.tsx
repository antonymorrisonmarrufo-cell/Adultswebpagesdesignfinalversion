import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Safeguarding adults", to: "/adult-social-care/protecting-adults-at-risk" },
  { title: "Paying for care", to: "/adult-social-care/paying-for-care" },
  { title: "Dementia support", to: "/adult-social-care/specialist-services/dementia-support" },
  { title: "How to get support", to: "/adult-social-care/how-to-get-support" },
  { title: "Support for carers", to: "/adult-social-care/being-carer/support-for-carers" },
];

export default function PowerOfAttorneyPage() {
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
      <li>
      <span className="font-medium text-wf-dark">Power of attorney</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Power of attorney
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* What LPA is */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">What lasting power of attorney is</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A lasting power of attorney (LPA) is a legal document that lets you
      (the "donor") choose someone you trust (the "attorney") to make
      decisions on your behalf. It can be used if you lose the mental
      capacity to make your own decisions, or if you still have capacity
      but want someone to act for you.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      An LPA can only be made while you have mental capacity - that is,
      while you are able to understand the decisions you are making. This
      is why it is important to set one up before you need it, rather than
      waiting until it may be too late.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can choose one or more attorneys, and you can decide whether they
      must act together (jointly) or can make decisions independently
      (jointly and severally).
      </p>
      </section>

      {/* Types of LPA */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Types of lasting power of attorney</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      There are two types of LPA, and you can choose to make one or both:
      </p>

      <h3 className="mt-6 text-lg font-semibold text-wf-dark">Health and welfare LPA</h3>
      <p className="mt-2 text-wf-dark leading-relaxed">
      This covers decisions about your health and personal welfare,
      including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Your daily routine, such as washing, dressing and eating</li>
      <li>Medical treatment and care</li>
      <li>Where you live</li>
      <li>Moving into a care home</li>
      <li>Life-sustaining treatment (if you choose to give your attorney this power)</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A health and welfare LPA can only be used when you lack the mental
      capacity to make the decision yourself.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-wf-dark">Property and financial affairs LPA</h3>
      <p className="mt-2 text-wf-dark leading-relaxed">
      This covers decisions about your money and property, including:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Managing your bank accounts and investments</li>
      <li>Paying your bills and debts</li>
      <li>Collecting your benefits or pension</li>
      <li>Selling or renting out your property</li>
      <li>Making gifts on your behalf</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A property and financial affairs LPA can be used while you still have
      capacity (with your permission) as well as if you lose capacity.
      </p>
      </section>

      {/* How to set up */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to set up an LPA</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You can set up an LPA yourself or with help from a solicitor. The
      process involves:
      </p>
      <ol className="mt-3 list-decimal pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Fill in the LPA form</strong> - you can do this online at{" "}
      <a
      href="https://www.gov.uk/lasting-power-attorney"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      gov.uk/lasting-power-attorney
      </a>{" "}
      or use a paper form
      </li>
      <li>
      <strong>Choose your attorney(s)</strong> - pick someone you trust who
      is over 18. For a property and financial LPA, they must not be
      bankrupt
      </li>
      <li>
      <strong>Choose a certificate provider</strong> - an independent
      person who confirms you understand the LPA and are not being
      pressured. This can be someone who has known you well for at least
      two years, or a professional such as a doctor, solicitor or social
      worker
      </li>
      <li>
      <strong>Sign the LPA</strong> - you, your attorneys and the
      certificate provider must all sign the document in the correct order
      </li>
      <li>
      <strong>Register the LPA</strong> - send it to the Office of the
      Public Guardian (OPG) for registration. The LPA can only be used
      once it has been registered
      </li>
      </ol>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Registration typically takes 8 to 10 weeks. You can register the LPA
      as soon as it is signed - you do not have to wait until it is needed.
      </p>
      </section>

      {/* Costs and fee exemptions */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Costs and fee exemptions</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The registration fee for each LPA is &pound;82. If you make both
      types of LPA, the total cost is &pound;164.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      You may be eligible for a reduced fee or exemption:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Fee exemption</strong> - if you receive certain
      means-tested benefits (such as Income Support, income-based
      Jobseeker's Allowance, income-related Employment and Support
      Allowance, or the guarantee element of Pension Credit), you do not
      have to pay the fee
      </li>
      <li>
      <strong>50% reduction</strong> - if your gross annual income is
      below &pound;12,000, you may be entitled to a 50% reduction
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you use a solicitor to help you set up your LPA, there will be
      additional legal fees. Many solicitors offer fixed-fee packages.
      Some local organisations offer free help with completing LPA forms.
      </p>
      </section>

      {/* Office of the Public Guardian */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Office of the Public Guardian</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Office of the Public Guardian (OPG) is the government body that
      registers LPAs and supervises attorneys and deputies. The OPG can
      help if:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>You need help with the LPA registration process</li>
      <li>You want to report concerns about how an attorney is acting</li>
      <li>You need to search the LPA register</li>
      <li>You need to make changes to a registered LPA</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Contact the OPG:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      Telephone: 0300 456 0300 (Monday to Friday, 9am to 5pm)
      </li>
      <li>
      Email: customerservices@publicguardian.gov.uk
      </li>
      <li>
      Website:{" "}
      <a
      href="https://www.gov.uk/government/organisations/office-of-the-public-guardian"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      gov.uk/opg
      </a>
      </li>
      </ul>
      </section>

      {/* Deputyship */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">When someone lacks capacity (deputyship)</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If someone has already lost the mental capacity to make their own
      decisions and does not have an LPA in place, it is too late to set
      one up. In this situation, you may need to apply to the Court of
      Protection for a deputyship order.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      A deputy is appointed by the court to make decisions on behalf of
      someone who lacks capacity. There are two types of deputy:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Property and affairs deputy</strong> - makes decisions about
      money, property and financial matters
      </li>
      <li>
      <strong>Personal welfare deputy</strong> - makes decisions about
      health and welfare (these are less common and only appointed in
      exceptional circumstances)
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Applying for deputyship is more costly and time-consuming than
      setting up an LPA. The application fee is &pound;371, plus an annual
      supervision fee. The process can take several months.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Key things to know about deputyship:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Deputies must act in the person's best interests at all times</li>
      <li>Deputies are supervised by the Office of the Public Guardian</li>
      <li>Deputies may need to provide annual reports and accounts</li>
      <li>Deputies may need to take out a security bond</li>
      <li>The court can remove a deputy if they are not acting properly</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      For more information, visit{" "}
      <a
      href="https://www.gov.uk/become-deputy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      gov.uk/become-deputy
      </a>{" "}
      or contact the Court of Protection on 0300 456 4600.
      </p>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you need advice about lasting power of attorney or deputyship,
      contact our Adult Social Care team. We can provide information and
      signpost you to legal advice services.
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
      <Link
      to={page.to}
      className="text-wf-blue underline hover:text-wf-green"
      >
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