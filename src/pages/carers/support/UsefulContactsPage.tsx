import { Link } from "react-router-dom";

export default function UsefulContactsPage() {
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
          <li><span className="font-medium text-wf-dark">Useful contacts</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E]">Useful contacts for carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          A directory of national helplines and local services that can provide information, advice, and
          support for carers.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Local contacts */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Local services</h2>
          <div className="mt-4 space-y-4">
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Waltham Forest Adult Social Care</h3>
          <p className="mt-1 text-wf-dark">Phone: <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a></p>
          <p className="text-sm text-wf-gray">Monday to Friday, 9am to 5pm</p>
          </div>
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Carers First (Waltham Forest)</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>0300 303 1555</strong></p>
          <p className="text-sm text-wf-gray">Dedicated support, advice, and casework for carers</p>
          </div>
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Citizens Advice Waltham Forest</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>0808 278 7835</strong></p>
          <p className="text-sm text-wf-gray">Free benefits, debt, and legal advice</p>
          </div>
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Age UK Waltham Forest</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>020 8558 5512</strong></p>
          <p className="text-sm text-wf-gray">Support for older people and their carers</p>
          </div>
          <div className="pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Mind in Waltham Forest</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>020 8519 2122</strong></p>
          <p className="text-sm text-wf-gray">Mental health support for carers and the people they care for</p>
          </div>
          </div>
          </section>

          {/* National helplines */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">National helplines</h2>
          <div className="mt-4 space-y-4">
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Carers UK helpline</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>0808 808 7777</strong></p>
          <p className="text-sm text-wf-gray">Information and advice for carers across the UK</p>
          </div>
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Carers Trust</h3>
          <p className="mt-1 text-wf-dark">Website: <a href="https://www.carers.org" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">carers.org</a></p>
          <p className="text-sm text-wf-gray">Information, grants, and local network partners</p>
          </div>
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Samaritans</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>116 123</strong> (free, 24 hours)</p>
          <p className="text-sm text-wf-gray">Emotional support for anyone in distress</p>
          </div>
          <div className="border-b border-wf-gray-light pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">Alzheimer's Society</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>0333 150 3456</strong></p>
          <p className="text-sm text-wf-gray">Dementia support line for carers and people living with dementia</p>
          </div>
          <div className="pb-4">
          <h3 className="text-lg font-bold text-[#004E3E]">NHS 111</h3>
          <p className="mt-1 text-wf-dark">Phone: <strong>111</strong></p>
          <p className="text-sm text-wf-gray">Non-emergency medical advice, available 24 hours</p>
          </div>
          </div>
          </section>

          {/* Related links */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
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
          <li>
          <Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">
          Carers Hub
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
