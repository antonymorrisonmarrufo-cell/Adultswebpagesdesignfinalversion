import { Link } from "react-router-dom";

export default function ExtraCareHousingPage() {
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
          <li><span className="font-medium text-wf-dark">Extra care housing</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Extra care housing</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Extra care housing offers self-contained flats or apartments with on-site care
          staff available around the clock, designed for older people and adults who need
          some support to live independently.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* What is extra care housing */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is extra care housing?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Extra care housing (sometimes called housing with care) provides
          self-contained flats where you have your own front door, kitchen, and
          bathroom. Unlike a care home, you have your own tenancy and can come and go as
          you please. The difference from ordinary housing is that care and support staff
          are based on-site and available 24 hours a day.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Extra care schemes usually include communal areas such as lounges, dining rooms,
          gardens, and activity rooms. Many schemes also offer a restaurant or cafe,
          laundry facilities, and organised social activities.
          </p>
          </section>

          {/* Who is it for */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who is extra care housing for?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Extra care housing may be suitable for you if you:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Are aged 55 or over (age criteria may vary by scheme)</li>
          <li>Have care and support needs that can be met with on-site care</li>
          <li>Want to maintain your independence in your own flat</li>
          <li>Would benefit from the social opportunities that a scheme provides</li>
          <li>Are living in a home that is no longer suitable for your needs</li>
          <li>Are a couple where one or both partners have care needs</li>
          </ul>
          </section>

          {/* What is included */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is included?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Extra care housing typically includes:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>A self-contained flat with your own kitchen, bathroom, and living space</li>
          <li>24-hour on-site care staff who can help with personal care and daily tasks</li>
          <li>A personal care plan tailored to your needs</li>
          <li>An emergency call system in every flat</li>
          <li>Communal lounges, gardens, and activity spaces</li>
          <li>Social activities and events organised by the scheme</li>
          <li>Support to access community services, health appointments, and social activities</li>
          </ul>
          </section>

          {/* How to apply */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to apply</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To apply for extra care housing in Waltham Forest, you will need:
          </p>
          <ol className="mt-3 ml-6 list-decimal space-y-2 text-wf-dark leading-relaxed">
          <li>A care and support assessment from Adult Social Care (contact us to request one)</li>
          <li>To be registered on the Waltham Forest housing list (if the scheme is council-managed)</li>
          <li>A referral from your social worker or housing officer to the extra care panel</li>
          </ol>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Places are allocated based on the level of your care needs, your housing
          circumstances, and the availability of flats. Contact our Adult Social Care
          team to discuss your options:
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

          {/* Costs */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Costs</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          In extra care housing you will pay rent and a service charge for your flat. You
          may be eligible for housing benefit to help with these costs. The care and
          support element is funded separately, and a financial assessment will determine
          how much, if anything, you need to contribute towards your care.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          For more information, see our{" "}
          <Link to="/adult-social-care/paying-for-care" className="text-wf-blue underline hover:text-wf-green">
          paying for care
          </Link>{" "}
          page.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/adult-social-care/care-homes-and-supported-living/request-housing-care-support" className="text-wf-blue underline hover:text-wf-green">
          Request housing and care support
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/care-homes-and-supported-living/sheltered-housing" className="text-wf-blue underline hover:text-wf-green">
          Sheltered housing
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/care-homes-and-supported-living/care-homes-and-nursing-homes" className="text-wf-blue underline hover:text-wf-green">
          Care homes and nursing homes
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
