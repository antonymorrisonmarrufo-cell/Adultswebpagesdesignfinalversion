import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Equipment and assistive technology", to: "/live-independently/equipment" },
  { title: "Home adaptations", to: "/live-independently/home-adaptations" },
  { title: "How to get support", to: "/how-to-get-support" },
  { title: "Live independently", to: "/live-independently" },
  { title: "Physical disabilities support", to: "/physical-disabilities" },
];

export default function VisualHearingPage() {
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
            <li>
              <span className="font-medium text-wf-dark">Visual and hearing support</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Visual and hearing support
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          {/* Sensory services team */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Sensory services team</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The Waltham Forest Sensory Services team provides specialist support
              for adults with visual impairments, hearing loss or dual sensory
              loss. Our qualified rehabilitation officers can assess your needs and
              help you develop skills to live as independently as possible.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The team can help with:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Assessment of your sensory needs</li>
              <li>Rehabilitation and mobility training</li>
              <li>Information and advice about equipment and services</li>
              <li>Emotional support following a diagnosis</li>
              <li>Signposting to local and national organisations</li>
              <li>Registration as sight impaired or severely sight impaired</li>
            </ul>
          </section>

          {/* Visual impairment */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Visual impairment</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you are living with sight loss, we can provide a range of support
              to help you maintain your independence and quality of life.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Registration</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              Your eye specialist (ophthalmologist) can certify you as sight
              impaired (partially sighted) or severely sight impaired (blind) using
              a Certificate of Vision Impairment (CVI). Once certified, the
              council will add you to the register of visually impaired people,
              which may entitle you to certain benefits and concessions, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>A reduction in your council tax</li>
              <li>A disabled person's railcard</li>
              <li>Free NHS sight tests</li>
              <li>Help with NHS prescription costs</li>
              <li>A blind person's tax allowance (if severely sight impaired)</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Guide dogs</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              Guide Dogs is a national charity that provides guide dogs, mobility
              services and other support to people with sight loss. You can contact
              Guide Dogs directly on 0800 953 0113 or visit{" "}
              <a
                href="https://www.guidedogs.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wf-blue underline hover:text-wf-green"
              >
                guidedogs.org.uk
              </a>{" "}
              for more information.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Equipment</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              A wide range of equipment is available to help people with sight loss
              manage daily tasks, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Talking clocks, watches and kitchen scales</li>
              <li>Large-print and high-contrast items</li>
              <li>Magnifiers and reading aids</li>
              <li>Liquid level indicators for safe pouring</li>
              <li>Bump-on dots and tactile markers for labelling</li>
              <li>Screen-reading software and accessible technology</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">RNIB resources</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              The Royal National Institute of Blind People (RNIB) offers advice,
              information and practical support for anyone affected by sight loss.
              You can call the RNIB helpline on 0303 123 9999 or visit{" "}
              <a
                href="https://www.rnib.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wf-blue underline hover:text-wf-green"
              >
                rnib.org.uk
              </a>
              .
            </p>
          </section>

          {/* Hearing impairment */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Hearing impairment</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you have hearing loss, our sensory services team can help you
              access the support and equipment you need.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Hearing aids</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              Hearing aids are available free of charge through the NHS. Your GP
              can refer you to an audiology service for a hearing test and, if
              appropriate, a hearing aid fitting. The NHS also provides batteries
              and repairs for NHS hearing aids.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">BSL interpretation</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              If you use British Sign Language (BSL), you have the right to access
              BSL interpreters when using public services. The council can arrange
              BSL interpreters for appointments with social care, housing and other
              council services. You can also use online BSL interpreting services
              such as SignLive and InterpreterNow.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Equipment for hearing loss</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              Equipment that can help people with hearing loss includes:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Amplified and textphones</li>
              <li>Flashing or vibrating doorbells and smoke alarms</li>
              <li>Hearing loop systems for the home</li>
              <li>Television amplifiers and subtitling devices</li>
              <li>Personal listeners for conversations</li>
              <li>Alarm clocks with vibrating pads or flashing lights</li>
            </ul>
          </section>

          {/* Dual sensory loss */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Dual sensory loss</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Dual sensory loss (also known as deafblindness) is a combination of
              sight and hearing loss that affects a person's ability to
              communicate, access information and get around. It does not
              necessarily mean someone is totally deaf and totally blind.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you have dual sensory loss, you are entitled to an assessment by a
              suitably qualified person from the council. We can provide:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Specialist communication support, including deafblind interpreters</li>
              <li>One-to-one rehabilitation to help you develop daily living skills</li>
              <li>Help with technology and equipment</li>
              <li>Emotional support and counselling</li>
              <li>Signposting to Sense, the national charity for deafblind people (0300 330 9256)</li>
            </ul>
          </section>

          {/* Assistive technology */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Assistive technology</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Modern technology can make a significant difference to the
              independence and quality of life of people with sensory impairments.
              Our team can advise on:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Screen readers and magnification software for computers and smartphones</li>
              <li>Voice assistants and smart home devices</li>
              <li>GPS and navigation apps for people with sight loss</li>
              <li>Speech-to-text and captioning apps for people with hearing loss</li>
              <li>Bluetooth connectivity for hearing aids</li>
              <li>Video relay services for BSL users</li>
              <li>Telecare and community alarm systems</li>
            </ul>
          </section>

          {/* How to access services */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">How to access services</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You do not need a referral from your GP to access our sensory
              services. You can contact us directly, or ask a family member, friend
              or professional to contact us on your behalf. We will arrange an
              assessment to understand your needs and agree a support plan.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You can also be referred by:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Your GP or hospital consultant</li>
              <li>An optician or audiologist</li>
              <li>Another health or social care professional</li>
              <li>A voluntary organisation</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              To find out more about sensory services in Waltham Forest, or to
              request an assessment, contact our Adult Social Care team.
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
                <Link
                  to={page.to}
                  className="text-wf-blue underline hover:text-wf-green"
                >
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
