import { Link } from "react-router-dom";

export default function SharedLivesPage() {
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
          <li><Link to="/care-homes" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Shared Lives</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Shared Lives</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Shared Lives is a scheme where adults who need support are matched with an
          approved carer and live as part of that carer's family in their home.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* What is Shared Lives */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is Shared Lives?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Shared Lives (sometimes called adult placement) is a way of providing care and
          support in a family setting. You live with an approved Shared Lives carer in
          their home and become part of their household. Carers are carefully recruited,
          trained, and supported by the Shared Lives scheme.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Shared Lives can offer long-term placements, short breaks (respite care), or
          day support. The focus is on building a genuine relationship between you and
          your carer, giving you a sense of belonging and community.
          </p>
          </section>

          {/* Who is it for */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who is Shared Lives for?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Shared Lives may be suitable for adults who:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Have a learning disability</li>
          <li>Have a mental health condition</li>
          <li>Have a physical disability or sensory impairment</li>
          <li>Are an older person who would benefit from a family environment</li>
          <li>Are looking for an alternative to residential care</li>
          </ul>
          </section>

          {/* How matching works */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How the matching process works</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Finding the right match is central to the success of a Shared Lives placement.
          The process includes:
          </p>
          <ol className="mt-3 ml-6 list-decimal space-y-2 text-wf-dark leading-relaxed">
          <li>An assessment of your needs, preferences, interests, and personality</li>
          <li>Identifying carers whose home, lifestyle, and skills are a good fit</li>
          <li>A series of introductory visits so you and the carer can get to know each other</li>
          <li>A trial period to make sure the placement is right for everyone</li>
          <li>Ongoing reviews and support from the Shared Lives team</li>
          </ol>
          <p className="mt-3 text-wf-dark leading-relaxed">
          You will never be placed with a carer without your agreement. If a placement
          does not work out, the team will work with you to find an alternative.
          </p>
          </section>

          {/* Costs */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Costs</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The cost of a Shared Lives placement depends on your assessed needs and
          financial situation. Waltham Forest Council will carry out a financial
          assessment to determine how much, if anything, you will need to contribute.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The council pays the Shared Lives carer a weekly fee to cover the cost of your
          care and support. You may also need to contribute towards your household living
          costs, such as food and bills, from your benefits or income.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          For more information about financial assessments, see our{" "}
          <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
          paying for care
          </Link>{" "}
          page.
          </p>
          </section>

          {/* How to access */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to access Shared Lives</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To find out more about Shared Lives or to request a placement, contact our
          Adult Social Care team:
          </p>
          <p className="mt-3 text-wf-dark">
          <strong>Telephone:</strong>{" "}
          <a href="tel:02084963130" className="text-wf-blue underline font-semibold">
          020 8496 3130
          </a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">
          Monday to Friday, 9am to 5pm (excluding bank holidays)
          </p>
          </section>

          {/* Become a carer */}
          <section className="mb-8 rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Become a Shared Lives carer</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If you have a spare room and would like to make a real difference to someone's
          life, we would love to hear from you. Shared Lives carers receive training,
          ongoing support, and a weekly payment. Contact our team on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a>{" "}
          to find out more.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/care-homes/request-housing-care-support" className="text-wf-blue underline hover:text-wf-green">
          Request housing and care support
          </Link>
          </li>
          <li>
          <Link to="/care-homes/supported-living" className="text-wf-blue underline hover:text-wf-green">
          Supported living
          </Link>
          </li>
          <li>
          <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
          Paying for care
          </Link>
          </li>
          <li>
          <a href="https://sharedlivesplus.org.uk" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Shared Lives Plus (national organisation)
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
