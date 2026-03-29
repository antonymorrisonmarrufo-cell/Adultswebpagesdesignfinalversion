import { Link } from "react-router-dom";

export default function AbuseAndNeglectPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-wf-gray-light bg-white">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">Safeguarding adults</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Types of abuse and neglect</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Types of abuse and neglect</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Abuse and neglect can take many forms. Understanding the different types can help you to
            recognise when someone may be at risk and needs help.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <p className="mb-8 text-wf-dark leading-relaxed">
          The Care Act 2014 identifies the following categories of abuse and neglect. An adult at risk may
          experience one or more types of abuse at the same time. Abuse can be a single incident or a
          pattern of behaviour over time.
        </p>

        {/* Physical abuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Physical abuse</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Physical abuse includes hitting, slapping, pushing, kicking, misuse of medication, restraint,
            or inappropriate physical sanctions. Signs may include unexplained bruises, burns, fractures,
            or a person appearing fearful or withdrawn around certain individuals.
          </p>
        </section>

        {/* Emotional / psychological abuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Emotional or psychological abuse</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            This includes threats of harm or abandonment, deprivation of contact, humiliation, blaming,
            controlling, intimidation, coercion, harassment, verbal abuse, cyber-bullying, isolation, or
            unreasonable and unjustified withdrawal of services or support. Signs may include low
            self-esteem, fearfulness, withdrawal, or changes in behaviour.
          </p>
        </section>

        {/* Sexual abuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Sexual abuse</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Sexual abuse involves forcing or enticing an adult to take part in sexual activities, whether or
            not the person is aware of what is happening. It includes rape, indecent exposure, sexual
            harassment, inappropriate looking or touching, sexual teasing, subjection to pornography, or
            sexual acts to which the adult has not consented or was pressured into consenting.
          </p>
        </section>

        {/* Financial or material abuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Financial or material abuse</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Financial abuse includes theft, fraud, internet scamming, coercion in relation to financial
            affairs or arrangements including wills, property, inheritance or financial transactions. It also
            covers the misuse or misappropriation of property, possessions, or benefits. Signs may include
            unexplained withdrawals from bank accounts, missing personal belongings, or sudden changes in
            financial circumstances.
          </p>
        </section>

        {/* Neglect and acts of omission */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Neglect and acts of omission</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Neglect includes ignoring medical, emotional, or physical care needs, failure to provide access
            to appropriate health, care, and support or educational services, the withholding of the
            necessities of life such as medication, adequate nutrition and heating. Self-neglect is covered
            separately below. Signs may include poor personal hygiene, untreated medical conditions, weight
            loss, or inadequate living conditions.
          </p>
        </section>

        {/* Discriminatory abuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Discriminatory abuse</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Discriminatory abuse includes forms of harassment, slurs, or similar treatment based on a
            person's race, gender or gender identity, age, disability, sexual orientation, or religion.
            It also includes hate crime and hate incidents. This type of abuse can occur alongside other
            forms of abuse and can be motivated by prejudice.
          </p>
        </section>

        {/* Organisational abuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Organisational abuse</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Organisational abuse includes neglect and poor care practice within an institution or specific
            care setting such as a hospital or care home. It can take the form of one-off incidents,
            ongoing ill-treatment, or a culture of poor practice. It may be the result of a failure in the
            organisation's systems and processes, inadequate staffing, or poor management.
          </p>
        </section>

        {/* Domestic abuse */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Domestic abuse</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Domestic abuse is any incident or pattern of incidents of controlling, coercive, threatening
            behaviour, violence or abuse between those aged 16 or over who are, or have been, intimate
            partners or family members regardless of gender or sexuality. It can encompass psychological,
            physical, sexual, financial, and emotional abuse. Coercive control is now a criminal offence.
          </p>
          <p className="mt-3">
            <Link to="/safeguarding/marac" className="text-wf-blue underline hover:text-wf-green">
              Learn about MARAC for high-risk domestic abuse cases
            </Link>
          </p>
        </section>

        {/* Modern slavery */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Modern slavery</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Modern slavery encompasses slavery, human trafficking, forced and compulsory labour, and
            domestic servitude. Traffickers and slave masters use whatever means they have at their disposal
            to coerce, deceive, and force individuals into a life of abuse, servitude, and inhumane
            treatment. Signs may include a person appearing malnourished, anxious, withdrawn, or being
            accompanied by someone who controls their movements.
          </p>
        </section>

        {/* Self-neglect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Self-neglect</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Self-neglect covers a wide range of behaviour including neglecting to care for one's personal
            hygiene, health or surroundings. It includes hoarding. Self-neglect does not necessarily involve
            another person, but it is included in the safeguarding framework because professionals working
            with people who self-neglect may need a multi-agency response to support the individual.
          </p>
        </section>

        {/* Reporting concerns */}
        <section className="mb-8 rounded-md border-l-4 border-wf-green bg-wf-green-light p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Worried about someone?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If you recognise any of these types of abuse or neglect in someone you know, please do not
            ignore it. You can report your concerns at any time.
          </p>
          <p className="mt-3 text-wf-dark">
            <strong>Phone:</strong>{" "}
            <a href="tel:02084963130" className="font-bold text-[#004E3E] no-underline">020 8496 3130</a>
          </p>
          <p className="mt-2">
            <Link to="/safeguarding/report-abuse" className="text-wf-blue underline hover:text-wf-green font-medium">
              How to report abuse or neglect
            </Link>
          </p>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/safeguarding/report-abuse" className="text-wf-blue underline hover:text-wf-green">
                Report abuse or neglect
              </Link>
            </li>
            <li>
              <Link to="/safeguarding/what-happens-after" className="text-wf-blue underline hover:text-wf-green">
                What happens after a concern is raised
              </Link>
            </li>
            <li>
              <Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">
                Safeguarding adults overview
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
