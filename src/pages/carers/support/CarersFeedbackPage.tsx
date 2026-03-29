import { Link } from "react-router-dom";

export default function CarersFeedbackPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
          <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/carers" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">Support for carers</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Carers feedback</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Carers feedback</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Your feedback helps us to improve services for carers in Waltham Forest. Whether you want to share
          a positive experience, raise a concern, or make a complaint, we want to hear from you.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* How to share feedback */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to share your feedback</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          There are several ways you can share your views about carer services:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Phone</strong> - call our Adult Social Care team on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>
          </li>
          <li><strong>In person</strong> - speak to a member of staff at the Carers Hub or during a drop-in session</li>
          <li><strong>In writing</strong> - write to Adult Social Care, Waltham Forest Council, Town Hall, Forest Road, London E17 4JF</li>
          <li><strong>Through your social worker</strong> - if you have an allocated worker, you can share feedback directly with them</li>
          </ul>
          </section>

          {/* Complaints */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Making a complaint</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you are unhappy with a service you have received, you have the right to complain. We take all
          complaints seriously and will investigate your concerns. Our complaints process:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Stage 1</strong> - we will try to resolve your complaint informally and respond within 10 working days</li>
          <li><strong>Stage 2</strong> - if you are not satisfied, your complaint will be investigated by a senior manager</li>
          <li><strong>Local Government Ombudsman</strong> - if you have been through our complaints process and are still unhappy, you can contact the Local Government and Social Care Ombudsman</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You can also ask someone else to make a complaint on your behalf, such as a friend, family member,
          or an advocate.
          </p>
          </section>

          {/* Compliments */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Sending a compliment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If a member of staff or a service has made a positive difference to you, we would love to hear about
          it. Compliments help us understand what is working well and motivate our teams. You can send a
          compliment using any of the contact methods above.
          </p>
          </section>

          {/* Annual survey */}
          <section className="mb-8 rounded-md bg-white p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Annual carers survey</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Each year, we carry out a survey of carers to understand your experiences and identify areas for
          improvement. If you are invited to take part, please do complete the survey - your responses are
          anonymous and directly influence how we develop carer services.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">
          Support for carers
          </Link>
          </li>
          <li>
          <Link to="/complaints-compliments" className="text-wf-blue underline hover:text-wf-green">
          Complaints and compliments
          </Link>
          </li>
          <li>
          <a href="https://www.lgo.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Local Government and Social Care Ombudsman
          </a>
          </li>
          </ul>
          </section>

          {/* Last updated */}
          <p className="text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
