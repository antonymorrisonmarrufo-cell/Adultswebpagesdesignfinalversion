import { Link } from "react-router-dom";

export default function AllistonHousePage() {
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
            <li><Link to="/care-homes" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
            <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
            <li><span className="font-medium text-wf-dark">Alliston House</span></li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-wf-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="text-5xl font-bold text-[#004E3E]">Alliston House</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
            Alliston House is a care facility in Waltham Forest providing residential
            support and services for adults who need care and accommodation.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* About */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">About Alliston House</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Alliston House is a residential care facility run by the London Borough of
            Waltham Forest. It provides care and support for adults who are unable to live
            independently and need a safe, supportive environment. The team at Alliston
            House is dedicated to providing person-centred care that respects each
            resident's individuality, dignity, and choices.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The home promotes a community atmosphere where residents are encouraged to
            participate in activities, maintain social connections, and live as full a life
            as possible.
          </p>
        </section>

        {/* Services */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Services provided</h2>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
            <li>24-hour care and support from experienced, trained staff</li>
            <li>Personal care including help with washing, dressing, eating, and mobility</li>
            <li>Freshly prepared meals catering for a range of dietary and cultural needs</li>
            <li>Medication management and administration</li>
            <li>A programme of social, recreational, and therapeutic activities</li>
            <li>Access to visiting healthcare professionals including GPs, district nurses, and therapists</li>
            <li>Personalised care plans reviewed regularly with residents and families</li>
            <li>Laundry and housekeeping services</li>
            <li>Support to maintain contact with family, friends, and the wider community</li>
          </ul>
        </section>

        {/* Accommodation */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Accommodation</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Alliston House offers comfortable single bedrooms. Residents are encouraged to
            personalise their rooms with their own belongings, photographs, and furnishings
            to create a familiar and homely space.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The facility includes communal lounges, a dining area, garden space, and quiet
            areas for residents to relax or spend time with visitors. The building is
            accessible throughout for people with mobility needs, including wheelchair
            users.
          </p>
        </section>

        {/* Visiting */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Visiting</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Visitors are welcome at Alliston House. We understand how important it is for
            residents to maintain relationships with their family and friends. There are
            comfortable spaces available for visits, and staff are happy to discuss your
            family member's care and wellbeing with you.
          </p>
        </section>

        {/* Referrals */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to be referred</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            Placements at Alliston House are arranged through a care and support assessment
            carried out by Waltham Forest Council. If you think a residential placement
            might be right for you or someone you care about, contact the Adult Social Care
            team to request an assessment. Your social worker will work with you to decide
            if Alliston House is the best option for your needs.
          </p>
        </section>

        {/* Fees */}
        <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Fees and funding</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
            The cost of a placement at Alliston House depends on your assessed care needs
            and your financial situation. The council will carry out a financial assessment
            to determine your contribution. For full details, see our{" "}
            <Link to="/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
              paying for care
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8 rounded-md border-l-4 border-[#004E3E] bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">Contact Alliston House</h2>
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
              <strong>Address:</strong> Alliston House, Waltham Forest, London
            </p>
            <p className="text-sm text-wf-gray">
              To arrange a visit or ask about availability, contact the Adult Social Care
              team.
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
              <Link to="/care-homes/george-mason-lodge" className="text-wf-blue underline hover:text-wf-green">
                George Mason Lodge
              </Link>
            </li>
            <li>
              <Link to="/care-homes/mapleton-road" className="text-wf-blue underline hover:text-wf-green">
                Mapleton Road
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
