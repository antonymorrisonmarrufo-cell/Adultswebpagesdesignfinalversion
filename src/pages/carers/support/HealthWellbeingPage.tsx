import { Link } from "react-router-dom";

export default function HealthWellbeingPage() {
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
            <li><Link to="/carers" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">Support for carers</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Health and wellbeing</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#00635C]">Health and wellbeing for carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Looking after your own health is just as important as looking after the person you care for. There are
            services and programmes in Waltham Forest to support your physical and mental wellbeing.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Free health checks */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Free health checks for carers</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            As a carer, you are entitled to a free annual health check with your GP. This is an opportunity to
            discuss any health concerns, review medications, and check things like blood pressure, weight, and
            cholesterol. Let your GP know that you are a carer so they can flag this on your records.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You should also make sure you are registered as a carer with your GP practice. This means they can:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Offer you flexible or priority appointments</li>
            <li>Send you flu vaccination invitations</li>
            <li>Keep your carer status in mind when providing treatment</li>
          </ul>
        </section>

        {/* Mental health */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Mental health support</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Caring can take a toll on your mental health. It is common for carers to experience stress, anxiety,
            depression, or feelings of isolation. Support is available:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Talking therapies</strong> - free NHS talking therapies are available through self-referral. You do not need a GP referral.</li>
            <li><strong>Carer counselling</strong> - Carers First offers free counselling sessions specifically for carers</li>
            <li><strong>Peer support groups</strong> - meeting other carers who understand what you are going through can make a real difference</li>
            <li><strong>Crisis support</strong> - if you are in crisis, contact the Samaritans on 116 123 (free, 24 hours) or your local mental health crisis line</li>
          </ul>
        </section>

        {/* Exercise and activities */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Exercise and activities</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Staying active helps manage stress and improves your physical and mental health. Opportunities in
            Waltham Forest include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Free or discounted gym sessions and exercise classes for carers</li>
            <li>Walking groups and outdoor activities in local parks</li>
            <li>Yoga and mindfulness sessions at the Carers Hub</li>
            <li>Social activities and day trips organised by local carer groups</li>
          </ul>
        </section>

        {/* Looking after yourself */}
        <section className="mb-8 rounded-md border-l-4 border-[#00635C] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Tips for looking after yourself</h2>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Try to get enough sleep and eat well</li>
            <li>Accept help when it is offered</li>
            <li>Stay connected with friends and family</li>
            <li>Take regular short breaks, even if just for 15 minutes</li>
            <li>Do not be afraid to ask for help - contact us on{" "}
              <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">
                Support for carers
              </Link>
            </li>
            <li>
              <Link to="/carers/support/taking-a-break" className="text-wf-blue underline hover:text-wf-green">
                Taking a break from caring
              </Link>
            </li>
            <li>
              <Link to="/carers/support/local-groups-services" className="text-wf-blue underline hover:text-wf-green">
                Local groups and services
              </Link>
            </li>
            <li>
              <a href="https://www.nhs.uk/mental-health/self-help/" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                NHS - mental health self-help
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-sm text-wf-gray">Last updated: March 2026</p>
      </main>
    </div>
  );
}
