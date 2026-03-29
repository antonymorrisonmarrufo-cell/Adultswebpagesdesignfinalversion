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
          <li><span className="font-medium text-wf-dark">Useful contacts</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Useful contacts quick reference</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Key phone numbers and contacts for carers in Waltham Forest - save this page for quick access
          when you need help.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Emergency contacts */}
          <section className="mb-8 rounded-md border-l-[6px] border-[#d4351c] bg-[#fcedf3] p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Emergency contacts</h2>
          <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Emergency services</span>
          <span className="font-bold text-wf-dark">999</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">NHS non-emergency</span>
          <span className="font-bold text-wf-dark">111</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Out of hours Emergency Duty Team</span>
          <span className="font-bold text-wf-dark">020 8496 3000</span>
          </div>
          <div className="flex justify-between items-center">
          <span className="font-medium text-wf-dark">Samaritans (24 hours)</span>
          <span className="font-bold text-wf-dark">116 123</span>
          </div>
          </div>
          </section>

          {/* Council services */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Council services</h2>
          <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Adult Social Care</span>
          <a href="tel:02084963130" className="font-bold text-wf-blue underline hover:text-wf-green">020 8496 3130</a>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Waltham Forest Council switchboard</span>
          <span className="font-bold text-wf-dark">020 8496 3000</span>
          </div>
          <div className="flex justify-between items-center">
          <span className="font-medium text-wf-dark">Council tax enquiries</span>
          <span className="font-bold text-wf-dark">020 8496 3000</span>
          </div>
          </div>
          </section>

          {/* Carer support */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Carer support organisations</h2>
          <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Carers First (Waltham Forest)</span>
          <span className="font-bold text-wf-dark">0300 303 1555</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Carers UK helpline</span>
          <span className="font-bold text-wf-dark">0808 808 7777</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Citizens Advice Waltham Forest</span>
          <span className="font-bold text-wf-dark">0808 278 7835</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Age UK Waltham Forest</span>
          <span className="font-bold text-wf-dark">020 8558 5512</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Mind in Waltham Forest</span>
          <span className="font-bold text-wf-dark">020 8519 2122</span>
          </div>
          <div className="flex justify-between items-center">
          <span className="font-medium text-wf-dark">Alzheimer's Society</span>
          <span className="font-bold text-wf-dark">0333 150 3456</span>
          </div>
          </div>
          </section>

          {/* National helplines */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">National helplines</h2>
          <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">ACAS (workplace rights)</span>
          <span className="font-bold text-wf-dark">0300 123 1100</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Cruse Bereavement Care</span>
          <span className="font-bold text-wf-dark">0808 808 1677</span>
          </div>
          <div className="flex justify-between items-center border-b border-wf-gray-light pb-3">
          <span className="font-medium text-wf-dark">Contact (disabled children)</span>
          <span className="font-bold text-wf-dark">0808 808 3555</span>
          </div>
          <div className="flex justify-between items-center">
          <span className="font-medium text-wf-dark">Carer's Allowance helpline</span>
          <span className="font-bold text-wf-dark">0800 731 0297</span>
          </div>
          </div>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers/support/useful-contacts" className="text-wf-blue underline hover:text-wf-green">
          Full useful contacts page
          </Link>
          </li>
          <li>
          <Link to="/carers/support/local-groups-services" className="text-wf-blue underline hover:text-wf-green">
          Local groups and services
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
        </div>
      </div>
    </div>
  );
}
