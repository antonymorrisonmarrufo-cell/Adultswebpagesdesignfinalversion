import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Complaints and compliments", to: "/adult-social-care/complaints-compliments" },
  { title: "Make a complaint", to: "/adult-social-care/complaints-compliments/make-complaint" },
  { title: "Understand your rights", to: "/adult-social-care/understand-your-rights" },
];

export default function IndependentHelpAdvocacyPage() {
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
              <Link to="/adult-social-care/complaints-compliments" className="text-wf-blue underline hover:text-wf-green">Complaints and compliments</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Independent help and advocacy</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Independent help and advocacy
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              An advocate is an independent person who can help you express your views,
              understand your rights and make sure your voice is heard in decisions about
              your care and support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What advocates do</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              An independent advocate can:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Help you understand information about your care and support</li>
              <li>Support you to express your views and wishes</li>
              <li>Help you make decisions about your care</li>
              <li>Attend meetings with you, such as assessments, care plan reviews or safeguarding meetings</li>
              <li>Help you make a complaint or challenge a decision</li>
              <li>Write letters or make phone calls on your behalf</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Advocates are independent of the council and the NHS. They work for you,
              not for the organisations providing your care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Types of advocacy</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              There are different types of advocacy depending on your situation:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Independent Mental Capacity Advocate (IMCA):</strong> For people
                who lack mental capacity and have no one appropriate to represent them in
                decisions about serious medical treatment, changes of accommodation or
                safeguarding
              </li>
              <li>
                <strong>Independent Mental Health Advocate (IMHA):</strong> For people
                who are detained under the Mental Health Act, or subject to a community
                treatment order or guardianship
              </li>
              <li>
                <strong>Care Act advocacy:</strong> For anyone who has difficulty being
                involved in their assessment, care planning or review, and who has no
                suitable person to support them
              </li>
              <li>
                <strong>NHS complaints advocacy:</strong> For help making a complaint
                about NHS services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to access an advocate</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Advocacy services are free. You can access an advocate by:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Asking your social worker to make a referral</li>
              <li>Contacting the local advocacy service directly</li>
              <li>Asking a family member, friend or other professional to refer you</li>
              <li>Contacting our Adult Social Care team for help finding an advocate</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The council has a legal duty to arrange an advocate for you if you have
              difficulty being involved in decisions about your care and have no suitable
              person to support you.
            </p>
          </section>

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              For help finding an independent advocate, contact our team.
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
