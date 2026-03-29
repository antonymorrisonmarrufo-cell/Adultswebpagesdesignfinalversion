import { Link } from "react-router-dom";

export default function GeorgeMasonLodgePage() {
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
            <li><Link to="/care-homes" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">George Mason Lodge</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">George Mason Lodge</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            George Mason Lodge is a council-run residential care home in Waltham Forest,
            providing personal care and support for older people in a welcoming and
            supportive environment.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* About */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">About George Mason Lodge</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            George Mason Lodge is operated by the London Borough of Waltham Forest and
            provides residential care for older adults who can no longer live independently
            at home. The home is staffed by a team of trained care workers who provide
            personal care and support around the clock.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The home aims to create a warm, friendly atmosphere where residents feel safe,
            respected, and able to maintain their dignity and independence as much as
            possible.
          </p>
        </section>

        {/* Services */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Services provided</h2>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>24-hour personal care including help with washing, dressing, and mobility</li>
            <li>Nutritious meals prepared on-site, catering for dietary requirements and cultural preferences</li>
            <li>Medication management and administration</li>
            <li>A varied programme of social activities, outings, and entertainment</li>
            <li>Support from visiting healthcare professionals including GPs, district nurses, and therapists</li>
            <li>Assistance with laundry and housekeeping</li>
            <li>Key worker system so each resident has a named member of staff who knows them well</li>
            <li>Regular reviews of care plans with residents and their families</li>
          </ul>
        </section>

        {/* Accommodation */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Accommodation</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            George Mason Lodge offers single bedrooms, many with en-suite facilities.
            Residents are encouraged to personalise their rooms with photographs, ornaments,
            and small items of furniture to make them feel at home.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The home has communal lounges, a dining room, accessible gardens, and quiet
            areas where residents can relax or spend time with visitors. The building is
            fully accessible for wheelchair users and people with mobility difficulties.
          </p>
        </section>

        {/* Visiting */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Visiting</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Family and friends are welcome to visit at any time. We believe that
            maintaining relationships with loved ones is essential to residents' wellbeing.
            There are comfortable areas where you can spend time with your family member in
            private.
          </p>
        </section>

        {/* Fees */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Fees and funding</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The cost of a placement at George Mason Lodge depends on your assessed care
            needs and financial circumstances. Waltham Forest Council will carry out a
            financial assessment to determine how much you will need to contribute. For
            more information, see our{" "}
            <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
              paying for care
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8 rounded-md border-l-4 border-[#004E3E] bg-wf-green-light p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">Contact George Mason Lodge</h2>
          <div className="mt-3 space-y-2 text-wf-dark">
            <p>
              <strong>Telephone:</strong>{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">
                020 8496 3130
              </a>{" "}
              (Adult Social Care team)
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:socialcaredirect@walthamforest.gov.uk" className="text-wf-blue underline">
                socialcaredirect@walthamforest.gov.uk
              </a>
            </p>
            <p>
              <strong>Address:</strong> George Mason Lodge, Waltham Forest, London
            </p>
            <p className="text-sm text-wf-gray">
              To arrange a visit or find out more about availability, please contact the
              Adult Social Care team.
            </p>
          </div>
        </section>

        {/* Related links */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/care-homes/care-homes-nursing-homes" className="text-wf-blue underline hover:text-wf-green">
                Care homes and nursing homes
              </Link>
            </li>
            <li>
              <Link to="/care-homes/mapleton-road" className="text-wf-blue underline hover:text-wf-green">
                Mapleton Road
              </Link>
            </li>
            <li>
              <Link to="/care-homes/alliston-house" className="text-wf-blue underline hover:text-wf-green">
                Alliston House
              </Link>
            </li>
            <li>
              <Link to="/care-homes/request-housing-care-support" className="text-wf-blue underline hover:text-wf-green">
                Request housing and care support
              </Link>
            </li>
            <li>
              <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
                Paying for care
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
