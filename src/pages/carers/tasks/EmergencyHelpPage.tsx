import { Link } from "react-router-dom";

export default function EmergencyHelpPage() {
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
            <li><span className="font-medium text-wf-dark">Getting emergency help</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#00635C]">Getting emergency help as a carer</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            What to do if you have an emergency and cannot provide care, and how to get urgent help.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Immediate danger */}
        <section className="mb-8 rounded-md border-l-4 border-wf-red bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#D61F69]">If someone is in immediate danger</h2>
          <p className="mt-2 text-wf-dark">
            Call <strong>999</strong> immediately. This includes medical emergencies, fires, or if someone is at risk of harm.
          </p>
        </section>

        {/* If you cannot provide care */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">If you suddenly cannot provide care</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If something happens to you and you are unable to care for the person who depends on you, take
            these steps:
          </p>
          <ol className="mt-3 ml-6 list-decimal space-y-2 text-wf-dark leading-relaxed">
            <li><strong>Contact your backup carers</strong> - if you have an emergency plan, contact the people named in it</li>
            <li><strong>Call Adult Social Care</strong> on <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a> (Monday to Friday, 9am to 5pm)</li>
            <li><strong>Out of hours</strong> - call the Emergency Duty Team on <strong>020 8496 3000</strong></li>
            <li><strong>Let emergency services know</strong> - if you are taken to hospital, show your carer emergency card so staff can arrange care</li>
          </ol>
        </section>

        {/* Carer emergency card */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Carer emergency card</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            A carer emergency card is a small card you can carry in your wallet or purse. It lets people know
            that you are a carer and that someone depends on you. If you are involved in an accident or become
            unwell, the card tells emergency services who to contact so backup care can be arranged.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            To get a free carer emergency card, contact us on{" "}
            <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>{" "}
            or ask at the Carers Hub.
          </p>
        </section>

        {/* Planning ahead */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Planning ahead for emergencies</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The best way to handle emergencies is to plan for them in advance:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Create a carer emergency plan with key information about the person you care for</li>
            <li>Identify at least two people who could step in at short notice</li>
            <li>Make sure backup carers know the daily routine and care needs</li>
            <li>Keep a list of medications, health conditions, and professional contacts in an accessible place</li>
            <li>Carry a carer emergency card at all times</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            <Link to="/carers/support/emergency-plan" className="text-wf-blue underline hover:text-wf-green">
              Find out more about creating a carer emergency plan
            </Link>
          </p>
        </section>

        {/* Key contacts */}
        <section className="mb-8 rounded-md border-l-4 border-[#00635C] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Key emergency contacts</h2>
          <ul className="mt-3 space-y-2 text-wf-dark">
            <li><strong>Emergency services:</strong> 999</li>
            <li><strong>NHS non-emergency:</strong> 111</li>
            <li><strong>Adult Social Care:</strong> <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a></li>
            <li><strong>Out of hours Emergency Duty Team:</strong> 020 8496 3000</li>
            <li><strong>Samaritans:</strong> 116 123 (free, 24 hours)</li>
          </ul>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#D61F69]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/carers/support/emergency-plan" className="text-wf-blue underline hover:text-wf-green">
                Carer emergency plan
              </Link>
            </li>
            <li>
              <Link to="/carers/tasks/breaks-respite" className="text-wf-blue underline hover:text-wf-green">
                Arranging breaks and respite
              </Link>
            </li>
            <li>
              <Link to="/carers" className="text-wf-blue underline hover:text-wf-green">
                Being a carer
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
