import { Link } from "react-router-dom";

export default function RequestHousingCareSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/care-homes" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Request housing and care support</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Request housing and care support</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            If you or someone you care about needs help with housing and care, you can request
            an assessment from Waltham Forest Council. We will work with you to understand your
            needs and find the right support.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Who can request support */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who can request support?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You can request a housing and care assessment if you:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Are an adult (aged 18 or over) living in Waltham Forest</li>
            <li>Have care and support needs due to a physical or mental health condition, disability, or age</li>
            <li>Need help to live safely and independently in suitable accommodation</li>
            <li>Are a carer requesting support on behalf of someone you look after</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You do not need a referral from your GP or any other professional. Anyone can
            request an assessment, including family members, friends, or professionals
            involved in your care.
          </p>
        </section>

        {/* What happens during an assessment */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What happens during an assessment?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            A social worker or assessor will talk to you about your needs, your current
            living situation, and what kind of support would help you most. The assessment
            will consider:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Your physical and mental health needs</li>
            <li>Your current home and whether it is suitable for your needs</li>
            <li>Any risks to your safety or wellbeing</li>
            <li>What support you already receive from family, friends, or services</li>
            <li>Your preferences and what matters most to you</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            After the assessment, we will discuss the options available to you. This might
            include supported living, extra care housing, sheltered housing, a care home, or
            other types of support.
          </p>
        </section>

        {/* How to request an assessment */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to request an assessment</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You can request a housing and care assessment in the following ways:
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-md border border-wf-gray-light p-4">
              <h3 className="text-lg font-bold text-[#004E3E]">By telephone</h3>
              <p className="mt-2 text-wf-dark">
                Call our Adult Social Care team on{" "}
                <a href="tel:02084963130" className="text-wf-blue underline font-semibold">
                  020 8496 3130
                </a>
              </p>
              <p className="mt-1 text-sm text-wf-gray">
                Monday to Friday, 9am to 5pm (excluding bank holidays)
              </p>
            </div>
            <div className="rounded-md border border-wf-gray-light p-4">
              <h3 className="text-lg font-bold text-[#004E3E]">Online</h3>
              <p className="mt-2 text-wf-dark">
                Complete our{" "}
                <a
                  href="https://www.walthamforest.gov.uk/adult-social-care-request"
                  className="text-wf-blue underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  online referral form
                </a>{" "}
                on the Waltham Forest Council website.
              </p>
            </div>
            <div className="rounded-md border border-wf-gray-light p-4">
              <h3 className="text-lg font-bold text-[#004E3E]">By email</h3>
              <p className="mt-2 text-wf-dark">
                Email us at{" "}
                <a href="mailto:socialcaredirect@walthamforest.gov.uk" className="text-wf-blue underline">
                  socialcaredirect@walthamforest.gov.uk
                </a>
              </p>
            </div>
            <div className="rounded-md border border-wf-gray-light p-4">
              <h3 className="text-lg font-bold text-[#004E3E]">In person</h3>
              <p className="mt-2 text-wf-dark">
                Visit Waltham Forest Town Hall, Forest Road, Walthamstow, London E17 4JF.
              </p>
              <p className="mt-1 text-sm text-wf-gray">
                Monday to Friday, 9am to 5pm
              </p>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What to expect after your request</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            After you contact us, we will:
          </p>
          <ol className="mt-3 ml-6 list-decimal space-y-2 text-wf-dark leading-relaxed">
            <li>Acknowledge your request and ask for any additional information we need</li>
            <li>Arrange an assessment at a time and place that suits you (this may be at your home, by telephone, or at our offices)</li>
            <li>Complete the assessment and discuss the outcomes with you</li>
            <li>Agree a support plan if you are eligible for services</li>
          </ol>
          <p className="mt-3 text-wf-dark leading-relaxed">
            We aim to complete assessments within 28 days of your request, although urgent
            cases will be dealt with more quickly.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/care-homes" className="text-wf-blue underline hover:text-wf-green">
                Housing and care homes
              </Link>
            </li>
            <li>
              <Link to="/care-homes/supported-living" className="text-wf-blue underline hover:text-wf-green">
                Supported living
              </Link>
            </li>
            <li>
              <Link to="/care-homes/extra-care-housing" className="text-wf-blue underline hover:text-wf-green">
                Extra care housing
              </Link>
            </li>
            <li>
              <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
                Paying for care
              </Link>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
