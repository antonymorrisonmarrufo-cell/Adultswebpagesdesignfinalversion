import { Link } from "react-router-dom";

export default function CarersHubPage() {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
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
            <li><span className="font-medium text-wf-dark">Carers Hub</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Carers Hub</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            The Waltham Forest Carers Hub is a welcoming space where carers can get information, advice,
            and support. Whether you need practical help or just want to meet other carers, you are welcome
            to visit.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Location */}
        <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Where to find us</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The Carers Hub is located in the heart of Waltham Forest and is easily accessible by public transport.
            The Hub is wheelchair accessible with step-free access throughout.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            <strong>Opening hours:</strong> Monday to Friday, 9am to 5pm
          </p>
          <p className="mt-2 text-wf-dark">
            <strong>Phone:</strong> <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>
          </p>
        </section>

        {/* Services */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Services available at the Hub</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The Carers Hub offers a wide range of services under one roof:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Information and advice</strong> - about benefits, services, rights, and entitlements</li>
            <li><strong>Carers assessments</strong> - you can request and have your assessment at the Hub</li>
            <li><strong>Benefits advice</strong> - help with claiming benefits and checking entitlements</li>
            <li><strong>Counselling</strong> - free emotional support and counselling for carers</li>
            <li><strong>Training and workshops</strong> - practical skills and knowledge for your caring role</li>
            <li><strong>Social activities</strong> - coffee mornings, craft sessions, and wellbeing activities</li>
            <li><strong>Peer support</strong> - the chance to meet other carers and share experiences</li>
          </ul>
        </section>

        {/* Drop-in sessions */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Drop-in sessions</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            You do not need an appointment to visit the Carers Hub. Drop-in sessions are available throughout
            the week where you can:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Speak to a member of staff about any caring issue</li>
            <li>Get help filling in forms or applications</li>
            <li>Find out about local services and activities</li>
            <li>Have a cup of tea and a chat with other carers</li>
          </ul>
        </section>

        {/* Hub sub-pages */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-6">Explore the Hub</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/carers/hubs/adult-carers"
              className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
            >
              <h3 className="text-lg font-bold text-[#004E3E]">Adult carers hub</h3>
              <p className="mt-2 text-sm text-wf-gray">
                Dedicated support, activities, and resources for adult carers.
              </p>
            </Link>

            <Link
              to="/carers/hubs/parent-carers"
              className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
            >
              <h3 className="text-lg font-bold text-[#004E3E]">Parent carers hub</h3>
              <p className="mt-2 text-sm text-wf-gray">
                Support and resources specifically for parents of disabled children.
              </p>
            </Link>

            <Link
              to="/carers/hubs/young-carers"
              className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
            >
              <h3 className="text-lg font-bold text-[#004E3E]">Young carers hub</h3>
              <p className="mt-2 text-sm text-wf-gray">
                A dedicated space for young carers with activities and peer support.
              </p>
            </Link>

            <Link
              to="/carers/hubs/universal-offer"
              className="block rounded-md bg-white p-6 shadow-sm border border-wf-gray-light hover:border-wf-green hover:shadow-md transition-all no-underline"
            >
              <h3 className="text-lg font-bold text-[#004E3E]">Universal offer</h3>
              <p className="mt-2 text-sm text-wf-gray">
                Support available to all carers without the need for an assessment.
              </p>
            </Link>
          </div>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/carers" className="text-wf-blue underline hover:text-wf-green">
                Being a carer
              </Link>
            </li>
            <li>
              <Link to="/carers/support" className="text-wf-blue underline hover:text-wf-green">
                Support for carers
              </Link>
            </li>
            <li>
              <Link to="/carers/support/local-groups-services" className="text-wf-blue underline hover:text-wf-green">
                Local groups and services
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
