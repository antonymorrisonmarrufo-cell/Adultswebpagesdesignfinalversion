import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Learning disability support", to: "/adult-social-care/learning-disability" },
  { title: "How to get support", to: "/adult-social-care/how-to-get-support" },
  { title: "Work and disability", to: "/adult-social-care/work-and-disability" },
  { title: "Support for carers", to: "/adult-social-care/carers/support-for-carers" },
  { title: "Live independently", to: "/adult-social-care/live-independently" },
];

export default function AutismSupportPage() {
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
              <span className="font-medium text-wf-dark">Autism support</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Autism support
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          {/* What autism is */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">What autism is</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Autism is a lifelong developmental condition that affects how people
              perceive the world and interact with others. It is a spectrum
              condition, which means it affects people in different ways. Some
              autistic people may need little or no support, while others may need
              help with daily tasks throughout their lives.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Common characteristics of autism include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Differences in social communication and interaction</li>
              <li>Repetitive or restrictive behaviours, interests or activities</li>
              <li>Sensory sensitivities, such as to light, sound, touch or taste</li>
              <li>A preference for routine and predictability</li>
              <li>Difficulty understanding other people's emotions or intentions</li>
            </ul>
          </section>

          {/* Autism in adults */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Autism in adults</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Many autistic adults were not diagnosed in childhood, particularly
              women and people from ethnic minority backgrounds. If you think you
              may be autistic, it is never too late to seek a diagnosis. An autism
              diagnosis can help you understand yourself better and access the right
              support.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Signs of autism in adults can include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Finding it hard to understand what others are thinking or feeling</li>
              <li>Getting very anxious about social situations</li>
              <li>Finding it hard to make friends or preferring to be on your own</li>
              <li>Seeming blunt, rude or not interested in others without meaning to</li>
              <li>Finding it hard to say how you feel</li>
              <li>Having a very keen interest in certain subjects or activities</li>
              <li>Getting upset if your daily routine is disrupted</li>
            </ul>
          </section>

          {/* Getting a diagnosis */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Getting a diagnosis in Waltham Forest</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you are over 18 and think you may be autistic, you can ask your GP
              for a referral to the adult autism diagnostic service. Your GP will
              discuss your concerns and, if appropriate, refer you to a specialist
              team for a full assessment.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The assessment process typically involves:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>A detailed interview about your developmental history</li>
              <li>Questions about your current strengths and difficulties</li>
              <li>Information from someone who knew you as a child (where possible)</li>
              <li>Observation and interaction with a specialist clinician</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Waiting times for assessment can vary. While you are waiting, you can
              still access support through the council and local voluntary
              organisations. Contact our Adult Social Care team for advice.
            </p>
          </section>

          {/* Support available */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Support available</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Waltham Forest Council provides a range of support for autistic
              adults, whether or not you have a formal diagnosis. Support is
              available in the following areas:
            </p>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Social groups and activities</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              We run and support regular social groups where autistic adults can
              meet others, take part in activities and build friendships in a
              supportive environment. These include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Weekly drop-in social groups at community centres</li>
              <li>Art, music and creative workshops</li>
              <li>Walking groups and outdoor activities</li>
              <li>Gaming and technology clubs</li>
              <li>Cookery sessions and life skills groups</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Employment support</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              We can help you find and keep paid employment, including support with
              job searching, interview preparation, workplace adjustments and
              in-work coaching. Our supported employment service works with local
              employers to create autism-friendly workplaces.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-wf-dark">Housing support</h3>
            <p className="mt-2 text-wf-dark leading-relaxed">
              If you need help with housing, we can support you with finding
              suitable accommodation, applying for housing benefit, setting up your
              home and developing independent living skills. Supported living
              options are available for those who need ongoing help.
            </p>
          </section>

          {/* National Autistic Society */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">National Autistic Society resources</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The National Autistic Society (NAS) is the UK's leading charity for
              autistic people. They offer a wealth of information and support,
              including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Autism helpline</strong> - call 0808 800 4104 (Monday to
                Thursday, 10am to 4pm; Friday, 9am to 3pm) for confidential
                information and advice
              </li>
              <li>
                <strong>Online community</strong> - connect with other autistic
                people and families through the NAS online forum
              </li>
              <li>
                <strong>Autism Services Directory</strong> - search for local and
                national services at{" "}
                <a
                  href="https://www.autism.org.uk/directory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wf-blue underline hover:text-wf-green"
                >
                  autism.org.uk/directory
                </a>
              </li>
              <li>
                <strong>Employment resources</strong> - guidance for autistic
                jobseekers and employers
              </li>
              <li>
                <strong>Autism Acceptance Week</strong> - annual awareness campaign
                held each spring
              </li>
            </ul>
          </section>

          {/* Local autism groups */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Local autism groups and services</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Several local organisations in Waltham Forest provide specialist
              support for autistic adults:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Waltham Forest Autism Partnership Board</strong> - brings
                together autistic people, carers, council officers and health
                professionals to shape local autism services
              </li>
              <li>
                <strong>Waltham Forest Community Hub</strong> - offers information,
                advice and signposting for autistic adults and their families
              </li>
              <li>
                <strong>Peer support groups</strong> - run by and for autistic adults,
                providing a safe space to share experiences and advice
              </li>
              <li>
                <strong>Advocacy services</strong> - independent advocates who can
                help you express your views and make sure your voice is heard in
                decisions about your care and support
              </li>
            </ul>
          </section>

          {/* Carers of autistic adults */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Carers of autistic adults</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If you care for an autistic adult, you have the right to a carer's
              assessment to identify your own support needs. This is separate from
              any assessment the person you care for receives.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Support available for carers includes:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Carer's assessment and support plan</li>
              <li>Respite and short breaks</li>
              <li>Carers support groups where you can share experiences</li>
              <li>Training on understanding autism and managing challenges</li>
              <li>Emotional support and counselling</li>
              <li>Help with benefits and financial advice</li>
            </ul>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Visit our{" "}
              <Link
                to="/adult-social-care/carers/support-for-carers"
                className="text-wf-blue underline hover:text-wf-green"
              >
                support for carers
              </Link>{" "}
              page for more information about carers' rights and services.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              To find out more about autism support in Waltham Forest, or to
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
