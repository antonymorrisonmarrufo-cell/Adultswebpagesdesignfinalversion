import { Link } from "react-router-dom";

export default function MapletonRoadPage() {
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
          <li><Link to="/adult-social-care/care-homes-and-supported-living" className="text-wf-blue underline hover:text-wf-green">Housing and care homes</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Mapleton Road</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Mapleton Road</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Mapleton Road is a care facility in Waltham Forest offering specialist support
          and accommodation for adults with care needs.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* About */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">About Mapleton Road</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Mapleton Road is a care facility operated by the London Borough of Waltham
          Forest. It provides accommodation and specialist support for adults who need
          residential care. The facility is staffed by experienced care workers who are
          committed to delivering high-quality, person-centred care.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The service is designed to help residents maintain their independence and
          quality of life, with a focus on individual needs, preferences, and choices.
          </p>
          </section>

          {/* Services */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Services provided</h2>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>24-hour care and support from trained staff</li>
          <li>Personal care including help with washing, dressing, and mobility</li>
          <li>Nutritious meals prepared on-site with options for dietary and cultural needs</li>
          <li>Medication management and administration</li>
          <li>Social activities, outings, and recreational programmes</li>
          <li>Access to visiting healthcare professionals including GPs and therapists</li>
          <li>Individual care plans developed with residents and their families</li>
          <li>Laundry and housekeeping services</li>
          </ul>
          </section>

          {/* Accommodation */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Accommodation</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Mapleton Road provides comfortable single bedrooms. Residents are welcome to
          bring personal belongings, photographs, and small pieces of furniture to make
          their room feel like home.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The facility includes communal living areas, a dining room, outdoor garden
          space, and quiet areas for residents and visitors. The building is fully
          accessible for people with mobility difficulties.
          </p>
          </section>

          {/* Referrals */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to be referred</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Placements at Mapleton Road are arranged through a care and support assessment
          by Waltham Forest Council. If you or someone you know may benefit from a
          placement, contact the Adult Social Care team to request an assessment. Your
          social worker will discuss whether Mapleton Road is the right option for your
          needs.
          </p>
          </section>

          {/* Fees */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Fees and funding</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The cost of a placement at Mapleton Road depends on your assessed needs and
          financial situation. A financial assessment will determine how much you need to
          contribute. For details, see our{" "}
          <Link to="/adult-social-care/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
          paying for care
          </Link>{" "}
          page.
          </p>
          </section>

          {/* Contact */}
          <section className="mb-8 rounded-md border-2 border-[#003078] bg-[#d7f8ff] p-6">
          <div className="mb-3">
            <svg className="w-6 h-6 text-[#003078]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="M12 16v-4m0-4h.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#003078]">Contact Mapleton Road</h2>
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
          <strong>Address:</strong> Mapleton Road, Waltham Forest, London
          </p>
          <p className="text-sm text-wf-gray">
          To arrange a visit or enquire about availability, contact the Adult Social
          Care team.
          </p>
          </div>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes" className="text-wf-blue underline hover:text-wf-green">
          Care homes and nursing homes
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/care-homes-and-supported-living/george-mason-lodge" className="text-wf-blue underline hover:text-wf-green">
          George Mason Lodge
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/care-homes-and-supported-living/alliston-house" className="text-wf-blue underline hover:text-wf-green">
          Alliston House
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/care-homes-and-supported-living/request-housing-care-support" className="text-wf-blue underline hover:text-wf-green">
          Request housing and care support
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
          Paying for care
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
