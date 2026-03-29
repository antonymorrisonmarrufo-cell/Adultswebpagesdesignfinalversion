import { Link } from "react-router-dom";

export default function ParentCarersPage() {
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
            <li><span className="font-medium text-wf-dark">Parent carers</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Parent carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            A parent carer is a parent or guardian who provides additional care for a child or young person
            with a disability, long-term illness, or additional needs. Find out about the support available
            to you and your family.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Support for parent carers */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Support for parent carers</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            As a parent carer, you face unique challenges. The care you provide goes beyond what is expected
            of a parent and can affect your health, finances, work, and family life. You are entitled to:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>A carers assessment to look at how caring affects your life</li>
            <li>Information and advice about services and entitlements</li>
            <li>Support to help you balance caring with other aspects of your life</li>
            <li>Access to parent carer groups and peer support</li>
          </ul>
        </section>

        {/* Short breaks */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Short breaks for disabled children</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Short breaks give your child positive experiences and opportunities while giving you time to rest.
            These can include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>After-school clubs and holiday activities for children with additional needs</li>
            <li>Overnight short breaks in a specialist setting</li>
            <li>Direct payments to arrange your own short break care</li>
            <li>Befriending and sitting services</li>
            <li>Family activities designed for families with disabled children</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Waltham Forest publishes a Short Breaks Statement setting out what is available. Contact us to
            find out more or to request an assessment.
          </p>
        </section>

        {/* Parent carer forum */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Parent carer forum</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The Waltham Forest Parent Carer Forum is a group of parents and carers of children and young
            people with disabilities or additional needs. The forum:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>Gives parent carers a voice in shaping local services</li>
            <li>Works with the council, health services, and schools to improve provision</li>
            <li>Provides peer support and a chance to connect with other parent carers</li>
            <li>Holds regular meetings, events, and workshops</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
            All parent carers are welcome to join the forum. It is a great way to meet others who understand
            your situation and to have your say about local services.
          </p>
        </section>

        {/* EHC plans */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Education, Health and Care plans</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            If your child has special educational needs or a disability, they may be entitled to an Education,
            Health and Care (EHC) plan. This plan sets out the support your child needs across education,
            health, and social care. The council's SEND team can provide information and support with the
            EHC plan process.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8 rounded-md border-l-4 border-[#004E3E] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Get in touch</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            To find out more about support for parent carers, contact our Adult Social Care team on{" "}
            <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>{" "}
            or visit the Carers Hub.
          </p>
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
              <Link to="/carers/hubs/parent-carers" className="text-wf-blue underline hover:text-wf-green">
                Parent carers hub
              </Link>
            </li>
            <li>
              <Link to="/carers/assessment-rights" className="text-wf-blue underline hover:text-wf-green">
                Carers assessment and rights
              </Link>
            </li>
            <li>
              <a href="https://www.contact.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
                Contact - for families with disabled children
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
