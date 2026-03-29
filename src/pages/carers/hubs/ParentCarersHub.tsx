import { Link } from "react-router-dom";

export default function ParentCarersHub() {
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
          <li><Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">Carers Hub</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Parent carers hub</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Parent carers hub</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Dedicated support and resources for parents and guardians of children and young people with
          disabilities or additional needs.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* What we offer */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What the parent carers hub offers</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The parent carers hub provides a welcoming space specifically for parents and guardians who care
          for a child or young person with additional needs. Services include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Information and advice</strong> - on SEND, EHC plans, benefits, short breaks, and services</li>
          <li><strong>Peer support</strong> - connect with other parent carers who understand your experiences</li>
          <li><strong>Workshops</strong> - on topics such as managing behaviour, sleep, and sensory needs</li>
          <li><strong>Benefits support</strong> - help with Disability Living Allowance, Personal Independence Payment, and Carer's Allowance claims</li>
          <li><strong>Emotional support</strong> - counselling and wellbeing sessions for parent carers</li>
          <li><strong>Family activities</strong> - inclusive activities for the whole family</li>
          </ul>
          </section>

          {/* Parent carer groups */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Parent carer groups</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Regular groups are held at the Hub for parent carers:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Parent carer drop-in</strong> - a weekly session to meet other parents, share experiences, and get advice</li>
          <li><strong>Autism parent group</strong> - for parents of children with autism spectrum conditions</li>
          <li><strong>SEND coffee morning</strong> - an informal session with guest speakers on SEND topics</li>
          <li><strong>Transition planning group</strong> - for parents of young people approaching adulthood</li>
          </ul>
          </section>

          {/* Short breaks info */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Short breaks and activities</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The Hub can help you find and access short breaks for your child, including after-school clubs,
          holiday schemes, and weekend activities. We can also help you apply for direct payments to arrange
          your own short break care. Speak to a member of staff at the Hub for more information.
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8 rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003078]">Get in touch</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The parent carers hub is open Monday to Friday, 9am to 5pm. Phone:{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>.
          You are welcome to drop in at any time.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">
          Carers Hub
          </Link>
          </li>
          <li>
          <Link to="/carers/parent-carers" className="text-wf-blue underline hover:text-wf-green">
          Parent carers
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
        </div>
      </div>
    </div>
  );
}
