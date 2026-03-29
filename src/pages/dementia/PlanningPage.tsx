import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Getting help and support", to: "/dementia/get-help" },
  { title: "Dementia adviser service", to: "/dementia/adviser" },
  { title: "Support for carers", to: "/dementia/carers" },
  { title: "Memory assessment service", to: "/dementia/memory-service" },
];

export default function PlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
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
              <Link to="/dementia" className="text-wf-blue underline hover:text-wf-green">Dementia support</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Planning for the future</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Planning for the future
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              After a dementia diagnosis, it is important to plan ahead while you are
              still able to make decisions about your care, finances and future wishes.
              Planning early gives you more control and helps your family understand
              what you want.
            </p>
          </section>

          {/* Lasting power of attorney */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Lasting power of attorney</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              A lasting power of attorney (LPA) is a legal document that allows you to
              appoint one or more people (known as attorneys) to make decisions on your
              behalf if you become unable to make them yourself. There are two types:
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-wf-dark">Property and financial affairs LPA</h3>
                <p className="mt-1 text-sm text-wf-dark leading-relaxed">
                  Allows your attorney to make decisions about your money, property and
                  financial matters. This can include paying bills, managing bank
                  accounts and selling property. This LPA can be used while you still
                  have mental capacity, with your consent.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-wf-dark">Health and welfare LPA</h3>
                <p className="mt-1 text-sm text-wf-dark leading-relaxed">
                  Allows your attorney to make decisions about your daily care, medical
                  treatment, where you live and life-sustaining treatment. This LPA can
                  only be used when you lack the mental capacity to make the decision
                  yourself.
                </p>
              </div>
            </div>
            <p className="mt-4 text-wf-dark leading-relaxed">
              You must have mental capacity to set up an LPA. This is why it is important
              to act soon after a diagnosis. An LPA must be registered with the Office of
              the Public Guardian before it can be used. The registration fee is currently
              £82 per LPA, though this may be reduced or waived if you receive certain
              benefits.
            </p>
          </section>

          {/* Advance care planning */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Advance care planning</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Advance care planning is the process of thinking about and recording your
              wishes for future care. This can include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Advance statement</strong> - a written record of your preferences,
                wishes and beliefs about your future care. This is not legally binding but
                should be taken into account by those making decisions on your behalf.
              </li>
              <li>
                <strong>Advance decision to refuse treatment</strong> - a legally binding
                document that sets out specific medical treatments you do not want to
                receive in the future. This is sometimes called a living will.
              </li>
              <li>
                <strong>Preferred priorities for care</strong> - a document that records
                your preferences about where you would like to be cared for and where
                you would like to die.
              </li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your GP, dementia adviser or a specialist nurse can help you with advance
              care planning. It is a good idea to discuss your wishes with your family
              and anyone likely to be involved in your care.
            </p>
          </section>

          {/* Wills */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Making a will</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              A will is a legal document that sets out how you want your property, money
              and possessions to be distributed after your death. If you do not have a
              will, the law will decide what happens to your estate, which may not
              reflect your wishes.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              To make a valid will, you must have testamentary capacity, which means you
              must understand what a will is and what your assets are. If you have
              dementia, you may still be able to make a valid will, particularly in the
              early stages.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              It is advisable to use a solicitor experienced in working with people who
              have dementia. They can ensure the will is properly drawn up and can
              provide evidence of your capacity at the time of making the will.
            </p>
          </section>

          {/* Other considerations */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Other important considerations</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Benefits and financial support</strong> - you may be entitled to
                Attendance Allowance, Personal Independence Payment, Council Tax
                reduction or other benefits. Your dementia adviser can help you check
                your entitlements.
              </li>
              <li>
                <strong>Driving</strong> - you must inform the DVLA if you have a
                diagnosis of dementia. This does not necessarily mean you must stop
                driving immediately, but you will need to be assessed.
              </li>
              <li>
                <strong>Insurance</strong> - check your home, car and travel insurance
                policies, as a dementia diagnosis may affect your cover.
              </li>
              <li>
                <strong>Housing</strong> - consider whether your current home meets your
                future needs. Adaptations, assistive technology or a move to more
                suitable accommodation may be helpful.
              </li>
            </ul>
          </section>

          {/* Getting help */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Getting help with planning</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You do not have to plan alone. The following services can help:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                Your{" "}
                <Link
                  to="/dementia/adviser"
                  className="text-wf-blue underline hover:text-wf-green"
                >
                  dementia adviser
                </Link>{" "}
                can guide you through the planning process
              </li>
              <li>Citizens Advice Waltham Forest offers free legal advice</li>
              <li>
                The Alzheimer's Society has detailed guides on LPAs, wills and advance
                care planning
              </li>
              <li>
                The Office of the Public Guardian provides information and forms for
                setting up an LPA
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              For advice on planning for the future or to be connected with local
              support services, contact our Adult Social Care team.
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
  );
}
