import { Link } from "react-router-dom";

export default function LocalGroupsServicesPage() {
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
          <li><span className="font-medium text-wf-dark">Local groups and services</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Local groups and services</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          There are many local organisations and support groups in Waltham Forest that can help you in your
          caring role. Connecting with other carers can reduce isolation and provide practical advice.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Carers First */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Carers First</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Carers First is a charity that provides dedicated support to carers in Waltham Forest. They offer:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>One-to-one support and advice from a dedicated caseworker</li>
          <li>Help with benefits, housing, and legal issues</li>
          <li>Emotional support and counselling</li>
          <li>Carer support groups and social activities</li>
          <li>Training and workshops to build your confidence and skills</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Contact Carers First on <strong>0300 303 1555</strong> or visit{" "}
          <a href="https://www.carersfirst.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">carersfirst.org.uk</a>.
          </p>
          </section>

          {/* Carer support groups */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Carer support groups</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Support groups are a chance to meet other carers, share experiences, and learn from each other.
          Groups available in Waltham Forest include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>General carer support groups</strong> - open to all carers, held regularly at the Carers Hub and other community venues</li>
          <li><strong>Dementia carer groups</strong> - for people caring for someone with dementia</li>
          <li><strong>Mental health carer groups</strong> - for people caring for someone with a mental health condition</li>
          <li><strong>Parent carer groups</strong> - for parents of children with disabilities or additional needs</li>
          <li><strong>BAME carer groups</strong> - culturally specific support for carers from Black, Asian, and minority ethnic communities</li>
          <li><strong>Online groups</strong> - virtual support groups for carers who cannot attend in person</li>
          </ul>
          </section>

          {/* Other local organisations */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Other local organisations</h2>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Age UK Waltham Forest</strong> - support for older carers and those caring for older people</li>
          <li><strong>Mind in Waltham Forest</strong> - mental health support for carers and the people they care for</li>
          <li><strong>Citizens Advice Waltham Forest</strong> - free advice on benefits, debt, housing, and legal issues</li>
          <li><strong>Alzheimer's Society</strong> - support for people affected by dementia, including carers</li>
          <li><strong>Waltham Forest Community Hub</strong> - information and signposting to local services</li>
          </ul>
          </section>

          {/* Get connected */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003078]">Get connected</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To find out about groups and services near you, contact our Adult Social Care team on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>{" "}
          or visit the Carers Hub for up-to-date information about what is available.
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
          <Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">
          Carers Hub
          </Link>
          </li>
          <li>
          <Link to="/carers/support/training-workshops" className="text-wf-blue underline hover:text-wf-green">
          Training and workshops
          </Link>
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
