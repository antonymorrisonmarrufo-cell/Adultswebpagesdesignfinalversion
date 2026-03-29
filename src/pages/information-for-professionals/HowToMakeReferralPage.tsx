import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Information for professionals", to: "/information-for-professionals" },
  { title: "Key teams and contact details", to: "/information-for-professionals/key-teams-contact-details" },
  { title: "Request an assessment", to: "/how-to-get-support/request-assessment" },
];

export default function HowToMakeReferralPage() {
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
              <Link to="/information-for-professionals" className="text-wf-blue underline hover:text-wf-green">Information for professionals</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">How to make a referral</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          How to make a referral
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              If you are a health or social care professional and believe someone needs
              adult social care support, you can make a referral to Waltham Forest
              Council. This page explains how to do so and what information to include.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Online referral form</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The quickest way to make a referral is through our online professional
              referral form. The form is available on the Waltham Forest Council website
              and can be submitted securely at any time.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block rounded bg-wf-green px-6 py-3 text-sm font-semibold text-white shadow hover:bg-wf-green/90 transition"
              >
                Access the professional referral form
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What to include in your referral</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              To help us process the referral quickly, please include the following
              information:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Full name, date of birth, address and NHS number of the person</li>
              <li>Your name, role and contact details</li>
              <li>The reason for the referral and the person's presenting needs</li>
              <li>Relevant medical history and current health conditions</li>
              <li>Any existing care or support currently in place</li>
              <li>Details of any risk factors, including safeguarding concerns</li>
              <li>GP details and any other professionals involved</li>
              <li>Whether the person has given consent to the referral</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Consent requirements</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Wherever possible, you should obtain the person's consent before making a
              referral. Please indicate on the referral form whether consent has been
              given. A referral can be made without consent in the following circumstances:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>The person lacks the mental capacity to give consent</li>
              <li>There is a safeguarding concern and the person or others may be at risk</li>
              <li>There is a legal duty to share information (for example, under the Mental Health Act)</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If the referral is made without consent, please explain the reason in the
              referral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What happens after you refer</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Once we receive your referral, we will:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Acknowledge receipt within two working days</li>
              <li>Screen the referral to determine the appropriate response</li>
              <li>Contact the person to arrange an assessment where appropriate</li>
              <li>Update the referring professional on the outcome</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Urgent referrals, including safeguarding concerns, will be prioritised and
              actioned on the same day wherever possible.
            </p>
          </section>

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              For urgent referrals or queries, call our Adult Social Care team.
            </p>
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
