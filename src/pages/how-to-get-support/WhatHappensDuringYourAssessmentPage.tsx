import { Link } from "react-router-dom";

const relatedPages = [
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "Request an assessment", to: "/how-to-get-support/request-assessment" },
  { title: "Getting a care and support plan", to: "/how-to-get-support/getting-care-and-support-plan" },
];

export default function WhatHappensDuringYourAssessmentPage() {
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
              <Link to="/how-to-get-support" className="text-wf-blue underline hover:text-wf-green">How to get support</Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">What happens during your assessment</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          What happens during your assessment
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <p className="text-wf-dark leading-relaxed">
              A care needs assessment is a conversation between you and a social care
              professional. It is designed to understand your situation, what matters
              to you and how we can help you live as independently as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">The assessment process</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              During the assessment, a social worker or trained assessor will talk with
              you about your daily life. They will ask about:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Your physical and mental health conditions</li>
              <li>How you manage everyday tasks such as washing, dressing, cooking and cleaning</li>
              <li>Your ability to get around, both at home and in the community</li>
              <li>Your relationships, social life and emotional wellbeing</li>
              <li>Any risks to your safety or wellbeing</li>
              <li>What support you already receive, including from family or friends</li>
              <li>Your goals, wishes and what a good life looks like for you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to prepare</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You do not need to do anything special to prepare, but you may find it
              helpful to:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Think about the things you find difficult and when you most need help</li>
              <li>Make a list of any medications you take</li>
              <li>Gather information about your health conditions and any appointments</li>
              <li>Ask a family member, friend or advocate to be with you during the assessment</li>
              <li>Write down any questions you want to ask</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You have the right to have someone with you during the assessment. If you
              do not have anyone, we can arrange an independent advocate to support you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Possible outcomes</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              After the assessment, the assessor will determine whether you have eligible
              needs under the Care Act 2014. The possible outcomes are:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Eligible needs identified:</strong> You will receive a care and
                support plan setting out how your needs will be met, including a personal
                budget
              </li>
              <li>
                <strong>Needs identified but not eligible:</strong> You will be given
                information and advice about other support available in the community
              </li>
              <li>
                <strong>No current needs:</strong> You will be given information about
                how to contact us in the future if your situation changes
              </li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Whatever the outcome, you will receive a written copy of the assessment
              and a clear explanation of the decision. If you disagree with the outcome,
              you have the right to ask for a review.
            </p>
          </section>

          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              If you have questions about the assessment process, our team is here to help.
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
