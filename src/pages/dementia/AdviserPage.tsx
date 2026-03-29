import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Getting help and support", to: "/adult-social-care/dementia-support/get-help" },
  { title: "Hornbeam Dementia Hub", to: "/adult-social-care/dementia-support/hub" },
  { title: "Support for carers", to: "/adult-social-care/dementia-support/carers" },
  { title: "Planning for the future", to: "/adult-social-care/dementia-support/planning" },
];

export default function AdviserPage() {
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
              <Link to="/adult-social-care/dementia-support" className="text-wf-blue underline hover:text-wf-green">Dementia support</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Dementia adviser service</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Dementia adviser service
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          {/* About the service */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">About the service</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The dementia adviser service provides free, personalised support for
              people living with dementia and their carers in Waltham Forest. Your
              dementia adviser is a single, named point of contact who can help you
              navigate life after a dementia diagnosis.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The service is delivered in partnership with the Alzheimer's Society and
              is available to anyone living in the borough who has a dementia diagnosis
              or is caring for someone with dementia.
            </p>
          </section>

          {/* One-to-one support */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">One-to-one support</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your dementia adviser will work with you on a one-to-one basis to
              understand your needs and provide tailored support. This can include face-
              to-face meetings, telephone calls or home visits, depending on your
              preference.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your adviser will stay in touch over time and can provide ongoing support
              as your needs change. They are there to listen, answer questions and
              connect you with the right services.
            </p>
          </section>

          {/* What they help with */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What they help with</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Dementia advisers can help with a wide range of issues, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Understanding your diagnosis and what it means for you</li>
              <li>Information about dementia, its progression and treatment options</li>
              <li>Accessing local services, activities and support groups</li>
              <li>Benefits and financial advice, including Attendance Allowance</li>
              <li>Planning for the future, including lasting power of attorney</li>
              <li>Practical help with daily living, safety at home and assistive technology</li>
              <li>Emotional support for you and your family</li>
              <li>Signposting to specialist services such as legal advice or housing support</li>
              <li>Support during hospital stays and transitions of care</li>
            </ul>
          </section>

          {/* How to access */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to access the service</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You can access the dementia adviser service in several ways:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Self-referral</strong> - contact the service directly by
                telephone or visit the Hornbeam Dementia Hub
              </li>
              <li>
                <strong>GP or health professional referral</strong> - your GP, nurse or
                other health professional can refer you
              </li>
              <li>
                <strong>Memory assessment service</strong> - you may be referred
                automatically after receiving a diagnosis
              </li>
              <li>
                <strong>Social worker referral</strong> - your social worker or care
                coordinator can make a referral on your behalf
              </li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The service is free and confidential. You do not need a formal diagnosis
              to access support - if you are worried about memory problems, the team
              can still help.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact the dementia adviser service</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              To speak to a dementia adviser or to make a referral, please get in touch.
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
